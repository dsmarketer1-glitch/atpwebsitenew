import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata = {
    title: 'Special Offers - Anytime Plumbing 365',
    description: 'Check out our current specials and discounts on plumbing services.',
};

export default function SpecialsPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Special Offers</h1>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Specials</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Limited Time</span>
                        <h2>Current Specials &amp; Discounts</h2>
                        <p>Take advantage of our limited-time offers. Call now to claim your discount!</p>
                    </div>

                    <div className="specials-grid fade-in">
                        <a href="tel:214-307-4264" className="special-card">
                            <Image src="/images/coupon-1.webp" alt="Special Offer 1" width={800} height={550} />
                        </a>
                        <a href="tel:214-307-4264" className="special-card">
                            <Image src="/images/coupon-2.webp" alt="Special Offer 2" width={800} height={550} />
                        </a>
                        <a href="tel:214-307-4264" className="special-card">
                            <Image src="/images/coupon-3.webp" alt="Special Offer 3" width={800} height={550} />
                        </a>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '40px' }} className="fade-in">
                        <p style={{ fontSize: '18px', color: 'var(--text-light)', marginBottom: '20px' }}>
                            Call now to redeem any of these special offers!
                        </p>
                        <a href="tel:214-307-4264" className="btn btn-red btn-lg">📞 Call 214-307-4264</a>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
