'use client';

export default function CTABanner({ onBookNow }) {
    return (
        <section className="cta-banner">
            <div className="container">
                <h2>Ready to Solve Your Plumbing Problem?</h2>
                <p>
                    Our expert team is available 24/7. Call us now or book online for fast, dependable service.
                </p>
                <div className="cta-actions">
                    <button className="btn btn-white btn-lg" onClick={onBookNow}>
                        📅 Book Now
                    </button>
                    <a href="tel:214-307-4264" className="btn btn-red btn-lg">
                        📞 Call 214-307-4264
                    </a>
                </div>
            </div>
        </section>
    );
}
