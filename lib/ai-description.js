// AI enrichment: rewrites a technician's short caption into an SEO-friendly job
// description in the brand voice (PINS_FEATURE_ARCHITECTURE §10).
//
// Uses the Anthropic Messages API over raw HTTP (same convention as lib/email.js
// — no extra SDK). Model is Claude Haiku 4.5, appropriate for this short, well-
// defined rewrite. If ANTHROPIC_API_KEY is missing or the call fails, it falls
// back to the raw caption so a pin still publishes — the original is never lost.

const ANTHROPIC_ENDPOINT = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-haiku-4-5-20251001';

const SYSTEM_PROMPT = `You write short, SEO-friendly job descriptions for Anytime Plumbing 365, a residential plumbing company in the Dallas–Fort Worth area. Brand voice: warm, honest, direct — "The People Who Show Up." Never use emojis. Never invent details not present in the technician's note. Output 2-3 sentences, naturally mentioning the service type and city without keyword-stuffing. No markdown, no headers — plain text only.`;

// serviceTitle and cityName are plain strings; rawCaption is the tech's note.
// Returns a plain-text description string.
export async function callClaudeForDescription(rawCaption, serviceTitle, cityName) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    const caption = (rawCaption || '').trim();

    if (!apiKey) {
        console.warn('callClaudeForDescription: ANTHROPIC_API_KEY not configured — using raw caption.');
        return caption;
    }

    const userMessage =
        `Service: ${serviceTitle}\n` +
        `City: ${cityName}\n` +
        `Technician's note: "${caption}"\n\n` +
        `Write the job description.`;

    try {
        const res = await fetch(ANTHROPIC_ENDPOINT, {
            method: 'POST',
            headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                model: MODEL,
                max_tokens: 300,
                system: SYSTEM_PROMPT,
                messages: [{ role: 'user', content: userMessage }],
            }),
        });

        if (!res.ok) {
            const detail = await res.text();
            console.warn(`callClaudeForDescription HTTP ${res.status}: ${detail} — using raw caption.`);
            return caption;
        }

        const data = await res.json();
        const text = Array.isArray(data.content)
            ? data.content.filter((b) => b.type === 'text').map((b) => b.text).join('').trim()
            : '';
        return text || caption;
    } catch (err) {
        console.warn('callClaudeForDescription failed:', err.message, '— using raw caption.');
        return caption;
    }
}
