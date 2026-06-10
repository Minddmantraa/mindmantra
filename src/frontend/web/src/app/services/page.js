import styles from "./services.module.css";
import CtaSection from "../../components/CtaSection";

export const metadata = {
  title: "Clinical Psychological & Mental Health Services | Mind Mantra",
  description:
    "Mind Mantra provides evidence-based therapies (CBT, ERP, ACT, DBT, EMDR) for OCD recovery, anxiety, depression, sexual wellness, relationship counseling, and more.",
  keywords: [
    "OCD therapy India",
    "CBT ERP therapy",
    "relationship counseling India",
    "sexual wellness therapy India",
    "anxiety depression treatment",
    "online mental health services India",
    "DBT ACT EMDR therapy",
    "psychological counseling",
    "mental health services Mind Mantra",
  ],
  alternates: { canonical: "https://mindmantraa.com/services" },
  openGraph: {
    title: "Clinical Psychological & Mental Health Services | Mind Mantra",
    description:
      "Evidence-based therapies (CBT, ERP, ACT, DBT, EMDR) for OCD, anxiety, depression, relationship therapy, and sexual wellness.",
    url: "https://mindmantraa.com/services",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Mind Mantra Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Health Services | Mind Mantra",
    description: "CBT, ERP, ACT, DBT & EMDR for OCD, anxiety, depression, relationship & sexual wellness therapy.",
    images: ["/images/og-image.jpg"],
  },
};

