import Link from 'next/link';
import SmsConsent from '@/components/SmsConsent';

export const metadata = {
    title: 'Privacy Policy | Anytime Plumbing 365',
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

                <h2>SMS / Text Messaging &amp; Phone Communications</h2>
                <p>When you provide your phone number and opt in through one of our forms, you consent to receive SMS text messages and phone calls from Anytime Plumbing 365 Drain Cleaning &amp; Repair at the number provided. We offer two separate, optional opt-ins, each with its own checkbox:</p>
                <ul>
                    <li><strong>Transactional messages</strong> — appointment reminders, scheduling and confirmations, dispatch and service updates, quotes, follow-ups, and customer care.</li>
                    <li><strong>Marketing &amp; promotional messages</strong> — offers, discounts, seasonal and membership promotions.</li>
                </ul>
                <p><strong>Message frequency varies. Message and data rates may apply.</strong> You can opt out of text messages at any time by replying <strong>STOP</strong>. For help, reply <strong>HELP</strong> or contact us at <a href="tel:214-307-4264">214-307-4264</a>.</p>
                <p><strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong> Text messaging opt-in data and consent are never shared with any third parties. Information may be shared only with service providers (such as our messaging platform) strictly to help us deliver the messages you requested, and never for their own marketing.</p>
                <p>SMS consent is optional and is not a condition of purchasing or receiving any of our products or services. See our <Link href="/terms-of-service">Terms &amp; Conditions</Link> for full text messaging terms.</p>

                <h3>Example of Our SMS Opt-In</h3>
                <p>Both checkboxes below are unchecked by default, and customers can submit our forms without selecting either one:</p>
                <div className="sms-optin-example">
                    <h4>Sign up for text updates</h4>
                    <p className="sms-optin-business">Anytime Plumbing 365 Drain Cleaning &amp; Repair</p>
                    <label className="sms-optin-field">
                        Phone number
                        <input type="tel" placeholder="(214) 307-4264" disabled />
                    </label>
                    <SmsConsent readOnly />
                    <button type="button" className="btn btn-red btn-sm" disabled style={{ marginTop: '12px' }}>Subscribe</button>
                </div>

                <h2>Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

                <h2>Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at:</p>
                <p><strong>Anytime Plumbing 365</strong><br />Phone: <a href="tel:214-307-4264">214-307-4264</a><br />Email: info@anytimeplumbing365.com</p>
            </section>
        </>
    );
}
