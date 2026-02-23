import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata = {
    title: 'About Anytime Plumbing 365 - Drain Cleaning & Repair',
    description: 'Every company begins somewhere, but not every company begins with a mission that becomes the backbone of everything it touches.',
};

export default function AboutPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>About Anytime Plumbing 365</h1>
                    <p className="breadcrumb"><Link href="/">Home</Link> / About Us</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-two-col">
                        <div className="content-text fade-in-left">
                            <h2>Our Story</h2>
                            <p>Every company begins somewhere, but not every company begins with a mission that becomes the backbone of everything it touches. At Anytime Plumbing 365, our story starts with a simple belief that guides every decision we make: deliver dependable plumbing solutions with honesty, skill, and respect for your time.</p>
                            <p>That mission has shaped who we are, how we serve, and why homeowners continue to trust us when life at home doesn&apos;t go as planned.</p>
                            <p>For many families, plumbing problems come with stress, uncertainty, and a feeling that things inside the home are suddenly off balance. We built our company to be the steady, reassuring presence people can count on in those moments.</p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                                <Link href="/contact-us" className="btn btn-primary btn-lg">Book Now</Link>
                                <a href="tel:214-307-4264" className="btn btn-outline btn-lg">Call 214-307-4264</a>
                            </div>
                        </div>
                        <div className="content-image fade-in-right">
                            <Image src="/images/van-new.webp" alt="Anytime Plumbing 365 Service" width={600} height={400} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-gray">
                <div className="container">
                    <div className="content-two-col reverse">
                        <div className="content-image fade-in-left">
                            <Image src="/images/plumbing-repair.jpg" alt="Plumbing Repair" width={600} height={400} />
                        </div>
                        <div className="content-text fade-in-right">
                            <h2>Our Values</h2>
                            <p>Our story is grounded in a set of values that guide how we treat our customers and how we carry out our work. Honesty is at the center of every conversation we have. Homeowners deserve straight answers, clear explanations, and recommendations that put their long-term needs first.</p>
                            <p>We don&apos;t believe in pressure or shortcuts. We believe in skill and professionalism, backed by real training, experience, and a team of licensed and insured experts who take pride in each job.</p>
                            <p>Respect for time is another foundational value. Plumbing issues disrupt routines, schedules, and the flow of daily life. That&apos;s why our approach has always prioritized fast response, thoughtful communication, and efficient, thorough workmanship.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-two-col">
                        <div className="content-text fade-in-left">
                            <h2>Long-Lasting Solutions</h2>
                            <p>Our company was also built on a commitment to long-lasting solutions. We know that a temporary fix isn&apos;t what families need. Instead, we focus on work that stands up over time, supported by warranties and driven by a mindset that values durability, safety, and reliability.</p>
                            <p>This dedication to quality is not just a business practice; it&apos;s a reflection of our belief that homeowners deserve to feel confident in the systems that support their daily lives.</p>
                        </div>
                        <div className="content-text fade-in-right">
                            <h2>Trust &amp; Reliability</h2>
                            <p>One of the cornerstones of our identity is trust and reliability. Trust is earned, not claimed—and for us, it has been earned through thousands of service visits where homeowners saw firsthand how we treat their concerns as our own.</p>
                            <p>Reliability comes from being available when it matters most, staying prepared for emergency calls, and keeping our standards high even when the job is challenging.</p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                                <Link href="/contact-us" className="btn btn-primary btn-lg">Book Now</Link>
                                <a href="tel:214-307-4264" className="btn btn-outline btn-lg">Call 214-307-4264</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
