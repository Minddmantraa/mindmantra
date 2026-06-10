import styles from "./appointment.module.css";
import AppointmentClient from "./AppointmentClient";

export const metadata = {
  title: "Book a Therapy Session Online | Mind Mantra",
  description:
    "Book your session with Ms. Gauri for OCD recovery, anxiety, depression, relationship counseling, or sexual wellness therapy. Easy online booking in India.",
  keywords: [
    "book therapy session India",
    "online mental health appointment",
    "book OCD therapist India",
    "psychological counseling booking",
    "book session Ms. Gauri",
    "mental health appointment India",
    "therapy session online booking",
    "Mind Mantra appointment",
  ],
  alternates: { canonical: "https://mindmantraa.com/appointment" },
  openGraph: {
    title: "Book a Therapy Session Online | Mind Mantra",
    description:
      "Book your session with Ms. Gauri for OCD, anxiety, depression, relationship counseling, or sexual wellness therapy.",
    url: "https://mindmantraa.com/appointment",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Book a Session at Mind Mantra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Therapy Session | Mind Mantra",
    description: "Schedule your OCD, anxiety, depression or relationship counseling session with Ms. Gauri online.",
    images: ["/images/logo.png"],
  },
};

export default function AppointmentPage() {
  return (
    <>
      {/* Subpage Hero */}
      <section className={styles.subpageHero}>
        <div className="container">
          <h1 className={styles.subpageTitle}>Book a Session</h1>
        </div>
      </section>

      {/* Booking Section */}
      <section className={styles.appointmentSection}>
        <div className="container">
          <div className={styles.appointmentGrid}>
            
            {/* Left Column: Expectations & Info */}
            <div className={styles.infoCol}>
              <h3 className={styles.infoTitle}>Prioritize Your Well-Being</h3>
              <p className={styles.infoDesc}>
                Take your first step today. Fill out our simple booking request form, and our dedicated support team will handle the rest.
              </p>

              {/* Steps timeline */}
              <div className={styles.stepsTimeline}>
                <div className={styles.timelineStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h4>Submit Request</h4>
                    <p>Enter your contact details, select your clinical focus area, and specify date/time preferences.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h4>Complete Payment</h4>
                    <p>Complete the payment step to secure and confirm your scheduled session slot.</p>
                  </div>
                </div>

                <div className={styles.timelineStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h4>Clinical Session</h4>
                    <p>Meet with Ms. Gauri or our clinical team for a comprehensive diagnostic assessment or therapy session.</p>
                  </div>
                </div>
              </div>

              {/* Value boxes */}
              <div className={styles.featureBox}>
                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.featureIcon} style={{ width: "16px", height: "16px" }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>100% Secure & Confidential</span>
                </div>

                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.featureIcon} style={{ width: "16px", height: "16px" }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Gold-Standard Clinical Modalities</span>
                </div>

                <div className={styles.featureItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.featureIcon} style={{ width: "16px", height: "16px" }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Flexible Morning / Evening Slots</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Form */}
            <AppointmentClient />

          </div>
        </div>
      </section>
    </>
  );
}
