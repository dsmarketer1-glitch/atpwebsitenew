// Next.js robots metadata route -> served at /robots.txt (HTTP 200, plain text).
// Public pages and assets stay crawlable; the private team capture tool and the
// API are disallowed. References the sitemap.

const BASE_URL = 'https://www.anytimeplumbing365.com';

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/team/', '/api/'],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
