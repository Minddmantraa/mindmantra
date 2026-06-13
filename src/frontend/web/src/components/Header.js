"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = (e, hash) => {
    // If we're on the home page, scroll smoothly instead of full reload
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar Info */}
      <div className={styles.topBar}>
        <div className={`${styles.topBarContainer} container`}>
          <div className={styles.topInfo}>
            <a href="tel:+917706000771" className={styles.topBarLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--color-accent-teal)" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 77060 00771</span>
            </a>
            <a href="mailto:minddmantraa@gmail.com" className={styles.topBarLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--color-accent-teal)" }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>minddmantraa@gmail.com</span>
            </a>
          </div>
          <div className={styles.socials}>
            {["Instagram", "Facebook", "LinkedIn"].map((platform) => (
              <a 
                key={platform} 
                href={platform === "Instagram" ? "https://www.instagram.com/minddmantraa?igsh=c3VwcjI2MGtoc202&utm_source=qr" : "#"} 
                className={styles.socialLink} 
                title={platform}
                target={platform === "Instagram" ? "_blank" : undefined}
                rel={platform === "Instagram" ? "noopener noreferrer" : undefined}
              >
                {platform === "Instagram" && (
                  <svg viewBox="0 0 24 24"><path d="M12 2.1c3.2 0 3.6 0 4.9.1c1.2.1 1.8.3 2.2.5c.6.2 1 .5 1.4.9c.4.4.7.8.9 1.4c.2.4.4 1 .5 2.2c.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2c-.2.6-.5 1-.9 1.4c-.4.4-.8.7-1.4.9c-.4.2-1 .4-2.2.5c-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5c-.6-.2-1-.5-1.4-.9c-.4-.4-.7-.8-.9-1.4c-.2-.4-.4-1-.5-2.2c-.1-1.3-.1-1.7-.1-4.9s0-3.5.1-4.9c.1-1.2.3-1.8.5-2.2c.2-.6.5-1 .9-1.4c.4-.4.8-.7 1.4-.9c.4-.2 1-.4 2.2-.5c1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 1c-1.3.1-2.2.3-3 .6c-.8.3-1.5.7-2.1 1.4C1.2 3.6.8 4.3.5 5.1C.2 5.9.1 6.8 0 8c0 1.3 0 1.7 0 5s0 3.7.1 5c.1 1.2.3 2.1.6 2.9c.3.8.7 1.5 1.4 2.1c.6.6 1.3 1.1 2.1 1.4c.8.3 1.7.4 2.9.5c1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.2-.1 2.1-.3 2.9-.5c.8-.3 1.5-.7 2.1-1.4c.6-.6 1.1-1.3 1.4-2.1c.3-.8.4-1.7.5-2.9c.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.2-.3-2.1-.6-2.9c-.3-.8-.7-1.5-1.4-2.1c-.6-.6-1.3-1.1-2.1-1.4c-.8-.3-1.7-.4-2.9-.5c-1.3-.1-1.7-.1-5-.1z"/><path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2s6.2-2.8 6.2-6.2s-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1s4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1z"/><circle cx="18.4" cy="5.6" r="1.4"/></svg>
                )}
                {platform === "Facebook" && (
                  <svg viewBox="0 0 24 24"><path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 10.9 10.1 11.9v-8.4H7.1V12h3v-2.7c0-3 1.8-4.7 4.5-4.7c1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 1-2 1.9V12h3.3l-.5 3.5h-2.8v8.4C19.6 22.9 24 18 24 12z"/></svg>
                )}
                {platform === "LinkedIn" && (
                  <svg viewBox="0 0 24 24"><path d="M22.2 0H1.8C.8 0 0 .8 0 1.7v20.6C0 23.2.8 24 1.8 24h20.5c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7zM7.1 20.4H3.6V9h3.6v11.4zM5.3 7.6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.8 2-2 2zm15.1 12.8H17V14.8c0-1.3 0-3-1.9-3c-1.9 0-2.2 1.5-2.2 2.9v5.7h-3.6V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.5-1.9c3.7 0 4.4 2.5 4.4 5.7v6z"/></svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Navigation Bar */}
      <div className={styles.navWrapper}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo} onClick={(e) => handleLinkClick(e, "home")}>
            <img src="/images/logo.png" alt="Mind Mantra" className={styles.logoImage} />
          </Link>

          <ul className={styles.navMenu}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.navLink}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/clinical-expertise" className={styles.navLink}>
                Clinical Expertise
              </Link>
            </li>
            <li>
              <Link href="/dsm-5" className={styles.navLink}>
                Classification
              </Link>
            </li>

            <li>
              <Link href="/contact" className={styles.navLink}>
                Contact Us
              </Link>
            </li>
          </ul>

          <Link href="/appointment" className={styles.btnAppointment}>
            <span>Book a Session</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </Link>

          <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "24px", height: "24px" }}>
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileDrawerContent}>
            <ul className={styles.mobileNavMenu}>
              <li>
                <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clinical-expertise" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                  Clinical Expertise
                </Link>
              </li>
              <li>
                <Link href="/dsm-5" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                  Classification
                </Link>
              </li>

              <li>
                <Link href="/contact" className={styles.mobileNavLink}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <Link href="/appointment" className={styles.mobileBtnAppointment} onClick={() => setMobileMenuOpen(false)}>
              <span>Book a Session</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
