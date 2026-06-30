'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingPopup from '@/components/BookingPopup';
import ScrollAnimations from '@/components/ScrollAnimations';
import { IconPhone, IconArrowUp } from '@/components/Icons';

export default function ClientLayout({ children, settings }) {
    const [bookingOpen, setBookingOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 600);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <Header onBookNow={() => setBookingOpen(true)} settings={settings} />
            <main>{children}</main>
            <Footer settings={settings} />
            <BookingPopup isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
            <ScrollAnimations />

            {/* Scroll to Top */}
            <button
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <IconArrowUp size={20} />
            </button>

            {/* Mobile Floating CTA */}
            <div className="floating-cta">
                <a href={`tel:${settings?.phoneNumber || '214-307-4264'}`} className="btn btn-red btn-sm" style={{ flex: 1, textAlign: 'center' }}>
                    <IconPhone size={16} /> {settings?.phoneNumber || '214-307-4264'}
                </a>
            </div>
        </>
    );
}
