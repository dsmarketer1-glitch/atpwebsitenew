'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const plumbingServices = [
  { name: 'Drain Cleaning', slug: 'drain-cleaning' },
  { name: 'Drain Pipe Repair', slug: 'drain-pipe-repair' },
  { name: 'Emergency Plumber', slug: 'emergency-plumber' },
  { name: 'Home Repiping', slug: 'home-repiping' },
  { name: 'Hydro Jetting', slug: 'hydro-jetting' },
  { name: 'Plumbing Repair', slug: 'plumbing-repair' },
  { name: 'Rooter Services', slug: 'rooter-services' },
  { name: 'Sewer Line Repair', slug: 'sewer-line-repair' },
  { name: 'Slab Leak Detection', slug: 'slab-leak-detection-repair' },
  { name: 'Toilet Repair', slug: 'toilet-repair-installation' },
  { name: 'Water Heater Repair', slug: 'water-heater-repair' },
  { name: 'Water Leak Detection', slug: 'water-leak-detection-repair' },
];

const restorationServices = [
  { name: 'Sewage Cleanup', slug: 'sewage-cleanup' },
  { name: 'Water Damage Restoration', slug: 'water-damage-restoration' },
];

const aboutLinks = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Giving Back', href: '/giving-back' },
];

export default function Header({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <span>🕐 Available 24/7</span>
            <span className="top-bar-divider" />
            <span>🪪 License #37912</span>
            <span className="top-bar-divider" />
            <span>📍 Serving Dallas–Fort Worth Metroplex</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:214-307-4264">📞 214-307-4264</a>
            <span className="top-bar-divider" />
            <a href="tel:214-430-3461">📞 214-430-3461</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link href="/" className="header-logo">
            <Image src="/images/logo.png" alt="Anytime Plumbing 365" width={170} height={57} priority />
          </Link>

          <nav className="header-nav">
            <button
              className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>

            <ul className={mobileOpen ? 'mobile-open' : ''}>
              <li className="nav-item">
                <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              </li>

              <li className={`nav-item ${openDropdown === 'plumbing' ? 'open' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('plumbing'); }}>
                  Plumbing <span className="nav-arrow">▼</span>
                </a>
                <div className="dropdown-menu">
                  {plumbingServices.map((s) => (
                    <Link key={s.slug} href={`/service/${s.slug}`} onClick={() => setMobileOpen(false)}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li className={`nav-item ${openDropdown === 'restoration' ? 'open' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('restoration'); }}>
                  Restoration <span className="nav-arrow">▼</span>
                </a>
                <div className="dropdown-menu">
                  {restorationServices.map((s) => (
                    <Link key={s.slug} href={`/service/${s.slug}`} onClick={() => setMobileOpen(false)}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li className={`nav-item ${openDropdown === 'about' ? 'open' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('about'); }}>
                  About <span className="nav-arrow">▼</span>
                </a>
                <div className="dropdown-menu">
                  {aboutLinks.map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
                      {l.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="nav-item">
                <Link href="/financing" onClick={() => setMobileOpen(false)}>Financing</Link>
              </li>

              <li className="nav-item">
                <Link href="/specials" onClick={() => setMobileOpen(false)}>Specials</Link>
              </li>

              <li className="nav-item">
                <Link href="/area" onClick={() => setMobileOpen(false)}>Service Areas</Link>
              </li>
            </ul>

            <div className="header-actions">
              <button className="btn btn-primary btn-sm" onClick={onBookNow}>
                Book Now
              </button>
              <a href="tel:214-307-4264" className="btn btn-red btn-sm">
                Call Now
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
