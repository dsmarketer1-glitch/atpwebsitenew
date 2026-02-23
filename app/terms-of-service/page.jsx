import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service - Anytime Plumbing 365',
    description: 'Read the terms of service for Anytime Plumbing 365.',
};

export default function TermsPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Terms of Service</p>
                </div>
            </section>

            <section className="blog-post-content" style={{ paddingTop: '40px' }}>
                <p><strong>Last Updated: February 1, 2026</strong></p>

                <h2>Agreement to Terms</h2>
                <p>By accessing and using the Anytime Plumbing 365 website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>

                <h2>Services</h2>
                <p>Anytime Plumbing 365 provides residential and commercial plumbing, drain cleaning, sewer repair, and property restoration services in the Dallas-Fort Worth metropolitan area. All services are performed by licensed and insured professionals.</p>

                <h2>Service Estimates &amp; Pricing</h2>
                <p>We provide upfront pricing and estimates before beginning work. Final pricing may vary based on the scope of work discovered during service. Any changes will be communicated and approved by the customer before proceeding.</p>

                <h2>Scheduling &amp; Cancellations</h2>
                <p>Service appointments can be scheduled by phone or through our website. We request at least 24 hours&apos; notice for cancellations when possible. Emergency services are available 24/7.</p>

                <h2>Warranties</h2>
                <p>All work performed by Anytime Plumbing 365 is backed by our workmanship warranty. Specific warranty terms vary by service type and will be provided at the time of service.</p>

                <h2>Liability</h2>
                <p>Anytime Plumbing 365 carries comprehensive liability insurance. Our liability is limited to the scope of services provided. We are not responsible for pre-existing conditions or damage not directly caused by our work.</p>

                <h2>Website Use</h2>
                <p>The content on this website is for informational purposes only and does not constitute professional plumbing advice. Always consult a licensed plumber for specific concerns.</p>

                <h2>Contact</h2>
                <p>For questions about these terms, contact us at <a href="tel:214-307-4264">214-307-4264</a> or email info@anytimeplumbing365.com.</p>
            </section>
        </>
    );
}
