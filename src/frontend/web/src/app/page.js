"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

// Sample Services Data
const servicesList = [
  {
    id: 1,
    name: "ERP (Exposure & Response Prevention)",
    shortName: "ERP Treatment",
    image: "/images/service-counseling.jpg",
    title: "Exposure & Response Prevention (ERP)",
    desc: "ERP is the gold standard therapy for OCD. It focuses on gradually exposing you to thoughts, images, and situations that make you anxious, while helping you resist performing compulsions.",
    bullets: [
      "Systematically face OCD triggers without resorting to compulsions",
      "De-escalate anxiety and break the cycle of obsessive doubts",
      "Reclaim control over your daily actions and behavioral choices"
    ]
  },
  {
    id: 2,
    name: "CBT (Cognitive Behavioural Therapy)",
    shortName: "CBT Therapy",
    image: "/images/service-relationship.jpg",
    title: "Cognitive Behavioural Therapy (CBT)",
    desc: "CBT helps you identify, understand, and change negative thought patterns and behaviors. It provides practical tools to manage your responses to intrusive thoughts and distress.",
    bullets: [
      "Identify and restructure cognitive distortions and intrusive thoughts",
      "Develop somatic grounding and mindfulness coping mechanisms",
      "Establish healthy, actionable daily behavioral routines"
    ]
  },
  {
    id: 3,
    name: "ACT (Acceptance & Commitment Therapy)",
    shortName: "ACT Practice",
    image: "/images/service-sexual.jpg",
    title: "Acceptance & Commitment Therapy (ACT)",
    desc: "ACT teaches you to accept what is out of your personal control and commit to actions that enrich your life. It emphasizes psychological flexibility over struggle.",
    bullets: [
      "Learn to coexist with anxiety and intrusive thoughts rather than fighting them",
      "Clarify your core personal values to drive meaningful life decisions",
      "Cultivate present-moment awareness and mindfulness techniques"
    ]
  },
  {
    id: 4,
    name: "DBT (Dialectical Behavior Therapy)",
    shortName: "DBT Strategies",
    image: "/images/service-growth.jpg",
    title: "Dialectical Behavior Therapy (DBT)",
    desc: "DBT combines cognitive-behavioral techniques with concepts of distress tolerance and emotional regulation. It is highly effective for managing intense emotional states.",
    bullets: [
      "Enhance distress tolerance during moments of acute anxiety",
      "Master emotional regulation strategies for mood swings",
      "Develop interpersonal effectiveness to communicate boundaries clearly"
    ]
  },
  {
    id: 5,
    name: "RMT (Relationship/Resource Therapy)",
    shortName: "RMT Counseling",
    image: "/images/therapist-3.jpg",
    title: "Relationship & Resource Therapy (RMT)",
    desc: "RMT focuses on identifying and working directly with the parts of your personality that manage specific emotional responses, helping resolve codependency and trauma.",
    bullets: [
      "Address relationship OCD (ROCD) and attachment anxieties",
      "Identify internal coping resources and resolve emotional conflicts",
      "Foster secure communication patterns and self-worth"
    ]
  },
  {
    id: 6,
    name: "Research & Clinical Training",
    shortName: "Clinical Training",
    image: "/images/service-growth.jpg",
    title: "Research & Clinical Training",
    desc: "Mind Mantra provides professional clinical training, supervision hours, case study worksheets, and research opportunities for therapists and psychology practitioners.",
    bullets: [
      "Clinical worksheets, case study seminars, and supervision hours",
      "Evidence-based research publications in OCD coping behaviors",
      "Skill-building workshops for counselors and psychology students"
    ]
  }
];

const getServiceIcon = (id) => {
  switch (id) {
    case 1: // ERP
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l2 2 4-4" />
        </svg>
      );
    case 2: // CBT
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      );
    case 3: // ACT
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case 4: // DBT
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 5: // RMT
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 6: // Research & Clinical Training
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "100%", height: "100%" }}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    default:
      return null;
  }
};


