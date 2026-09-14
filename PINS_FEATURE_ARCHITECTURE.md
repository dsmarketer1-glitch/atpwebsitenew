# Anytime Plumbing 365 — Jobsite Pins Feature: Technical Architecture

_Prepared for: implementation via Claude Code_
_Companion to: `PROJECT_BRIEF.md`_
_Status: spec for a new feature, not yet built_

---

## 1. What This Feature Does

Field technicians complete a job, open a private capture form on their phone, snap a photo,
pick the service + city, and write a one-line caption. The system then:

1. Rewrites the caption into a short, SEO-friendly job description in the site's existing brand voice.
2. Geo-tags it with the job's coordinates and a small map.
3. Generates `Service`/`LocalBusiness` JSON-LD schema for it.
4. Publishes it automatically onto the matching **service page** (`/service/[slug]`) and
   **city/community page** (`/[city]`, `/[city]/[community]`).
5. Optionally texts the customer a review request.

Goal: every completed job becomes a real, geo-verified content signal on the live site —
without anyone hand-editing `data/services.js` or `data/locations.js`.

---

## 2. How This Fits the Existing Architecture

The current site (`atpwebsitenew`, Next.js 16 App Router, React 19) is intentionally static:
all content lives in `data/*.js`, hand-edited, git-committed, rebuilt on deploy. That's correct
for services/locations copy — it changes rarely. Pins are the opposite: generated daily by
field techs, need to appear without a manual redeploy.

**This means one architectural addition**: a small live backend (Firestore + Storage), sitting
alongside — not replacing — the existing static content model. `data/*.js` stays exactly as is
and remains the source of truth for which services and cities/communities *exist*; pins only
ever attach to slugs that already exist there.

**Rendering change**: `/service/[slug]`, `/[city]`, and `/[city]/[community]` shift from pure
SSG to **ISR** (Incremental Static Regeneration) — they still prerender at build time, but Next
regenerates them in the background on a timer, so new pins appear without a manual rebuild.
Every other page (home, about, blog, contact, etc.) is untouched.

**Hosting**: this requires a Node runtime for the API route and ISR, same as the two existing
`/api/*` routes already do. **Recommend Vercel** — it's the natural host for this exact
Next.js feature set and resolves the "host TBD" item in the main brief.

---

## 3. New Components at a Glance

```
Tech's phone (capture form, /team/pin)
        |
        v
POST /api/pins  ─────────────►  Firebase Storage (photo)
        |                              
        |──────► Google Geocoding API (validate lat/lng → city, non-blocking)
        |──────► Anthropic API (caption → SEO description)
        |──────► generates JSON-LD schema
        |
        v
Firestore ("pins" collection)
        |
        v
Service & city pages (ISR, revalidate hourly)
   read pins matching their slug, server-render:
   photo + description + Google Static Map image + JSON-LD
        |
        v
Twilio SMS ──► customer review request (if consent given)
```

---

## 4. Data Model (Firestore)

**Collection: `pins`**

```ts
{
  id: string                     // Firestore doc id
  serviceSlug: string             // must exist in data/services.js — validated server-side
  citySlug: string                 // must exist in data/locations.js
  communitySlug: string | null     // optional, must exist under that city if present
  photoUrl: string                 // public Firebase Storage URL
  rawCaption: string                // exactly what the tech typed
  aiDescription: string             // Claude-rewritten SEO description
  techUid: string                   // Firebase Auth uid of submitting tech
  techName: string
  lat: number
  lng: number
  reverseGeocodedCity: string | null  // from Google Geocoding API, validation only
  customerPhone: string | null
  smsConsent: { transactional: boolean, marketing: boolean } | null
  reviewRequestStatus: "not_sent" | "sent" | "failed"
  reviewRequestSentAt: Timestamp | null
  schemaJsonLd: object              // pre-generated at write time, cached
  status: "published" | "pending"   // default "published"; lets you add moderation later
  createdAt: Timestamp
}
```

**Collection: `techs`** (optional but recommended)
```ts
{
  uid: string        // Firebase Auth uid
  name: string
  phone: string | null
  active: boolean
}
```
This lets you deactivate a departed tech's login without deleting their historical pins.

---

## 5. New Files to Add to the Repo

