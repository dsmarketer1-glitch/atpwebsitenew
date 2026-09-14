import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import CTABanner from '@/components/CTABanner';
import { IconArrowRight } from '@/components/Icons';

export const metadata = {
    title: 'Our Plumbing & Restoration Services | Anytime Plumbing 365',
    description:
        'Explore the full range of residential plumbing and water damage restoration services from Anytime Plumbing 365 across the Dallas–Fort Worth area.',
};

// Restoration slugs; everything else is grouped under Plumbing. Kept in sync
// with the header menu grouping.
const RESTORATION_SLUGS = new Set(['sewage-cleanup', 'water-damage-restoration']);

function ServiceGrid({ list }) {
    return (
        <div className="services-grid reveal-stagger">
            {list.map((s) => (
                <div className="service-card interactive" key={s.slug}>
                    <div className="service-card-image">
                        <Image src={s.image} alt={s.imageAlt || s.title} width={400} height={250} />
                    </div>
                    <div className="service-card-body">
                        <h3><Link href={`/service/${s.slug}`}>{s.title}</Link></h3>
                        <p>{s.shortDescription}</p>
                        <Link href={`/service/${s.slug}`} className="service-card-link">Learn More <IconArrowRight size={15} /></Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ServicesPage() {
    const plumbing = services.filter((s) => !RESTORATION_SLUGS.has(s.slug));
    const restoration = services.filter((s) => RESTORATION_SLUGS.has(s.slug));

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '660px', margin: '12px auto 0', fontSize: '17px', position: 'relative', zIndex: 2 }}>
                        Complete residential plumbing and water damage restoration for Dallas–Fort Worth homeowners — honest work from the people who show up.
                    </p>
                    <p className="breadcrumb">
                        <Link href="/">Home</Link> / Services
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Plumbing</span>
                        <h2>Plumbing Services</h2>
                        <p>From drains and leaks to water heaters and repiping — fast, reliable plumbing done right.</p>
                    </div>
                    <ServiceGrid list={plumbing} />
                </div>
            </section>

            <section className="section section-gray">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Restoration</span>
                        <h2>Restoration Services</h2>
                        <p>Fast response to water damage and sewage backups to protect your home and restore it quickly.</p>
                    </div>
                    <ServiceGrid list={restoration} />
                </div>
            </section>

            <CTABanner />
        </>
    );
}