// Hero Slides Data
const heroSlides = [
  {
    id: 2,
    badge: "Clinical Modalities",
    title: <>Clinical Expertise In <span className="text-teal">ERP, CBT, & ACT</span></>,
    desc: "Guiding you to face fears systematically, disengage from compulsive behaviors, and cultivate resilient coping strategies for daily life.",
    image: "/images/therapist-2.jpg"
  },
  {
    id: 3,
    badge: "Mind Mantra",
    title: <>Coexist With Discomfort <span className="text-teal">To Reclaim Autonomy</span></>,
    desc: "Step beyond mere symptom management. Learn to navigate uncertainty and emotional intensity under the clinical guidance of Ms. Gauri.",
    image: "/images/therapist-2.jpg"
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

// Sample Testimonials Data
const testimonialsList = [
  {
    id: 1,
    text: "When I started ERP treatment, the intrusive thoughts felt completely overwhelming. The customized exposures and gentle guidance from Ms. Gauri changed everything. Today, I feel in control and lead a balanced life.",
    clientName: "Kai Gerold",
    role: "OCD Recovery Client",
    avatar: "/images/dr-gauri.jpg"
  },
  {
    id: 2,
    text: "I struggled with relationship OCD (ROCD) for years, constantly doubting every feeling. Through CBT and ACT exercises, Ms. Gauri guided me to face uncertainty. I've rebuilt my confidence and self-trust.",
    clientName: "Sarah Jenkins",
    role: "ROCD Counseling Client",
    avatar: "/images/therapist-2.jpg"
  },
  {
    id: 3,
    text: "The distress tolerance techniques I learned at Mind Mantra have given me my autonomy back. Learning to coexist with discomfort was intense, but it brought sustainable and long-term recovery.",
    clientName: "Julian Barnes",
    role: "Adolescent Client",
    avatar: "/images/therapist-3.jpg"
  }
];

export default function Home() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interaction states
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  // Booking Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "ERP Treatment",
    date: "",
    time: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service, date, time, message } = formData;
    
    // Formatting message for WhatsApp
    const textMessage = 
      `*MIND MANTRA APPOINTMENT REQUEST*\n` +
      `---------------------------------------\n` +
      `*Client Name:* ${name}\n` +
      `*Phone Number:* ${phone}\n` +
      `*Selected Service:* ${service}\n` +
      `*Preferred Date:* ${date}\n` +
      `*Preferred Time:* ${time}\n` +
      `*Additional Details:* ${message || "None"}\n` +
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
            <div className={styles.infoItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--color-accent-teal)" }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Safdarjung Enclave, Delhi, India 110023</span>
            </div>
            <div className={styles.infoItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--color-accent-teal)" }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Working Time: 24/7</span>
            </div>
          </div>
          <div className={styles.socials}>
            {["Telegram", "Instagram", "Facebook", "YouTube", "LinkedIn"].map((platform) => (
              <a key={platform} href="#" className={styles.socialLink} title={platform}>
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
            <li><a href="#testimonials" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Testimonials</a></li>
          </ul>

          <button className={styles.btnAppointment} onClick={() => window.open("https://wa.me/917706000771?text=Hello%20Ms.%20Gauri,%20I%20would%20like%20to%20book%20an%20appointment.", "_blank")}>
            <span>Make Appointment</span>
            <div className={styles.arrowIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "12px", height: "12px" }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
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

      {/* Hero Section with Slider */}
      <section
        id="home"
        className={styles.hero}
        style={{ "--hero-bg": `url(${heroSlides[activeSlide].image})` }}
      >
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

        {/* Three Vertical Dots on the Right */}
        <div className={styles.heroDots}>
          {heroSlides.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.heroDot} ${activeSlide === idx ? styles.heroDotActive : ""}`}
              onClick={() => setActiveSlide(idx)}
            ></span>
          ))}
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
              <img src="/images/therapist-1.jpg" alt="OCD Treatment Session" className={styles.aboutSingleImage} />
              <div className={styles.badgeCircle}>
                <span className={styles.badgeNumber}>18+</span>
                <span className={styles.badgeText}>Years of<br/>Expertise</span>
              </div>
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
                  className={styles.serviceCard}
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

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.testimonials}>
        <div className="container">
          <div className={styles.testimonialsGrid}>
            {/* Left Column (Empty on desktop for visual alignment on right) */}
            <div className={styles.testimonialEmptyCol}></div>

            {/* Right Column containing the slider content */}
            <div className={styles.testimonialsContent}>
              <div className={styles.testimonialsBadge}>Client Feedback</div>
              <h2 className={styles.testimonialsHeading}>
                Hear Our <span>Clients Share True Stories</span> Of Health And Healing
              </h2>

              <div className={styles.testimonialSlider}>
                <p className={styles.testimonialText}>
                  "{testimonialsList[activeTestimonial].text}"
                </p>

                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>

                <div className={styles.testimonialProfile}>
                  <div className={styles.testimonialAvatar}>
                    <img src={testimonialsList[activeTestimonial].avatar} alt={testimonialsList[activeTestimonial].clientName} />
                  </div>
                  <div className={styles.testimonialMeta}>
                    <h4>{testimonialsList[activeTestimonial].clientName}</h4>
                    <p>{testimonialsList[activeTestimonial].role}</p>
                  </div>
                </div>

                {/* Left/Right Arrow Controls */}
                <div className={styles.testimonialControls}>
                  <button
                    className={styles.testimonialArrowBtn}
                    onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length)}
                    aria-label="Previous testimonial"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                  </button>
                  <button
                    className={styles.testimonialArrowBtn}
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonialsList.length)}
                    aria-label="Next testimonial"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
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
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>ERP Treatment</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>CBT Therapy</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>ACT Practice</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>DBT Strategies</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>RMT Counseling</a></li>
              </ul>
            </div>

            {/* Column 4: Quick Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li className={styles.footerLinkItem}><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a></li>
                <li className={styles.footerLinkItem}><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About Us</a></li>
                <li className={styles.footerLinkItem}><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
                <li className={styles.footerLinkItem}><a href="#videos" onClick={(e) => { e.preventDefault(); scrollToSection("videos"); }}>Video Resources</a></li>
                <li className={styles.footerLinkItem}><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Testimonials</a></li>
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
