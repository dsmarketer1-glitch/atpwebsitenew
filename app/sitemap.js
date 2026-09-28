import { getAllServiceSlugs } from '@/data/services';
import { getAllCitySlugs, getAllCityCommunityParams } from '@/data/locations';
import { blogPosts } from '@/data/blog-posts';

// Next.js sitemap metadata route -> served at /sitemap.xml.
// Lists only intended-indexable, canonical HTTP-200 URLs (absolute, HTTPS www).
// Excludes the private /team/* tool, /api/*, and non-canonical query variants.

const BASE_URL = 'https://www.anytimeplumbing365.com';

export default function sitemap() {
    const now = new Date();

    // Static, indexable pages.
    const staticPaths = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' },
        { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/area', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/about-us', priority: 0.6, changeFrequency: 'yearly' },
        { path: '/contact-us', priority: 0.7, changeFrequency: 'yearly' },
        { path: '/financing', priority: 0.6, changeFrequency: 'yearly' },
        { path: '/specials', priority: 0.6, changeFrequency: 'monthly' },
        { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
        { path: '/pins', priority: 0.5, changeFrequency: 'daily' },
        { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
        { path: '/terms-of-service', priority: 0.2, changeFrequency: 'yearly' },
    ].map((p) => ({
        url: `${BASE_URL}${p.path}`,
        lastModified: now,
        changeFrequency: p.changeFrequency,
        priority: p.priority,
    }));

    // Service pages.
    const servicePaths = getAllServiceSlugs().map((slug) => ({
        url: `${BASE_URL}/service/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // City pages.
    const cityPaths = getAllCitySlugs().map((city) => ({
        url: `${BASE_URL}/${city}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Community pages.
    const communityPaths = getAllCityCommunityParams().map(({ city, community }) => ({
        url: `${BASE_URL}/${city}/${community}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    // Blog articles — use each post's own published date as the truthful lastmod.
    const blogPaths = blogPosts.map((post) => {
        const parsed = post.date ? new Date(post.date) : now;
        return {
            url: `${BASE_URL}/blog/${post.slug}`,
            lastModified: Number.isNaN(parsed.getTime()) ? now : parsed,
            changeFrequency: 'yearly',
            priority: 0.5,
        };
    });

    return [...staticPaths, ...servicePaths, ...cityPaths, ...communityPaths, ...blogPaths];
}
