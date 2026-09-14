// Server-side Firebase Admin SDK init. Used by:
//   - the /api/pins route (the only write path into Firestore + Storage)
//   - server components that read pins for a page (via lib/pins.js)
// The client-side SDK (lib/firebase-client.js) is used ONLY for tech login;
// it never touches Firestore or Storage directly (see PINS_FEATURE_ARCHITECTURE §13).
//
// Credentials come from env vars, never the repo (same convention as the
// EmailJS private key). Missing config fails with a clear error rather than
// crashing at import time — nothing here throws until you actually call it.

import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { getAuth } from 'firebase-admin/auth';

const APP_NAME = 'atp-pins-admin';

// Returns the resolved storage bucket name. Prefers an explicit
// FIREBASE_STORAGE_BUCKET (needed for newer "*.firebasestorage.app" buckets);
// otherwise falls back to the legacy "<projectId>.appspot.com" default.
function resolveBucketName() {
    if (process.env.FIREBASE_STORAGE_BUCKET) return process.env.FIREBASE_STORAGE_BUCKET;
    if (process.env.FIREBASE_PROJECT_ID) return `${process.env.FIREBASE_PROJECT_ID}.appspot.com`;
    return null;
}

// Lazily initializes (or reuses) the Admin app. Throws a clear, actionable
// error if the service-account env vars are not configured.
function getAdminApp() {
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

export function getAdminDb() {
    return getFirestore(getAdminApp());
}

export function getAdminAuth() {
    return getAuth(getAdminApp());
}

export function getAdminBucket() {
    const bucketName = resolveBucketName();
    if (!bucketName) {
        throw new Error(
            'Firebase Storage bucket is not configured. Set FIREBASE_STORAGE_BUCKET ' +
            'or FIREBASE_PROJECT_ID in your environment.'
        );
    }
    return getStorage(getAdminApp()).bucket(bucketName);
}

// True when the server-side service-account env vars are present. Lets callers
// (e.g. page components reading pins) degrade gracefully instead of throwing
// before any keys are provisioned.
export function isFirebaseAdminConfigured() {
    return Boolean(
        process.env.FIREBASE_PROJECT_ID &&
        process.env.FIREBASE_CLIENT_EMAIL &&
        process.env.FIREBASE_PRIVATE_KEY
    );
}
