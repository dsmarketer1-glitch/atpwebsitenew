import Image from 'next/image';
import FAQAccordion from '@/components/FAQAccordion';
import LandingForm from '@/components/LandingForm';
import ReviewWidget from '@/components/ReviewWidget';
import {
    IconPhone, IconPhoneFill, IconClock, IconShield, IconCheck, IconStar,
    IconAward, IconDollar, IconSparkle, IconUsers, IconArrowRight, IconBadge, IconCreditCard,
} from '@/components/Icons';

const PHONE = '214-307-4264';
const TEL = 'tel:214-307-4264';

const TRUST_BADGES = [
    { Icon: IconBadge, label: 'Licensed & Insured · #37912' },
    { Icon: IconClock, label: 'Available 24/7/365' },
    { Icon: IconStar, label: '5-Star Rated' },
    { Icon: IconDollar, label: 'Upfront Pricing' },
    { Icon: IconCheck, label: 'Same-Day Service' },
];

const STATS = [
    { value: '24/7', label: 'Always available' },
    { value: '~1 Hr', label: 'Emergency response' },
    { value: '5★', label: 'Rated by neighbors' },
    { value: '100%', label: 'Satisfaction guarantee' },
];

const PROCESS = [
    { Icon: IconPhone, title: 'Call or Request Online', desc: 'Tell us what’s going on. A real person responds fast — 24/7.' },
    { Icon: IconClock, title: 'We Dispatch a Pro', desc: 'A licensed plumber heads your way, often the same hour.' },
    { Icon: IconCheck, title: 'Fixed Right — Upfront Price', desc: 'You approve a clear price first, then we get it done right.' },
];

const WHY_US = [
    { Icon: IconClock, title: 'We Show Up — On Time', desc: 'Here for you 365 days a year, even nights, weekends, and holidays.' },
    { Icon: IconDollar, title: 'Honest, Upfront Pricing', desc: 'You approve a clear price before any work begins. No surprises.' },
    { Icon: IconAward, title: 'Licensed & Insured Pros', desc: 'Background-checked, highly trained technicians on every job.' },
    { Icon: IconSparkle, title: 'Clean & Respectful', desc: 'We protect your home and leave the workspace spotless.' },
    { Icon: IconUsers, title: 'Treated Like a Neighbor', desc: 'You’re a neighbor, never a transaction — every visit matters.' },
    { Icon: IconShield, title: 'Satisfaction Guaranteed', desc: 'We stand behind our work and make it right if it isn’t.' },
];

function CtaButtons({ center = false }) {
    return (
        <div className={`lp-cta-row ${center ? 'lp-cta-center' : ''}`}>
            <a href={TEL} className="btn btn-red btn-lg lp-cta-call"><IconPhoneFill size={18} /> Call {PHONE}</a>
            <a href="#lead-form" className="btn btn-outline btn-lg">Request Fast Service</a>
        </div>
    );
}

