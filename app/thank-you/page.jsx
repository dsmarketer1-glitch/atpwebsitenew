import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { IconPhone, IconCheck } from '@/components/Icons';

// Dedicated post-submission page. Has its own URL (/thank-you) so form
// conversions can be tracked (e.g. a GTM pageview trigger). Not indexed.
export const metadata = {
    title: 'Thank You | Anytime Plumbing 365',
    description: 'Thanks for reaching out to Anytime Plumbing 365. We received your request and will be in touch shortly.',
    robots: { index: false, follow: true },
};

export default function ThankYouPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <span className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '14px', position: 'relative', zIndex: 2 }}>Request Received</span>
                    <h1>Thank You!</h1>
                    <p style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '620px', margin: '12px auto 0', fontSize: '17px', position: 'relative', zIndex: 2 }}>
                        We&apos;ve received your request and a member of our team will reach out shortly. For anything urgent, give us a call — we&apos;re available 24/7.
                    </p>
                    <p className="breadcrumb">
                        <Link href="/">Home</Link> / Thank You
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--light-gray)', color: 'var(--primary-blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <IconCheck size={36} />
                    </div>
                    <h2>Your message is on its way to us</h2>
                    <p style={{ color: 'var(--text-light)', maxWidth: '560px', margin: '12px auto 28px', fontSize: '17px' }}>
                        We make your day brighter — honest, friendly plumbing and restoration across Dallas–Fort Worth. We&apos;ll be in touch soon.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:214-307-4264" className="btn btn-red btn-lg"><IconPhone size={18} /> Call 214-307-4264</a>
                        <Link href="/" className="btn btn-outline btn-lg">Back to Home</Link>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
