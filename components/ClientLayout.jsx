'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingPopup from '@/components/BookingPopup';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function ClientLayout({ children }) {
    const [bookingOpen, setBookingOpen] = useState(false);

    return (
        <>
            <Header onBookNow={() => setBookingOpen(true)} />
            <main>{typeof children === 'function' ? children({ onBookNow: () => setBookingOpen(true) }) : children}</main>
            <Footer />
            <BookingPopup isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
            <ScrollAnimations />
        </>
    );
}
