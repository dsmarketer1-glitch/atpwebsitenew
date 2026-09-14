// Builds the JSON-LD (schema.org) object for a single jobsite pin.
// Pre-generated at write time in /api/pins and cached on the Firestore doc, so
// it can be rendered server-side inside PinCard.jsx without recomputing.
// See PINS_FEATURE_ARCHITECTURE §11.

const PROVIDER = {
    '@type': 'Plumber',
    name: 'Anytime Plumbing 365',
    telephone: '214-307-4264',
    url: 'https://anytimeplumbing365.com',
};

// pin fields used: serviceTitle, cityName, aiDescription, photoUrl.
export function buildPinSchema({ serviceTitle, cityName, aiDescription, photoUrl }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: serviceTitle,
        provider: PROVIDER,
        areaServed: {
            '@type': 'City',
            name: cityName,
        },
        description: aiDescription,
    };
    if (photoUrl) schema.image = photoUrl;
    return schema;
}
