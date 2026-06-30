import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata = {
    title: 'About Us | Anytime Plumbing 365',
    description: 'We are the people who show up — honest, friendly Dallas plumbers serving families 365 days a year. Meet the team making your day brighter. Call 214-307-4264.',
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
                            <span className="section-label">The People Who Show Up™</span>
                            <h2>We Leave the Porch Light On for You</h2>
                            <p>Think of the porch light a good neighbor leaves on — a quiet promise that says, &ldquo;You&apos;re welcome here, and we&apos;ve got you.&rdquo; That&apos;s the feeling we set out to give every family we serve.</p>
                            <p>When a pipe bursts or a drain backs up, your day can feel a little dimmer. Our job is to show up on time, tell you the truth about what&apos;s going on, and get it fixed right — so your home feels like home again.</p>
                            <p style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '22px', lineHeight: 1.5, color: 'var(--primary-blue)', margin: '24px 0' }}>
                                &ldquo;People may forget what repair we performed. But they will never forget how we made them feel.&rdquo;
                            </p>
                            <p>That belief is why we&apos;re here: to serve families, strengthen our community, and make every day a little brighter.</p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                                <Link href="/contact-us" className="btn btn-red btn-lg">Book Today</Link>
                                <a href="tel:214-307-4264" className="btn btn-outline btn-lg">Call 214-307-4264</a>
                            </div>
                        </div>
                        <div className="content-image fade-in-right">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/3kgYEMIWdig?autoplay=1&mute=1&controls=0&loop=1&playlist=3kgYEMIWdig" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-gray">
                <div className="container">
                    <div className="content-two-col reverse">
                        <div className="content-image fade-in-left">
                            <Image src="/images/service/actual/drain-pipe-repair.png" alt="Plumbing Repair" width={600} height={400} />
                        </div>
                        <div className="content-text fade-in-right">
                            <span className="section-label">What We Stand For</span>
                            <h2>Six Values That Guide Every Visit</h2>
                            <p>These aren&apos;t words on a wall. They&apos;re how we treat your home, your time, and your trust — on every single job.</p>
                            <ul>
                                <li><strong>Show Up</strong> — We do what we say, arrive prepared, and follow through.</li>
                                <li><strong>Care Deeply</strong> — Every customer, home, and interaction matters to us.</li>
                                <li><strong>Tell the Truth</strong> — We recommend what&apos;s right, not what&apos;s most profitable.</li>
                                <li><strong>Make It Better</strong> — We leave every home better than we found it.</li>
                                <li><strong>Bring Positivity</strong> — We choose optimism and lift people up.</li>
                                <li><strong>Serve the Community</strong> — Good businesses strengthen neighborhoods, and this one is home.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="content-two-col">
                        <div className="content-text fade-in-left">
                            <span className="section-label">Quality</span>
                            <h2>We Fix It Right — and Make It Last</h2>
                            <p>A quick patch isn&apos;t what your family needs. We do the job properly the first time, back it with real warranties, and build for durability, safety, and peace of mind.</p>
                            <p>That care isn&apos;t just good business — it&apos;s how we&apos;d want our own homes treated. You deserve to feel confident in the systems your day depends on.</p>
                        </div>
                        <div className="content-text fade-in-right">
                            <span className="section-label">Dependable</span>
                            <h2>Showing Up For Families. 365 Days A Year.</h2>
                            <p>Trust is earned, not claimed. We&apos;ve earned ours across thousands of visits where neighbors saw us treat their problem like our own.</p>
                            <p>Reliability means being here when it matters most — ready for emergency calls, holidays included, and holding our standards high even on the toughest jobs. When you need us, the light is on.</p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                                <Link href="/contact-us" className="btn btn-red btn-lg">Book Today</Link>
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
