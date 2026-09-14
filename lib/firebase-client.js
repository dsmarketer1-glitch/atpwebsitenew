'use client';

// Client-side Firebase SDK init. Used ONLY for technician login on /team/pin
// (Firebase Authentication, email/password). It never reads or writes Firestore
// or Storage from the browser — those go exclusively through the Admin SDK on
// the server (see PINS_FEATURE_ARCHITECTURE §13).
//
// These NEXT_PUBLIC_* values are the standard Firebase web config and are safe
// to expose in client bundles; access is controlled by Firebase Auth + the
// Firestore/Storage security rules, not by hiding this config.

import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// True when the public Firebase web config is present. The login screen uses
// this to show a clear "not configured yet" message instead of throwing before
// real keys are provisioned.
export function isFirebaseClientConfigured() {
    return Boolean(
        firebaseConfig.apiKey &&
        firebaseConfig.authDomain &&
        firebaseConfig.projectId
    );
}

// Lazily initializes (or reuses) the client app. Throws a clear error if the
// public config is missing, so callers can catch and surface it in the UI.
export function getClientApp() {
    if (!isFirebaseClientConfigured()) {
        throw new Error(
            'Firebase client is not configured. Set NEXT_PUBLIC_FIREBASE_API_KEY, ' +
            'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, and NEXT_PUBLIC_FIREBASE_PROJECT_ID.'
        );
    }
    const existing = getApps().find((a) => a.name === '[DEFAULT]');
    return existing || initializeApp(firebaseConfig);
}

export function getClientAuth() {
    return getAuth(getClientApp());
}
