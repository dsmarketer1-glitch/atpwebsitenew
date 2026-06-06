'use client';

export default function CTABanner({ onBookNow }) {
    return (
        <section className="cta-banner">
            <div className="container">
                <span className="section-label" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>Get Started Today</span>
                <h2>Ready to Solve Your Plumbing Problem?</h2>
                <p>
                    Our expert team is available around the clock. No overtime charges, no hidden fees — just honest, reliable plumbing service.
                </p>
                <div className="cta-actions">
                    <a href="tel:214-307-4264" className="btn btn-ghost btn-lg">
                        📞 Call 214-307-4264
                    </a>
                </div>
            </div>
        </section>
    );
}
