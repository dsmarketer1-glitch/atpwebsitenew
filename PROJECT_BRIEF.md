# Anytime Plumbing 365 — Website Project Brief

_Last updated: 2026-09-11_

A complete reference for the Anytime Plumbing 365 marketing website: what it is, how it's
built, how it's organized, the integrations it depends on, and what work is outstanding.

---

## 1. Overview

- **Business:** Anytime Plumbing 365 (DBA on file: _Anytime Plumbing 365 Drain Cleaning & Repair_) — a residential plumbing, drain, sewer, and water-damage-restoration company.
- **Service area:** Dallas–Fort Worth Metroplex, TX. (An earlier Houston/"The Woodlands" presence was **removed** — DFW only.)
- **Primary phone:** 214-307-4264 · **License #:** 37912.
- **Offices:** Irving (214-307-4264) and Garland (214-430-3461, 102 N Shiloh Rd, Unit 104, Garland, TX 75042).
- **Purpose of the site:** lead generation (calls, bookings, form submissions) + local SEO across DFW cities and neighborhoods, with a "The People Who Show Up™" brand voice.
- **Repository:** `github.com/dsmarketer1-glitch/atpwebsitenew` · branch **`main`**.

---

## 2. Tech Stack & Architecture

| Layer | Choice |
|---|---|
| Framework | **Next.js 16.1.6** (App Router, Turbopack) |
| UI runtime | **React 19.2.3** / react-dom 19.2.3 |
| Language | JavaScript (JSX) — no TypeScript |
| Styling | Single global stylesheet `app/globals.css` (CSS custom properties + utility classes) + occasional inline styles |
| Content | **Hardcoded** in `data/*.js` (no CMS/database) |
| Forms email | **EmailJS REST API**, called server-side from Next route handlers |
| Images | `next/image` with `images.unoptimized: true` (served as-is from `public/`) |
| Fonts | Google Fonts via `<link>` in the root layout |
| Hosting | Static-friendly SSG + a couple of dynamic API routes (host TBD — see §10) |

**Runtime dependencies are intentionally minimal** (`next`, `react`, `react-dom` only). A former
**Sanity CMS backend was fully removed** — all content is now hardcoded in `data/`, which is
recorded in the project auto-memory.

Rendering model:
- Most pages are **static (SSG)**; dynamic segments (`/service/[slug]`, `/blog/[slug]`, `/[city]`, `/[city]/[community]`) use `generateStaticParams` to prerender every page.
- Only `/api/booking` and `/api/contact` are **server-rendered on demand** (form handlers).

---

## 3. Directory Structure

```
app/
  layout.js               # Root layout: fonts, metadata, ClientLayout, Avoca scripts
  page.js                 # Home (renders HomePageClient)
  globals.css             # Entire design system + component styles
  about-us/page.jsx
  area/page.jsx           # "Service Areas" hub (links to city pages)
  blog/page.jsx
  blog/[slug]/page.jsx    # Blog post (from data/blog-posts.js)
  contact-us/page.jsx     # Contact form + office locations
  financing/page.jsx
  privacy-policy/page.jsx # Incl. SMS/A2P language + opt-in example
  terms-of-service/page.jsx
  service/[slug]/page.jsx # Service detail (from data/services.js)
  specials/page.jsx
  [city]/page.jsx                 # City location landing page (SSG)
  [city]/[community]/page.jsx     # Community/neighborhood landing page (SSG)
  api/booking/route.js    # Booking popup submissions -> EmailJS
  api/contact/route.js    # Contact form submissions -> EmailJS

components/
  ClientLayout.jsx    # Client shell: AnnouncementBar, Header, main, Footer, popup, floating CTA, scroll-to-top
  AnnouncementBar.jsx # Sticky red promo bar
  Header.jsx          # Top bar + nav + dropdowns + desktop/mobile actions
  Footer.jsx          # Columns, offices, socials, "Communities We Serve" links
  HomePageClient.jsx  # Home page body (hero, services, why-us, testimonials, areas, blog)
  LocationTemplate.jsx# Shared template for all city & community pages
  BookingPopup.jsx    # Internal booking modal (form -> /api/booking)
  CTABanner.jsx       # Reusable bottom call-to-action band
  FAQAccordion.jsx    # Expandable FAQ list
  SmsConsent.jsx      # Two-checkbox SMS opt-in (A2P 10DLC)
  Icons.jsx           # Inline SVG icon set (no emojis)
  AnimatedCounter.jsx, ScrollAnimations.jsx, CustomCursor.jsx  # UX enhancers

data/
  services.js    # 17 services (slug, titles, meta, image, content, features, faqs)
  locations.js   # 20 cities + 17 communities (Dallas/Garland/Irving neighborhoods) + helpers
  blog-posts.js  # 3 blog posts
  settings.js    # Site settings (phone, license, email, social links)

lib/
  email.js       # sendLeadEmail() -> EmailJS REST API + submittedAt() (Central time)

public/images/   # Logo, van, service photos, coupons, hero background, etc.
```

