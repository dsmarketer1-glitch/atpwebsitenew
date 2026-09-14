// A single jobsite pin: photo, AI/service description, address, and an
// OpenStreetMap embed showing the job location, plus server-rendered JSON-LD.
//
// Server component. The photo is a plain <img> (external Firebase Storage URL);
// the map is an OpenStreetMap embed <iframe> — no JS library, no API key, and it
// renders in the initial HTML. The JSON-LD is emitted server-side so search
// engines see it without client JS. Customer name/email are never rendered here.

import { IconMapPin } from '@/components/Icons';

export default function PinCard({ pin }) {
    if (!pin) return null;

    return (
        <article className="pin-card">
            {pin.photoUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="pin-card-photo" src={pin.photoUrl} alt={pin.aiDescription || 'Completed plumbing job'} loading="lazy" />
            )}

            <div className="pin-card-body">
                {pin.aiDescription && <p className="pin-card-desc">{pin.aiDescription}</p>}

                {pin.address && (
                    <p className="pin-card-meta">
                        <IconMapPin size={14} /> {pin.address}
                    </p>
                )}

                {pin.mapEmbedUrl && (
                    <iframe
                        className="pin-card-map"
                        src={pin.mapEmbedUrl}
                        title={`Map of ${pin.address || 'the job location'}`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                )}

                {pin.techName && (
                    <p className="pin-card-tech">Completed by {pin.techName}</p>
                )}
            </div>

            {pin.schemaJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(pin.schemaJsonLd) }}
                />
            )}
        </article>
    );
}
