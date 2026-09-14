// Twilio review-request SMS (PINS_FEATURE_ARCHITECTURE §12).
// Separate from the EmailJS lead flow. A review request is only ever sent when
// the customer checked the transactional consent box on the capture form — the
// caller (/api/pins) enforces that; this function just sends.
//
// Uses the Twilio REST API over raw HTTP (Basic auth), no SDK. Fails gracefully:
// returns a status object instead of throwing, so an SMS problem never fails the
// pin write. The caller stores { reviewRequestStatus, reviewRequestSentAt }.
//
// Requires TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, and
// REVIEW_REQUEST_URL (the link customers tap to leave a review — flagged as an
// env var not listed in the spec's §14, since the message template needs it).

function buildMessage(reviewLink) {
    return (
        `Hi! Thanks for choosing Anytime Plumbing 365. Mind leaving us a quick review?\n` +
        `${reviewLink}\n` +
        `Reply STOP to opt out.`
    );
}

// pin fields used: customerPhone. Returns { status: 'sent' | 'failed', error? }.
export async function sendReviewRequestSms(pin) {
    const {
        TWILIO_ACCOUNT_SID,
        TWILIO_AUTH_TOKEN,
        TWILIO_FROM_NUMBER,
        REVIEW_REQUEST_URL,
    } = process.env;

    const to = pin && pin.customerPhone;

    if (!to) {
        return { status: 'failed', error: 'No customer phone number on pin.' };
    }
    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER) {
        console.warn('sendReviewRequestSms skipped: Twilio env vars not configured.');
        return { status: 'failed', error: 'Twilio is not configured.' };
    }
    if (!REVIEW_REQUEST_URL) {
        console.warn('sendReviewRequestSms skipped: REVIEW_REQUEST_URL not configured.');
        return { status: 'failed', error: 'REVIEW_REQUEST_URL is not configured.' };
    }

    const endpoint = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
    const auth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64');
    const form = new URLSearchParams({
        To: to,
        From: TWILIO_FROM_NUMBER,
        Body: buildMessage(REVIEW_REQUEST_URL),
    });

    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: form.toString(),
        });

        if (!res.ok) {
            const detail = await res.text();
            console.warn(`sendReviewRequestSms HTTP ${res.status}: ${detail}`);
            return { status: 'failed', error: `Twilio request failed (${res.status}).` };
        }

        return { status: 'sent' };
    } catch (err) {
        console.warn('sendReviewRequestSms failed:', err.message);
        return { status: 'failed', error: err.message };
    }
}
