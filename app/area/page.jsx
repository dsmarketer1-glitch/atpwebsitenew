import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { IconMapPin } from '@/components/Icons';

export const metadata = {
    title: 'Plumbing in Dallas–Fort Worth, TX | Anytime Plumbing 365',
    description: 'We show up across the Dallas–Fort Worth Metroplex, 365 days a year. Find your city and call 214-307-4264 — honest help that makes your day brighter.',
};

const areas = [
    { name: 'Dallas, TX', description: 'Our home base. Full plumbing and restoration services.' },
    { name: 'Irving, TX', description: 'Our second office location with full service coverage.' },
    { name: 'Richardson, TX', description: 'Complete plumbing solutions for Richardson residents.' },
    { name: 'Mesquite, TX', description: 'Reliable plumbing service in Mesquite.' },
    { name: 'Plano, TX', description: 'Expert plumbing for Plano homeowners.' },
    { name: 'Grand Prairie, TX', description: 'Fast, dependable service in Grand Prairie.' },
    { name: 'Arlington, TX', description: 'Full plumbing services for Arlington homes.' },
    { name: 'Rowlett, TX', description: 'Serving Rowlett with professional plumbing.' },
    { name: 'Sachse, TX', description: 'Dependable plumbing solutions in Sachse.' },
    { name: 'Wylie, TX', description: 'Expert plumbing repair and maintenance in Wylie.' },
    { name: 'Murphy, TX', description: 'Fast, reliable plumbing in Murphy.' },
    { name: 'Sunnyvale, TX', description: 'Professional plumbing for Sunnyvale homes.' },
    { name: 'Balch Springs, TX', description: 'Serving Balch Springs with expert care.' },
    { name: 'Rockwall, TX', description: 'Complete plumbing services for Rockwall.' },
    { name: 'Carrollton, TX', description: 'Reliable service for Carrollton homeowners.' },
    { name: 'Farmers Branch, TX', description: 'Expert plumbing in Farmers Branch.' },
    { name: 'Addison, TX', description: 'Fast service for Addison area residents.' },
    { name: 'Duncanville, TX', description: 'Trusted plumbing in Duncanville.' },
    { name: 'DeSoto, TX', description: 'Professional plumbing for DeSoto homes.' },
];

export default function ServiceAreasPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Service Areas</h1>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Service Areas</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Good Neighbors. Great Service.</span>
                        <h2>Your Neighborhood, Our Home</h2>
                        <p>From Dallas to Wylie, we treat every street like our own. Honest, friendly plumbing and restoration — wherever you are in the Metroplex.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }} className="fade-in">
                        {areas.map((area) => (
                            <div key={area.name} style={{
                                padding: '20px 24px',
                                background: 'var(--white)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-3d)',
                                border: '1px solid rgba(0,0,0,0.04)',
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                            }}>
                                <strong style={{ fontSize: '15px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}><IconMapPin size={16} /> {area.name}</strong>
                                <p style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '4px', lineHeight: '1.5' }}>{area.description}</p>
                            </div>
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