export default function LandingTemplate({ page }) {
    return (
        <div className="lp">
            {/* ===== Minimal header: logo + call (no nav) ===== */}
            <header className="lp-header">
                <div className="lp-header-inner">
                    <Image src="/images/logo.png" alt="Anytime Plumbing 365" width={168} height={62} priority className="lp-logo" />
                    <a href={TEL} className="lp-header-call"><IconPhoneFill size={16} /> <span>{PHONE}</span></a>
                </div>
            </header>

            {/* ===== HERO ===== */}
            <section className="lp-hero">
                <div className="lp-hero-overlay" />
                <div className="lp-hero-inner">
                    <div className="lp-hero-text">
                        <span className="lp-eyebrow"><IconClock size={15} /> {page.eyebrow}</span>
                        <h1>{page.h1}</h1>
                        <p className="lp-subhead">{page.subhead}</p>
                        <ul className="lp-hero-bullets">
                            {page.heroBullets.map((b, i) => (
                                <li key={i}><IconCheck size={18} /> {b}</li>
                            ))}
                        </ul>
                        <CtaButtons />
                        <div className="lp-hero-rating">
                            <span className="lp-stars">{[...Array(5)].map((_, i) => <IconStar key={i} size={16} />)}</span>
                            <span>Trusted by Dallas–Fort Worth homeowners</span>
                        </div>
                    </div>
                    <div className="lp-hero-form">
                        <LandingForm keyword={page.keyword} heading="Get Help Fast" subheading="Request a callback — no obligation, no pressure." />
                    </div>
                </div>
            </section>

            {/* ===== TRUST BAR ===== */}
            <section className="lp-trustbar">
                <div className="lp-trustbar-inner">
                    {TRUST_BADGES.map((b, i) => (
                        <span className="lp-trust-item" key={i}><b.Icon size={18} /> {b.label}</span>
                    ))}
                </div>
            </section>

            {/* ===== PROBLEM ===== */}
            <section className="lp-section">
                <div className="lp-container lp-two-col">
                    <div>
                        <span className="lp-label lp-label-red">{page.urgency}</span>
                        <h2>{page.problem.heading}</h2>
                        <p className="lp-lead">{page.problem.intro}</p>
                        <ul className="lp-check-list">
                            {page.problem.signs.map((s, i) => (
                                <li key={i}><IconCheck size={17} /> {s}</li>
                            ))}
                        </ul>
                        <CtaButtons />
                    </div>
                    <div className="lp-media">
                        <Image src={page.problem.image} alt={page.problem.imageAlt} width={600} height={430} />
                    </div>
                </div>
            </section>

            {/* ===== SOLUTION ===== */}
            <section className="lp-section lp-section-gray">
                <div className="lp-container lp-two-col lp-reverse">
                    <div className="lp-media">
                        <Image src={page.solution.image} alt={page.solution.imageAlt} width={600} height={430} />
                    </div>
                    <div>
                        <span className="lp-label">What We Do</span>
                        <h2>{page.solution.heading}</h2>
                        <p className="lp-lead">{page.solution.intro}</p>
                        <ul className="lp-check-list lp-check-two">
                            {page.solution.services.map((s, i) => (
                                <li key={i}><IconCheck size={17} /> {s}</li>
                            ))}
                        </ul>
                        <CtaButtons />
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className="lp-stats">
                <div className="lp-stats-inner">
                    {STATS.map((s, i) => (
                        <div className="lp-stat" key={i}>
                            <span className="lp-stat-value">{s.value}</span>
                            <span className="lp-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className="lp-section">
                <div className="lp-container">
                    <div className="lp-head-center">
                        <span className="lp-label">How It Works</span>
                        <h2>Help in 3 Simple Steps</h2>
                    </div>
                    <div className="lp-steps">
                        {PROCESS.map((p, i) => (
                            <div className="lp-step" key={i}>
                                <span className="lp-step-num">{i + 1}</span>
                                <span className="lp-step-icon"><p.Icon size={26} /></span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                    <CtaButtons center />
                </div>
            </section>

            {/* ===== WHY US ===== */}
            <section className="lp-section lp-section-blue">
                <div className="lp-container">
                    <div className="lp-head-center lp-head-light">
                        <span className="lp-label lp-label-light">Why Anytime Plumbing 365</span>
                        <h2>The People Who Show Up™</h2>
                        <p>Honest, friendly plumbing from a team your neighbors already trust.</p>
                    </div>
                    <div className="lp-why-grid">
                        {WHY_US.map((w, i) => (
                            <div className="lp-why-card" key={i}>
                                <span className="lp-why-icon"><w.Icon size={26} /></span>
                                <h3>{w.title}</h3>
                                <p>{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="lp-section">
                <div className="lp-container">
                    <div className="lp-head-center">
                        <span className="lp-label">Reviews</span>
                        <h2>What Your Neighbors Say</h2>
                    </div>
                    <div className="lp-reviews">
                        <ReviewWidget />
                    </div>
                </div>
            </section>

            {/* ===== GUARANTEE / OFFER ===== */}
            <section className="lp-guarantee">
                <div className="lp-container lp-guarantee-inner">
                    <div className="lp-guarantee-badge"><IconShield size={40} /></div>
                    <div>
                        <h2>Our Promise to You</h2>
                        <ul className="lp-guarantee-list">
                            <li><IconCheck size={18} /><span><strong>100% satisfaction guarantee</strong> — we make it right if you’re not happy.</span></li>
                            <li><IconDollar size={18} /><span><strong>Upfront pricing</strong> — you approve the price before any work starts.</span></li>
                            <li><IconCreditCard size={18} /><span><strong>Flexible financing</strong> — ask about 0% interest options.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="lp-section lp-section-gray">
                <div className="lp-container lp-faq">
                    <div className="lp-head-center">
                        <span className="lp-label">Questions?</span>
                        <h2>You’ve Got Questions. We’ve Got Answers.</h2>
                    </div>
                    <FAQAccordion faqs={page.faqs} />
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="lp-final">
                <div className="lp-final-overlay" />
                <div className="lp-container lp-final-inner">
                    <div className="lp-final-text">
                        <h2>{page.finalCta.heading}</h2>
                        <p>{page.finalCta.subhead}</p>
                        <a href={TEL} className="btn btn-red btn-lg lp-final-call"><IconPhoneFill size={20} /> Call {PHONE} Now</a>
                        <p className="lp-final-note"><IconClock size={15} /> Available 24/7 — a real person answers.</p>
                    </div>
                    <div className="lp-final-form">
                        <LandingForm keyword={page.keyword} heading="Request Your Free Quote" subheading="Fast callback. No obligation." ctaLabel="Send My Request" formId="lead-form-final" />
                    </div>
                </div>
            </section>

            {/* ===== MINIMAL FOOTER ===== */}
            <footer className="lp-footer">
                <div className="lp-container lp-footer-inner">
                    <Image src="/images/logo.png" alt="Anytime Plumbing 365" width={150} height={55} />
                    <div className="lp-footer-mid">
                        <a href={TEL} className="lp-footer-phone"><IconPhoneFill size={16} /> {PHONE}</a>
                        <span>Licensed &amp; Insured · #37912 · Serving Dallas–Fort Worth · Available 24/7</span>
                    </div>
                    <span className="lp-footer-copy">© {new Date().getFullYear()} Anytime Plumbing 365. All Rights Reserved.</span>
                </div>
            </footer>

            {/* ===== STICKY MOBILE CALL BAR ===== */}
            <a href={TEL} className="lp-sticky-call"><IconPhoneFill size={18} /> Call Now — {PHONE}</a>
        </div>
    );
}