```
app/
  team/
    pin/
      page.jsx              # Capture form (client component, gated by Firebase Auth login)
  api/
    pins/
      route.js               # POST — create a pin (the only write path into Firestore)

components/
  PinsSection.jsx             # Server component — fetches + renders pins for a page
  PinCard.jsx                  # Single pin: photo, description, static map, JSON-LD script

lib/
  firebase-admin.js           # Server-side Firebase Admin SDK init (service account)
  firebase-client.js          # Client-side Firebase SDK init (for tech login only)
  pins.js                     # getPinsForService(slug), getPinsForCity(slug, communitySlug)
  ai-description.js           # callClaudeForDescription(caption, service, city)
  maps.js                     # reverseGeocode(lat, lng), staticMapUrl(lat, lng)
  schema.js                   # buildPinSchema(pin) → JSON-LD object
  sms-review-request.js       # sendReviewRequestSms(pin)

data/
  (unchanged — services.js and locations.js are read, never written, by the pins feature)
```

Modified files:
- `app/service/[slug]/page.jsx` — add `export const revalidate = 3600;` and render `<PinsSection type="service" slug={slug} />`
- `app/[city]/page.js` and `app/[city]/[community]/page.js` — same, with `type="city"`
- `components/LocationTemplate.jsx` — accept and render the pins section in its layout
- `app/layout.js` — no change needed (Firebase client SDK is only loaded on `/team/pin`, not site-wide)

---

## 6. Capture Form (`/team/pin`)

- Not in the nav, same convention as location pages.
- Gate access with **Firebase Authentication** (email/password is enough for a handful of
  techs — no need for a full user-management system).
- Fields:
  - Photo (file input with `capture="environment"` so mobile opens the camera directly)
  - Service — `<select>` populated from `data/services.js`
  - City — `<select>` populated from `data/locations.js`; a second `<select>` for community if that city has any
  - Caption — short free-text
  - Customer phone (optional) + the existing two-checkbox `SmsConsent.jsx` component, reused as-is
  - GPS — captured automatically via `navigator.geolocation.getCurrentPosition()`, not manually entered
- On submit: `POST /api/pins` as `multipart/form-data`, including the tech's Firebase ID token in the `Authorization` header.

---

## 7. API Route: `POST /api/pins`

Follows the same pattern as the existing `api/booking/route.js` and `api/contact/route.js`.

**Request**: `multipart/form-data`
- `photo` (file)
- `serviceSlug`, `citySlug`, `communitySlug` (optional), `caption`, `lat`, `lng`
- `customerPhone` (optional), `smsConsentTransactional`, `smsConsentMarketing` (booleans)
- Header: `Authorization: Bearer <Firebase ID token>`

**Server-side steps**:
1. Verify the ID token with Firebase Admin SDK — reject if invalid/expired.
2. Validate `serviceSlug` against `data/services.js` and `citySlug`/`communitySlug` against
   `data/locations.js`. Reject with a clear error if either doesn't exist — this is what
   guarantees a pin can never publish to a page that doesn't exist.
3. Validate the photo: must be `image/jpeg` or `image/png`, under 10MB. Reject otherwise.
4. Upload the photo to Firebase Storage under `pins/{year}/{month}/{uuid}.jpg`; get the public URL.
5. Call `reverseGeocode(lat, lng)` (Google Geocoding API) — store the result for validation,
   but don't block the pin on a mismatch; just log a warning if the reverse-geocoded city
   doesn't match `citySlug`.
6. Call `callClaudeForDescription(caption, service, city)` — see §10 for the prompt.
7. Call `buildPinSchema(pin)` — see §11.
8. Write the full document to Firestore `pins` collection.
9. If `customerPhone` present and `smsConsentTransactional` is true, call
   `sendReviewRequestSms(pin)` (§12). Don't let an SMS failure fail the whole request —
   log it and set `reviewRequestStatus: "failed"`.
10. Return `201` with the new pin's id.

**Response**: `{ id: string }` on success, `{ error: string }` with appropriate 4xx on validation failure.

---

## 8. Reading Pins Into Pages

`lib/pins.js` exports:
```js
getPinsForService(serviceSlug)          // Firestore query: where serviceSlug == X, status == "published"
getPinsForCity(citySlug, communitySlug) // where citySlug == X (and communitySlug == Y if provided)
```

Both are called **server-side** inside the page component (App Router server components can
query Firestore Admin SDK directly — no need to round-trip through your own API for reads).

`PinsSection.jsx` renders each result as a `PinCard`: photo, `aiDescription`, a Google Static
Map image, and a `<script type="application/ld+json">` tag containing `schemaJsonLd`. Because
this happens server-side during ISR regeneration, Google sees the schema and content in the
initial HTML — not injected later by client JS, which is what makes it actually count for SEO.

