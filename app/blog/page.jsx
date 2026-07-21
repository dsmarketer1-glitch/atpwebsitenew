import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export const metadata = {
    title: 'Plumbing Tips & Advice | Anytime Plumbing 365',
    description: 'Friendly, plain-English plumbing tips from your Dallas neighbors at Anytime Plumbing 365 — practical advice to help you care for your home.',
};

export default function BlogPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <span className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '14px', position: 'relative', zIndex: 2 }}>Plumbing Tips &amp; Insights</span>
                    <h1>Blog</h1>
                    <p style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '600px', margin: '12px auto 0', fontSize: '17px', position: 'relative', zIndex: 2 }}>
                        Expert advice for Dallas–Fort Worth homeowners.
                    </p>
                    <p className="breadcrumb"><Link href="/">Home</Link> / Blog</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="blog-grid fade-in">
                        {blogPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">

                                <div className="blog-card-body">
                                    <p className="blog-card-date">{post.date}</p>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
