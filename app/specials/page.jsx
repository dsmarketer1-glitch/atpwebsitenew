import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { IconPhone } from '@/components/Icons';

export const metadata = {
    title: 'Plumbing Specials & Discounts | Anytime Plumbing 365',
    description: 'Save on honest, friendly plumbing in Dallas, TX. See our current specials and call 214-307-4264 to claim yours — no hidden fees, no surprises.',
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
                        <h2>A Little Something to Brighten Your Day</h2>
                        <p>Honest prices are our promise — these specials just make them even friendlier. Give us a call to claim yours.</p>
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
                        <a href="tel:214-307-4264" className="btn btn-red btn-lg"><IconPhone size={18} /> Call 214-307-4264</a>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