Set `export const revalidate = 3600;` (1 hour) on the three page files. Lower it (e.g. 300) if
you want pins to appear faster after submission; higher reduces regeneration load. For a
single-client, low-volume site, 1 hour is a reasonable starting point.

---

## 9. Google Maps Integration (exact setup)

You need a Google Cloud project with billing enabled (a $200/month recurring credit from
Google typically covers this volume completely for one client).

**Enable two APIs** in that project:
- **Geocoding API** — used server-side only, to reverse-geocode a pin's lat/lng for validation.
- **Maps Static API** — used to render the small map image on each pin card.

**Create two separate API keys** (never reuse one key for both):

1. **Server key** (`GOOGLE_MAPS_SERVER_KEY`) — restrict it to the Geocoding API only, no HTTP
   referrer restriction (it's called from your server, not a browser). Never expose this to
   the client.
2. **Public static-map key** (`NEXT_PUBLIC_GOOGLE_MAPS_STATIC_KEY`) — restrict it to the Maps
   Static API only, **and** restrict by HTTP referrer to
   `https://anytimeplumbing365.com/*` (and your staging domain, if any). This key does appear
   in page HTML (it has to, since the map is a plain `<img>` tag), so the referrer restriction
   is what keeps it from being abused elsewhere.

**Static map image** — rendered directly as an `<img>`, no JS map library needed:
```
https://maps.googleapis.com/maps/api/staticmap
  ?center={lat},{lng}
  &zoom=15
  &size=400x300
  &markers=color:red%7C{lat},{lng}
  &key={NEXT_PUBLIC_GOOGLE_MAPS_STATIC_KEY}
```
This is deliberately a static image, not the interactive Maps JavaScript API — it's far
lighter (no extra JS bundle per pin), loads fast, and is exactly what a "proof of location"
mini-map needs to be.

**Reverse geocoding** (server-side, `lib/maps.js`):
```
https://maps.googleapis.com/maps/api/geocode/json
  ?latlng={lat},{lng}
  &key={GOOGLE_MAPS_SERVER_KEY}
```
Used purely to sanity-check that the GPS coordinates roughly match the city the tech selected —
a safety net against a mis-tap on the city dropdown, not a hard gate.

---

## 10. AI Enrichment (Claude API)

Model: **Claude Haiku 4.5** (`claude-haiku-4-5-20251001`) is the right fit — this is a short,
well-defined rewrite task, not open-ended reasoning, so the fast/cheap tier is appropriate.
Upgrade to Claude Sonnet 5 later only if description quality needs to improve.

**System prompt** (fixed, stored in `lib/ai-description.js`):
```
You write short, SEO-friendly job descriptions for Anytime Plumbing 365, a residential
plumbing company in the Dallas–Fort Worth area. Brand voice: warm, honest, direct —
"The People Who Show Up." Never use emojis. Never invent details not present in the
technician's note. Output 2-3 sentences, naturally mentioning the service type and city
without keyword-stuffing. No markdown, no headers — plain text only.
```

**User message** (built per-request):
```
Service: {service.title}
City: {city.name}
Technician's note: "{rawCaption}"

Write the job description.
```

Store both `rawCaption` and the returned `aiDescription` — never discard the original; you'll
want it if you ever need to regenerate or audit descriptions later.

---

## 11. JSON-LD Schema Generation

`lib/schema.js` builds something like:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "{service.title}",
  "provider": {
    "@type": "Plumber",
    "name": "Anytime Plumbing 365",
    "telephone": "214-307-4264",
    "url": "https://anytimeplumbing365.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "{city.name}"
  },
  "description": "{aiDescription}",
  "image": "{photoUrl}"
}
```
Rendered server-side inside `PinCard.jsx` as `<script type="application/ld+json">`. Validate
sample output with Google's Rich Results Test before rollout.

---

## 12. Review Request SMS (Twilio)

- New integration, separate from EmailJS (which stays exactly as-is for lead forms).
- Requires a Twilio account, a phone number, and an **A2P 10DLC campaign use case** covering
  post-job review requests. If the Avoca-related brand/campaign registration mentioned in the
  main brief is already in progress, check whether "review requests" can be added as an
  additional use case under that same campaign — that's simpler than registering a brand new one.
- **Reuse the existing `SmsConsent.jsx` two-checkbox pattern** on the capture form's customer
  phone field — a review request is only sent if `smsConsentTransactional` is true, exactly the
  same consent logic already built for the contact/booking forms.
- Message template (kept short, includes opt-out per your existing STOP/HELP language):
  ```
  Hi! Thanks for choosing Anytime Plumbing 365. Mind leaving us a quick review?
  {reviewLink}
  Reply STOP to opt out.
  ```
- `reviewRequestStatus` and `reviewRequestSentAt` on the pin document let you track delivery
  without needing a separate logging system.

---

## 13. Auth & Security

- **Firestore rules**: deny all direct client reads/writes. All writes go through
  `/api/pins` using the Firebase Admin SDK (trusted server context, service account key).
  Server-rendered page reads also use the Admin SDK. The client-side Firebase SDK is used
  **only** for tech login on `/team/pin` — never to touch Firestore or Storage directly.
- **Storage rules**: writes only via Admin SDK (server); reads public (photos need to be
  visible on the live site).
- **Photo validation**: enforce mime-type and size limits server-side, not just client-side —
  client checks are a UX nicety, not a security control.
- **Service account key**: store as `FIREBASE_CLIENT_EMAIL` / `FIREBASE_PRIVATE_KEY` env vars,
  never in the repo — same convention as the existing EmailJS private key handling.

---

## 14. Environment Variables

Add these alongside the existing `EMAILJS_*` vars, both in `.env.local` and on Vercel:

```
# Firebase Admin (server-only)
FIREBASE_PROJECT_ID
FIREBASE_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY

