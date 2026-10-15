import './globals.css';
import Script from 'next/script';
import ClientLayout from '@/components/ClientLayout';
import CustomCursor from '@/components/CustomCursor';
import JsonLd from '@/components/JsonLd';
import { siteSettings } from '@/data/settings';
import { cities } from '@/data/locations';
import { organizationGraph } from '@/lib/structured-data';

export const metadata = {
  metadataBase: new URL('https://www.anytimeplumbing365.com'),
  title: 'Plumbing in Dallas, TX | Anytime Plumbing 365',
  description: 'Making your day brighter. We show up, tell the truth, and fix it right — honest plumbing & restoration across Dallas, TX. Call 214-307-4264.',
  keywords: 'plumbing, Dallas TX, drain cleaning, emergency plumber, water heater repair, sewer line repair, water damage restoration',
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KG7CJRTQ');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KG7CJRTQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Site-wide business identity (Organization + Irving/Garland branches) */}
        <JsonLd data={organizationGraph(cities.map((c) => c.name))} />
        <CustomCursor />
        <ClientLayout settings={siteSettings}>{children}</ClientLayout>
        {/* Avoca SimpleScheduler widget (manual mode — opened from the header Book Online button) */}
        <Script
          src="https://app.avoca.ai/simple-scheduler/widget.js?apiKey=sk_5d1d886b063276a351288f092473ab10eeed99c694b98c2a0ca47d8db80470f1"
          data-mode="manual"
          strategy="afterInteractive"
        />

        {/* GoHighLevel / LeadConnector chat widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6ac9162c5ca136cc0b611e6d"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
