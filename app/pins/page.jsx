import Link from 'next/link';
import PinCard from '@/components/PinCard';
import CTABanner from '@/components/CTABanner';
import { getAllPins } from '@/lib/pins';
import { IconPhone } from '@/components/Icons';

// ISR: regenerate hourly so new pins appear without a manual rebuild.
export const revalidate = 3600;

export const metadata = {
    title: 'Recent Jobs & Jobsite Pins | Anytime Plumbing 365',
    description:
        'See real plumbing jobs recently completed by Anytime Plumbing 365 across the Dallas–Fort Worth area — photos, descriptions, and job locations on the map.',
};

export default async function PinsPage() {
    const pins = await getAllPins();

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Our Recent Jobs</h1>
                    <p style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '640px', margin: '12px auto 0', fontSize: '17px', position: 'relative', zIndex: 2 }}>
                        Real plumbing jobs our team recently completed across Dallas–Fort Worth — each one photographed and mapped on site.
                    </p>
                    <p className="breadcrumb">
                        <Link href="/">Home</Link> / Pins
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {pins.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <h2>Fresh jobs are on the way</h2>
                            <p style={{ color: 'var(--text-light)', maxWidth: '520px', margin: '10px auto 24px' }}>
                                Our team is out in the field every day. Recently completed jobs will appear here soon.
                            </p>
                            <a href="tel:214-307-4264" className="btn btn-red btn-lg"><IconPhone size={18} /> Call 214-307-4264</a>
                        </div>
                    ) : (
                        <div className="pins-grid">
                            {pins.map((pin) => (
                                <PinCard key={pin.id} pin={pin} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <CTABanner />
        </>
    );
}
