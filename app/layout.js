import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'Anytime Plumbing 365 | Local Plumbing & Restoration Services in Garland, TX',
  description: 'Anytime Plumbing 365 delivers expert plumbing, leak detection, sewer repair, and property restoration services for homeowners in Garland, TX. Trust our team for fast, reliable help.',
  keywords: 'plumbing, Garland TX, drain cleaning, emergency plumber, water heater repair, sewer line repair, water damage restoration',
  openGraph: {
    title: 'Anytime Plumbing 365 | 24/7 Plumbing Services',
    description: 'Expert plumbing, leak detection, sewer repair, and property restoration services in Garland, TX.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
