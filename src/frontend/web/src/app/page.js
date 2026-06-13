"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

// Sample Services Data
// Sample Services Data
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
    ],
    isFeatured: true
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
    ],
    isFeatured: true
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

const getServiceIcon = (id) => {
  switch (id) {
    case 1: // OCD Recovery
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l2 2 4-4" />
        </svg>
      );
    case 2: // Sexual Dysfunctionality
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 3: // Bipolar
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="9" x2="19" y2="9" />
          <path d="M5 9c0 4 3 6 7 6s7-2 7-6" />
        </svg>
      );
    case 4: // Sleep
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );
    case 5: // Eating
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M12 22c4.97 0 9-3.07 9-9 0-4.75-2.67-8.15-5.5-8.15C14 4.85 13 6 12 6s-2-1.15-3.5-1.15C5.67 4.85 3 8.25 3 13c0 5.93 4.03 9 9 9z" />
          <path d="M12 6c0-2 1-3 3-3" />
        </svg>
      );
    case 6: // Relationship
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 7: // Schizophrenia
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <line x1="8.5" y1="8.5" x2="9.5" y2="9.5" />
          <line x1="15.5" y1="8.5" x2="14.5" y2="9.5" />
          <line x1="8.5" y1="15.5" x2="9.5" y2="14.5" />
          <line x1="15.5" y1="15.5" x2="14.5" y2="14.5" />
        </svg>
      );
    case 8: // Anxiety & Depression
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M17 18a5 5 0 0 0-10 0" />
          <path d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2M6.34 17.66l-1.41 1.41M12 20v2M17.66 17.66l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41" />
        </svg>
      );
    case 9: // Addiction
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 21.5 21.5 0 0 1-4 10 15.3 15.3 0 0 1-4-10 21.5 21.5 0 0 1 4-10z" />
          <path d="M12 2v20" />
        </svg>
      );
    default:
      return null;
  }
};

// Hero Slides Data
const heroSlides = [
  {
    id: 1,
    badge: "Clinical Excellence",
    title: <>Pioneering <span className="text-teal">Clinical Psychology</span> & Mental Wellness</>,
    desc: "Access evidence-based clinical therapy and psychological support under the guidance of Ms. Gauri, utilizing advanced therapeutic modalities to foster lasting resilience and wellbeing.",
    image: "/images/hero.jpg"
  },
  {
    id: 2,
    badge: "Core Specialization",
    title: <>Clinical Support For <span className="text-teal">Sexual Dysfunctionality</span></>,
    desc: "Compassionate, evidence-based therapy for ED, PME, and compulsive intimacy concerns, designed to restore confidence and relational harmony.",
    image: "/images/hero.jpg"
  },
  {
    id: 3,
    badge: "Mind Mantra Institute",
    title: <>Build Deep <span className="text-teal">Psychological Flexibility</span></>,
    desc: "Step beyond mere symptom management. Strengthen your emotional tolerance and inner stability to reclaim autonomy and lead a values-driven life.",
    image: "/images/hero.jpg"
  }
];

