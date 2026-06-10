import styles from "./expertise.module.css";
import CtaSection from "../../components/CtaSection";

export const metadata = {
  title: "Clinical Expertise | Ms. Gauri - OCD, Anxiety & Psychological Therapy",
  description:
    "Ms. Gauri specialises in OCD (ERP & CBT), anxiety, trauma, depression, ADHD, autism, addiction, and medical psychology. Evidence-based clinical assessment and therapy in India.",
  keywords: [
    "OCD specialist India",
    "CBT therapy India",
    "ERP treatment OCD",
    "anxiety specialist India",
    "trauma therapy India",
    "ADHD treatment",
    "autism therapy India",
    "clinical psychologist expertise",
    "Ms. Gauri OCD specialist",
    "depression treatment India",
    "ACT DBT EMDR therapy",
  ],
  alternates: { canonical: "https://mindmantraa.com/clinical-expertise" },
  openGraph: {
    title: "Clinical Expertise | Ms. Gauri - OCD, Anxiety & Psychological Therapy",
    description:
      "Specialised in OCD (ERP & CBT), anxiety, trauma, depression, ADHD, autism, and medical psychology — evidence-based clinical care.",
    url: "https://mindmantraa.com/clinical-expertise",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Mind Mantra Clinical Expertise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Expertise | Mind Mantra",
    description: "OCD, anxiety, trauma, ADHD, depression — evidence-based ERP, CBT, ACT, DBT & EMDR therapy by Ms. Gauri.",
    images: ["/images/og-image.jpg"],
  },
};

const expertiseCategories = [
  {
    title: "Neurodevelopmental Disorders",
    items: [
      "Autism Spectrum Disorder (ASD)",
      "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      "Learning Difficulties",
      "Intellectual and Developmental Challenges"
    ]
  },
  {
    title: "Anxiety & Obsessive-Compulsive Spectrum",
    items: [
      "Generalized Anxiety Disorder (GAD)",
      "Panic Disorder & Social Anxiety",
      "Health Anxiety & Phobias",
      "Obsessive-Compulsive Disorder (OCD)",
      "Relationship OCD (ROCD) & Contamination OCD",
      "Harm OCD & Sexual Intrusive Thoughts",
      "Pure Obsessional OCD",
      "Hoarding Behaviours & Body Dysmorphic Concerns"
    ]
  },
  {
    title: "Trauma & Stress-Related Conditions",
    items: [
      "Post-Traumatic Stress Disorder (PTSD)",
      "Complex Trauma",
      "Acute Stress Reactions",
      "Adjustment Disorders",
      "Grief and Bereavement",
      "Emotional Abuse Recovery"
    ]
  },
  {
    title: "Mood & Emotional Disorders",
    items: [
      "Depression",
      "Persistent Depressive Disorders",
      "Bipolar Spectrum Difficulties",
      "Emotional Dysregulation",
      "Chronic Stress & Burnout"
    ]
  },
  {
    title: "Personality & Interpersonal Difficulties",
    items: [
      "Borderline Personality Features",
      "Avoidant Personality Traits",
      "Dependency Issues",
      "Self-Esteem Concerns",
      "Relationship Conflicts",
      "Family and Marital Difficulties"
    ]
  },
  {
    title: "Addiction & Behavioural Health",
    items: [
      "Substance Use Disorders",
      "Alcohol Dependence",
      "Nicotine Dependence",
      "Behavioural Addictions",
      "Relapse Prevention"
    ]
  },
  {
    title: "Neuropsychological & Cognitive Health",
    items: [
      "Cognitive Assessments",
      "Neuropsychological Evaluation",
      "Brain Injury Rehabilitation Support",
      "Memory and Attention Difficulties"
    ]
  },
  {
    title: "Health & Medical Psychology",
    items: [
      "Psycho-Oncology",
      "Chronic Illness Adjustment",
      "Psychological Factors Affecting Medical Conditions",
      "Health Behaviour Change"
    ]
  }
];

