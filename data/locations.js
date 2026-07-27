// City + community location pages.
// City pages live at /[city]; community pages at /[city]/[community].
// Every page shares one template — only the area name changes.
export const cities = [
    {
        slug: 'dallas', name: 'Dallas', communities: [
            { slug: 'oak-cliff', name: 'Oak Cliff' },
            { slug: 'east-dallas', name: 'East Dallas' },
            { slug: 'lakewood', name: 'Lakewood' },
            { slug: 'lake-highlands', name: 'Lake Highlands' },
            { slug: 'casa-view', name: 'Casa View' },
            { slug: 'lochwood', name: 'Lochwood' },
        ],
    },
    {
        slug: 'garland', name: 'Garland', communities: [
            { slug: 'downtown-garland', name: 'Downtown Garland' },
            { slug: 'travis-college-hill', name: 'Travis College Hill' },
            { slug: 'williams-neighborhood', name: 'Williams Neighborhood' },
            { slug: 'western-heights', name: 'Western Heights' },
            { slug: 'duck-creek', name: 'Duck Creek' },
            { slug: 'south-garland', name: 'South Garland' },
        ],
    },
    {
        slug: 'irving', name: 'Irving', communities: [
            { slug: 'south-irving', name: 'South Irving' },
            { slug: 'heritage-district', name: 'Heritage District' },
            { slug: 'plymouth-park', name: 'Plymouth Park' },
            { slug: 'barton-estates', name: 'Barton Estates' },
            { slug: 'nichols-park', name: 'Nichols Park' },
        ],
    },
    { slug: 'richardson', name: 'Richardson', communities: [] },
    { slug: 'mesquite', name: 'Mesquite', communities: [] },
    { slug: 'plano', name: 'Plano', communities: [] },
    { slug: 'grand-prairie', name: 'Grand Prairie', communities: [] },
    { slug: 'arlington', name: 'Arlington', communities: [] },
    { slug: 'rowlett', name: 'Rowlett', communities: [] },
    { slug: 'sachse', name: 'Sachse', communities: [] },
    { slug: 'wylie', name: 'Wylie', communities: [] },
    { slug: 'murphy', name: 'Murphy', communities: [] },
    { slug: 'sunnyvale', name: 'Sunnyvale', communities: [] },
    { slug: 'balch-springs', name: 'Balch Springs', communities: [] },
    { slug: 'rockwall', name: 'Rockwall', communities: [] },
    { slug: 'carrollton', name: 'Carrollton', communities: [] },
    { slug: 'farmers-branch', name: 'Farmers Branch', communities: [] },
    { slug: 'addison', name: 'Addison', communities: [] },
    { slug: 'duncanville', name: 'Duncanville', communities: [] },
    { slug: 'desoto', name: 'DeSoto', communities: [] },
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
