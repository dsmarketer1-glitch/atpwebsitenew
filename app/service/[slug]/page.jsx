import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

export async function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return {
        title: service.metaTitle,
        description: service.metaDescription,
    };
}

export default async function ServicePage({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>{service.heroTitle}</h1>
                    <p className="breadcrumb">
                        <Link href="/">Home</Link> / <Link href="/">Services</Link> / {service.title}
                    </p>
                </div>
            </section>

            {/* Quick CTA Row */}
            <section style={{ background: 'var(--light-gray)', padding: '18px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    <Link href="/contact-us" className="btn btn-primary btn-sm">📅 Book This Service</Link>
                    <a href="tel:214-307-4264" className="btn btn-red btn-sm">📞 Call 214-307-4264</a>
                </div>
            </section>

            {/* Main Content */}
            <section className="content-section">
                <div className="container">
                    <div className="content-two-col">
                        <div className="content-text fade-in-left">
                            <span className="section-label">{service.title}</span>
                            <h2>{service.title} Services in Garland, TX</h2>
                            {service.content.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}

                            {service.features && (
                                <>
                                    <h3 style={{ marginTop: '30px', marginBottom: '16px' }}>What We Offer</h3>
                                    <ul>
                                        {service.features.map((f, i) => (
                                            <li key={i}>{f}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                                <Link href="/contact-us" className="btn btn-primary btn-lg">Book Now</Link>
                                <a href="tel:214-307-4264" className="btn btn-outline btn-lg">Call 214-307-4264</a>
                            </div>
                        </div>

                        <div className="fade-in-right">
                            <div className="content-image" style={{ marginBottom: '30px' }}>
                                <Image src={service.image} alt={service.title} width={600} height={400} />
                            </div>

                            <h3 style={{ marginBottom: '14px' }}>Our Services</h3>
                            <div className="service-sidebar">
                                {services.slice(0, 12).map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/service/${s.slug}`}
                                        className={`service-sidebar-item ${s.slug === slug ? 'active' : ''}`}
                                    >
                                        🔧 {s.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="section section-gray">
                <div className="container">
                    <div className="section-header fade-in">
                        <span className="section-label">Reviews</span>
                        <h2>What Your Neighbors Say</h2>
                    </div>
                    <div className="testimonials-grid fade-in">
                        <div className="testimonial-card">
                            <div className="testimonial-stars">★★★★★</div>
                            <p className="testimonial-text">
                                &ldquo;Anytime Plumbing 365 was incredible! They came out the same day I called, diagnosed the problem quickly, and fixed it at a very fair price. Highly recommend!&rdquo;
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
                                &ldquo;We had a terrible sewage backup on a Sunday night and these guys came right away. Professional, clean, and honest pricing. Will definitely use again!&rdquo;
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

            <FAQAccordion faqs={service.faqs} />
            <CTABanner />
        </>
    );
}
