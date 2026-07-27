import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug, getAllCitySlugs } from '@/data/locations';
import LocationTemplate from '@/components/LocationTemplate';

export function generateStaticParams() {
    return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }) {
    const { city } = await params;
    const loc = getCityBySlug(city);
    if (!loc) return {};
    return {
        title: `Plumber in ${loc.name}, TX | Anytime Plumbing 365`,
        description: `Need a plumber in ${loc.name}, TX? Anytime Plumbing 365 offers fast, honest, 24/7 plumbing & drain service for ${loc.name} homeowners. Call 214-307-4264.`,
    };
}

export default async function CityPage({ params }) {
    const { city } = await params;
    const loc = getCityBySlug(city);
    if (!loc) notFound();

    // Nearby links: this city's communities if it has any, otherwise other cities.
    let nearby;
    let nearbyHeading;
    if (loc.communities.length > 0) {
        nearbyHeading = `Neighborhoods We Serve in ${loc.name}`;
        nearby = loc.communities.map((cm) => ({ name: cm.name, href: `/${loc.slug}/${cm.slug}` }));
    } else {
        nearbyHeading = 'We Also Serve Nearby';
        nearby = cities
            .filter((c) => c.slug !== loc.slug)
            .slice(0, 8)
            .map((c) => ({ name: `${c.name}, TX`, href: `/${c.slug}` }));
    }

    const breadcrumb = (
        <>
            <Link href="/">Home</Link> / <Link href="/area">Service Areas</Link> / {loc.name}, TX
        </>
    );

    return (
        <LocationTemplate
            name={loc.name}
            headingLocation={`${loc.name}, TX`}
            regionPhrase="the Dallas–Fort Worth area"
            breadcrumb={breadcrumb}
            nearby={nearby}
            nearbyHeading={nearbyHeading}
        />
    );
}
