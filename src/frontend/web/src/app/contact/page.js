import styles from "./contact.module.css";
import ContactClient from "./ContactClient";
import CtaSection from "../../components/CtaSection";

export const metadata = {
  title: "Contact Us | Mind Mantra - Mental Health Center, New Delhi",
  description:
    "Contact Mind Mantra at Safdarjung Enclave, New Delhi. Reach our clinical team by phone, email, or our contact form. Start your mental wellness journey today.",
  keywords: [
    "Mind Mantra contact",
    "mental health clinic New Delhi",
    "clinical psychologist contact India",
    "therapy center Safdarjung Enclave",
    "contact therapist India",
    "Mind Mantra phone number",
    "book mental health consultation",
  ],
  alternates: { canonical: "https://mindmantraa.com/contact" },
  openGraph: {
    title: "Contact Us | Mind Mantra - Mental Health Center, New Delhi",
    description:
      "Reach our clinical team at Safdarjung Enclave, New Delhi. Phone, email, or fill our contact form to begin your wellness journey.",
    url: "https://mindmantraa.com/contact",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Contact Mind Mantra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mind Mantra",
    description: "Get in touch with our clinical team in New Delhi for OCD, anxiety, depression & relationship therapy.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Subpage Hero */}
      <section className={styles.subpageHero}>
        <div className="container">
          <h1 className={styles.subpageTitle}>Contact Us</h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            
            {/* Left Column: Info Details */}
            <div className={styles.contactInfoCard}>
              <h3 className={styles.infoTitle}>Connect With Us</h3>
              <p className={styles.infoDesc}>
                Have a question or want to know more about our therapeutic methodologies? Reach out via email, phone, or stop by our Safdarjung Enclave clinic.
              </p>

              <div className={styles.contactList}>
                {/* Location */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className={styles.itemContent}>
                    <h4>Clinic Location</h4>
                    <p>Safdarjung Enclave, New Delhi, Delhi, India 110023</p>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className={styles.itemContent}>
                    <h4>Phone Number</h4>
                    <p>
                      <a href="tel:+917706000771" className={styles.itemLink}>
                        +91 77060 00771
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className={styles.itemContent}>
                    <h4>Email Address</h4>
                    <p>
                      <a href="mailto:info@mindmantra.com" className={styles.itemLink}>
                        info@mindmantra.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form Client Component */}
            <ContactClient />

          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
