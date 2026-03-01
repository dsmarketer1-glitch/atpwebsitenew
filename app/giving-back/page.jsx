import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata = {
    title: 'Giving Back - Anytime Plumbing 365',
    description: 'At Anytime Plumbing 365, serving our community has always been about more than the work we do inside someone\'s home.',
};

export default function GivingBackPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Giving Back</h1>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Giving Back</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="giving-back-hero fade-in">
                        <span className="section-label">Community</span>
                        <h2>Giving Back to Our Community</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)', fontSize: '18px' }}>
                            At Anytime Plumbing 365, serving our community has always been about more than the work we do inside someone&apos;s home.
                            Our team is built on values like honesty, respect, and care—and those values extend far beyond plumbing.
                        </p>
                    </div>

                    <div className="content-two-col" style={{ marginBottom: '60px' }}>
                        <div className="content-text fade-in-left">
                            <span className="section-label">Our Purpose</span>
                            <h2>Why Community Matters to Us</h2>
                            <p>We believe that strong communities are built by people who show up—not just when there&apos;s a plumbing emergency, but when there&apos;s a chance to make a real difference. Our team is proud to support local organizations that create opportunity, inspire growth, and bring people together.</p>
                            <p>Giving back is woven into who we are. It&apos;s not an add-on or an afterthought—it&apos;s a natural extension of the care and commitment we bring to every service call.</p>
                        </div>
                        <div className="content-image fade-in-right">
                            <Image src="/images/community-event.jpg" alt="Community Event" width={600} height={400} />
                        </div>
                    </div>

                    <div className="content-two-col reverse" style={{ marginBottom: '60px' }}>
                        <div className="content-image fade-in-left">
                            <Image src="/images/van-new.webp" alt="Anytime Plumbing 365" width={600} height={400} />
                        </div>
                        <div className="content-text fade-in-right">
                            <span className="section-label">Partnership</span>
                            <h2>Partnering With the Boys &amp; Girls Club</h2>
                            <p>We are proud to partner with the Boys &amp; Girls Club, an organization that provides safe spaces, mentorship, and programs for young people in our community. Through our partnership, we help fund activities, provide resources, and volunteer time to support the club&apos;s mission.</p>
                            <p>We believe that investing in the next generation is one of the most meaningful things a local business can do.</p>
                        </div>
                    </div>

                    <div className="content-two-col">
                        <div className="content-text fade-in-left">
                            <h2>Living Our Values Beyond the Jobsite</h2>
                            <p>Our commitment to community service is a reflection of the same values we bring to every plumbing job: reliability, integrity, and a genuine desire to help. Whether we&apos;re fixing a leaky pipe or sponsoring a local youth program, our approach is the same—show up, do good work, and make a positive impact.</p>
                        </div>
                        <div className="content-text fade-in-right">
                            <h2>Our Ongoing Commitment to Service</h2>
                            <p>Giving back isn&apos;t a one-time effort for us—it&apos;s an ongoing commitment. We are continually looking for new ways to support our community, and we invite our customers and neighbors to join us in making a difference.</p>
                            <p>If you know of a community organization that could benefit from our support, we&apos;d love to hear from you.</p>
                            <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: '16px' }}>Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
