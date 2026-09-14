// Server-side pin reads (PINS_FEATURE_ARCHITECTURE §8). Called directly inside
// server components during ISR regeneration — no client round-trip.
//
// Both helpers degrade to an empty array when Firebase Admin is not configured
// or a query fails, so pages build and render normally before the backend is
// provisioned. Firestore Timestamps are normalized to ISO strings so the plain
// objects can pass freely into (server-rendered) components.
//
// Note: we filter by equality only and sort/limit in memory. This intentionally
// avoids requiring a composite Firestore index for (equality + orderBy), which
// keeps the feature zero-config to stand up. At single-client volume the in-memory
// sort is negligible.

import { getAdminDb, isFirebaseAdminConfigured } from '@/lib/firebase-admin';

const DEFAULT_LIMIT = 12;

function serialize(doc) {
    const data = doc.data();
    let createdAt = null;
    if (data.createdAt && typeof data.createdAt.toDate === 'function') {
        createdAt = data.createdAt.toDate().toISOString();
    }
    // Public fields only — customerName/customerEmail are intentionally omitted
    // so they never reach the browser.
    return {
        id: doc.id,
        serviceSlug: data.serviceSlug || null,
        citySlug: data.citySlug || null,
        communitySlug: data.communitySlug || null,
        photoUrl: data.photoUrl || null,
        mapEmbedUrl: data.mapEmbedUrl || null,
        address: data.address || null,
        aiDescription: data.aiDescription || data.serviceDescription || '',
        techName: data.techName || null,
        lat: typeof data.lat === 'number' ? data.lat : null,
        lng: typeof data.lng === 'number' ? data.lng : null,
        schemaJsonLd: data.schemaJsonLd || null,
        createdAt,
    };
}

function sortAndLimit(pins, limit) {
    return pins
        .sort((a, b) => {
            const at = a.createdAt ? Date.parse(a.createdAt) : 0;
            const bt = b.createdAt ? Date.parse(b.createdAt) : 0;
            return bt - at; // newest first
        })
        .slice(0, limit);
}

// where serviceSlug == slug, status == "published"
export async function getPinsForService(serviceSlug, limit = DEFAULT_LIMIT) {
    if (!isFirebaseAdminConfigured() || !serviceSlug) return [];
    try {
        const snap = await getAdminDb()
            .collection('pins')
            .where('serviceSlug', '==', serviceSlug)
            .where('status', '==', 'published')
            .get();
        return sortAndLimit(snap.docs.map(serialize), limit);
    } catch (err) {
        console.warn('getPinsForService failed:', err.message);
        return [];
    }
}

// All published pins, newest first — for the /pins page.
export async function getAllPins(limit = 60) {
    if (!isFirebaseAdminConfigured()) return [];
    try {
        const snap = await getAdminDb()
            .collection('pins')
            .where('status', '==', 'published')
            .get();
        return sortAndLimit(snap.docs.map(serialize), limit);
    } catch (err) {
        console.warn('getAllPins failed:', err.message);
        return [];
    }
}

// where citySlug == slug (and communitySlug == communitySlug if provided), status == "published"
export async function getPinsForCity(citySlug, communitySlug = null, limit = DEFAULT_LIMIT) {
    if (!isFirebaseAdminConfigured() || !citySlug) return [];
    try {
        let query = getAdminDb()
            .collection('pins')
            .where('citySlug', '==', citySlug)
            .where('status', '==', 'published');
        if (communitySlug) {
            query = query.where('communitySlug', '==', communitySlug);
        }
        const snap = await query.get();
        return sortAndLimit(snap.docs.map(serialize), limit);
    } catch (err) {
        console.warn('getPinsForCity failed:', err.message);
        return [];
    }
}
