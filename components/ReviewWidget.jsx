'use client';

// Embeds the LeadConnector / ReputationHub review widget. The external
// review-widget.js script finds the .lc_reviews_widget iframe and handles
// auto-resizing. Loaded once via next/script; safe to render on multiple pages.

import Script from 'next/script';

export default function ReviewWidget() {
    return (
        <>
            <iframe
                className="lc_reviews_widget"
                src="https://reputationhub.site/reputation/widgets/review_widget/Jpy5Kg8BNVXJQd3C25qs?widgetId=6aacec8a87cf13a945640f38"
                frameBorder="0"
                scrolling="no"
                style={{ minWidth: '100%', width: '100%' }}
                title="Customer Reviews"
            />
            <Script
                src="https://reputationhub.site/reputation/assets/review-widget.js"
                strategy="afterInteractive"
            />
        </>
    );
}
