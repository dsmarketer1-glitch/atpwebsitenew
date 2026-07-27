import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import { IconPhone, IconClock, IconCheck, IconUsers, IconSparkle, IconAward, IconShield, IconMapPin, IconArrowRight } from '@/components/Icons';

const whyCards = [
    { Icon: IconClock, title: 'We Show Up — On Time', desc: 'Here for you 365 days a year, even nights, weekends, and holidays.' },
    { Icon: IconCheck, title: 'We Tell You the Truth', desc: 'Honest, upfront pricing and only the work your home really needs.' },
    { Icon: IconUsers, title: 'We Treat You Like a Neighbor', desc: 'You are a neighbor, never a transaction — every visit matters.' },
    { Icon: IconSparkle, title: 'We Leave It Better', desc: 'Clean workmanship and a tidy workspace on every job.' },
    { Icon: IconAward, title: 'Skilled, Licensed Pros', desc: 'Fully licensed, insured, and background-checked plumbers.' },
    { Icon: IconShield, title: 'Satisfaction, Guaranteed', desc: 'We stand behind our work and make it right if it is not.' },
];

/**
 * Shared location page template.
 * @param {string} name           Short area name used in body copy (e.g. "Oak Cliff", "Richardson").
 * @param {string} headingLocation Text after "Plumber in " in the H1 (e.g. "Oak Cliff, Dallas" or "Richardson, TX").
 * @param {string} regionPhrase   Wider-area phrase (e.g. "the greater Dallas area").
 * @param {React.ReactNode} breadcrumb  Breadcrumb line contents.
 * @param {{name:string, href:string}[]} nearby  Nearby-area links.
 * @param {string} nearbyHeading  Heading for the nearby section.
 */
export default function LocationTemplate({ name, headingLocation, regionPhrase, breadcrumb, nearby = [], nearbyHeading = 'We Also Serve Nearby' }) {
    const featured = services.slice(0, 6);
    const faqs = [
        { question: `Do you offer emergency plumbing in ${name}?`, answer: `Yes — we're available 24/7, 365 days a year for ${name} homeowners. Call 214-307-4264 and we'll be on our way.` },
        { question: `How fast can you get to my home in ${name}?`, answer: `In most cases we offer same-day service in ${name}, and we aim to arrive within about an hour for emergencies.` },
        { question: `Are your ${name} plumbers licensed and insured?`, answer: `Absolutely. Every technician serving ${name} is fully licensed, insured, and background-checked.` },
        { question: `Do you charge for estimates?`, answer: `We provide upfront pricing before any work begins, so you'll always know the cost — no surprises.` },
    ];

    return (
        <>
            {/* ===== HERO ===== */}
            <section className="page-hero">
                <div className="container">
                    <span className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '14px', position: 'relative', zIndex: 2 }}>Local Plumbing Experts</span>
                    <h1>Plumber in {headingLocation}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '620px', margin: '12px auto 0', fontSize: '17px', position: 'relative', zIndex: 2 }}>
                        Fast, friendly, and available 24/7 — honest plumbing and drain service for {name} homeowners, with same-day help and no surprises.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '22px', position: 'relative', zIndex: 2 }}>
                        <Link href="/contact-us" className="btn btn-red btn-lg">Book Now</Link>
                        <a href="tel:214-307-4264" className="btn btn-hero-ghost btn-lg"><IconPhone size={18} /> Call 214-307-4264</a>
                    </div>
                    <p className="breadcrumb">{breadcrumb}</p>
                </div>
            </section>

            {/* ===== INTRO ===== */}
            <section className="content-section">
                <div className="container">
                    <div className="content-two-col">
                        <div className="content-text fade-in-left">
                            <span className="section-label">Your Neighborhood Plumber</span>
                            <h2>Trusted Plumbing &amp; Drain Service in {name}</h2>
                            <p>When something goes wrong with your plumbing in {name}, you need someone who shows up on time and gets it right. At Anytime Plumbing 365, we treat every {name} home like our own — with upfront pricing, clean workmanship, and a friendly face at the door.</p>
                            <p>From drain cleaning and leak detection to water heaters and emergency repairs, our licensed plumbers handle it all across {name} and {regionPhrase} — 365 days a year.</p>
                            <ul>
                                <li>Same-day &amp; 24/7 emergency service in {name}</li>
                                <li>Licensed, insured &amp; background-checked technicians</li>
                                <li>Upfront, honest pricing — no surprises</li>
                                <li>Workmanship you can count on</li>
                            </ul>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                                <Link href="/contact-us" className="btn btn-red btn-lg">Book Today</Link>
                                <a href="tel:214-307-4264" className="btn btn-outline btn-lg">Call 214-307-4264</a>
                            </div>
                        </div>
                        <div className="content-image fade-in-right">
                            <Image src="/images/van-new.webp" alt={`Anytime Plumbing 365 serving ${name}, TX`} width={600} height={400} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES ===== */}
            <section className="section section-gray">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">What We Do</span>
                        <h2>Plumbing Services We Offer in {name}</h2>
                        <p>Complete residential plumbing and restoration — right here in {name}.</p>
                    </div>
                    <div className="services-grid reveal-stagger">
                        {featured.map((s) => (
                            <div className="service-card interactive" key={s.slug}>
                                <div className="service-card-image">
                                    <Image src={s.image} alt={`${s.title} in ${name}, TX`} width={400} height={250} />
                                </div>
                                <div className="service-card-body">
                                    <h3><Link href={`/service/${s.slug}`}>{s.title}</Link></h3>
                                    <p>{s.shortDescription}</p>
                                    <Link href={`/service/${s.slug}`} className="service-card-link">Learn More <IconArrowRight size={15} /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="section" style={{ background: 'var(--primary-blue)', position: 'relative', overflow: 'hidden' }}>
                <div className="bg-grid" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="section-header fade-in">
                        <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Why Us</span>
                        <h2 style={{ color: '#fff' }}>Why {name} Homeowners Choose Us</h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)' }}>Neighbors across {name} trust us for plumbing that is fast, honest, and done right the first time.</p>
                    </div>
                    <div className="why-choose-grid-v2 reveal-stagger">
                        {whyCards.map((item, i) => (
                            <div key={i} className="why-card-v2 interactive">
                                <div className="why-card-icon"><item.Icon size={30} /></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <a href="tel:214-307-4264" className="btn btn-ghost btn-lg"><IconPhone size={18} /> Call Now</a>
                    </div>
                </div>
            </section>

            <FAQAccordion faqs={faqs} />

            {/* ===== NEARBY AREAS ===== */}
            {nearby.length > 0 && (
                <section className="section section-blue">
                    <div className="container">
                        <div className="section-header fade-in">
                            <span className="section-label" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Coverage</span>
                            <h2>{nearbyHeading}</h2>
                        </div>
                        <div className="areas-grid fade-in">
                            {nearby.map((l) => (
                                <Link href={l.href} key={l.href} className="area-tag">
                                    <IconMapPin size={15} /> {l.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTABanner />
        </>
    );
}
