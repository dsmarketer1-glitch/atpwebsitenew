'use client';
import { useState } from 'react';
import { IconX, IconCheck } from '@/components/Icons';

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
                <button className="modal-close" onClick={onClose} aria-label="Close"><IconX size={18} /></button>

                <h2>Let&apos;s Get You Taken Care Of</h2>
                <p>Tell us what&apos;s going on and we&apos;ll be in touch fast — usually within the hour. No pressure, no obligation.</p>

                {status === 'success' ? (
                    <div className="form-success">
                        <IconCheck size={18} /> Thank you! Your request has been submitted. We&apos;ll contact you shortly.
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
                        <button type="submit" className="btn btn-red btn-lg" style={{ width: '100%' }}
                            disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending...' : 'Get My Free Quote'}
                        </button>
                        {status === 'error' && (
                            <p style={{ color: '#D0242C', marginTop: '12px', textAlign: 'center', fontSize: '14px' }}>
                                Something went wrong. Please call us at 214-307-4264.
                            </p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}
