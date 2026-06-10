import Dsm5Client from "./Dsm5Client";
import styles from "./dsm5.module.css";
import CtaSection from "../../components/CtaSection";

export const metadata = {
  title: "Mental Health Conditions Guide (DSM-5) | Mind Mantra",
  description:
    "Browse Mind Mantra's clinical reference guide of DSM-5 mental health conditions — OCD, anxiety, depression, ADHD, autism, trauma, bipolar, eating disorders, and more.",
  keywords: [
    "DSM-5 mental disorders list",
    "psychological disorders India",
    "OCD symptoms classification",
    "anxiety disorder DSM-5",
    "depression diagnosis",
    "ADHD symptoms guide",
    "mental health conditions list",
    "psychological disorder treatment India",
    "clinical mental health guide",
  ],
  alternates: { canonical: "https://mindmantraa.com/dsm-5" },
  openGraph: {
    title: "Mental Health Conditions Guide (DSM-5) | Mind Mantra",
    description:
      "Clinical reference guide covering OCD, anxiety, depression, ADHD, autism, trauma, bipolar, and eating disorders — with treatment options at Mind Mantra.",
    url: "https://mindmantraa.com/dsm-5",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Mind Mantra DSM-5 Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Health Conditions Guide | Mind Mantra",
    description: "Comprehensive DSM-5 guide covering OCD, anxiety, depression, ADHD, autism, trauma and more.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Dsm5Page() {
  return (
    <>
      {/* Subpage Hero */}
      <section className={styles.subpageHero}>
        <div className="container">
          <h1 className={styles.subpageTitle}>Mental Health Conditions We Support</h1>
        </div>
      </section>

      {/* Directory Section */}
      <section className={styles.dsmSection}>
        <div className="container">
          <p className={styles.dsmIntro}>
            At Mind Mantra, we offer clinical assessment, evidence-based psychotherapy, and personalized wellness plans for a wide range of psychological and emotional concerns. Below is our educational directory outlining clinical classifications and conditions we treat.
          </p>

          <Dsm5Client />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
