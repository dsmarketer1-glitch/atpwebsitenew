import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { IconCheck, IconCreditCard, IconChart, IconShield } from '@/components/Icons';

export const metadata = {
    title: 'Plumbing Financing in Dallas, TX | Anytime Plumbing 365',
    description: 'Flexible financing makes plumbing repairs easier on your budget. Simple application, clear terms, no surprises. Call 214-307-4264 to learn more.',
};

export default function FinancingPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Financing Options</h1>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Financing</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Affordable Solutions</span>
                        <h2>Help That Fits Your Budget</h2>
                        <p>Life happens — and repairs shouldn&apos;t have to wait. Here&apos;s a simple, honest way to spread the cost and get your home back to normal.</p>
                    </div>

                    <div className="content-two-col" style={{ marginBottom: '60px' }}>
                        <div className="content-text fade-in-left">
                            <p>At Anytime Plumbing 365, we understand that plumbing emergencies and home upgrades can place a financial strain on families. That&apos;s why we have partnered with Synchrony to offer flexible financing options that help you get the service you need now.</p>
                            <p>Our financing plans feature competitive interest rates, flexible payment terms, and a simple application process that can be completed in minutes.</p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                                <a href="https://www.synchrony.com/mmc/M9238140100" target="_blank" rel="noopener noreferrer" className="btn btn-red btn-lg">Apply Now</a>
                                <a href="tel:214-307-4264" className="btn btn-outline btn-lg">Call 214-307-4264</a>
                            </div>
                        </div>
                        <div className="content-text fade-in-right">
                            <h3>Qualifying is Easy</h3>
                            <div className="why-choose-list">
                                <div className="why-choose-item"><span className="why-choose-icon"><IconCheck size={18} /></span><span>Quick online application</span></div>
                                <div className="why-choose-item"><span className="why-choose-icon"><IconCheck size={18} /></span><span>Decisions in minutes</span></div>
                                <div className="why-choose-item"><span className="why-choose-icon"><IconCheck size={18} /></span><span>Competitive rates</span></div>
                                <div className="why-choose-item"><span className="why-choose-icon"><IconCheck size={18} /></span><span>Flexible monthly payments</span></div>
                                <div className="why-choose-item"><span className="why-choose-icon"><IconCheck size={18} /></span><span>No prepayment penalties</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="financing-features fade-in">
                        <div className="financing-feature">
                            <div className="financing-feature-icon"><IconCreditCard size={34} /></div>
                            <h3>Easy Application</h3>
                            <p>Apply online or over the phone in minutes. Get a decision quickly so your project can move forward.</p>
                        </div>
                        <div className="financing-feature">
                            <div className="financing-feature-icon"><IconChart size={34} /></div>
                            <h3>Flexible Plans</h3>
                            <p>Choose a payment plan that fits your budget. Spread costs over manageable monthly payments.</p>
                        </div>
                        <div className="financing-feature">
                            <div className="financing-feature-icon"><IconShield size={34} /></div>
                            <h3>No Surprises</h3>
                            <p>Clear terms and transparent rates mean you always know exactly what you owe. No hidden fees.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
