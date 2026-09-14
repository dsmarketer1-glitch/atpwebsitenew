// Server component that fetches and renders the jobsite pins for a page
// (PINS_FEATURE_ARCHITECTURE §8). Runs server-side during ISR regeneration.
//
// Props:
//   type          "service" | "city"
//   slug          serviceSlug (for type="service") or citySlug (for type="city")
//   communitySlug optional, only used for type="city" community pages
//   areaName      display name for the heading (e.g. service title or city name)
//
// Renders nothing when there are no published pins, so it's safe to drop into any
// page unconditionally — including before the backend is provisioned.

import PinCard from '@/components/PinCard';
import { getPinsForService, getPinsForCity } from '@/lib/pins';

export default async function PinsSection({ type, slug, communitySlug = null, areaName }) {
    const pins =
        type === 'service'
            ? await getPinsForService(slug)
            : await getPinsForCity(slug, communitySlug);

    if (!pins || pins.length === 0) return null;

    const heading =
        type === 'service'
            ? `Recent ${areaName || ''} Jobs`.replace(/\s+/g, ' ').trim()
            : `Recent Jobs in ${areaName || 'Your Area'}`;

    return (
        <section className="section section-gray">
            <div className="container">
                <div className="section-header fade-in">
                    <span className="section-label">Proof of Work</span>
                    <h2>{heading}</h2>
                    <p>Real jobs our team recently completed — geo-verified and photographed on site.</p>
                </div>
                <div className="pins-grid">
                    {pins.map((pin) => (
                        <PinCard key={pin.id} pin={pin} />
                    ))}
                </div>
            </div>
        </section>
    );
}
