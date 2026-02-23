import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy - Anytime Plumbing 365',
    description: 'Read the privacy policy for Anytime Plumbing 365.',
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Privacy Policy</p>
                </div>
            </section>

            <section className="blog-post-content" style={{ paddingTop: '40px' }}>
                <p><strong>Last Updated: February 1, 2026</strong></p>

                <h2>Introduction</h2>
                <p>Anytime Plumbing 365 (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>

                <h2>Information We Collect</h2>
                <p>We may collect personal information that you provide directly to us, including:</p>
                <ul>
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Service request details and preferences</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communication history with our team</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, maintain, and improve our plumbing and restoration services</li>
                    <li>Respond to your inquiries and service requests</li>
                    <li>Send service-related communications and updates</li>
                    <li>Process payments and billing</li>
                    <li>Improve our website and customer experience</li>
                </ul>

                <h2>Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our business, provided they agree to keep your information confidential.</p>

                <h2>Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

                <h2>Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at:</p>
                <p><strong>Anytime Plumbing 365</strong><br />Phone: <a href="tel:214-307-4264">214-307-4264</a><br />Email: info@anytimeplumbing365.com</p>
            </section>
        </>
    );
}
