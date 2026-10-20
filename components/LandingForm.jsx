'use client';

// Lead-capture form for the keyword landing pages. Posts to the existing
// EmailJS-backed /api/contact endpoint and, on success, redirects to the
// trackable /thank-you page. Includes the A2P SMS consent for compliance.

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SmsConsent from '@/components/SmsConsent';
import { IconPhone, IconShield } from '@/components/Icons';

export default function LandingForm({ keyword, heading = 'Request Fast Service', subheading = 'Get a quick callback — no obligation.', ctaLabel = 'Get My Free Quote', formId = 'lead-form' }) {
    const router = useRouter();
    const [data, setData] = useState({ name: '', phone: '', email: '', message: '', smsTransactional: false, smsMarketing: false });
    const [status, setStatus] = useState('idle'); // idle | loading | error

    const onChange = (e) => {
        const { name, type, value, checked } = e.target;
        setData((d) => ({ ...d, [name]: type === 'checkbox' ? checked : value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    service_type: keyword,
                    message: `[Landing: ${keyword}] ${data.message}`,
                    smsTransactional: data.smsTransactional,
                    smsMarketing: data.smsMarketing,
                }),
            });
            if (res.ok) {
                router.push('/thank-you');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="lp-form-card" id={formId}>
            <div className="lp-form-head">
                <h3>{heading}</h3>
                <p>{subheading}</p>
            </div>
            <form onSubmit={onSubmit} className="lp-form">
                <input type="text" name="name" value={data.name} onChange={onChange} required placeholder="Full name *" autoComplete="name" />
                <input type="tel" name="phone" value={data.phone} onChange={onChange} required placeholder="Phone number *" autoComplete="tel" />
                <input type="email" name="email" value={data.email} onChange={onChange} required placeholder="Email *" autoComplete="email" />
                <textarea name="message" value={data.message} onChange={onChange} required rows={3} placeholder="Briefly, what's going on? *" />
                <SmsConsent transactional={data.smsTransactional} marketing={data.smsMarketing} onChange={onChange} />
                <button type="submit" className="btn btn-red btn-lg lp-form-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending…' : ctaLabel}
                </button>
                {status === 'error' && (
                    <p className="lp-form-error">Something went wrong. Please call us at 214-307-4264.</p>
                )}
                <p className="lp-form-trust"><IconShield size={14} /> Your info is safe. No spam, ever.</p>
                <a href="tel:214-307-4264" className="lp-form-callrow"><IconPhone size={16} /> Prefer to talk now? Call 214-307-4264</a>
            </form>
        </div>
    );
}
