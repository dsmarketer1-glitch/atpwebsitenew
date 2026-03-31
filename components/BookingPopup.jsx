'use client';
import { useState } from 'react';

export default function BookingPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => { setStatus('idle'); onClose(); }, 3000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <h2>Book a Service</h2>
                <p>Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

                {status === 'success' ? (
                    <div className="form-success">
                        ✅ Thank you! Your request has been submitted. We&apos;ll contact you shortly.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="booking-name">Full Name *</label>
                                <input
                                    type="text" id="booking-name" name="name"
                                    value={formData.name} onChange={handleChange}
                                    required placeholder="Your full name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="booking-phone">Phone *</label>
                                <input
                                    type="tel" id="booking-phone" name="phone"
                                    value={formData.phone} onChange={handleChange}
                                    required placeholder="(xxx) xxx-xxxx"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="booking-email">Email *</label>
                            <input
                                type="email" id="booking-email" name="email"
                                value={formData.email} onChange={handleChange}
                                required placeholder="your@email.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="booking-message">How can we help? *</label>
                            <textarea
                                id="booking-message" name="message"
                                value={formData.message} onChange={handleChange}
                                required placeholder="Describe your plumbing issue..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}
                            disabled={status === 'loading'}>
                            {status === 'loading' ? 'Submitting...' : 'Submit Request'}
                        </button>
                        {status === 'error' && (
                            <p style={{ color: '#c61726', marginTop: '12px', textAlign: 'center', fontSize: '14px' }}>
                                Something went wrong. Please call us at 214-307-4264.
                            </p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}
