// Cities we serve across the Dallas–Fort Worth Metroplex.
// City pages live at /[city]. Communities are no longer used — the list is a
// single flat set of cities. (The [city]/[community] route still exists but
// generates nothing while every city's communities array is empty.)
export const cities = [
    { slug: 'dallas', name: 'Dallas', communities: [] },
    { slug: 'fort-worth', name: 'Fort Worth', communities: [] },
    { slug: 'arlington', name: 'Arlington', communities: [] },
    { slug: 'irving', name: 'Irving', communities: [] },
    { slug: 'grand-prairie', name: 'Grand Prairie', communities: [] },
    { slug: 'hurst', name: 'Hurst', communities: [] },
    { slug: 'euless', name: 'Euless', communities: [] },
    { slug: 'bedford', name: 'Bedford', communities: [] },
    { slug: 'north-richland-hills', name: 'North Richland Hills', communities: [] },
    { slug: 'haltom-city', name: 'Haltom City', communities: [] },
    { slug: 'richland-hills', name: 'Richland Hills', communities: [] },
    { slug: 'grapevine', name: 'Grapevine', communities: [] },
    { slug: 'farmers-branch', name: 'Farmers Branch', communities: [] },
    { slug: 'carrollton', name: 'Carrollton', communities: [] },
    { slug: 'garland', name: 'Garland', communities: [] },
    { slug: 'richardson', name: 'Richardson', communities: [] },
    { slug: 'plano', name: 'Plano', communities: [] },
    { slug: 'mesquite', name: 'Mesquite', communities: [] },
];

export function getCityBySlug(slug) {
    return cities.find((c) => c.slug === slug);
}

export function getCommunity(citySlug, communitySlug) {
    const city = getCityBySlug(citySlug);
    if (!city) return null;
    const community = city.communities.find((cm) => cm.slug === communitySlug);
    return community ? { city, community } : null;
}

export function getAllCitySlugs() {
    return cities.map((c) => c.slug);
}

export function getAllCityCommunityParams() {
    return cities.flatMap((c) => c.communities.map((cm) => ({ city: c.slug, community: cm.slug })));
}
