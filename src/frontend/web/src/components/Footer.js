"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();

  const handleLinkClick = (e, hash) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our updates!");
    e.target.reset();
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Column 1: Logo, description, socials */}
          <div className={styles.footerCol}>
            <img src="/images/logo.png" alt="Mind Mantra" className={styles.footerLogoImg} style={{ filter: "brightness(0) invert(1)" }} />
            <p className={styles.footerDesc}>
              We help build deep emotional resilience, distress tolerance, and psychological flexibility to empower your journey to recovery every single day.
            </p>
            <div className={styles.footerSocialList}>
              {["Telegram", "Instagram", "Facebook", "YouTube", "LinkedIn"].map((platform) => (
                <a key={platform} href="#" className={styles.footerSocialBtn} title={platform}>
                  {platform === "Telegram" && (
                    <svg viewBox="0 0 24 24"><path d="M21.9 2.1c-.2-.1-.5-.1-.7 0L1.6 9.8c-.5.2-.7.7-.6 1.2c.1.5.5.9 1 .9h5.1l1.6 5.8c.1.3.4.5.7.5c.2 0 .4-.1.6-.2l3.4-2.8l4.7 3.5c.2.2.5.2.8 0c.2-.2.3-.5.2-.8l3.6-15.1c0-.3-.1-.6-.3-.7zm-13.4 9.9L4.8 11l13.1-5.2l-9.4 6.2z"/></svg>
                  )}
                  {platform === "Instagram" && (
                    <svg viewBox="0 0 24 24"><path d="M12 2.1c3.2 0 3.6 0 4.9.1c1.2.1 1.8.3 2.2.5c.6.2 1 .5 1.4.9c.4.4.7.8.9 1.4c.2.4.4 1 .5 2.2c.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2c-.2.6-.5 1-.9 1.4c-.4.4-.8.7-1.4.9c-.4.2-1 .4-2.2.5c-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5c-.6-.2-1-.5-1.4-.9c-.4-.4-.7-.8-.9-1.4c-.2-.4-.4-1-.5-2.2c-.1-1.3-.1-1.7-.1-4.9s0-3.5.1-4.9c.1-1.2.3-1.8.5-2.2c.2-.6.5-1 .9-1.4c.4-.4.8-.7 1.4-.9c.4-.2 1-.4 2.2-.5c1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 1c-1.3.1-2.2.3-3 .6c-.8.3-1.5.7-2.1 1.4C1.2 3.6.8 4.3.5 5.1C.2 5.9.1 6.8 0 8c0 1.3 0 1.7 0 5s0 3.7.1 5c.1 1.2.3 2.1.6 2.9c.3.8.7 1.5 1.4 2.1c.6.6 1.3 1.1 2.1 1.4c.8.3 1.7.4 2.9.5c1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.2-.1 2.1-.3 2.9-.5c.8-.3 1.5-.7 2.1-1.4c.6-.6 1.1-1.3 1.4-2.1c.3-.8.4-1.7.5-2.9c.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.2-.3-2.1-.6-2.9c-.3-.8-.7-1.5-1.4-2.1c-.6-.6-1.3-1.1-2.1-1.4c-.8-.3-1.7-.4-2.9-.5c-1.3-.1-1.7-.1-5-.1z"/><path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2s6.2-2.8 6.2-6.2s-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1s4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1z"/><circle cx="18.4" cy="5.6" r="1.4"/></svg>
                  )}
                  {platform === "Facebook" && (
                    <svg viewBox="0 0 24 24"><path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 10.9 10.1 11.9v-8.4H7.1V12h3v-2.7c0-3 1.8-4.7 4.5-4.7c1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 1-2 1.9V12h3.3l-.5 3.5h-2.8v8.4C19.6 22.9 24 18 24 12z"/></svg>
                  )}
                  {platform === "YouTube" && (
                    <svg viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1-1-1.8-2-2C19.7 3.8 12 3.8 12 3.8s-7.7 0-9.5.4c-1 .3-1.7 1-2 2C.1 8 .1 12 .1 12s0 4 .4 5.8c.3 1 1 1.8 2 2c1.8.4 9.5.4 9.5.4s7.7 0 9.5-.4c1-.3 1.7-1 2-2c.4-1.8.4-5.8.4-5.8s0-4-.4-5.8zM9.5 15.5V8.5l6.5 3.5l-6.5 3.5z"/></svg>
                  )}
                  {platform === "LinkedIn" && (
                    <svg viewBox="0 0 24 24"><path d="M22.2 0H1.8C.8 0 0 .8 0 1.7v20.6C0 23.2.8 24 1.8 24h20.5c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7zM7.1 20.4H3.6V9h3.6v11.4zM5.3 7.6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.8 2-2 2zm15.1 12.8H17V14.8c0-1.3 0-3-1.9-3c-1.9 0-2.2 1.5-2.2 2.9v5.7h-3.6V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.5-1.9c3.7 0 4.4 2.5 4.4 5.7v6z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Contact Us</h4>
            <div className={styles.footerContactList}>
              <div className={styles.footerContactItem}>
                <div className={styles.footerContactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>Safdarjung Enclave, Delhi, India 110023</span>
              </div>
              <div className={styles.footerContactItem}>
                <div className={styles.footerContactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span>+91 77060 00771</span>
              </div>
              <div className={styles.footerContactItem}>
                <div className={styles.footerContactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span>minddmantraa@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Services</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>
                <Link href="/services#service-1">OCD Recovery</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/services#service-2">Sexual Wellness</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/services#service-3">Bipolar Support</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/services#service-8">Anxiety & Depression</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/services#service-9">Addiction Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>
                <Link href="/" onClick={(e) => handleLinkClick(e, "home")}>Home</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/services">Services</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/clinical-expertise">Expertise</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/dsm-5">Classification Directory</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/#testimonials" onClick={(e) => handleLinkClick(e, "testimonials")}>Testimonials</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/appointment">Book a Session</Link>
              </li>
              <li className={styles.footerLinkItem}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Stay Informed */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Stay Informed</h4>
            <form onSubmit={handleSubscribe} className={styles.footerForm}>
              <input type="email" placeholder="Email" className={styles.footerFormInput} required />
              <button type="submit" className={styles.footerSubscribeBtn}>
                <span>Subscribe Now</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <hr className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Mind Mantra. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <a href="#">Conditions of Use</a>
            <span>|</span>
            <a href="#">Privacy Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
