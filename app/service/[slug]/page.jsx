import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { IconCalendar, IconPhone, IconWrench } from '@/components/Icons';
import ReviewWidget from '@/components/ReviewWidget';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import PinsSection from '@/components/PinsSection';

// ISR: regenerate hourly so newly submitted pins appear without a manual rebuild.
export const revalidate = 3600;

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
                    <Link href="/contact-us" className="btn btn-red btn-sm"><IconCalendar size={16} /> Book This Service</Link>
                    <a href="tel:214-307-4264" className="btn btn-outline btn-sm"><IconPhone size={16} /> Call 214-307-4264</a>
                </div>
            </section>

            {/* Main Content */}
            <section className="content-section">
                <div className="container">
                    <div className="content-two-col">
                        <div className="content-text fade-in-left">
                            <span className="section-label">{service.title}</span>
                            <h2>{service.title} Services in Dallas, TX</h2>
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
                                <Link href="/contact-us" className="btn btn-red btn-lg">Book Today</Link>
                                <a href="tel:214-307-4264" className="btn btn-outline btn-lg">Call 214-307-4264</a>
                            </div>
                        </div>

                        <div className="fade-in-right">
                            <div className="content-image" style={{ marginBottom: '30px' }}>
                                <Image
                                    src={service.image}
                                    alt={service.imageAlt || service.title}
                                    width={600}
                                    height={400}
                                />
                            </div>

                            <h3 style={{ marginBottom: '14px' }}>Our Services</h3>
                            <div className="service-sidebar">
                                {services.slice(0, 12).map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/service/${s.slug}`}
                                        className={`service-sidebar-item ${s.slug === slug ? 'active' : ''}`}
                                    >
                                        <IconWrench size={15} /> {s.title}
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
                    <div className="fade-in">
                        <ReviewWidget />
                    </div>
                </div>
            </section>

            <FAQAccordion faqs={service.faqs} />

            {/* Recently completed jobs for this service (ISR-refreshed) */}
            <PinsSection type="service" slug={slug} areaName={service.title} />

            {/* Still-have-questions CTA below the FAQ */}
            <section className="section" style={{ padding: '50px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '18px' }}>Still have questions? Call us</h3>
                    <a href="tel:214-307-4264" className="btn btn-red btn-lg"><IconPhone size={18} /> Call 214-307-4264</a>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
