import styles from "./about.module.css";
import AboutClient from "./AboutClient";
import CtaSection from "../../components/CtaSection";

export const metadata = {
  title: "About Us | Mind Mantra - Clinical Psychology & OCD Treatment",
  description:
    "Learn about Mind Mantra's evidence-based clinical approach and Ms. Gauri, our specialist in OCD, anxiety, depression, relationship therapy, and sexual wellness.",
  keywords: [
    "about Mind Mantra",
    "Ms. Gauri clinical psychologist",
    "mental health center India",
    "evidence-based therapy India",
    "OCD specialist",
    "clinical psychology center",
    "psychological wellness India",
  ],
  alternates: { canonical: "https://mindmantraa.com/about" },
  openGraph: {
    title: "About Us | Mind Mantra - Clinical Psychology & OCD Treatment",
    description:
      "Learn about Mind Mantra's evidence-based clinical approach and Ms. Gauri, our specialist in OCD, anxiety, depression, and relationship therapy.",
    url: "https://mindmantraa.com/about",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "About Mind Mantra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mind Mantra",
    description: "Meet Ms. Gauri and the Mind Mantra clinical team — specialists in OCD, anxiety, depression, and relationship therapy.",
    images: ["/images/logo.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Subpage Hero */}
      <section className={styles.subpageHero}>
        <div className="container">
          <h1 className={styles.subpageTitle}>About Us</h1>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutHeader}>
            <div className={styles.sectionBadge}>Our Trusted Support</div>
            <h2 className={styles.aboutTitle}>
              Dedicated To <span>Building Resilience</span>
            </h2>
          </div>

          <div className={styles.aboutContentFull}>
            <p className={styles.aboutDesc}>
              Ms. Gauri is a highly dedicated Clinical Psychologist with <strong>6+ years of experience</strong> in psychological assessment, psychotherapy, mental health rehabilitation, and evidence based clinical interventions. She has received extensive training across premier healthcare and psychiatric institutions, including All India Institute of Medical Sciences (AIIMS) New Delhi, Lady Hardinge Medical College (LHMC), and specialized mental health organizations. Her professional journey spans hospital based psychiatry, neuropsychological assessment, psychotherapy services, addiction psychiatry, psycho oncology, trauma focused care, and telemental health practice. She works with adolescents, adults, couples, and families to navigate emotional distress and psychiatric conditions through compassionate, evidence based care.
            </p>
            <p className={styles.aboutDesc}>
              Our practice is built on the principle of developing long term emotional resilience, distress tolerance, and psychological flexibility, helping individuals coexist with discomfort and uncertainty.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <AboutClient />
      <CtaSection />
    </>
  );
}
