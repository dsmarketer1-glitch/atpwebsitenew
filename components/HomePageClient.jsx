'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function HomePageClient() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);

    useEffect(() => {
        const handleMouse = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            setMousePos({ x: clientX / innerWidth, y: clientY / innerHeight });

            // Magnetic Button Effect
            const magneticButtons = document.querySelectorAll('.btn-magnetic');
            magneticButtons.forEach(btn => {
                const rect = btn.getBoundingClientRect();
                const btnX = rect.left + rect.width / 2;
                const btnY = rect.top + rect.height / 2;

                const distanceX = clientX - btnX;
                const distanceY = clientY - btnY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                if (distance < 100) {
                    const moveX = (distanceX / 100) * 15;
                    const moveY = (distanceY / 100) * 15;
                    btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    btn.style.transform = 'translate(0, 0)';
                }
            });
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    return (
        <>
            {/* ===== HERO ===== */}
            <section className="hero" ref={heroRef}>
                <div className="hero-shape hero-shape-1" style={{ transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 30}px) scale(1.1)` }} />
                <div className="hero-shape hero-shape-2" style={{ transform: `translate(${-mousePos.x * 40}px, ${-mousePos.y * 25}px) scale(0.9)` }} />
                <div className="hero-particles">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="hero-particle" style={{ animationDelay: `${i * 0.8}s`, left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 20}%` }} />
                    ))}
                </div>
                <div className="hero-inner">
                    <div className="hero-content">
                        <span className="section-label" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '16px' }}>
                            Trusted Plumbing Experts Since Day One
                        </span>
                        <h1 style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 5}px)` }}>Professional Plumbing &amp; Restoration in <span>Garland, TX</span></h1>
                        <p className="hero-subtitle">
                            Licensed experts delivering fast, honest plumbing solutions — 24 hours a day, 7 days a week. No hidden fees, no surprises.
                        </p>
                        <div className="hero-badges">
                            <span className="hero-badge"><span className="hero-badge-icon">⏰</span> 24/7 Availability</span>
                            <span className="hero-badge"><span className="hero-badge-icon">🔧</span> Licensed &amp; Insured</span>
                            <span className="hero-badge"><span className="hero-badge-icon">💰</span> Upfront Pricing</span>
                        </div>
                        <div className="hero-actions">
                            <Link href="/contact-us" className="btn btn-white btn-lg btn-magnetic interactive">📅 Book a Service</Link>
                            <a href="tel:214-307-4264" className="btn btn-red btn-lg btn-magnetic interactive">📞 Call 214-307-4264</a>
                        </div>
                    </div>
                    <div className="hero-image" style={{ transform: `translate(${-mousePos.x * 15}px, ${-mousePos.y * 10}px)` }}>
                        <Image src="/images/van-new.webp" alt="Anytime Plumbing 365 Service Van" width={550} height={400} priority />
                    </div>
                </div>
                {/* Wave Divider */}
                <div className="wave-divider">
                    <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                        <path d="M0,60 C360,100 720,0 1080,60 C1260,85 1380,70 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
                    </svg>
                </div>
            </section>

            {/* ===== TRUST STRIP ===== */}
            <div className="trust-strip">
                <div className="trust-strip-inner reveal-stagger">
                    <div className="trust-stat">
                        <div className="trust-stat-icon-wrap blue">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg>
                        </div>
                        <div className="trust-stat-number"><AnimatedCounter end={24} suffix="/7" /></div>
                        <div className="trust-stat-label">Always Available</div>
                    </div>
                    <div className="trust-stat">
                        <div className="trust-stat-icon-wrap gold">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        </div>
                        <div className="trust-stat-number"><AnimatedCounter end={5} suffix=".0" decimals={1} /></div>
                        <div className="trust-stat-label">Star Rating</div>
                    </div>
                    <div className="trust-stat">
                        <div className="trust-stat-icon-wrap green">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        </div>
                        <div className="trust-stat-number"><AnimatedCounter end={100} suffix="%" /></div>
                        <div className="trust-stat-label">Satisfaction</div>
                    </div>
                    <div className="trust-stat">
                        <div className="trust-stat-icon-wrap red">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                        </div>
                        <div className="trust-stat-number"><AnimatedCounter end={23} suffix="+" /></div>
                        <div className="trust-stat-label">Services Offered</div>
                    </div>
                </div>
            </div>

            {/* ===== HOW IT WORKS ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Simple Process</span>
                        <h2>How It Works</h2>
                        <p>Getting expert plumbing help has never been easier. Three simple steps and we&apos;re on our way.</p>
                    </div>
                    <div className="how-it-works-grid reveal-stagger">
                        <div className="how-step">
                            <div className="how-step-number">1</div>
                            <h3>Schedule</h3>
                            <p>Book online or give us a call. We&apos;ll confirm a time that works for you — even same-day.</p>
                        </div>
                        <div className="how-step">
                            <div className="how-step-number">2</div>
                            <h3>Diagnose</h3>
                            <p>Our licensed plumber arrives on time, inspects the issue, and gives you an upfront quote.</p>
                        </div>
                        <div className="how-step">
                            <div className="how-step-number">3</div>
                            <h3>Resolve</h3>
                            <p>We fix the problem right the first time, clean up, and back our work with a guarantee.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURED SERVICES ===== */}
            <section className="section" style={{ background: 'linear-gradient(180deg, var(--off-white) 0%, #e8edf5 100%)', position: 'relative' }}>
                <div className="bg-dots" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="section-header fade-in">
                        <span className="section-label">What We Do</span>
                        <h2>Our Featured Services</h2>
                        <p>Complete plumbing and restoration services to keep your home safe, comfortable, and running smoothly.</p>
                    </div>
                    <div className="featured-services reveal-stagger">
                        <Link href="/service/drain-cleaning" className="featured-service-card interactive">
                            <div className="featured-icon-wrap blue">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                            </div>
                            <h3>Plumbing Services</h3>
                            <p>Full residential plumbing — drain cleaning, pipe repair, fixture installation, and more.</p>
                            <span className="card-arrow">→</span>
                        </Link>
                        <Link href="/service/emergency-plumber" className="featured-service-card interactive">
                            <div className="featured-icon-wrap red">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                            </div>
                            <h3>Emergency Service</h3>
                            <p>24/7 emergency response for burst pipes, severe leaks, and urgent plumbing issues.</p>
                            <span className="card-arrow">→</span>
                        </Link>
                        <Link href="/service/water-damage-restoration" className="featured-service-card interactive">
                            <div className="featured-icon-wrap green">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            </div>
                            <h3>Restoration</h3>
                            <p>Water damage restoration and sewage cleanup to protect and restore your property.</p>
                            <span className="card-arrow">→</span>
                        </Link>
                        <Link href="/contact-us" className="featured-service-card interactive">
                            <div className="featured-icon-wrap navy">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <h3>Get a Free Estimate</h3>
                            <p>Call us or book online for a transparent quote — no pressure, no obligation.</p>
                            <span className="card-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== SERVICE CARDS ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Explore</span>
                        <h2>Popular Services</h2>
                    </div>
                    <div className="services-grid reveal-stagger">
                        <div className="service-card interactive">
                            <div className="service-card-image">
                                <Image src="/images/plumbing-repair.jpg" alt="Drain Pipe Repair" width={400} height={220} />
                            </div>
                            <div className="service-card-body">
                                <h3><Link href="/service/drain-pipe-repair">Drain Pipe Repair</Link></h3>
                                <p>Fast and reliable drain pipe repair from experienced plumbing professionals.</p>
                                <Link href="/service/drain-pipe-repair" className="service-card-link">Learn More <span>→</span></Link>
                            </div>
                        </div>
                        <div className="service-card interactive">
                            <div className="service-card-image">
                                <Image src="/images/leaky-faucet.jpg" alt="Emergency Plumber" width={400} height={220} />
                            </div>
                            <div className="service-card-body">
                                <h3><Link href="/service/emergency-plumber">Emergency Plumber</Link></h3>
                                <p>24/7 emergency plumbing with fast response times and expert solutions.</p>
                                <Link href="/service/emergency-plumber" className="service-card-link">Learn More <span>→</span></Link>
                            </div>
                        </div>
                        <div className="service-card interactive">
                            <div className="service-card-image">
                                <Image src="/images/water-damage-restoration.jpg" alt="Water Damage Restoration" width={400} height={220} />
                            </div>
                            <div className="service-card-body">
                                <h3><Link href="/service/water-damage-restoration">Water Damage Restoration</Link></h3>
                                <p>Complete restoration to minimize damage and get your home back to normal.</p>
                                <Link href="/service/water-damage-restoration" className="service-card-link">Learn More <span>→</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="section" style={{ background: 'linear-gradient(135deg, #060e1e 0%, var(--primary-blue-dark) 50%, #0a2e6e 100%)', position: 'relative', overflow: 'hidden' }}>
                <div className="bg-grid" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="section-header fade-in">
                        <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Why Us</span>
                        <h2 style={{ color: '#fff' }}>Dependable Plumbing You Can <span className="gradient-text">Count On</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Our team at Anytime Plumbing 365 delivers complete plumbing solutions for homeowners who want service that is fast, dependable, and done right the first time.</p>
                    </div>
                    <div className="why-choose-grid-v2 reveal-stagger">
                        {[
                            { icon: '⚡', title: 'Fast Emergency Response', desc: 'Available 24/7 — even on holidays and weekends. We arrive fast when you need us most.' },
                            { icon: '✅', title: 'Honest Recommendations', desc: 'No upselling, no unnecessary work. We recommend only what your home truly needs.' },
                            { icon: '🏆', title: 'Skilled Licensed Techs', desc: 'Fully licensed, insured, and background-checked professionals you can trust.' },
                            { icon: '💰', title: 'Upfront Fair Pricing', desc: 'No hidden fees, no surprises. You know the price before any work begins.' },
                            { icon: '🤝', title: 'Neighborly Approach', desc: 'We treat every home like our own — with care, respect, and a clean workspace.' },
                            { icon: '🛡️', title: 'Satisfaction Guaranteed', desc: 'We stand behind our work. If you are not happy, we will make it right.' },
                        ].map((item, i) => (
                            <div key={i} className="why-card-v2 interactive">
                                <div className="why-card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link href="/contact-us" className="btn btn-white btn-lg btn-magnetic interactive">📅 Book a Service</Link>
                        <a href="tel:214-307-4264" className="btn btn-ghost btn-lg btn-magnetic interactive" style={{ marginLeft: '14px' }}>📞 Call Now</a>
                    </div>
                </div>
            </section>

            {/* ===== SPECIALS ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Save Money</span>
                        <h2>Our Special Offers</h2>
                    </div>
                    <div className="specials-grid fade-in">
                        <a href="tel:214-307-4264" className="special-card">
                            <Image src="/images/coupon-1.webp" alt="Drain Cleaning Discount" width={800} height={550} />
                        </a>
                        <a href="tel:214-307-4264" className="special-card">
                            <Image src="/images/coupon-2.webp" alt="New Customer Discount" width={800} height={550} />
                        </a>
                        <a href="tel:214-307-4264" className="special-card">
                            <Image src="/images/coupon-3.webp" alt="Water Heater Discount" width={800} height={550} />
                        </a>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '32px' }}>
                        <Link href="/specials" className="btn btn-primary">View All Specials</Link>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="section" style={{ background: 'linear-gradient(180deg, var(--off-white) 0%, #e8edf5 100%)' }}>
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Reviews</span>
                        <h2>What Your Neighbors Are Saying</h2>
                    </div>
                    <div className="testimonials-grid fade-in">
                        <div className="testimonial-card">
                            <div className="testimonial-stars">★★★★★</div>
                            <p className="testimonial-text">
                                &ldquo;Anytime Plumbing 365 was incredible! They came out the same day I called, diagnosed the problem quickly, and fixed our broken water heater at a very fair price. The technician was courteous, professional, and explained everything clearly. I highly recommend them to anyone in the Garland area.&rdquo;
                            </p>
                            <div className="testimonial-author">
                                <Image src="/images/testimonial-1.jpg" alt="Akia Jackson" width={50} height={50} className="testimonial-avatar" />
                                <div>
                                    <p className="testimonial-name">Akia Jackson</p>
                                    <p className="testimonial-source">Google Review</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">★★★★★</div>
                            <p className="testimonial-text">
                                &ldquo;We had a terrible sewage backup on a Sunday night and these guys came right away. They were professional, clean, and got everything taken care of fast. The pricing was honest and there were no surprises. We will definitely use Anytime Plumbing 365 again!&rdquo;
                            </p>
                            <div className="testimonial-author">
                                <Image src="/images/testimonial-2.jpg" alt="Gina Rigney" width={50} height={50} className="testimonial-avatar" />
                                <div>
                                    <p className="testimonial-name">Gina Rigney</p>
                                    <p className="testimonial-source">Facebook Review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== AREAS WE SERVE ===== */}
            <section className="section section-blue">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Coverage</span>
                        <h2>Areas We Serve</h2>
                        <p>We proudly serve homeowners across the Dallas-Fort Worth Metroplex.</p>
                    </div>
                    <div className="areas-grid fade-in">
                        {['Garland', 'Irving', 'Dallas', 'Richardson', 'Mesquite', 'Plano', 'Grand Prairie', 'Arlington', 'Rowlett', 'Sachse', 'Wylie', 'Murphy'].map((area) => (
                            <Link href="/area" key={area} className="area-tag">📍 {area}, TX</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BLOG ===== */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">From Our Blog</span>
                        <h2>Latest Plumbing Tips &amp; Insights</h2>
                    </div>
                    <div className="blog-grid fade-in">
                        <Link href="/blog/why-your-drain-pipes-keep-clogging-and-how-to-fix-the-problem" className="blog-card">
                            <div className="blog-card-image">
                                <Image src="/images/service-3.jpg" alt="Drain Pipes Clogging" width={400} height={200} />
                            </div>
                            <div className="blog-card-body">
                                <p className="blog-card-date">February 10, 2026</p>
                                <h3>Why Your Drain Pipes Keep Clogging (And How To Fix the Problem)</h3>
                                <p>Clogs often stem from accumulated hair, soap scum, and food particles narrowing the passageway...</p>
                            </div>
                        </Link>
                        <Link href="/blog/what-to-do-in-the-first-hour-after-water-damage" className="blog-card">
                            <div className="blog-card-image">
                                <Image src="/images/water-damage-restoration.jpg" alt="Water Damage" width={400} height={200} />
                            </div>
                            <div className="blog-card-body">
                                <p className="blog-card-date">February 5, 2026</p>
                                <h3>What To Do in the First Hour After Water Damage</h3>
                                <p>Water damage can escalate quickly. Knowing what to do in the first hour can make the difference...</p>
                            </div>
                        </Link>
                        <Link href="/blog/10-signs-you-need-an-emergency-plumber-right-now" className="blog-card">
                            <div className="blog-card-image">
                                <Image src="/images/leaky-faucet.jpg" alt="Emergency Plumber" width={400} height={200} />
                            </div>
                            <div className="blog-card-body">
                                <p className="blog-card-date">January 28, 2026</p>
                                <h3>10 Signs You Need an Emergency Plumber Right Now</h3>
                                <p>Not every plumbing issue is an emergency, but some situations demand immediate attention...</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <CTABanner />
        </>
    );
}