# Firebase client SDK (tech login only — safe to expose, standard for Firebase web config)
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID

# Google Maps
GOOGLE_MAPS_SERVER_KEY                  # Geocoding API, server-only
NEXT_PUBLIC_GOOGLE_MAPS_STATIC_KEY      # Static Maps API, referrer-restricted

# Anthropic
ANTHROPIC_API_KEY

# Twilio
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_FROM_NUMBER
```

---

## 15. Third-Party Account Setup Checklist

- [ ] Google Cloud project — enable billing, enable Geocoding API + Maps Static API, create the two restricted keys (§9).
- [ ] Firebase project — enable Firestore, Storage, and Authentication (email/password provider). Generate a service account key for Admin SDK use.
- [ ] Anthropic account — generate an API key with access to Claude Haiku 4.5.
- [ ] Twilio account — buy a number, set up (or extend) A2P 10DLC campaign registration for the review-request use case.
- [ ] Add all env vars to Vercel project settings (production + preview).

---

## 16. Rough Cost Estimate (single client, low-moderate volume)

- **Google Maps**: comfortably inside the $200/month free credit at this volume.
- **Firebase**: Firestore + Storage at this scale — likely within or barely above the free tier; a few dollars/month at most.
- **Anthropic (Haiku 4.5)**: pin descriptions are short; cost is negligible per job, likely a few dollars/month.
- **Twilio**: per-SMS cost (roughly $0.0079/segment in the US) + a monthly number fee (~$1-2). At a few dozen jobs/month, single-digit dollars.

Total infrastructure cost for one client is realistically **under $20-30/month** at moderate volume — the main cost is your build time, not ongoing infra.

---

## 17. Testing & QA Checklist

- [ ] Submit a pin with an invalid `serviceSlug`/`citySlug` — confirm it's rejected, not silently dropped somewhere.
- [ ] Submit a pin with a >10MB or non-image file — confirm rejection.
- [ ] Confirm the pin appears on **both** the correct service page and correct city/community page after the next ISR regeneration.
- [ ] Validate the JSON-LD with Google's Rich Results Test.
- [ ] Confirm the static map image renders and the marker sits at the correct coordinates.
- [ ] Confirm SMS only sends when transactional consent is checked, and that STOP/HELP still works.
- [ ] Confirm Firestore/Storage rules actually block a direct client write (test with the client SDK directly, not just via your own form).

---

## 18. Rollout Plan

1. Build and deploy behind the scenes — pins feature live in code, but no tech has the `/team/pin` link yet.
2. One tech submits 2-3 real jobs. Check every item in §17.
3. Read the AI-generated descriptions out loud — do they sound like "The People Who Show Up," or generic? Tune the system prompt if not.
4. Share `/team/pin` with the full team once satisfied.
5. Monitor: new pages indexed in Google Search Console, Map Pack movement for target DFW keywords, review volume trend over the following weeks.

---

## 19. Out of Scope (for now)

This spec is single-tenant, single-client. If this is later turned into a product sold to
multiple contractors, expect: multi-tenant Firestore structure (an `accountId` on every
document), a billing layer, a proper admin dashboard, and a distribution mechanism for
clients who aren't on a custom Next.js site (JS embed widget, WordPress plugin) — none of
that is needed here and shouldn't be built prematurely.
