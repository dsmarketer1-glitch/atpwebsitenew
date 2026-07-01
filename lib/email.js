// Server-side EmailJS sender. Uses the private key (accessToken) so it must be
// called from the server only. Requires "Allow EmailJS API for non-browser
// applications" to be enabled in the EmailJS dashboard (Account -> Security).

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

export async function sendLeadEmail(templateId, templateParams) {
    const {
        EMAILJS_SERVICE_ID,
        EMAILJS_PUBLIC_KEY,
        EMAILJS_PRIVATE_KEY,
    } = process.env;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY || !templateId) {
        throw new Error('EmailJS environment variables are not configured.');
    }

    const res = await fetch(EMAILJS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: templateId,
            user_id: EMAILJS_PUBLIC_KEY,
            accessToken: EMAILJS_PRIVATE_KEY,
            template_params: templateParams,
        }),
    });

    if (!res.ok) {
        const detail = await res.text();
        throw new Error(`EmailJS request failed (${res.status}): ${detail}`);
    }

    return true;
}

// Central Time timestamp for the lead email (Dallas / DFW).
export function submittedAt() {
    return new Date().toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        dateStyle: 'medium',
        timeStyle: 'short',
    });
}
