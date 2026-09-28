// Factual schema.org JSON-LD builders. All entities use stable @id values so
// pages can reference the business entity rather than redefining it.
// Branch facts (addresses, phones) come from the real Irving & Garland offices.

const BASE = 'https://www.anytimeplumbing365.com';
export const ORG_ID = `${BASE}/#organization`;
export const IRVING_ID = `${BASE}/#irving-office`;
export const GARLAND_ID = `${BASE}/#garland-office`;

const LOGO = `${BASE}/images/logo.png`;
const SAME_AS = [
    'https://www.facebook.com/anytimeplumbing365/',
    'https://www.instagram.com/anytimeplumbing365/',
    'https://www.youtube.com/@AnyTimePlumbingDrainCleaning',
    'https://www.yelp.com/biz/anytime-plumbing-365-irving-6',
];

// Open 24/7, 365 days a year.
const OPEN_24_7 = {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
};

// The organization + its two legitimate branches, as one @graph.
// `cityNames` is the list of served cities (for areaServed).
export function organizationGraph(cityNames = []) {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': ORG_ID,
                name: 'Anytime Plumbing 365',
                url: BASE,
                logo: LOGO,
                image: LOGO,
                telephone: '214-307-4264',
                sameAs: SAME_AS,
                areaServed: cityNames.map((n) => ({ '@type': 'City', name: n })),
            },
            {
                '@type': 'Plumber',
                '@id': IRVING_ID,
                name: 'Anytime Plumbing 365 — Irving',
                url: BASE,
                image: LOGO,
                telephone: '214-307-4264',
                parentOrganization: { '@id': ORG_ID },
                priceRange: '$$',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '320 Decker Dr, Suite 102-08',
                    addressLocality: 'Irving',
                    addressRegion: 'TX',
                    postalCode: '75062',
                    addressCountry: 'US',
                },
                areaServed: { '@type': 'City', name: 'Irving' },
                openingHoursSpecification: OPEN_24_7,
                sameAs: SAME_AS,
            },
            {
                '@type': 'Plumber',
                '@id': GARLAND_ID,
                name: 'Anytime Plumbing 365 — Garland',
                url: BASE,
                image: LOGO,
                telephone: '214-430-3461',
                parentOrganization: { '@id': ORG_ID },
                priceRange: '$$',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '102 N Shiloh Rd, Suite 104',
                    addressLocality: 'Garland',
                    addressRegion: 'TX',
                    postalCode: '75042',
                    addressCountry: 'US',
                },
                areaServed: { '@type': 'City', name: 'Garland' },
                openingHoursSpecification: OPEN_24_7,
                sameAs: SAME_AS,
            },
        ],
    };
}

// A Service offered across DFW, provided by the organization entity.
export function serviceJsonLd({ title, description, slug }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${BASE}/service/${slug}#service`,
        name: title,
        serviceType: title,
        description,
        url: `${BASE}/service/${slug}`,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'AdministrativeArea', name: 'Dallas–Fort Worth Metroplex' },
    };
}

// Plumbing service scoped to a city/community, provided by the organization.
export function areaServiceJsonLd({ areaName, path }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${BASE}${path}#service`,
        name: `Plumber in ${areaName}, TX`,
        serviceType: 'Plumbing & Drain Service',
        url: `${BASE}${path}`,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'City', name: areaName },
    };
}

// BreadcrumbList from [{ name, path }] items.
export function breadcrumbJsonLd(items = []) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: it.name,
            item: `${BASE}${it.path}`,
        })),
    };
}
