import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getAllBlogSlugs } from '@/data/blog-posts';
import CTABanner from '@/components/CTABanner';

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
    if (!post) return {};
    return {
        title: `${post.title} - Anytime Plumbing 365`,
        description: post.metaDescription,
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
    if (!post) notFound();

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>{post.title}</h1>
                    <p className="breadcrumb">
                        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / {post.title}
                    </p>
                </div>
            </section>

            <article className="blog-post-content">
                <div className="blog-post-meta">
                    Published on {post.date} by Anytime Plumbing 365
                </div>

                <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="blog-post-featured-image"
                />

                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                <div style={{ marginTop: '40px', padding: '30px', background: '#f7f8fa', borderRadius: '12px', textAlign: 'center' }}>
                    <h3>Need Help With Your Plumbing?</h3>
                    <p style={{ color: '#666', marginBottom: '16px' }}>Our expert team is available 24/7. Contact us today!</p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact-us" className="btn btn-primary">Contact Us</Link>
                        <a href="tel:214-307-4264" className="btn btn-red">Call 214-307-4264</a>
                    </div>
                </div>
            </article>

            <CTABanner />
        </>
    );
}
