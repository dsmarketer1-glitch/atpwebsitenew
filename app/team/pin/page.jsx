'use client';

// Private field-tech capture form (PINS_FEATURE_ARCHITECTURE §6, revised).
// Not in the nav. Gated by Firebase Authentication (email/password).
// Fields: Photo, Service, City, Service Description, Location (map picker —
// searchable/clickable, no device GPS required), Customer Name (optional),
// Customer Email (optional). POSTs multipart/form-data to /api/pins with the
// tech's Firebase ID token in the Authorization header.

import { useState, useEffect, useCallback } from 'react';
import { services } from '@/data/services';
import { cities } from '@/data/locations';
import LocationPicker from '@/components/LocationPicker';
import { isFirebaseClientConfigured, getClientAuth } from '@/lib/firebase-client';

export default function TeamPinPage() {
    const configured = isFirebaseClientConfigured();

    const [authReady, setAuthReady] = useState(false);
    const [user, setUser] = useState(null);

    // Login form state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);

    // Subscribe to auth state once, if Firebase is configured.
    useEffect(() => {
        if (!configured) {
            setAuthReady(true);
            return;
        }
        let unsub = () => {};
        (async () => {
            try {
                const { onAuthStateChanged } = await import('firebase/auth');
                const auth = getClientAuth();
                unsub = onAuthStateChanged(auth, (u) => {
                    setUser(u);
                    setAuthReady(true);
                });
            } catch (err) {
                console.error('Auth init failed:', err);
                setAuthReady(true);
            }
        })();
        return () => unsub();
    }, [configured]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        setLoggingIn(true);
        try {
            const { signInWithEmailAndPassword } = await import('firebase/auth');
            await signInWithEmailAndPassword(getClientAuth(), email.trim(), password);
        } catch (err) {
            setLoginError(mapAuthError(err));
        } finally {
            setLoggingIn(false);
        }
    };

    const handleLogout = async () => {
        try {
            const { signOut } = await import('firebase/auth');
            await signOut(getClientAuth());
        } catch (err) {
            console.error('Sign out failed:', err);
        }
    };

    if (!configured) {
        return (
            <Shell>
                <p style={notice}>
                    The pins backend is not configured yet. Set the
                    <code> NEXT_PUBLIC_FIREBASE_* </code> environment variables to enable tech login.
                </p>
            </Shell>
        );
    }

    if (!authReady) {
        return (
            <Shell>
                <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>Loading…</p>
            </Shell>
        );
    }

    if (!user) {
        return (
            <Shell>
                <h1 style={heading}>Team Login</h1>
                <p style={{ color: 'var(--text-light)', marginBottom: '20px', textAlign: 'center' }}>
                    Sign in to submit a jobsite pin.
                </p>
                <form onSubmit={handleLogin}>
                    <label style={label}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="username"
                        style={input}
                    />
                    <label style={label}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                        style={input}
                    />
                    {loginError && <p style={errorText}>{loginError}</p>}
                    <button type="submit" className="btn btn-red btn-lg" disabled={loggingIn} style={{ width: '100%', marginTop: '10px' }}>
                        {loggingIn ? 'Signing in…' : 'Sign In'}
                    </button>
                </form>
            </Shell>
        );
    }

    return (
        <Shell wide>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{ color: 'var(--text-light)', fontSize: '14px' }}>
                    {user.email}
                </span>
                <button type="button" onClick={handleLogout} className="btn btn-outline btn-sm">
                    Sign Out
                </button>
            </div>
            <h1 style={heading}>New Jobsite Pin</h1>
            <PinForm getToken={() => user.getIdToken()} />
        </Shell>
    );
}