// Sample Videos Data
const videoResources = [
  {
    id: 1,
    title: "Understanding OCD: Intrusive Thoughts & Compulsive Cycles",
    category: "OCD Education",
    duration: "10:15",
    thumbnail: "/images/video-thumb-1.jpg",
    embedUrl: "https://www.youtube.com/embed/inpok4MKVLM"
  },
  {
    id: 2,
    title: "Exposure & Response Prevention (ERP) Therapy In Action",
    category: "ERP Treatment",
    duration: "12:40",
    thumbnail: "/images/video-thumb-2.jpg",
    embedUrl: "https://www.youtube.com/embed/z4L2Zg7382c"
  },
  {
    id: 3,
    title: "Cognitive Behavioral Therapy (CBT) for Intrusive Thoughts",
    category: "CBT Modalities",
    duration: "14:20",
    thumbnail: "/images/video-thumb-3.jpg",
    embedUrl: "https://www.youtube.com/embed/tV2y5jE9bXU"
  },
  {
    id: 4,
    title: "Acceptance & Commitment Therapy (ACT) - Coexisting With OCD",
    category: "ACT Practice",
    duration: "11:50",
    thumbnail: "/images/service-counseling.jpg",
    embedUrl: "https://www.youtube.com/embed/H7L6qB1W0Qo"
  },
  {
    id: 5,
    title: "DBT Strategies for Distress Tolerance & Emotional Regulation",
    category: "DBT Strategies",
    duration: "15:10",
    thumbnail: "/images/service-relationship.jpg",
    embedUrl: "https://www.youtube.com/embed/K-S8e7_uD3A"
  },
  {
    id: 6,
    title: "Mindfulness & Somatic Grounding Worksheets for OCD Anxiety",
    category: "Mindfulness",
    duration: "09:45",
    thumbnail: "/images/service-growth.jpg",
    embedUrl: "https://www.youtube.com/embed/2_YI07g8dFw"
  }
];

// Google Reviews Client Testimonials Data
const reviewsList = [
  {
    id: 1,
    name: "Rohan Sharma",
    initials: "RS",
    avatarBg: "#E0F2F1",
    avatarColor: "#00796B",
    rating: 5,
    date: "2 weeks ago",
    vertical: "OCD Recovery",
    text: "Ms. Gauri's ERP sessions literally gave me my life back. I was trapped in contamination loops for 4 hours a day. Her step-by-step guidance was compassionate but firm, helping me face my fears. Highly recommend her clinical expertise."
  },
  {
    id: 2,
    name: "Aanya Verma",
    initials: "AV",
    avatarBg: "#FCE4EC",
    avatarColor: "#C2185B",
    rating: 5,
    date: "1 month ago",
    vertical: "Anxiety Support",
    text: "The anxiety management techniques taught here are very practical. I used to get severe panic attacks before meetings. The somatic grounding and cognitive reframing tools have helped me regain my confidence completely."
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    initials: "VM",
    avatarBg: "#E8EAF6",
    avatarColor: "#303F9F",
    rating: 5,
    date: "3 weeks ago",
    vertical: "Sexual Wellness",
    text: "Very professional and completely confidential. I was extremely hesitant to discuss erectile dysfunction and performance anxiety, but Ms. Gauri created a safe, non-judgmental space that helped me heal my relationship."
  },
  {
    id: 4,
    name: "Priya Patel",
    initials: "PP",
    avatarBg: "#EFEBE9",
    avatarColor: "#5D4037",
    rating: 5,
    date: "2 months ago",
    vertical: "Depression Recovery",
    text: "Mind Mantra's holistic approach to mental health is outstanding. The behavioral activation routines helped me climb out of a deep depressive episode. I feel structured, motivated, and emotionally resilient again."
  },
  {
    id: 5,
    name: "Kabir Mehta",
    initials: "KM",
    avatarBg: "#E1F5FE",
    avatarColor: "#0288D1",
    rating: 5,
    date: "1 month ago",
    vertical: "OCD Pure O Support",
    text: "I suffered from Pure O intrusive thoughts for years, feeling extremely isolated. Learning ACT with Ms. Gauri helped me understand that thoughts are just thoughts. Her sessions are worth every single penny."
  },
  {
    id: 6,
    name: "Sneha Reddy",
    initials: "SR",
    avatarBg: "#FFF3E0",
    avatarColor: "#F57C00",
    rating: 5,
    date: "5 days ago",
    vertical: "Sleep Therapy",
    text: "The CBT-I program for chronic insomnia worked wonders for me. I went from sleeping 3 hours a night to a consistent 7 hours. No pills, just scientific circadian retraining and sleep hygiene. Life-changing!"
  }
];

