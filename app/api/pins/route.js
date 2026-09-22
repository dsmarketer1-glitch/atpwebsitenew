import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import {
    getAdminDb,
    getAdminBucket,
    getFieldValue,
    verifyIdTokenRest,
    isFirebaseAdminConfigured,
} from '@/lib/firebase-admin';
import { getServiceBySlug } from '@/data/services';
import { getCityBySlug } from '@/data/locations';
import { osmEmbedUrl, reverseGeocode } from '@/lib/maps';
import { callClaudeForDescription } from '@/lib/ai-description';
import { buildPinSchema } from '@/lib/schema';

// firebase-admin needs the Node.js runtime (not Edge).
export const runtime = 'nodejs';

const MAX_PHOTO_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_MIME = { 'image/jpeg': 'jpg', 'image/png': 'png' };

function bad(error, status = 400) {
    return NextResponse.json({ error }, { status });
}

// Shared auth: verifies the Bearer ID token. Returns { decoded } on success or
// { response } with the appropriate error to return.
async function authenticate(request) {
    const authHeader = request.headers.get('authorization') || '';
    const idToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
    if (!idToken) {
        return { response: bad('Missing authentication token.', 401) };
    }
    try {
        const decoded = await verifyIdTokenRest(idToken);
        return { decoded };
    } catch (err) {
        console.warn('Token verify failed:', err.message);
        return { response: bad('Invalid or expired authentication token.', 401) };
    }
}

// Derives the Storage object path from a pin's public download URL.
function storagePathFromUrl(photoUrl) {
    const m = /\/o\/([^?]+)\?/.exec(photoUrl || '');
    return m ? decodeURIComponent(m[1]) : null;
}

