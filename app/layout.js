import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import CustomCursor from '@/components/CustomCursor';
import { siteSettings } from '@/data/settings';

export const metadata = {
  title: 'Plumbing in Dallas, TX | Anytime Plumbing 365',
  description: 'Making your day brighter. We show up, tell the truth, and fix it right — honest plumbing & restoration across Dallas, TX. Call 214-307-4264.',
  keywords: 'plumbing, Dallas TX, drain cleaning, emergency plumber, water heater repair, sewer line repair, water damage restoration',
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: 'Anytime Plumbing 365 | The People Who Show Up™',
    description: 'Honest, friendly plumbing & restoration in Dallas, TX — available 365 days a year. Making your day brighter.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <ClientLayout settings={siteSettings}>{children}</ClientLayout>
      </body>
    </html>
  );
}