const modalitiesList = [
  "Cognitive Behaviour Therapy (CBT)",
  "Exposure and Response Prevention (ERP)",
  "Acceptance and Commitment Therapy (ACT)",
  "Dialectical Behaviour Therapy (DBT)",
  "Eye Movement Desensitization and Reprocessing (EMDR)",
  "Trauma-Informed Therapy",
  "Psychodynamic Psychotherapy",
  "Systems and Family Therapy Approaches",
  "Mindfulness-Based Interventions",
  "Behavioural Therapy",
  "Cognitive Rehabilitation Techniques",
  "Motivational Interviewing",
  "Supportive Psychotherapy",
  "Emotional Resilience Training"
];

export default function ClinicalExpertise() {
  return (
    <>
      {/* Subpage Hero */}
      <section className={styles.subpageHero}>
        <div className="container">
          <h1 className={styles.subpageTitle}>Areas of Clinical Expertise</h1>
        </div>
      </section>

      {/* Specialties Section */}
      <section className={styles.expertiseSection}>
        <div className="container">
          <p className={styles.expertiseIntro}>
            Ms. Gauri provides comprehensive clinical assessments and personalized therapeutic interventions for a broad range of psychological, cognitive, and psychiatric concerns.
          </p>

          <div className={styles.expertiseGrid}>
            {expertiseCategories.map((category, idx) => (
              <div key={idx} className={styles.expertiseCard}>
                <h3 className={styles.expertiseCardTitle}>{category.title}</h3>
                <ul className={styles.expertiseList}>
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className={styles.expertiseItem}>
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className={styles.modalitiesSection}>
        <div className="container">
          <div className={styles.sectionBadge}>Evidence-Based Care</div>
          <h2 className={styles.sectionHeading}>Therapeutic Modalities</h2>
          <p className={styles.modalitiesIntro}>
            Drawing from internationally recognized evidence-based therapies, Ms. Gauri utilizes an integrative and individualized treatment model tailored to each client's unique path.
          </p>

          <div className={styles.modalitiesGrid}>
            {modalitiesList.map((modality, idx) => (
              <span key={idx} className={styles.modalityBadge}>
                {modality}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OCD and Anxiety Specialization */}
      <section className={styles.specializationSection}>
        <div className="container">
          <div className={styles.specializationGrid}>
            <div className={styles.specializationImageWrapper}>
              <img
                src="/images/process-center.jpg"
                alt="Structured ERP & CBT Specialization for OCD and Anxiety Recovery"
                className={styles.specializationImage}
              />
            </div>
            
            <div className={styles.specializationContent}>
              <div className={styles.sectionBadge}>Clinical Specialty</div>
              <h2 className={styles.specializationTitle}>
                OCD and <span>Anxiety Specialization</span>
              </h2>
              <p className={styles.specializationText}>
                Ms. Gauri has developed particular expertise in the treatment of Obsessive-Compulsive Disorder and anxiety-related conditions. Her work extends beyond symptom reduction to helping individuals build emotional resilience, distress tolerance, psychological flexibility, and confidence in managing uncertainty.
              </p>
              <p className={styles.specializationText}>
                Through structured Exposure and Response Prevention (ERP), Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), mindfulness practices, and emotional processing techniques, she helps clients break free from compulsive cycles and reclaim meaningful, value-driven lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Philosophy */}
      <section className={styles.philosophySection}>
        <div className="container">
          <h2 className={styles.philosophyTitle}>Clinical Philosophy</h2>
          <blockquote className={styles.philosophyQuote}>
            "Ms. Gauri's therapeutic philosophy is rooted in the understanding that mental health is influenced by biological, psychological, social, and environmental factors. She adopts a collaborative, empathetic, and scientifically grounded approach that respects each individual's unique experiences and strengths."
          </blockquote>
          <blockquote className={styles.philosophyQuote} style={{ marginTop: "20px" }}>
            "Her goal is not merely symptom management but the cultivation of lasting psychological well-being, emotional resilience, self-awareness, and personal growth. She believes that healing occurs when individuals develop the capacity to navigate life's uncertainties with courage, flexibility, and self-compassion."
          </blockquote>
          <div className={styles.philosophyAuthor}>Ms. Gauri, Senior Clinical Psychologist</div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