---

## 4. Pages & Routing

**Static pages:** `/`, `/about-us`, `/area`, `/blog`, `/contact-us`, `/financing`,
`/privacy-policy`, `/specials`, `/terms-of-service`.

**Dynamic (SSG) pages:**
- `/service/[slug]` — 17 service detail pages.
- `/blog/[slug]` — 3 blog posts.
- `/[city]` — **20 city landing pages** (Dallas, Garland, Irving, Richardson, Mesquite, Plano, Grand Prairie, Arlington, Rowlett, Sachse, Wylie, Murphy, Sunnyvale, Balch Springs, Rockwall, Carrollton, Farmers Branch, Addison, Duncanville, DeSoto).
- `/[city]/[community]` — **17 community/neighborhood pages** (Dallas ×6, Garland ×6, Irving ×5), e.g. `/dallas/oak-cliff`, `/garland/duck-creek`, `/irving/south-irving`.

**Location pages** share one `LocationTemplate` — identical layout/design/images, only the area
name changes in H1 ("The People Who Show Up™ in {area}"), subheading, body, FAQ, and metadata.
They are **not in the nav menu**; they're reachable from the homepage "Areas We Serve" tags, the
`/area` page cards, and the footer "Communities We Serve" links.

**API routes:** `POST /api/booking`, `POST /api/contact` — validate input and send a formatted
lead email via EmailJS (incl. SMS-consent status).

---

## 5. Design System / Brand

