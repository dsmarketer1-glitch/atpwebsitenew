'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service_type: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
                setFormData({ name: '', email: '', phone: '', service_type: '', message: '' });
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
                    <h1>Contact Us</h1>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Contact Us</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="fade-in-left">
                            <span className="section-label">Get In Touch</span>
                            <h2 style={{ marginBottom: '24px' }}>Send Us a Message</h2>
                            {status === 'success' ? (
                                <div className="form-success">
                                    ✅ Thank you! Your message has been sent. We&apos;ll contact you shortly.
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
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                    </button>
                                    {status === 'error' && (
                                        <p style={{ color: '#c61726', marginTop: '12px', textAlign: 'center', fontSize: '14px' }}>
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
                                <h3>📍 Irving Location</h3>
                                <div className="contact-info-item">
                                    <span className="contact-info-icon">📞</span>
                                    <a href="tel:214-307-4264">214-307-4264</a>
                                </div>
                                <div className="contact-info-item">
                                    <span className="contact-info-icon">📍</span>
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
                                <h3>📍 Garland Location</h3>
                                <div className="contact-info-item">
                                    <span className="contact-info-icon">📞</span>
                                    <a href="tel:214-430-3461">214-430-3461</a>
                                </div>
                                <div className="contact-info-item">
                                    <span className="contact-info-icon">📍</span>
                                    <a href="https://www.google.com/maps/place/102+N+Shiloh+Rd+Suite+%23104,+Garland,+TX+75042" target="_blank" rel="noopener noreferrer">
                                        102 N Shiloh Rd, Suite 104, Garland, TX, 75042
                                    </a>
                                </div>
                                <div className="map-embed">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.0!2d-96.667598!3d32.9132471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1e080d0fffff%3A0xf2d0d53c42cecc08!2s102%20N%20Shiloh%20Rd%20Suite%20%23104%2C%20Garland%2C%20TX%2075042!5e0!3m2!1sen!2sus!4v1"
                                        allowFullScreen loading="lazy" title="Garland Location Map"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <h3>🕐 Hours &amp; Availability</h3>
                                <p style={{ fontSize: '15px', marginBottom: '8px' }}><strong>We are available 24/7</strong></p>
                                <p style={{ fontSize: '14px', color: '#666' }}>Emergency service available any time, day or night.</p>
                                <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>License #: 37912</p>
                            </div>

                            <div className="contact-info-card">
                                <h3>Follow Us</h3>
                                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                                    <a href="https://www.facebook.com/anytimeplumbing365/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Facebook</a>
                                    <a href="https://www.instagram.com/anytimeplumbing365/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Instagram</a>
                                    <a href="https://www.youtube.com/@AnyTimePlumbingDrainCleaning" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">YouTube</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
