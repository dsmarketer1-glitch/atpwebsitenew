// Server-side Firebase Admin SDK init. Used by the /api/pins route (the only
// write path) and by server components that read pins (via lib/pins.js).
//
// firebase-admin is imported LAZILY (dynamic import inside async functions) so
// nothing loads at module-evaluation time. This keeps the route/module from
// crashing on load in serverless builds (e.g. Vercel + Turbopack file tracing),
// and turns any real init error into a caught, readable error instead of an
// opaque 500. Credentials come from env vars, never the repo.

const APP_NAME = 'atp-pins-admin';

// Returns the resolved storage bucket name. Prefers an explicit
// FIREBASE_STORAGE_BUCKET (needed for "*.firebasestorage.app" buckets);
// otherwise falls back to the legacy "<projectId>.appspot.com" default.
function resolveBucketName() {
    if (process.env.FIREBASE_STORAGE_BUCKET) return process.env.FIREBASE_STORAGE_BUCKET;
    if (process.env.FIREBASE_PROJECT_ID) return `${process.env.FIREBASE_PROJECT_ID}.appspot.com`;
    return null;
}

// Lazily initializes (or reuses) the Admin app. Throws a clear, actionable
// error if the service-account env vars are not configured.
async function getAdminApp() {
    const { getApps, initializeApp, cert } = await import('firebase-admin/app');

    const existing = getApps().find((a) => a.name === APP_NAME);
    if (existing) return existing;

    const {
        FIREBASE_PROJECT_ID,
        FIREBASE_CLIENT_EMAIL,
        FIREBASE_PRIVATE_KEY,
    } = process.env;

    if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
        throw new Error(
            'Firebase Admin is not configured. Set FIREBASE_PROJECT_ID, ' +
            'FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY (and optionally ' +
            'FIREBASE_STORAGE_BUCKET) in your environment.'
        );
    }

    return initializeApp(
        {
            credential: cert({
                projectId: FIREBASE_PROJECT_ID,
                clientEmail: FIREBASE_CLIENT_EMAIL,
                // Env vars store the PEM with literal "\n"; restore real newlines.
                privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            }),
            storageBucket: resolveBucketName() || undefined,
        },
        APP_NAME
    );
}

export async function getAdminDb() {
    const { getFirestore } = await import('firebase-admin/firestore');
    return getFirestore(await getAdminApp());
}

export async function getAdminAuth() {
    const { getAuth } = await import('firebase-admin/auth');
    return getAuth(await getAdminApp());
}

export async function getAdminBucket() {
    const bucketName = resolveBucketName();
    if (!bucketName) {
        throw new Error(
            'Firebase Storage bucket is not configured. Set FIREBASE_STORAGE_BUCKET ' +
            'or FIREBASE_PROJECT_ID in your environment.'
        );
    }
    const { getStorage } = await import('firebase-admin/storage');
    return getStorage(await getAdminApp()).bucket(bucketName);
}

// FieldValue (e.g. serverTimestamp) fetched lazily to avoid a top-level import.
export async function getFieldValue() {
    const { FieldValue } = await import('firebase-admin/firestore');
    return FieldValue;
}

// Verify a Firebase ID token WITHOUT firebase-admin/auth. That module pulls in
// jwks-rsa -> jose (ESM-only), which fails under require() on hosts running an
// older Node (ERR_REQUIRE_ESM). Google's Identity Toolkit REST endpoint verifies
// the token server-side and returns the user, with no jose dependency, so it
// works regardless of the host Node version. Returns { uid, email, name }.
export async function verifyIdTokenRest(idToken) {
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
    if (!apiKey) {
        throw new Error('NEXT_PUBLIC_FIREBASE_API_KEY is not configured.');
    }
    const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken }),
        }
    );
    if (!res.ok) {
        throw new Error(`Token verification failed (${res.status}).`);
    }
    const data = await res.json();
    const user = data.users && data.users[0];
    if (!user || !user.localId) {
        throw new Error('Token did not resolve to a valid user.');
    }
    return { uid: user.localId, email: user.email || null, name: user.displayName || null };
}

// True when the server-side service-account env vars are present. Sync (reads
// env only) so callers can guard cheaply before doing any async work.
export function isFirebaseAdminConfigured() {
    return Boolean(
        process.env.FIREBASE_PROJECT_ID &&
        process.env.FIREBASE_CLIENT_EMAIL &&
        process.env.FIREBASE_PRIVATE_KEY
    );
}