const servicesList = [
  {
    id: 1,
    name: "Obsessive Compulsive Disorder Recovery",
    shortName: "OCD Recovery",
    image: "/images/dr-gauri.jpg",
    title: "Obsessive Compulsive Disorder Recovery",
    desc: "Evidence-based, gold-standard clinical protocols (ERP, CBT, ACT) to help individuals break free from obsessive doubts and compulsive rituals, building sustainable emotional resilience.",
    bullets: [
      "Exposure & Response Prevention (ERP) to face triggers systematically",
      "ACT techniques to tolerate distress and coexist with uncertainty",
      "Tailored strategies for Pure O, contamination, ROCD, and intrusive thoughts"
    ]
  },
  {
    id: 2,
    name: "Sexual Dysfunctionality",
    shortName: "Sexual Dysfunctionality",
    image: "/images/service-sexual.jpg",
    title: "Sexual Dysfunctionality (ED, PME & Compulsive Masturbation)",
    desc: "Professional and confidential clinical counseling for Erectile Dysfunction (ED), Premature Ejaculation (PME), and compulsive sexual behaviors to resolve performance anxiety and restore intimacy.",
    bullets: [
      "Cognitive restructuring of performance-related anxieties",
      "Behavioral training and somatic grounding practices",
      "Couples integration and relational intimacy rebuilding"
    ]
  },
  {
    id: 3,
    name: "Bipolar Disorder Support",
    shortName: "Bipolar Support",
    image: "/images/service-growth.jpg",
    title: "Bipolar Disorder Support",
    desc: "Comprehensive therapeutic management for Bipolar I and II, focused on mood tracking, stabilization strategies, and cognitive behavioral training to maintain equilibrium.",
    bullets: [
      "Psychoeducation on mood cycles and early trigger identification",
      "Collaborative relapse prevention plans and routine structuring",
      "Family support programs to enhance mutual understanding"
    ]
  },
  {
    id: 4,
    name: "Sleep Disorder Management",
    shortName: "Sleep Therapy",
    image: "/images/service-counseling.jpg",
    title: "Sleep Disorder Management",
    desc: "Evidence-based Cognitive Behavioral Therapy for Insomnia (CBT-I) to tackle chronic sleeplessness, sleep anxiety, and irregular sleep cycles without dependency.",
    bullets: [
      "Detailed sleep hygiene protocols and circadian rhythm retraining",
      "Stimulus control therapy and sleep restriction coaching",
      "Cognitive reframing of nighttime anxieties and overthinking"
    ]
  },
  {
    id: 5,
    name: "Eating Disorder Therapy",
    shortName: "Eating Disorder Support",
    image: "/images/service-relationship.jpg",
    title: "Eating Disorder Therapy",
    desc: "Holistic therapeutic support for Anorexia, Bulimia, and Binge Eating Disorder, centering on rebuilding a healthy relationship with food, body image, and self-worth.",
    bullets: [
      "Cognitive restructuring of body image distortions",
      "Emotional regulation skills to address stress-related eating",
      "Integrated mindfulness during meal times and somatic reconnection"
    ]
  },
  {
    id: 6,
    name: "Relationship Management",
    shortName: "Relationship Therapy",
    image: "/images/service-relationship.jpg",
    title: "Relationship Management",
    desc: "Systemic therapy for couples and family dynamics, designed to resolve persistent conflicts, repair attachment wounds, and establish secure, conscious communication patterns.",
    bullets: [
      "Conflict resolution through non-violent communication protocols",
      "Identifying codependency cycles and setting healthy boundaries",
      "Pre-marital and marital counseling to align core partnership values"
    ]
  },
  {
    id: 7,
    name: "Schizophrenia Support",
    shortName: "Schizophrenia Support",
    image: "/images/therapist-3.jpg",
    title: "Schizophrenia & Psychosis Support",
    desc: "Clinical support focusing on social skills, reality testing, cognitive rehabilitation, and family intervention to help individuals lead functional, meaningful lives.",
    bullets: [
      "Cognitive behavior therapy for psychosis (CBTp) to manage hallucinations",
      "Social skills training and daily functioning restoration",
      "Supportive psychoeducation for caregivers and families"
    ]
  },
  {
    id: 8,
    name: "Anxiety & Depression Support",
    shortName: "Anxiety & Depression",
    image: "/images/service-counseling.jpg",
    title: "Anxiety and Depression Recovery",
    desc: "Personalized therapeutic interventions targeting generalized anxiety, panic attacks, social phobias, and clinical depression to rebuild joy, motivation, and calmness.",
    bullets: [
      "Somatic grounding, progressive relaxation, and breathing exercises",
      "Cognitive restructuring of depressive thoughts and catastrophizing",
      "Behavioral activation to rebuild interest in daily routines"
    ]
  },
  {
    id: 9,
    name: "Addiction & De-addiction Support",
    shortName: "Addiction Therapy",
    image: "/images/service-growth.jpg",
    title: "Addiction & De-addiction Support (Alcohol, Opium & Smoke)",
    desc: "Specialized clinical therapy utilizing Motivational Interviewing (MI) and relapse prevention strategies to overcome addictions to alcohol, opium, tobacco, and nicotine.",
    bullets: [
      "Motivational Enhancement Therapy to strengthen commitment to change",
      "Cognitive behavioral coping skills to manage cravings and triggers",
      "Relapse prevention planning and supportive lifestyle design"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Subpage Hero */}
      <section className={styles.subpageHero}>
        <div className="container">
          <h1 className={styles.subpageTitle}>Our Psychological Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <p className={styles.servicesIntro}>
            At Mind Mantra, we provide specialized, evidence-based mental health and psychotherapeutic treatments. Our protocols are designed to go beyond symptom management to build long-term psychological flexibility and stability.
          </p>

          <div className={styles.servicesGridContainer}>
            {servicesList.map((service, idx) => {
              const isEven = idx % 2 === 0;
              const whatsappLink = `https://wa.me/917706000771?text=Hello%20Ms.%20Gauri,%20I%20would%20like%20to%20book%20a%20session%20for%20${encodeURIComponent(service.shortName)}.`;

              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className={`${styles.serviceBlock} ${isEven ? "" : styles.even}`}
                >
                  {/* Image Column */}
                  <div className={styles.serviceImageWrapper}>
                    <img
                      src={service.image}
                      alt={`${service.title} Clinical Session`}
                      className={styles.serviceImage}
                    />
                  </div>

                  {/* Content Column */}
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceBadge}>Specialized Care</div>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                    
                    <h4 className={styles.bulletsHeader}>Core Therapeutic Targets & Focus:</h4>
                    <ul className={styles.bulletsList}>
                      {service.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className={styles.bulletItem}>
                          <svg
                            className={styles.checkIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            style={{ width: "16px", height: "16px" }}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.bookBtn}
                    >
                      <span>Book a Session via WhatsApp</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{ width: "14px", height: "14px" }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
