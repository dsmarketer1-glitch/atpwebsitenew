'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const plumbingServices = [
  { name: 'Drain Cleaning', slug: 'drain-cleaning' },
  { name: 'Drain Pipe Installation', slug: 'drain-pipe-installation' },
  { name: 'Drain Pipe Maintenance', slug: 'drain-pipe-maintenance' },
  { name: 'Drain Pipe Repair', slug: 'drain-pipe-repair' },
  { name: 'Emergency Plumber', slug: 'emergency-plumber' },
  { name: 'Home Repiping', slug: 'home-repiping' },
  { name: 'Hydro Jetting', slug: 'hydro-jetting' },
  { name: 'Main Water Line Repair', slug: 'main-water-line-repair' },
  { name: 'Main Water Line Replacement', slug: 'main-water-line-replacement' },
  { name: 'Plumbing Inspection', slug: 'plumbing-inspection' },
  { name: 'Plumbing Maintenance', slug: 'plumbing-maintenance' },
  { name: 'Plumbing Repair', slug: 'plumbing-repair' },
  { name: 'Rooter Services', slug: 'rooter-services' },
  { name: 'Sewer Line Inspection', slug: 'sewer-line-inspection' },
  { name: 'Sewer Line Repair', slug: 'sewer-line-repair' },
  { name: 'Sewer Line Replacement', slug: 'sewer-line-replacement' },
  { name: 'Slab Leak Detection & Repair', slug: 'slab-leak-detection-repair' },
  { name: 'Toilet Repair & Installation', slug: 'toilet-repair-installation' },
  { name: 'Water Heater Repair', slug: 'water-heater-repair' },
  { name: 'Water Heater Replacement & Installation', slug: 'water-heater-replacement-installation' },
  { name: 'Water Leak Detection & Repair', slug: 'water-leak-detection-repair' },
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
      <div className="top-bar">
        <p>Serving Irving, Garland, and surrounding areas throughout the Dallas–Fort Worth Metroplex</p>
      </div>
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
                  About Us <span className="nav-arrow">▼</span>
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
                <Link href="/area" onClick={() => setMobileOpen(false)}>Service Areas</Link>
              </li>
            </ul>

            <div className="header-actions">
              <button className="btn btn-primary btn-sm" onClick={onBookNow}>
                Book Now
              </button>
              <a href="tel:214-307-4264" className="btn btn-red btn-sm">
                Call 214-307-4264
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
