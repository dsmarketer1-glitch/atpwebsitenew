import { notFound } from 'next/navigation';
import { getLandingBySlug, getAllLandingSlugs } from '@/data/landing-pages';
import LandingTemplate from '@/components/LandingTemplate';

export function generateStaticParams() {
    return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = getLandingBySlug(slug);
    if (!page) return {};
    return {
        title: page.metaTitle,
        description: page.metaDescription,
        alternates: { canonical: `/lp/${slug}` },
        openGraph: {
            title: page.metaTitle,
            description: page.metaDescription,
            type: 'website',
        },
    };
}

export default async function LandingPage({ params }) {
    const { slug } = await params;
    const page = getLandingBySlug(slug);
    if (!page) notFound();
    return <LandingTemplate page={page} />;
}
