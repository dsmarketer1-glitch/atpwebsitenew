'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IconMapPin, IconPhone, IconClock, IconCheck } from '@/components/Icons';
import SmsConsent from '@/components/SmsConsent';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service_type: '', message: '', smsTransactional: false, smsMarketing: false });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', service_type: '', message: '', smsTransactional: false, smsMarketing: false });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <span className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '14px', position: 'relative', zIndex: 2 }}>We&apos;re Here to Help</span>
                    <h1>Contact Us</h1>
                    <p style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '600px', margin: '12px auto 0', fontSize: '17px', position: 'relative', zIndex: 2 }}>
                        Available 24/7 — Dallas–Fort Worth Metroplex.
                    </p>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Contact Us</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="fade-in-left">
                            <span className="section-label">Get In Touch</span>
                            <h2 style={{ marginBottom: '24px' }}>We&apos;re Here for You — Reach Out</h2>
                            {status === 'success' ? (
                                <div className="form-success">
                                    <IconCheck size={18} /> Thank you! Your message has been sent. We&apos;ll contact you shortly.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="contact-name">Full Name *</label>
                                            <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="contact-phone">Phone *</label>
                                            <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(xxx) xxx-xxxx" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-email">Email *</label>
                                        <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-service">Service Needed</label>
                                        <select id="contact-service" name="service_type" value={formData.service_type} onChange={handleChange}>
                                            <option value="">Select a service...</option>
                                            <option value="Drain Cleaning">Drain Cleaning</option>
                                            <option value="Emergency Plumber">Emergency Plumber</option>
                                            <option value="Water Heater">Water Heater Repair/Replacement</option>
                                            <option value="Sewer Line">Sewer Line Services</option>
                                            <option value="Water Leak">Water Leak Detection & Repair</option>
                                            <option value="Water Damage">Water Damage Restoration</option>
                                            <option value="Home Repiping">Home Repiping</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-message">Message *</label>
                                        <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your plumbing issue..." rows={5} />
                                    </div>
                                    <SmsConsent transactional={formData.smsTransactional} marketing={formData.smsMarketing} onChange={handleChange} />
                                    <button type="submit" className="btn btn-red btn-lg" style={{ width: '100%' }} disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Sending...' : 'Get a Free Quote'}
                                    </button>
                                    {status === 'error' && (
                                        <p style={{ color: '#D0242C', marginTop: '12px', textAlign: 'center', fontSize: '14px' }}>
                                            Something went wrong. Please call us at 214-307-4264.
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="fade-in-right">
                            <span className="section-label">Our Locations</span>
                            <h2 style={{ marginBottom: '24px' }}>Contact Information</h2>

                            <div className="contact-info-card">
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconMapPin size={18} /> Irving Location</h3>
                                <div className="contact-info-item">
                                    <span className="contact-info-icon"><IconPhone size={18} /></span>
                                    <a href="tel:214-307-4264">214-307-4264</a>
                                </div>
                                <div className="contact-info-item">
                                    <span className="contact-info-icon"><IconMapPin size={18} /></span>
                                    <a href="https://www.google.com/maps/place/320+Decker+Dr+Ste+102-08,+Irving,+TX+75062" target="_blank" rel="noopener noreferrer">
                                        320 Decker Dr, Suite 102-08, Irving, TX, 75062
                                    </a>
                                </div>
                                <div className="map-embed">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.3!2d-96.9420872!3d32.8607192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e82c10653d691%3A0xabc5349383ba5f96!2s320%20Decker%20Dr%20Ste%20102-08%2C%20Irving%2C%20TX%2075062!5e0!3m2!1sen!2sus!4v1"
                                        allowFullScreen loading="lazy" title="Irving Location Map"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconMapPin size={18} /> Dallas Location</h3>
                                <div className="contact-info-item">
                                    <span className="contact-info-icon"><IconPhone size={18} /></span>
                                    <a href="tel:214-430-3461">214-430-3461</a>
                                </div>
                                <div className="contact-info-item">
                                    <span className="contact-info-icon"><IconMapPin size={18} /></span>
                                    <a href="https://www.google.com/maps/place/102+N+Shiloh+Rd+Suite+%23104,+Dallas,+TX+75042" target="_blank" rel="noopener noreferrer">
                                        102 N Shiloh Rd, Suite 104, Dallas, TX, 75042
                                    </a>
                                </div>
                                <div className="map-embed">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.0!2d-96.667598!3d32.9132471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1e080d0fffff%3A0xf2d0d53c42cecc08!2s102%20N%20Shiloh%20Rd%20Suite%20%23104%2C%20Dallas%2C%20TX%2075042!5e0!3m2!1sen!2sus!4v1"
                                        allowFullScreen loading="lazy" title="Dallas Location Map"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconClock size={18} /> Hours &amp; Availability</h3>
                                <p style={{ fontSize: '15px', marginBottom: '8px' }}><strong>We are available 24/7</strong></p>
                                <p style={{ fontSize: '14px', color: '#666' }}>Emergency service available any time, day or night.</p>
                                <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>License #: 37912</p>
                            </div>

                            <div className="contact-info-card">
                                <h3>Follow Us</h3>
                                <div style={{ display: 'flex', gap: '10px', marginTop: '8px', flexWrap: 'wrap' }}>
                                    <a href="https://www.facebook.com/anytimeplumbing365/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '100px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', textDecoration: 'none', background: '#1877F2', color: '#fff' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                                        Facebook
                                    </a>
                                    <a href="https://www.instagram.com/anytimeplumbing365/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '100px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', textDecoration: 'none', background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)', color: '#fff' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
                                        Instagram
                                    </a>
                                    <a href="https://www.youtube.com/@AnyTimePlumbingDrainCleaning" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '100px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', textDecoration: 'none', background: '#FF0000', color: '#fff' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                        YouTube
                                    </a>
                                    <a href="https://maps.app.goo.gl/uKXDcWogZcB1Gdc27" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '100px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', textDecoration: 'none', background: '#fff', color: '#3c4043', border: '1px solid #dadce0', boxShadow: 'var(--shadow-sm)' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 01-2.4 3.64v3h3.86c2.26-2.09 3.56-5.17 3.56-8.88z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0012 24z" /><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.99 11.99 0 000 12c0 1.94.46 3.77 1.29 5.38l3.98-3.09z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" /></svg>
                                        Google Reviews – Garland
                                    </a>
                                    <a href="https://maps.app.goo.gl/XRxiS2yr7gf7kqo59" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '100px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', textDecoration: 'none', background: '#fff', color: '#3c4043', border: '1px solid #dadce0', boxShadow: 'var(--shadow-sm)' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 01-2.4 3.64v3h3.86c2.26-2.09 3.56-5.17 3.56-8.88z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0012 24z" /><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.99 11.99 0 000 12c0 1.94.46 3.77 1.29 5.38l3.98-3.09z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" /></svg>
                                        Google Reviews – Irving
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
