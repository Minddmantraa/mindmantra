"use client";

import { useState, useEffect } from "react";
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
    badge: "Core Specialization",
    title: <>Pioneering <span className="text-teal">OCD Recovery</span> & Resilience</>,
    desc: "Learn to coexist with discomfort, distress, and uncertainty under the clinical guidance of Ms. Gauri, utilizing gold-standard therapies like ERP, CBT, and ACT.",
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



export default function Home() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interaction states
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  // Video slider states
  const [videoSlideIndex, setVideoSlideIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1200);

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

  // Booking Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Obsessive Compulsive Disorder Recovery",
    date: "",
    timeSlot: "Morning (09:00 AM - 12:00 PM)",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, service, date, timeSlot, message } = formData;

    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    
    const requestHeader = "*MIND MANTRA - CLINICAL APPOINTMENT REQUEST*";

    // Formatting message for WhatsApp
    const textMessage = 
      `${requestHeader}\n` +
      `---------------------------------------\n` +
      `*Client Name:* ${name}\n` +
      `*Phone Number:* ${phone}\n` +
      `*Email Address:* ${email || "Not provided"}\n` +
      `*Focus Area/Service:* ${service}\n` +
      `*Preferred Date:* ${date || "Flexible / First Available"}\n` +
      `*Preferred Time Slot:* ${timeSlot}\n` +
      `*Clinical Note:* ${message || "None"}\n` +
      `---------------------------------------\n` +
      `_Submitted via website portal._`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=917706000771&text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar Info */}
      <div className={styles.topBar}>
        <div className={`${styles.topBarContainer} container`}>
          <div className={styles.topInfo}>
            <a href="tel:+917706000771" className={styles.topBarLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--color-accent-teal)" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 77060 00771</span>
            </a>
            <a href="mailto:info@mindmantra.com" className={styles.topBarLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--color-accent-teal)" }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@mindmantra.com</span>
            </a>
          </div>
          <div className={styles.socials}>
            {["Telegram", "Instagram", "Facebook", "YouTube", "LinkedIn"].map((platform) => (
              <a key={platform} href="#" className={styles.socialLink} title={platform}>
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
      </div>

      {/* Floating Navigation Bar */}
      <div className={styles.navWrapper}>
        <nav className={styles.navbar}>
          <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
            <img src="/images/logo.png" alt="Mind Mantra" className={styles.logoImage} />
          </a>

          <ul className={styles.navMenu}>
            <li><a href="#about" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About Us</a></li>
            <li><a href="#services" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
            <li><a href="#videos" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("videos"); }}>Video Resources</a></li>
            <li><a href="#booking" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("booking"); }}>Book a Call</a></li>
          </ul>

          <button className={styles.btnAppointment} onClick={() => scrollToSection("booking")}>
            <span>Appointment</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>

          <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "24px", height: "24px" }}>
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileDrawerContent}>
            <ul className={styles.mobileNavMenu}>
              <li><a href="#about" className={styles.mobileNavLink} onClick={() => scrollToSection("about")}>About Us</a></li>
              <li><a href="#services" className={styles.mobileNavLink} onClick={() => scrollToSection("services")}>Services</a></li>
              <li><a href="#videos" className={styles.mobileNavLink} onClick={() => scrollToSection("videos")}>Video Resources</a></li>
              <li><a href="#booking" className={styles.mobileNavLink} onClick={() => scrollToSection("booking")}>Book a Call</a></li>
            </ul>
            <button className={styles.mobileBtnAppointment} onClick={() => scrollToSection("booking")}>
              <span>Appointment</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </button>
          </div>
        </div>
      )}

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
              <a href="mailto:info@mindmantra.com" className={`${styles.heroContactPill} ${styles.teal}`}>
                <span>info@mindmantra.com</span>
                <div className={styles.pillIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </a>
              <a href="tel:+917706000771" className={`${styles.heroContactPill} ${styles.outline}`}>
                <span>+91 77060 00771</span>
                <div className={styles.pillIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </a>
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
              Dedicated To <span>Building Resilience</span> & Autonomy in OCD
            </h2>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              <img src="/images/about.jpg" alt="OCD Treatment Session" className={styles.aboutSingleImage} />
            </div>

            <div>
              <p className={styles.aboutDesc}>
                Ms. Gauri is a dedicated Psychologist at <strong>Mind Mantra – OCD Treatment, Research & Training Institute</strong>, widely recognized for her clinical expertise in helping individuals build deep emotional resilience while navigating Obsessive-Compulsive Disorder (OCD). She works extensively with both adolescents and adults experiencing a wide range of OCD presentations (contamination OCD, ROCD, pure obsessions, sexual intrusive thoughts, and anxiety-driven concerns).
              </p>
              <div className={styles.quoteBlock}>
                "Rather than aiming only to reduce compulsions or intrusive thoughts, we emphasize strengthening emotional tolerance, psychological flexibility, and inner stability—core capacities that support sustainable and long-term OCD recovery. True healing occurs when individuals learn to coexist with discomfort, uncertainty, and emotional intensity without being controlled by them."
              </div>
              <p className={styles.aboutDesc} style={{ marginBottom: "32px", fontSize: "15px", fontStyle: "italic", borderLeft: "3px solid var(--color-accent-teal)", paddingLeft: "20px" }}>
                Special focus on emotional resilience building, distress tolerance, and psychological flexibility in OCD recovery. Working with adolescents and adults across diverse OCD presentations.
              </p>

              <div className={styles.doctorProfile}>
                <div className={styles.doctorInfo}>
                  <div className={styles.doctorAvatar}>
                    <img src="/images/dr-gauri.jpg" alt="Dedicated Psychologist Ms. Gauri" />
                  </div>
                  <div className={styles.doctorMeta}>
                    <h4>Ms. Gauri</h4>
                    <p>Dedicated Psychologist</p>
                  </div>
                </div>
              </div>
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
            {servicesList.map((service, idx) => {
              return (
                <div
                  key={service.id}
                  className={`${styles.serviceCard} ${service.isFeatured ? styles.featuredCard : ""}`}
                  onClick={() => setActiveModal(idx)}
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Popup for Details */}
        {activeModal !== null && (
          <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.modalCloseBtn} onClick={() => setActiveModal(null)} aria-label="Close details">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "18px", height: "18px" }}>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className={styles.modalGrid}>
                {/* Left Column: Cover Image */}
                <div className={styles.modalImageWrapper}>
                  <img
                    src={servicesList[activeModal].image}
                    alt={servicesList[activeModal].title}
                    className={styles.modalImage}
                  />
                </div>

                {/* Right Column: Modality Info */}
                <div className={styles.modalInfo}>
                  <div className={styles.modalIconCircle}>
                    {getServiceIcon(servicesList[activeModal].id)}
                  </div>

                  <h3 className={styles.modalTitle}>
                    {servicesList[activeModal].title}
                  </h3>

                  <p className={styles.modalDesc}>
                    {servicesList[activeModal].desc}
                  </p>

                  <ul className={styles.modalChecklist}>
                    {servicesList[activeModal].bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className={styles.modalChecklistItem}>
                        <div className={styles.modalCheckIconWrapper}>
                          <svg className={styles.modalCheckIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={styles.modalBtn}
                    onClick={() => {
                      const serviceShort = servicesList[activeModal].shortName;
                      setActiveModal(null);
                      window.open(`https://wa.me/917706000771?text=Hello%20Ms.%20Gauri,%20I%20would%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(serviceShort)}.`, "_blank");
                    }}
                  >
                    <span>Book Appointment</span>
                    <div className={styles.modalBtnInnerCircle}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "12px", height: "12px" }}>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className={styles.whyChooseUsItemContent}>
                <h4>Expert Psychologists</h4>
                <p>Guided by Ms. Gauri's clinical expertise, we utilize evidence-based clinical protocols like ERP, CBT, and ACT for sustainable OCD recovery and sexual wellness.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className={styles.whyChooseUsItem}>
              <div className={styles.whyChooseUsIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <div className={styles.whyChooseUsItemContent}>
                <h4>Personalized Care</h4>
                <p>No cookie-cutter templates. We design custom treatment plans tailored to contamination concerns, intrusive obsessions, sleep health, or relational goals.</p>
              </div>
            </div>

            {/* Item 3 */}
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
                <h4>Flexible Scheduling</h4>
                <p>We provide highly confidential support with virtual and in-person sessions. Easy scheduling with options across morning, afternoon, and evening slots.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className={styles.booking}>
        <div className="container">
          <div className={styles.bookingGrid}>
            
            {/* Left Column: Info/Value Props */}
            <div className={styles.bookingInfo}>
              <div className={styles.sectionBadge}>Get Started Today</div>
              <h2 className={styles.bookingTitle}>
                Take Your First Step <span>Towards Psychological Wellness</span>
              </h2>
              <p className={styles.bookingDesc}>
                Whether you want to explore how our clinical protocols can help you, or you are ready to begin regular therapeutic sessions, we provide a structured, private environment.
              </p>
              
              <div className={styles.bookingValueList}>
                <div className={styles.bookingValueItem}>
                  <div className={styles.bookingValueIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Safdarjung Enclave, Delhi, India 110023</p>
                  </div>
                </div>

                <div className={styles.bookingValueItem}>
                  <div className={styles.bookingValueIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:info@mindmantra.com" className={styles.bookingLink}>
                        info@mindmantra.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.bookingValueItem}>
                  <div className={styles.bookingValueIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <h4>Phone Number</h4>
                    <p>
                      <a href="tel:+917706000771" className={styles.bookingLink}>
                        +91 77060 00771
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Form */}
            <div className={styles.bookingFormContainer}>
              <div className={styles.bookingFormCard}>
                <form onSubmit={handleFormSubmit} className={styles.bookingForm}>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Enter your name" 
                        required 
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="e.g. +91 98765 43210" 
                        required 
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="yourname@example.com" 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Focus Area / Vertical</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service} 
                      onChange={handleInputChange}
                      style={{ width: "100%" }}
                    >
                      {servicesList.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="date">Preferred Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleInputChange} 
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="timeSlot">Preferred Time Slot</label>
                      <select 
                        id="timeSlot" 
                        name="timeSlot" 
                        value={formData.timeSlot} 
                        onChange={handleInputChange}
                      >
                        <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                        <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Describe your clinical concerns / symptoms</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="3" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Provide details about your concerns or symptoms to help us prepare for the session..."
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.btnBookingSubmit}>
                    <span>Book Appointment</span>
                    <div className={styles.btnBookingSubmitIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>





      {/* Footer */}
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
                      <svg viewBox="0 0 24 24"><path d="M12 2.1c3.2 0 3.6 0 4.9.1c1.2.1 1.8.3 2.2.5c.6.2 1 .5 1.4.9c.4.4.7.8.9 1.4c.2.4.4 1 .5 2.2c.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2c-.2.6-.5 1-.9 1.4c-.4.4-.8.7-1.4.9c-.4.2-1 .4-2.2.5c-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5c-.6-.2-1-.5-1.4-.9c-.4-.4-.7-.8-.9-1.4c-.2-.4-.4-1-.5-2.2c-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2c.2-.6.5-1 .9-1.4c.4-.4.8-.7 1.4-.9c.4-.2 1-.4 2.2-.5c1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 1c-1.3.1-2.2.3-3 .6c-.8.3-1.5.7-2.1 1.4C1.2 3.6.8 4.3.5 5.1C.2 5.9.1 6.8 0 8c0 1.3 0 1.7 0 5s0 3.7.1 5c.1 1.2.3 2.1.6 2.9c.3.8.7 1.5 1.4 2.1c.6.6 1.3 1.1 2.1 1.4c.8.3 1.7.4 2.9.5c1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.2-.1 2.1-.3 2.9-.5c.8-.3 1.5-.7 2.1-1.4c.6-.6 1.1-1.3 1.4-2.1c.3-.8.4-1.7.5-2.9c.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.2-.3-2.1-.6-2.9c-.3-.8-.7-1.5-1.4-2.1c-.6-.6-1.3-1.1-2.1-1.4c-.8-.3-1.7-.4-2.9-.5c-1.3-.1-1.7-.1-5-.1z"/><path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2s6.2-2.8 6.2-6.2s-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1s4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1z"/><circle cx="18.4" cy="5.6" r="1.4"/></svg>
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
                  <span>info@mindmantra.com</span>
                </div>
              </div>
            </div>

            {/* Column 3: Services */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Services</h4>
              <ul className={styles.footerLinks}>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>OCD Recovery</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Sexual Wellness</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Bipolar Support</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Anxiety & Depression</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Addiction Support</a></li>
              </ul>
            </div>

            {/* Column 4: Quick Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li className={styles.footerLinkItem}><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a></li>
                <li className={styles.footerLinkItem}><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About Us</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
                <li className={styles.footerLinkItem}><a href="#booking" onClick={(e) => { e.preventDefault(); scrollToSection("booking"); }}>Book a Call</a></li>
              </ul>
            </div>

            {/* Column 5: Stay Informed */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Stay Informed</h4>
              <div className={styles.footerForm}>
                <input type="email" placeholder="Email" className={styles.footerFormInput} />
                <button className={styles.footerSubscribeBtn}>
                  <span>Subscribe Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
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
