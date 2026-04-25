'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingPopup from '@/components/BookingPopup';
import ScrollAnimations from '@/components/ScrollAnimations';
import VisualEditingComponent from '@/components/VisualEditing';

export default function ClientLayout({ children, settings, preview }) {
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
            {preview && <VisualEditingComponent />}

            {/* Scroll to Top */}
            <button
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                ↑
            </button>

            {/* Mobile Floating CTA */}
            <div className="floating-cta">
                <a href={`tel:${settings?.phoneNumber || '214-307-4264'}`} className="btn btn-red btn-sm" style={{ flex: 1, textAlign: 'center' }}>
                    📞 Call Now
                </a>
                <button className="btn btn-primary btn-sm" onClick={() => setBookingOpen(true)} style={{ flex: 1 }}>
                    📅 Book Now
                </button>
            </div>
        </>
    );
}
