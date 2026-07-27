import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCommunity, getAllCityCommunityParams } from '@/data/locations';
import LocationTemplate from '@/components/LocationTemplate';

export function generateStaticParams() {
    return getAllCityCommunityParams();
}

export async function generateMetadata({ params }) {
    const { city, community } = await params;
    const found = getCommunity(city, community);
    if (!found) return {};
    return {
        title: `Plumber in ${found.community.name}, ${found.city.name} TX | Anytime Plumbing 365`,
        description: `Need a plumber in ${found.community.name}? Anytime Plumbing 365 offers fast, honest, 24/7 plumbing & drain service across ${found.community.name} in ${found.city.name}, TX. Call 214-307-4264.`,
    };
}

export default async function CommunityPage({ params }) {
    const { city, community } = await params;
    const found = getCommunity(city, community);
    if (!found) notFound();

    const { city: cityObj, community: comm } = found;

    // Nearby: sibling communities in the same city, plus the parent city page.
    const nearby = [
        { name: `All of ${cityObj.name}, TX`, href: `/${cityObj.slug}` },
        ...cityObj.communities
            .filter((cm) => cm.slug !== comm.slug)
            .map((cm) => ({ name: cm.name, href: `/${cityObj.slug}/${cm.slug}` })),
    ];

    const breadcrumb = (
        <>
            <Link href="/">Home</Link> / <Link href="/area">Service Areas</Link> / <Link href={`/${cityObj.slug}`}>{cityObj.name}</Link> / {comm.name}
        </>
    );

    return (
        <LocationTemplate
            name={comm.name}
            headingLocation={`${comm.name}, ${cityObj.name}`}
            regionPhrase={`the greater ${cityObj.name} area`}
            breadcrumb={breadcrumb}
            nearby={nearby}
            nearbyHeading={`More Areas We Serve in ${cityObj.name}`}
        />
    );
}
