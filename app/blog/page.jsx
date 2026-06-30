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
                    <h1>Blog</h1>
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
