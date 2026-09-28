import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { IconMapPin } from '@/components/Icons';
import { cities } from '@/data/locations';

export const metadata = {
    title: 'Plumbing in Dallas–Fort Worth, TX | Anytime Plumbing 365',
    alternates: { canonical: '/area' },
    description: 'We show up across the Dallas–Fort Worth Metroplex, 365 days a year. Find your city and call 214-307-4264 — honest help that makes your day brighter.',
};

// Short blurb per city; office cities get a note, everything else a generic line.
const OFFICE_BLURBS = {
    irving: 'Home to our Irving office — full plumbing & restoration coverage.',
    garland: 'Home to our Garland office — full plumbing & restoration coverage.',
    dallas: 'Serving Dallas homeowners with fast, honest plumbing & drain service.',
};

const areas = cities.map((c) => ({
    slug: c.slug,
    name: `${c.name}, TX`,
    description: OFFICE_BLURBS[c.slug] || `Fast, honest plumbing & drain service for ${c.name} homeowners.`,
}));

export default function ServiceAreasPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <span className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '14px', position: 'relative', zIndex: 2 }}>Coverage</span>
                    <h1>The People Who Show Up<span style={{ fontSize: '0.45em', verticalAlign: 'top', fontWeight: 700 }}>™</span></h1>
                    <p style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '640px', margin: '12px auto 0', fontSize: '17px', position: 'relative', zIndex: 2 }}>
                        Proudly serving cities across the Dallas–Fort Worth Metroplex — 24/7.
                    </p>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Service Areas</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Good Neighbors. Great Service.</span>
                        <h2>Your Neighborhood, Our Home</h2>
                        <p>From Dallas to Fort Worth, we treat every street like our own. Honest, friendly plumbing and restoration — wherever you are in the Metroplex.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }} className="fade-in">
                        {areas.map((area) => (
                            <Link key={area.slug} href={`/${area.slug}`} style={{
                                display: 'block',
                                padding: '20px 24px',
                                background: 'var(--white)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-3d)',
                                border: '1px solid rgba(0,0,0,0.04)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                            }}>
                                <strong style={{ fontSize: '15px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}><IconMapPin size={16} /> {area.name}</strong>
                                <p style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '4px', lineHeight: '1.5' }}>{area.description}</p>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '44px' }} className="fade-in">
                        <p style={{ fontSize: '17px', color: 'var(--text-light)', marginBottom: '20px' }}>
                            Don&apos;t see your area? Give us a call — we may still be able to help!
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact-us" className="btn btn-primary btn-lg">Contact Us</Link>
                            <a href="tel:214-307-4264" className="btn btn-red btn-lg">Call 214-307-4264</a>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
