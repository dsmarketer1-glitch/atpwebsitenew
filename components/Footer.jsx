import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <Image src="/images/logo.png" alt="Anytime Plumbing 365" width={170} height={57} />
                    <p>
                        Expert plumbing, leak detection, sewer repair, and property restoration services
                        for homeowners across the Dallas–Fort Worth Metroplex. Fast, reliable, 24/7.
                    </p>
                    <div className="footer-social-desktop">
                        <a href="https://www.facebook.com/anytimeplumbing365/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/anytimeplumbing365/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@AnyTimePlumbingDrainCleaning" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a href="https://www.yelp.com/biz/anytime-plumbing-365-irving-6?override_cta=Get+pricing+%26+availability" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206l2.67 2.122c.683.542.307 1.59-.502 1.59h-.498zm-7.227 5.238l1.376-5.116c.264-.98 1.726-.98 1.99 0l1.376 5.116c.18.674-.506 1.256-1.137.964l-1.934-.893a.536.536 0 00-.5 0l-1.934.893c-.631.292-1.317-.29-1.137-.964zM5.99 3.345l4.213 8.736c.468.97-.632 1.934-1.51 1.324L1.35 8.347a1.072 1.072 0 01-.28-1.584l2.357-3.062C4.003 2.944 5.567 2.47 5.99 3.345z" /></svg>
                        </a>
                        <a href="https://maps.app.goo.gl/N694T2f19bEcpHEVA" target="_blank" rel="noopener noreferrer" aria-label="Google My Business - Woodlands">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.95-1.82 2.56l2.84 2.2c1.66-1.53 2.62-3.79 2.62-6.48 0-.6-.05-1.18-.15-1.72h-5.43zM4.33 13.5c-.11-.32-.17-.66-.17-1.01s.06-.69.17-1.01l-2.68-2.1c-.55 1.09-.86 2.32-.86 3.61s.31 2.52.86 3.61l2.68-2.1zM10.8 4.8c1.33 0 2.53.46 3.47 1.35l2.6-2.6C15.3 2.13 13.18 1 10.8 1c-3.9 0-7.23 2.25-8.82 5.5l2.68 2.1c.36-2.4 2.45-4.3 4.94-4.3zM10.8 19.2c-2.49 0-4.58-1.9-4.94-4.3l-2.68 2.1c1.59 3.25 4.92 5.5 8.82 5.5 2.38 0 4.5-1.13 6.07-2.95l-2.84-2.2c-.89.65-2.03 1.05-3.23 1.05z" /></svg>
                        </a>
                        <a href="https://maps.app.goo.gl/uKXDcWogZcB1Gdc27" target="_blank" rel="noopener noreferrer" aria-label="Google My Business - Garland">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.95-1.82 2.56l2.84 2.2c1.66-1.53 2.62-3.79 2.62-6.48 0-.6-.05-1.18-.15-1.72h-5.43zM4.33 13.5c-.11-.32-.17-.66-.17-1.01s.06-.69.17-1.01l-2.68-2.1c-.55 1.09-.86 2.32-.86 3.61s.31 2.52.86 3.61l2.68-2.1zM10.8 4.8c1.33 0 2.53.46 3.47 1.35l2.6-2.6C15.3 2.13 13.18 1 10.8 1c-3.9 0-7.23 2.25-8.82 5.5l2.68 2.1c.36-2.4 2.45-4.3 4.94-4.3zM10.8 19.2c-2.49 0-4.58-1.9-4.94-4.3l-2.68 2.1c1.59 3.25 4.92 5.5 8.82 5.5 2.38 0 4.5-1.13 6.07-2.95l-2.84-2.2c-.89.65-2.03 1.05-3.23 1.05z" /></svg>
                        </a>
                        <a href="https://maps.app.goo.gl/XRxiS2yr7gf7kqo59" target="_blank" rel="noopener noreferrer" aria-label="Google My Business - Irving">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.95-1.82 2.56l2.84 2.2c1.66-1.53 2.62-3.79 2.62-6.48 0-.6-.05-1.18-.15-1.72h-5.43zM4.33 13.5c-.11-.32-.17-.66-.17-1.01s.06-.69.17-1.01l-2.68-2.1c-.55 1.09-.86 2.32-.86 3.61s.31 2.52.86 3.61l2.68-2.1zM10.8 4.8c1.33 0 2.53.46 3.47 1.35l2.6-2.6C15.3 2.13 13.18 1 10.8 1c-3.9 0-7.23 2.25-8.82 5.5l2.68 2.1c.36-2.4 2.45-4.3 4.94-4.3zM10.8 19.2c-2.49 0-4.58-1.9-4.94-4.3l-2.68 2.1c1.59 3.25 4.92 5.5 8.82 5.5 2.38 0 4.5-1.13 6.07-2.95l-2.84-2.2c-.89.65-2.03 1.05-3.23 1.05z" /></svg>
                        </a>
                    </div>
                </div>

                <div className="footer-mobile-container">
                    <div className="footer-col social-col-mobile">
                        <h4>Social Media</h4>
                        <div className="footer-social-vertical">
                            <a href="https://www.facebook.com/anytimeplumbing365/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                                <span className="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></span>
                                <span className="social-text">Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/anytimeplumbing365/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                                <span className="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg></span>
                                <span className="social-text">Instagram</span>
                            </a>
                            <a href="https://www.youtube.com/@AnyTimePlumbingDrainCleaning" target="_blank" rel="noopener noreferrer" className="social-link-item">
                                <span className="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></span>
                                <span className="social-text">YouTube</span>
                            </a>
                            <a href="https://www.yelp.com/biz/anytime-plumbing-365-irving-6?override_cta=Get+pricing+%26+availability" target="_blank" rel="noopener noreferrer" className="social-link-item">
                                <span className="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206l2.67 2.122c.683.542.307 1.59-.502 1.59h-.498zm-7.227 5.238l1.376-5.116c.264-.98 1.726-.98 1.99 0l1.376 5.116c.18.674-.506 1.256-1.137.964l-1.934-.893a.536.536 0 00-.5 0l-1.934.893c-.631.292-1.317-.29-1.137-.964zM5.99 3.345l4.213 8.736c.468.97-.632 1.934-1.51 1.324L1.35 8.347a1.072 1.072 0 01-.28-1.584l2.357-3.062C4.003 2.944 5.567 2.47 5.99 3.345z" /></svg></span>
                                <span className="social-text">Yelp</span>
                            </a>
                            <a href="https://maps.app.goo.gl/XRxiS2yr7gf7kqo59" target="_blank" rel="noopener noreferrer" className="social-link-item">
                                <span className="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.95-1.82 2.56l2.84 2.2c1.66-1.53 2.62-3.79 2.62-6.48 0-.6-.05-1.18-.15-1.72h-5.43zM4.33 13.5c-.11-.32-.17-.66-.17-1.01s.06-.69.17-1.01l-2.68-2.1c-.55 1.09-.86 2.32-.86 3.61s.31 2.52.86 3.61l2.68-2.1zM10.8 4.8c1.33 0 2.53.46 3.47 1.35l2.6-2.6C15.3 2.13 13.18 1 10.8 1c-3.9 0-7.23 2.25-8.82 5.5l2.68 2.1c.36-2.4 2.45-4.3 4.94-4.3zM10.8 19.2c-2.49 0-4.58-1.9-4.94-4.3l-2.68 2.1c1.59 3.25 4.92 5.5 8.82 5.5 2.38 0 4.5-1.13 6.07-2.95l-2.84-2.2c-.89.65-2.03 1.05-3.23 1.05z" /></svg></span>
                                <span className="social-text">Irving Office</span>
                            </a>
                            <a href="https://maps.app.goo.gl/N694T2f19bEcpHEVA" target="_blank" rel="noopener noreferrer" className="social-link-item">
                                <span className="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.95-1.82 2.56l2.84 2.2c1.66-1.53 2.62-3.79 2.62-6.48 0-.6-.05-1.18-.15-1.72h-5.43zM4.33 13.5c-.11-.32-.17-.66-.17-1.01s.06-.69.17-1.01l-2.68-2.1c-.55 1.09-.86 2.32-.86 3.61s.31 2.52.86 3.61l2.68-2.1zM10.8 4.8c1.33 0 2.53.46 3.47 1.35l2.6-2.6C15.3 2.13 13.18 1 10.8 1c-3.9 0-7.23 2.25-8.82 5.5l2.68 2.1c.36-2.4 2.45-4.3 4.94-4.3zM10.8 19.2c-2.49 0-4.58-1.9-4.94-4.3l-2.68 2.1c1.59 3.25 4.92 5.5 8.82 5.5 2.38 0 4.5-1.13 6.07-2.95l-2.84-2.2c-.89.65-2.03 1.05-3.23 1.05z" /></svg></span>
                                <span className="social-text">Woodlands Office</span>
                            </a>
                            <a href="https://maps.app.goo.gl/uKXDcWogZcB1Gdc27" target="_blank" rel="noopener noreferrer" className="social-link-item">
                                <span className="social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.95-1.82 2.56l2.84 2.2c1.66-1.53 2.62-3.79 2.62-6.48 0-.6-.05-1.18-.15-1.72h-5.43zM4.33 13.5c-.11-.32-.17-.66-.17-1.01s.06-.69.17-1.01l-2.68-2.1c-.55 1.09-.86 2.32-.86 3.61s.31 2.52.86 3.61l2.68-2.1zM10.8 4.8c1.33 0 2.53.46 3.47 1.35l2.6-2.6C15.3 2.13 13.18 1 10.8 1c-3.9 0-7.23 2.25-8.82 5.5l2.68 2.1c.36-2.4 2.45-4.3 4.94-4.3zM10.8 19.2c-2.49 0-4.58-1.9-4.94-4.3l-2.68 2.1c1.59 3.25 4.92 5.5 8.82 5.5 2.38 0 4.5-1.13 6.07-2.95l-2.84-2.2c-.89.65-2.03 1.05-3.23 1.05z" /></svg></span>
                                <span className="social-text">Garland Office</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col contact-col-mobile">
                        <h4>Contact</h4>
                        <div className="footer-location">
                            <h5>Woodlands Office</h5>
                            <p><a href="tel:713-561-3276">📞 713-561-3276</a></p>
                            <p><a href="https://www.google.com/maps/place/25420+Kuykendahl+Rd+Suite+B200-236,+The+Woodlands,+TX+77375" target="_blank" rel="noopener noreferrer">
                                📍 25420 Kuykendahl Rd, Suite B200-236, The Woodlands, TX
                            </a></p>
                        </div>
                        <div className="footer-location">
                            <h5>Irving Office</h5>
                            <p><a href="tel:214-307-4264">📞 214-307-4264</a></p>
                            <p><a href="https://www.google.com/maps/place/320+Decker+Dr+Ste+102-08,+Irving,+TX+75062" target="_blank" rel="noopener noreferrer">
                                📍 320 Decker Dr, Suite 102-08, Irving, TX
                            </a></p>
                        </div>
                        <div className="footer-location">
                            <h5>Garland Office</h5>
                            <p><a href="tel:214-430-3461">📞 214-430-3461</a></p>
                            <p><a href="https://www.google.com/maps/place/102+N+Shiloh+Rd+Suite+%23104,+Dallas,+TX+75042" target="_blank" rel="noopener noreferrer">
                                📍 102 N Shiloh Rd, Suite 104, Garland, TX
                            </a></p>
                        </div>
                    </div>
                </div>

                <div className="footer-mobile-container">
                    <div className="footer-col services-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/service/drain-cleaning">Drain Cleaning</Link></li>
                            <li><Link href="/service/emergency-plumber">Emergency Plumber</Link></li>
                            <li><Link href="/service/water-leak-detection-repair">Water Leak Detection</Link></li>
                            <li><Link href="/service/sewer-line-repair">Sewer Line Repair</Link></li>
                            <li><Link href="/service/water-heater-repair">Water Heater Repair</Link></li>
                            <li><Link href="/service/hydro-jetting">Hydro Jetting</Link></li>
                            <li><Link href="/service/water-damage-restoration">Water Damage Restoration</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col company-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/financing">Financing</Link></li>
                            <li><Link href="/specials">Specials</Link></li>

                            <li><Link href="/area">Service Areas</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-trust">
                <div className="footer-trust-badge">
                    <span className="footer-trust-badge-icon">🛡️</span>
                    Licensed & Insured
                </div>
                <div className="footer-trust-badge">
                    <span className="footer-trust-badge-icon">⏰</span>
                    24/7 Emergency Service
                </div>
                <div className="footer-trust-badge">
                    <span className="footer-trust-badge-icon">✅</span>
                    Satisfaction Guaranteed
                </div>
                <div className="footer-trust-badge">
                    <span className="footer-trust-badge-icon">💰</span>
                    Upfront Pricing
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p>© {new Date().getFullYear()} Anytime Plumbing 365. All Rights Reserved. License #37912</p>
                    <div className="footer-bottom-links">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