// POST — create a pin. The ONLY write path into Firestore/Storage.
// Fields: photo, serviceSlug, citySlug, serviceDescription, lat, lng, address,
// customerName (optional), customerEmail (optional). Location is chosen on a map
// (Leaflet) — no device GPS required.
export async function POST(request) {
    // Fail gracefully before Firebase is provisioned, rather than crash.
    if (!isFirebaseAdminConfigured()) {
        return bad('Pins backend is not configured yet. Please try again later.', 503);
    }

    // --- 1. Verify the Firebase ID token -------------------------------------
    const auth = await authenticate(request);
    if (auth.response) return auth.response;
    const decoded = auth.decoded;

    // --- Parse the multipart body --------------------------------------------
    let form;
    try {
        form = await request.formData();
    } catch {
        return bad('Expected multipart/form-data.', 400);
    }

    const serviceSlug = (form.get('serviceSlug') || '').toString().trim();
    const citySlug = (form.get('citySlug') || '').toString().trim();
    const serviceDescription = (form.get('serviceDescription') || '').toString().trim();
    const latRaw = (form.get('lat') || '').toString().trim();
    const lngRaw = (form.get('lng') || '').toString().trim();
    let address = (form.get('address') || '').toString().trim() || null;
    const customerName = (form.get('customerName') || '').toString().trim() || null;
    const customerEmail = (form.get('customerEmail') || '').toString().trim() || null;
    const photo = form.get('photo');

    // --- 2. Validate slugs against the static data (never written) -----------
    const service = getServiceBySlug(serviceSlug);
    if (!service) {
        return bad(`Unknown service "${serviceSlug}".`, 400);
    }
    const city = getCityBySlug(citySlug);
    if (!city) {
        return bad(`Unknown city "${citySlug}".`, 400);
    }

    if (!serviceDescription) {
        return bad('A service description is required.', 400);
    }

    const lat = Number(latRaw);
    const lng = Number(lngRaw);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
        return bad('A location (map point) is required.', 400);
    }

    // --- 3. Validate the photo (server-side, not just client) ----------------
    if (!photo || typeof photo.arrayBuffer !== 'function') {
        return bad('A photo file is required.', 400);
    }
    const ext = ALLOWED_MIME[photo.type];
    if (!ext) {
        return bad('Photo must be a JPEG or PNG image.', 400);
    }
    if (typeof photo.size === 'number' && photo.size > MAX_PHOTO_BYTES) {
        return bad('Photo must be under 10MB.', 400);
    }
    const buffer = Buffer.from(await photo.arrayBuffer());
    if (buffer.length > MAX_PHOTO_BYTES) {
        return bad('Photo must be under 10MB.', 400);
    }

    try {
        // --- 4. Upload the photo to Storage ----------------------------------
        const now = new Date();
        const objectPath = `pins/${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, '0')}/${randomUUID()}.${ext}`;
        const bucket = await getAdminBucket();
        const file = bucket.file(objectPath);
        // Firebase download token → a public URL that works even under uniform
        // bucket-level access (per-object ACL makePublic() is rejected on such
        // buckets, e.g. *.firebasestorage.app). The token grants read access via
        // the firebasestorage endpoint independent of the Storage rules.
        const downloadToken = randomUUID();
        await file.save(buffer, {
            resumable: false,
            metadata: {
                contentType: photo.type,
                cacheControl: 'public, max-age=31536000, immutable',
                metadata: { firebaseStorageDownloadTokens: downloadToken },
            },
        });
        const photoUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(objectPath)}?alt=media&token=${downloadToken}`;

        // --- 5. Address: use the one from the map, else reverse-geocode ------
        if (!address) {
            const geo = await reverseGeocode(lat, lng);
            if (geo && geo.address) address = geo.address;
        }

        // --- 6. AI description (falls back to the typed text w/o a key) ------
        const aiDescription = await callClaudeForDescription(serviceDescription, service.title, city.name);

        // --- 7. JSON-LD schema (cached on the doc) ---------------------------
        const schemaJsonLd = buildPinSchema({
            serviceTitle: service.title,
            cityName: city.name,
            aiDescription,
            photoUrl,
        });

        // --- 8. Write the document to Firestore ------------------------------
        const db = await getAdminDb();
        const FieldValue = await getFieldValue();
        const docRef = db.collection('pins').doc();
        const pinDoc = {
            serviceSlug,
            citySlug,
            communitySlug: null, // community removed from capture flow
            photoUrl,
            mapEmbedUrl: osmEmbedUrl(lat, lng),
            address,
            serviceDescription, // exactly what the tech typed
            aiDescription, // enriched (or the same text if no AI key)
            techUid: decoded.uid,
            // Public attribution: only a display name, never the login email.
            // Set a display name on the Firebase Auth user to show it on cards.
            techName: decoded.name || null,
            techEmail: decoded.email || null, // private — never serialized to the client
            lat,
            lng,
            customerName, // private — never rendered publicly
            customerEmail, // private — never rendered publicly
            schemaJsonLd,
            status: 'published',
            createdAt: FieldValue.serverTimestamp(),
        };

        await docRef.set(pinDoc);

        // --- 9. Success ------------------------------------------------------
        return NextResponse.json({ id: docRef.id }, { status: 201 });
    } catch (err) {
        console.error('Pin creation failed:', err);
        return bad('Something went wrong creating the pin. Please try again.', 500);
    }
}

// GET — list all pins for the team management view (authenticated). Returns a
// light shape for each pin, newest first.
export async function GET(request) {
    if (!isFirebaseAdminConfigured()) {
        return bad('Pins backend is not configured yet. Please try again later.', 503);
    }
    const auth = await authenticate(request);
    if (auth.response) return auth.response;

    try {
        const db = await getAdminDb();
        const snap = await db.collection('pins').get();
        const pins = snap.docs
            .map((d) => {
                const x = d.data();
                return {
                    id: d.id,
                    serviceSlug: x.serviceSlug || null,
                    citySlug: x.citySlug || null,
                    address: x.address || null,
                    description: x.aiDescription || x.serviceDescription || '',
                    photoUrl: x.photoUrl || null,
                    customerName: x.customerName || null,
                    createdAt:
                        x.createdAt && typeof x.createdAt.toDate === 'function'
                            ? x.createdAt.toDate().toISOString()
                            : null,
                };
            })
            .sort((a, b) => (b.createdAt ? Date.parse(b.createdAt) : 0) - (a.createdAt ? Date.parse(a.createdAt) : 0));
        return NextResponse.json({ pins });
    } catch (err) {
        console.error('Pin list failed:', err);
        return bad('Could not load pins. Please try again.', 500);
    }
}

// DELETE — remove a pin (authenticated). Deletes the Firestore doc and the
// photo in Storage. Pass the id as a query param: DELETE /api/pins?id=<id>.
export async function DELETE(request) {
    if (!isFirebaseAdminConfigured()) {
        return bad('Pins backend is not configured yet. Please try again later.', 503);
    }
    const auth = await authenticate(request);
    if (auth.response) return auth.response;

    const { searchParams } = new URL(request.url);
    const id = (searchParams.get('id') || '').trim();
    if (!id) {
        return bad('Missing pin id.', 400);
    }

    try {
        const db = await getAdminDb();
        const ref = db.collection('pins').doc(id);
        const snap = await ref.get();
        if (!snap.exists) {
            return bad('Pin not found.', 404);
        }

        // Best-effort delete of the photo object; never block the doc delete on it.
        const path = storagePathFromUrl(snap.data().photoUrl);
        if (path) {
            try {
                const bucket = await getAdminBucket();
                await bucket.file(path).delete();
            } catch (err) {
                console.warn('Pin photo delete failed:', err.message);
            }
        }

        await ref.delete();
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Pin delete failed:', err);
        return bad('Could not delete the pin. Please try again.', 500);
    }
}