- **Palette (flat, 3 colors only):** Blue `#5593CE`, Red `#D0242C`, White `#FFFFFF`. Gradients/glows were removed in favor of a flat look. (Neutral grays for body text; platform brand colors are a deliberate exception on the Contact page's social buttons.)
- **Fonts:** Montserrat (display/headings/nav/buttons), Open Sans (body), Playfair Display (accent/quotes).
- **Voice:** warm, honest, "The People Who Show Up™" / "Making Your Day Brighter™".
- **Icons:** custom inline SVGs in `Icons.jsx` — **no emojis** anywhere.
- **Announcement bar:** sticky red bar above the header, white pulsating text — "New Plumbing at 0% Interest for 60 Month" — links to `/financing`.
- Design tokens and rules live in `app/globals.css` `:root` and are documented in project memory.

---

## 6. Integrations

| Integration | Where | Notes |
|---|---|---|
| **EmailJS** (lead emails) | `lib/email.js`, `/api/booking`, `/api/contact` | Server-side REST call using a **private key** (kept in env, never in the browser). Sends To: `dispatch@anytimeplumbing365.com`, Cc: `team1@acerodigital.ai`, Reply-To: customer. Records SMS consent per submission. |
| **Avoca SimpleScheduler** | `app/layout.js` + `Header.jsx` | Widget script (manual mode) loaded site-wide; the header **Book Online** button (desktop + mobile) calls `SimpleScheduler.open()`. |
| **Avoca Chat Widget** | `app/layout.js` | Site-wide chat (`ChatWidgetKey='3225'`, color `#003a70`, `AutoOpen: true`). |

Both Avoca scripts are injected via `next/script` in the root layout.

---

## 7. Forms & SMS/Twilio (A2P 10DLC) Compliance

Two lead forms collect a phone number: the **Contact form** (`/contact-us`) and the **Book Online popup** (`BookingPopup`).

Compliance implemented for Twilio/Avoca activation:
- **Privacy Policy** — dedicated SMS/call section incl. the required _"No mobile information will be shared with third parties…"_ line, STOP/HELP, message-rate disclosure, and a **read-only opt-in example** block for opt-in screenshots.
- **Terms & Conditions** — SMS text-messaging terms section.
- **Two-checkbox opt-in** (`SmsConsent.jsx`), used on both forms and shown read-only on the policy page:
  1. **Transactional** — appointment reminders & service updates.
  2. **Marketing** — offers, discounts, seasonal & membership promotions.
  - Both **unchecked by default** and **optional** (forms still submit without them); each carries STOP/HELP, message-rate language, and Privacy/Terms links.
- **Consent is recorded** in each lead email (`SMS consent — Transactional: Yes/No | Marketing: Yes/No`).

Still required **outside the codebase** (business/console side): A2P 10DLC **Brand + Campaign
registration** in Twilio/Avoca, submitting the public Privacy Policy URL, and confirming STOP/HELP
auto-replies.

---

## 8. Data Layer

All content is hardcoded (no CMS):
- `data/services.js` — 17 services with slug, titles, meta title/description, image, body paragraphs, feature list, and FAQs.
- `data/locations.js` — `cities[]` (each with `slug`, `name`, `communities[]`) + helpers (`getCityBySlug`, `getCommunity`, `getAllCitySlugs`, `getAllCityCommunityParams`).
- `data/blog-posts.js` — 3 posts (slug, title, date, excerpt, HTML content, meta).
- `data/settings.js` — `siteSettings` (phoneNumber, licenseNumber, email, socialLinks).

To add/change content, edit these files (and, for images, `public/images/`).

---

## 9. Environment Variables

Required for the forms to actually send (kept in `.env.local` locally; **must be added to the
hosting provider** for production):

```
EMAILJS_SERVICE_ID
EMAILJS_PUBLIC_KEY
EMAILJS_PRIVATE_KEY
EMAILJS_TEMPLATE_BOOKING
EMAILJS_TEMPLATE_CONTACT
```

`.env.local` is git-ignored. The Avoca keys are embedded in the client script tags per Avoca's own
integration (public widget keys).

---

## 10. Build, Dev & Deploy

```bash
npm install       # install deps
npm run dev       # local dev server -> http://localhost:3000
npm run build     # production build (SSG)
npm run start     # serve the production build
npm run lint      # eslint
```

- Node/Next 16, React 19.
- Deployment host is **not yet confirmed** in-repo. The site is SSG-friendly; the two `/api/*`
  routes need a Node runtime (e.g. Vercel/Netlify). **EmailJS env vars must be set on the host** or
  the forms will error in production.

---

## 11. Current Status & Recent Work

The site has gone through a full brand refresh and a series of feature additions. Recent, notable
changes (most recent first):

- Fixed Contact page office label: **Dallas → Garland** (correct address/map).
- Added the **Avoca Chat Widget** site-wide.
- Wired the header **Book Online** button to the **Avoca SimpleScheduler**.
- Added a **sticky red announcement bar** (0% financing promo).
- Added **A2P 10DLC SMS compliance** (two-checkbox opt-in + policy language + consent logging).
- Built **city + community location pages** (37 SSG pages) with a shared template, wired into
  Areas We Serve / homepage / footer.
- **EmailJS** integration for the contact & booking forms (server-side).
- Full **brand refresh**: flat blue/red/white palette, Montserrat/Open Sans/Playfair fonts,
  emoji-free SVG icons, new dark hero, revised copy, **Sanity CMS removed** (content hardcoded).

---

## 12. Outstanding / To-Do

- [ ] **Set EmailJS env vars on the hosting provider** (forms + consent records won't send in prod until done).
- [ ] Complete **Twilio/Avoca A2P 10DLC Brand + Campaign registration** (business/console side).
- [ ] Optional chat tweaks: set `ChatWidgetAutoOpen` to `false` (currently auto-opens on every page load) and/or change chat color `#003a70` to brand blue/red.
- [ ] Rotate the **EmailJS private key** (was shared in chat during setup).
- [ ] Rotate the **old Sanity API token** — it was deleted from the tree but remains in git history.
- [ ] Confirm/label the announcement copy ("60 Month" vs "60 Months").

---

## 13. Conventions & Notes

- Commit style: concise subject + bullet body; changes are pushed directly to `main`.
- No emojis in UI — use `Icons.jsx`.
- Keep new content in `data/*`; keep styles in `app/globals.css`.
- Location pages must stay out of the nav; link to them from Areas We Serve / footer.
- Secrets never go in the repo — use env vars (`.env.local`, host dashboard).
</content>
