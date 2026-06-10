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
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "About Mind Mantra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mind Mantra",
    description: "Meet Ms. Gauri and the Mind Mantra clinical team — specialists in OCD, anxiety, depression, and relationship therapy.",
    images: ["/images/og-image.jpg"],
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
              Dedicated To <span>Building Resilience</span> & Autonomy in OCD
            </h2>
          </div>

          <div className={styles.aboutContentFull}>
            <p className={styles.aboutDesc}>
              Ms. Gauri is a highly dedicated Clinical Psychologist with <strong>6+ years of experience</strong> in psychological assessment, psychotherapy, mental health rehabilitation, and evidence-based clinical interventions. She has received extensive training across premier healthcare and psychiatric institutions, including AIIMS New Delhi, Lady Hardinge Medical College (LHMC), and specialized mental health organizations.
            </p>
            <p className={styles.aboutDesc}>
              Her professional journey spans hospital-based psychiatry, neuropsychological assessment, psychotherapy services, addiction psychiatry, psycho-oncology, trauma-focused care, and tele-mental health practice. She works with adolescents, adults, couples, and families, helping individuals navigate emotional distress, psychiatric conditions, interpersonal difficulties, and life transitions through compassionate, evidence-based care.
            </p>
            <div className={styles.quoteBlock}>
              "Rather than aiming only to reduce compulsions or intrusive thoughts, we emphasize strengthening emotional tolerance, psychological flexibility, and inner stability—core capacities that support sustainable and long-term OCD recovery. True healing occurs when individuals learn to coexist with discomfort, uncertainty, and emotional intensity without being controlled by them."
            </div>
            <p className={styles.aboutDesc}>
              Special focus on emotional resilience building, distress tolerance, and psychological flexibility in OCD recovery. Working with adolescents and adults across diverse OCD presentations.
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