export default function Home() {
  // Interaction states
  const [activeSlide, setActiveSlide] = useState(0);

  // Video slider states
  const [videoSlideIndex, setVideoSlideIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  // Testimonial slider states
  const [reviews, setReviews] = useState(reviewsList);
  const [testimonialSlideIndex, setTestimonialSlideIndex] = useState(0);

  // Load reviews from Google Places API
  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    loadReviews();
  }, []);

  // Manage window resize for responsive slider calculations
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Compute how many cards are visible based on width
  let visibleCards = 3;
  if (windowWidth <= 600) {
    visibleCards = 1;
  } else if (windowWidth <= 992) {
    visibleCards = 2;
  }

  const maxVideoIndex = Math.max(0, videoResources.length - visibleCards);

  // Autoplay video slider
  useEffect(() => {
    if (playingVideoId !== null) return;
    const timer = setInterval(() => {
      setVideoSlideIndex((prev) => (prev >= maxVideoIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxVideoIndex, playingVideoId]);

  // Autoplay hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Compute how many testimonial cards are visible
  let visibleTestimonialCards = 3;
  if (windowWidth <= 600) {
    visibleTestimonialCards = 1;
  } else if (windowWidth <= 992) {
    visibleTestimonialCards = 2;
  }

  const maxTestimonialIndex = Math.max(0, reviews.length - visibleTestimonialCards);

  // Autoplay testimonials slider
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlideIndex((prev) => (prev >= maxTestimonialIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxTestimonialIndex]);

  // Handle bounding constraint when resizing
  useEffect(() => {
    if (testimonialSlideIndex > maxTestimonialIndex) {
      setTestimonialSlideIndex(maxTestimonialIndex);
    }
  }, [maxTestimonialIndex, testimonialSlideIndex]);



  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section with Slider */}
      <section id="home" className={styles.hero}>
        {/* Background Images with Crossfade and Zoom Effect */}
        <div className={styles.heroBgContainer}>
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`${styles.heroBgImage} ${activeSlide === idx ? styles.activeHeroBg : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
          <div className={styles.heroOverlay}></div>
        </div>

        <div className="container">
          <div className={styles.heroContent} key={activeSlide} style={{ animation: "fadeIn 0.6s ease-in-out" }}>
            <div className={styles.sectionBadge}>{heroSlides[activeSlide].badge}</div>
            <h1 className={styles.heroTitle}>
              {heroSlides[activeSlide].title}
            </h1>
            <p className={styles.heroDesc}>
              {heroSlides[activeSlide].desc}
            </p>
            <div className={styles.heroContactList}>
              <Link href="/services" className={`${styles.heroContactPill} ${styles.teal}`}>
                <span>Our Services</span>
                <div className={styles.pillIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
              <Link href="/contact" className={`${styles.heroContactPill} ${styles.outline}`}>
                <span>Contact Us</span>
                <div className={styles.pillIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutHeader}>
            <div className={styles.sectionBadge}>Our Trusted Support</div>
            <h2 className={styles.aboutTitle}>
              Dedicated To <span>Building Resilience</span>
            </h2>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              <img src="/images/about-3.jpeg" alt="OCD Treatment Session" className={styles.aboutSingleImage} />
            </div>

            <div>
              <p className={styles.aboutDesc}>
                Ms. Gauri is a highly dedicated Clinical Psychologist with <strong>6+ years of experience</strong> in psychological assessment, psychotherapy, mental health rehabilitation, and evidence-based clinical interventions. She has received extensive training across premier healthcare and psychiatric institutions, including All India Institute of Medical Sciences (AIIMS) New Delhi, Lady Hardinge Medical College (LHMC), and specialized mental health organizations. Her professional journey spans hospital-based psychiatry, neuropsychological assessment, psychotherapy services, addiction psychiatry, psycho-oncology, trauma-focused care, and tele-mental health practice. She works with adolescents, adults, couples, and families to navigate emotional distress and psychiatric conditions through compassionate, evidence-based care.
              </p>
              <p className={styles.aboutDesc}>
                Our practice is built on the principle of developing long-term emotional resilience, distress tolerance, and psychological flexibility, helping individuals coexist with discomfort and uncertainty.
              </p>
              <Link href="/about" className={styles.btnReadMore}>
                <span>View More</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <div className={styles.sectionBadge}>Wellness Services</div>
            <h2 className={styles.servicesTitle}>
              Comprehensive Care For <span>Effective Psychological</span> Wellness
            </h2>
          </div>

          <div className={styles.servicesGrid}>
            {servicesList.map((service) => {
              return (
                <Link
                  key={service.id}
                  href={`/services#service-${service.id}`}
                  className={`${styles.serviceCard} ${service.isFeatured ? styles.featuredCard : ""}`}
                >
                  <div className={styles.serviceIconContainer}>
                    {getServiceIcon(service.id)}
                  </div>
                  
                  <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                  <p className={styles.serviceCardDesc}>{service.desc}</p>
                  
                  <div className={styles.serviceCardLearnMore}>
                    <span>Read More</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Resources Section */}
      <section id="videos" className={styles.videos}>
        <div className="container">
          <div className={styles.videosHeader}>
            <div className={styles.sectionBadge}>Video Resources</div>
            <h2 className={styles.videosTitle}>
              Empowering Your Steps <span>With Expert Clinical Insights</span>
            </h2>
            <p className={styles.videosDesc}>
              Watch Ms. Gauri discuss key OCD mechanisms, ERP treatment protocols, and daily coping tools designed to support your psychological flexibility.
            </p>
          </div>

          <div className={styles.videoSliderContainer}>
            <div
              className={styles.videoSliderTrack}
              style={{
                transform: `translateX(-${videoSlideIndex * (100 / visibleCards)}%)`,
              }}
            >
              {videoResources.map((video) => (
                <div
                  key={video.id}
                  className={styles.videoSliderCard}
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className={styles.videoPlayerWrapper}>
                    {playingVideoId === video.id ? (
                      <iframe
                        className={styles.videoIframe}
                        src={`${video.embedUrl}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div
                        className={styles.videoThumbnailContainer}
                        onClick={() => setPlayingVideoId(video.id)}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className={styles.videoThumbnail}
                        />
                        <div className={styles.videoPlayOverlay}>
                          <div className={styles.playButtonCircle}>
                            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "24px", height: "24px", marginLeft: "4px" }}>
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={styles.videoCardInfo}>
                    <span className={styles.videoCategoryBadge}>{video.category}</span>
                    <h3 className={styles.videoCardTitle}>{video.title}</h3>
                    <div className={styles.videoDurationMeta}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px", marginRight: "6px", color: "var(--color-accent-teal)" }}>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>Duration: {video.duration} Mins</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {maxVideoIndex > 0 && (
            <div className={styles.videoDots}>
              {Array.from({ length: maxVideoIndex + 1 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.videoDot} ${videoSlideIndex === idx ? styles.videoDotActive : ""}`}
                  onClick={() => {
                    setVideoSlideIndex(idx);
                    setPlayingVideoId(null);
                  }}
                ></span>
              ))}
            </div>
          )}
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section id="why-choose-us" className={styles.whyChooseUs}>
        {/* Left Column: Full height image */}
        <div className={styles.whyChooseUsImageCol}>
          <img src="/images/why-choose-us.png" alt="Why Choose Mind Mantra" />
        </div>

        {/* Right Column: Content */}
        <div className={styles.whyChooseUsContentCol}>
          <div className={styles.whyChooseUsBadge}>
            <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>Why Choose Us</span>
          </div>
          
          <h2 className={styles.whyChooseUsTitle}>
            Your Mind Deserves Peace and Care
          </h2>
          
          <p className={styles.whyChooseUsDesc}>
            At Mind Mantra, we step beyond traditional symptom reduction. We work directly on building long-term emotional resilience, distress tolerance, and psychological flexibility so you can reclaim absolute control of your life.
          </p>

          <div className={styles.whyChooseUsList}>
            {/* Item 1 */}
            <div className={styles.whyChooseUsItem}>
              <div className={styles.whyChooseUsIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className={styles.whyChooseUsItemContent}>
                <h4>Specialized Treatment & Training</h4>
                <p>As a dedicated treatment, research, and training institute, Mind Mantra combines clinical excellence with scientific-backed protocols to provide gold-standard, specialized psychological care.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className={styles.whyChooseUsItem}>
              <div className={styles.whyChooseUsIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className={styles.whyChooseUsItemContent}>
                <h4>Gold-Standard Modalities</h4>
                <p>We leverage internationally recognized, evidence-based frameworks, specializing in Exposure and Response Prevention (ERP) for OCD, Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), and DBT.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className={styles.whyChooseUsItem}>
              <div className={styles.whyChooseUsIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className={styles.whyChooseUsItemContent}>
                <h4>Resilience & Autonomy Focus</h4>
                <p>We work directly on building distress tolerance, emotional resilience, and psychological flexibility, ensuring you develop the capacity to coexist with discomfort and navigate uncertainty independently.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className={styles.whyChooseUsItem}>
              <div className={styles.whyChooseUsIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className={styles.whyChooseUsItemContent}>
                <h4>Tailored Treatment Spectrum</h4>
                <p>Comprehensive diagnostic assessments and customized therapy programs spanning neurodevelopmental concerns (ADHD, ASD), anxiety/OCD, complex trauma, addiction support, and medical psychology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.testimonials}>
        <div className="container">
          <div className={styles.testimonialsHeaderContainer}>
            <div className={styles.testimonialsHeaderLeft}>
              <div className={styles.sectionBadge}>Client Stories</div>
              <h2 className={styles.testimonialsTitle}>
                What Our Clients Say <span>About Their Recovery</span>
              </h2>
              <p className={styles.testimonialsDesc}>
                Read authentic feedback from individuals who have reclaimed their lives and built emotional resilience through our evidence-based clinical therapies.
              </p>
            </div>
          </div>

          {/* Slider Container */}
          <div className={styles.reviewsSliderContainer}>
            <div
              className={styles.reviewsGridTrack}
              style={{
                transform: `translateX(-${testimonialSlideIndex * (100 / visibleTestimonialCards)}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className={styles.reviewCardWrapper}
                  style={{ width: `${100 / visibleTestimonialCards}%` }}
                >
                  <div className={styles.reviewCard}>
                    {/* Reviewer Info */}
                    <div className={styles.reviewUserRow}>
                      <div
                        className={styles.reviewerAvatar}
                        style={{
                          backgroundColor: review.avatarBg,
                          color: review.avatarColor,
                          padding: 0,
                          overflow: "hidden"
                        }}
                      >
                        {review.profilePhotoUrl ? (
                          <img 
                            src={review.profilePhotoUrl} 
                            alt={review.name} 
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          review.initials
                        )}
                      </div>
                      <div className={styles.reviewUserMeta}>
                        <div className={styles.reviewerNameRow}>
                          <h4 className={styles.reviewerName}>{review.name}</h4>
                        </div>
                        <span className={styles.reviewDate}>{review.date}</span>
                      </div>
                    </div>

                    {/* Ratings */}
                    <div className={styles.reviewStarsRow}>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <svg key={i} className={styles.goldStarIcon} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className={styles.reviewText}>"{review.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          {maxTestimonialIndex > 0 && (
            <div className={styles.testimonialDots}>
              {Array.from({ length: maxTestimonialIndex + 1 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.testimonialDot} ${testimonialSlideIndex === idx ? styles.testimonialDotActive : ""}`}
                  onClick={() => setTestimonialSlideIndex(idx)}
                ></span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className={styles.ctaSection}>
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

      {/* Back to top float button */}
      <button className={styles.backToTop} onClick={() => scrollToSection("home")} aria-label="Back to top">
        <svg viewBox="0 0 24 24">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </>
  );
}
