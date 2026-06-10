"use client";

import Link from "next/link";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.ctaBadge}>Get Started Today</div>
          <h2 className={styles.ctaTitle}>Ready to Take the First Step?</h2>
          <p className={styles.ctaDesc}>
            Schedule a clinical consultation with Ms. Gauri today and begin your journey towards sustainable recovery, emotional resilience, and psychological flexibility.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/appointment" className={styles.ctaBtnPrimary}>
              <span>Book a Session</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
