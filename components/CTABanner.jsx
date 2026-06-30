'use client';
import { IconPhone } from '@/components/Icons';

export default function CTABanner({ onBookNow }) {
    return (
        <section className="cta-banner">
            <div className="container">
                <span className="section-label" style={{ background: 'rgba(255,255,255,0.16)', color: '#fff' }}>When You Need Us, The Light Is On™</span>
                <h2>Let&apos;s Make Your Day Brighter™</h2>
                <p>
                    We&apos;re here for you 365 days a year — no overtime charges, no hidden fees, just honest help from people who show up. Give us a call and we&apos;ll take it from here.
                </p>
                <div className="cta-actions">
                    <a href="tel:214-307-4264" className="btn btn-red btn-lg">
                        <IconPhone size={18} /> Call 214-307-4264
                    </a>
                </div>
            </div>
        </section>
    );
}