function PinForm({ getToken }) {
    const [serviceSlug, setServiceSlug] = useState('');
    const [citySlug, setCitySlug] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [photoFile, setPhotoFile] = useState(null);
    const [location, setLocation] = useState(null); // { lat, lng, address }

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState(null); // { type: 'success' | 'error', text }

    const handleLocationChange = useCallback((loc) => setLocation(loc), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);

        if (!photoFile) {
            setMessage({ type: 'error', text: 'Please attach a photo.' });
            return;
        }
        if (!location) {
            setMessage({ type: 'error', text: 'Please set the job location on the map.' });
            return;
        }

        setSubmitting(true);
        try {
            const token = await getToken();
            const fd = new FormData();
            fd.append('photo', photoFile);
            fd.append('serviceSlug', serviceSlug);
            fd.append('citySlug', citySlug);
            fd.append('serviceDescription', serviceDescription);
            fd.append('lat', String(location.lat));
            fd.append('lng', String(location.lng));
            fd.append('address', location.address || '');
            fd.append('customerName', customerName);
            fd.append('customerEmail', customerEmail);

            const res = await fetch('/api/pins', {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
                body: fd,
            });
            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                setMessage({ type: 'error', text: data.error || 'Submission failed. Please try again.' });
            } else {
                setMessage({ type: 'success', text: 'Pin submitted. It will appear on the site shortly.' });
                setServiceDescription('');
                setCustomerName('');
                setCustomerEmail('');
                setPhotoFile(null);
                e.target.reset();
            }
        } catch (err) {
            setMessage({ type: 'error', text: err.message || 'Submission failed. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label style={label}>Photo</label>
            <input
                type="file"
                accept="image/jpeg,image/png"
                capture="environment"
                onChange={(e) => setPhotoFile(e.target.files && e.target.files[0])}
                required
                style={input}
            />

            <label style={label}>Service</label>
            <select value={serviceSlug} onChange={(e) => setServiceSlug(e.target.value)} required style={input}>
                <option value="">Select a service…</option>
                {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
            </select>

            <label style={label}>City</label>
            <select value={citySlug} onChange={(e) => setCitySlug(e.target.value)} required style={input}>
                <option value="">Select a city…</option>
                {cities.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
            </select>

            <label style={label}>Service Description</label>
            <textarea
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                required
                rows={3}
                placeholder="Describe the job you just completed."
                style={{ ...input, resize: 'vertical' }}
            />

            <label style={label}>Location</label>
            <LocationPicker onChange={handleLocationChange} />

            <label style={{ ...label, marginTop: '16px' }}>Customer Name (optional)</label>
            <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                style={input}
            />

            <label style={label}>Customer Email (optional)</label>
            <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                style={input}
            />

            {message && (
                <p style={message.type === 'success' ? successText : errorText}>{message.text}</p>
            )}

            <button type="submit" className="btn btn-red btn-lg" disabled={submitting} style={{ width: '100%', marginTop: '6px' }}>
                {submitting ? 'Submitting…' : 'Submit Pin'}
            </button>
        </form>
    );
}

function Shell({ children, wide = false }) {
    return (
        <section className="section" style={{ minHeight: '70vh' }}>
            <div className="container" style={{ maxWidth: wide ? '720px' : '560px' }}>
                <div style={card}>{children}</div>
            </div>
        </section>
    );
}

function mapAuthError(err) {
    const code = err && err.code ? err.code : '';
    if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) {
        return 'Incorrect email or password.';
    }
    if (code.includes('too-many-requests')) {
        return 'Too many attempts. Please wait a moment and try again.';
    }
    return 'Sign in failed. Please try again.';
}

const card = {
    background: '#fff',
    border: '1px solid var(--border-color, #e5e7eb)',
    borderRadius: '12px',
    padding: '28px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
};
const heading = { textAlign: 'center', marginBottom: '18px' };
const label = { display: 'block', fontWeight: 600, fontSize: '14px', margin: '0 0 6px' };
const input = {
    width: '100%',
    padding: '11px 12px',
    marginBottom: '16px',
    border: '1px solid var(--border-color, #d1d5db)',
    borderRadius: '8px',
    fontSize: '15px',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
};
const notice = { textAlign: 'center', color: 'var(--text-light)', lineHeight: 1.6 };
const errorText = { color: 'var(--accent-red, #d0242c)', fontSize: '14px', margin: '4px 0 12px' };
const successText = { color: 'var(--primary-blue, #5593ce)', fontSize: '14px', margin: '4px 0 12px', fontWeight: 600 };
