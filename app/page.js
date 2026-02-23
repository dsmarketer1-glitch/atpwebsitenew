import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Local Plumbing &amp; Restoration Services in Garland, TX</h1>
            <div className="hero-badges">
              <span className="hero-badge">
                <span className="hero-badge-icon">⏰</span> 24/7 Availability
              </span>
              <span className="hero-badge">
                <span className="hero-badge-icon">🔧</span> Licensed &amp; Experienced Plumbers
              </span>
              <span className="hero-badge">
                <span className="hero-badge-icon">💰</span> Honest Pricing &amp; Guaranteed Work
              </span>
            </div>
            <div className="hero-actions">
              <Link href="/contact-us" className="btn btn-white btn-lg">
                📅 Book Now
              </Link>
              <a href="tel:214-307-4264" className="btn btn-red btn-lg">
                📞 Call 214-307-4264
              </a>
            </div>
            <div className="hero-ratings">
              <Image src="/images/google-rating.svg" alt="Google 5 Star Rating" width={150} height={50} />
              <Image src="/images/facebook-rating.svg" alt="Facebook 5 Star Rating" width={150} height={50} />
            </div>
          </div>
          <div className="hero-image">
            <Image src="/images/van-new.webp" alt="Anytime Plumbing 365 Service Van" width={550} height={400} priority />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Featured Services</h2>
            <p>We offer a complete range of plumbing and restoration services to keep your home safe and comfortable.</p>
          </div>
          <div className="featured-services fade-in">
            <Link href="/service/drain-cleaning" className="featured-service-card">
              <span className="featured-service-icon">🔧</span>
              <h3>Plumbing</h3>
              <p>Complete residential plumbing services including drain cleaning, pipe repair, and fixture installation.</p>
            </Link>
            <Link href="/service/emergency-plumber" className="featured-service-card">
              <span className="featured-service-icon">🚨</span>
              <h3>Emergency Services</h3>
              <p>24/7 emergency plumber available for burst pipes, severe leaks, and urgent plumbing issues.</p>
            </Link>
            <Link href="/service/water-damage-restoration" className="featured-service-card">
              <span className="featured-service-icon">🏠</span>
              <h3>Restoration</h3>
              <p>Professional water damage restoration and sewage cleanup to protect your property.</p>
            </Link>
            <Link href="/contact-us" className="featured-service-card">
              <span className="featured-service-icon">📞</span>
              <h3>Contact Us</h3>
              <p>Get in touch for a free estimate or to schedule a service appointment today.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section section-gray">
        <div className="container">
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-card-image">
                <Image src="/images/plumbing-repair.jpg" alt="Drain Pipe Repair" width={400} height={220} />
              </div>
              <div className="service-card-body">
                <h3><Link href="/service/drain-pipe-repair">Drain Pipe Repair</Link></h3>
                <p>Fast and reliable drain pipe repair from experienced plumbing professionals.</p>
                <Link href="/service/drain-pipe-repair" className="service-card-link">Learn More →</Link>
              </div>
            </div>
            <div className="service-card fade-in">
              <div className="service-card-image">
                <Image src="/images/leaky-faucet.jpg" alt="Emergency Plumber" width={400} height={220} />
              </div>
              <div className="service-card-body">
                <h3><Link href="/service/emergency-plumber">Emergency Plumber</Link></h3>
                <p>24/7 emergency plumbing services with fast response times and expert solutions.</p>
                <Link href="/service/emergency-plumber" className="service-card-link">Learn More →</Link>
              </div>
            </div>
            <div className="service-card fade-in">
              <div className="service-card-image">
                <Image src="/images/water-damage-restoration.jpg" alt="Water Damage Restoration" width={400} height={220} />
              </div>
              <div className="service-card-body">
                <h3><Link href="/service/water-damage-restoration">Water Damage Restoration</Link></h3>
                <p>Complete water damage restoration to minimize damage and restore your home.</p>
                <Link href="/service/water-damage-restoration" className="service-card-link">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="why-choose-grid">
            <div className="content-text fade-in-left">
              <h2>Dependable Plumbing Services in Garland, TX</h2>
              <p>Our team at Anytime Plumbing 365 delivers complete plumbing solutions for busy homeowners in Garland, TX who want service that is fast, dependable, and done right the first time.</p>
              <p>We offer a full range of emergency plumbing support along with essential services such as drain cleaning, sewer line repair, toilet repair and installation, and water leak detection and repair.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact-us" className="btn btn-primary btn-lg">Book Now</Link>
                <a href="tel:214-307-4264" className="btn btn-outline btn-lg">Call 214-307-4264</a>
              </div>
            </div>
            <div className="fade-in-right">
              <h2>Why Choose Anytime Plumbing 365</h2>
              <p>At Anytime Plumbing 365, we focus on delivering reliable service that gives homeowners real peace of mind.</p>
              <div className="why-choose-list">
                <div className="why-choose-item">
                  <span className="why-choose-icon">⚡</span>
                  <span>Fast emergency response</span>
                </div>
                <div className="why-choose-item">
                  <span className="why-choose-icon">✅</span>
                  <span>Honest recommendations that protect your home</span>
                </div>
                <div className="why-choose-item">
                  <span className="why-choose-icon">🏆</span>
                  <span>Skilled technicians focused on quality</span>
                </div>
                <div className="why-choose-item">
                  <span className="why-choose-icon">🤝</span>
                  <span>A neighborly approach that puts your comfort first</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact-us" className="btn btn-primary">Book Now</Link>
                <a href="tel:214-307-4264" className="btn btn-outline">Call 214-307-4264</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Special Offers</h2>
          </div>
          <div className="specials-grid fade-in">
            <a href="tel:214-307-4264" className="special-card">
              <Image src="/images/coupon-1.webp" alt="Special Offer - Drain Cleaning Discount" width={800} height={550} />
            </a>
            <a href="tel:214-307-4264" className="special-card">
              <Image src="/images/coupon-2.webp" alt="Special Offer - New Customer Discount" width={800} height={550} />
            </a>
            <a href="tel:214-307-4264" className="special-card">
              <Image src="/images/coupon-3.webp" alt="Special Offer - Water Heater Discount" width={800} height={550} />
            </a>
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link href="/specials" className="btn btn-primary">More Specials</Link>
            <a href="tel:214-307-4264" className="btn btn-outline" style={{ marginLeft: '12px' }}>Call 214-307-4264</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>What Your Neighbors Are Saying About Us</h2>
          </div>
          <div className="testimonials-grid fade-in">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;Anytime Plumbing 365 was incredible! They came out the same day I called, diagnosed the problem quickly, and fixed our broken water heater at a very fair price. The technician was courteous, professional, and explained everything clearly. I highly recommend them to anyone in the Garland area.&rdquo;
              </p>
              <div className="testimonial-author">
                <Image src="/images/testimonial-1.jpg" alt="Akia Jackson" width={50} height={50} className="testimonial-avatar" />
                <div>
                  <p className="testimonial-name">Akia Jackson</p>
                  <p className="testimonial-source">Google Review</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &ldquo;We had a terrible sewage backup on a Sunday night and these guys came right away. They were professional, clean, and got everything taken care of fast. The pricing was honest and there were no surprises. We will definitely use Anytime Plumbing 365 again!&rdquo;
              </p>
              <div className="testimonial-author">
                <Image src="/images/testimonial-2.jpg" alt="Gina Rigney" width={50} height={50} className="testimonial-avatar" />
                <div>
                  <p className="testimonial-name">Gina Rigney</p>
                  <p className="testimonial-source">Facebook Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="section section-blue">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Areas We Serve</h2>
            <p>We proudly serve homeowners across the Dallas-Fort Worth Metroplex.</p>
          </div>
          <div className="areas-grid fade-in">
            {['Garland', 'Irving', 'Dallas', 'Richardson', 'Mesquite', 'Plano', 'Grand Prairie', 'Arlington', 'Rowlett', 'Sachse', 'Wylie', 'Murphy'].map((area) => (
              <Link href="/area" key={area} className="area-tag">
                📍 {area}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Most Recent Blog Posts</h2>
          </div>
          <div className="blog-grid fade-in">
            <Link href="/blog/why-your-drain-pipes-keep-clogging-and-how-to-fix-the-problem" className="blog-card">
              <div className="blog-card-image">
                <Image src="/images/service-3.jpg" alt="Drain Pipes Clogging" width={400} height={200} />
              </div>
              <div className="blog-card-body">
                <p className="blog-card-date">February 10, 2026</p>
                <h3>Why Your Drain Pipes Keep Clogging (And How To Fix the Problem)</h3>
                <p>Clogs often stem from accumulated hair, soap scum, and food particles narrowing the passageway...</p>
              </div>
            </Link>
            <Link href="/blog/what-to-do-in-the-first-hour-after-water-damage" className="blog-card">
              <div className="blog-card-image">
                <Image src="/images/water-damage-restoration.jpg" alt="Water Damage" width={400} height={200} />
              </div>
              <div className="blog-card-body">
                <p className="blog-card-date">February 5, 2026</p>
                <h3>What To Do in the First Hour After Water Damage</h3>
                <p>Water damage can escalate quickly. Knowing what to do in the first hour can make the difference...</p>
              </div>
            </Link>
            <Link href="/blog/10-signs-you-need-an-emergency-plumber-right-now" className="blog-card">
              <div className="blog-card-image">
                <Image src="/images/leaky-faucet.jpg" alt="Emergency Plumber" width={400} height={200} />
              </div>
              <div className="blog-card-body">
                <p className="blog-card-date">January 28, 2026</p>
                <h3>10 Signs You Need an Emergency Plumber Right Now</h3>
                <p>Not every plumbing issue is an emergency, but some situations demand immediate professional attention...</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
