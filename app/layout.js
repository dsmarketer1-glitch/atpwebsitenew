import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import CustomCursor from '@/components/CustomCursor';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';
import { draftMode } from 'next/headers';
import VisualEditing from '@/components/VisualEditing';

export async function generateMetadata() {
  const settings = await sanityFetch({ query: settingsQuery });
  
  return {
    title: 'Anytime Plumbing 365 | Local Plumbing & Restoration Services in Dallas, TX',
    description: 'Anytime Plumbing 365 delivers expert plumbing, leak detection, sewer repair, and property restoration services for homeowners in Dallas, TX. Trust our team for fast, reliable help.',
    keywords: 'plumbing, Dallas TX, drain cleaning, emergency plumber, water heater repair, sewer line repair, water damage restoration',
    openGraph: {
      title: 'Anytime Plumbing 365 | 24/7 Plumbing Services',
      description: 'Expert plumbing, leak detection, sewer repair, and property restoration services in Dallas, TX.',
      type: 'website',
      locale: 'en_US',
    },
  };
}

export default async function RootLayout({ children }) {
  const settings = await sanityFetch({ query: settingsQuery });
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CustomCursor />
        <ClientLayout settings={settings} preview={isEnabled}>{children}</ClientLayout>
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
