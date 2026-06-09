"use client";

import { useState } from "react";
import styles from "./page.module.css";

// Sample Services Data
const servicesList = [
  { id: 1, name: "Psychological Counseling", image: "/images/service-counseling.jpg" },
  { id: 2, name: "Relationship Counseling", image: "/images/service-relationship.jpg" },
  { id: 3, name: "Sexual Health & Wellness", image: "/images/service-sexual.jpg" },
  { id: 4, name: "Personal Growth & Mindfulness", image: "/images/service-growth.jpg" }
];

// Sample Videos Data
const videoResources = [
  {
    id: 1,
    title: "Mindfulness and Anxiety: Tips for Daily Calm",
    category: "Psychological Counseling",
    duration: "12:45",
    thumbnail: "/images/video-thumb-1.jpg",
    embedUrl: "https://www.youtube.com/embed/inpok4MKVLM" // peaceful nature/calm
  },
  {
    id: 2,
    title: "Healthy Boundaries in Relationships",
    category: "Relationship Counseling",
    duration: "15:20",
    thumbnail: "/images/video-thumb-2.jpg",
    embedUrl: "https://www.youtube.com/embed/z4L2Zg7382c" // boundaries
  },
  {
    id: 3,
    title: "Understanding Sexual Health & Wellness",
    category: "Sexual Health",
    duration: "10:15",
    thumbnail: "/images/video-thumb-3.jpg",
    embedUrl: "https://www.youtube.com/embed/tV2y5jE9bXU" // wellness info
  }
];

// Sample Recovery Steps Data
const recoverySteps = [
  {
    id: 1,
    step: "Step:1",
    title: "Book Your Visit",
    desc: "Request your booking easily via our web form or directly on WhatsApp to coordinate your slot."
  },
  {
    id: 2,
    step: "Step:2",
    title: "Initial Consultation",
    desc: "Meet with our clinical team for a comprehensive psychological and wellness assessment."
  },
  {
    id: 3,
    step: "Step:3",
    title: "Tailored Counseling",
    desc: "Receive a personalized therapeutic plan aligned with your specific wellness objectives."
  },
  {
    id: 4,
    step: "Step:4",
    title: "Skilled Therapy",
    desc: "Participate in 1-on-1 counseling sessions focused on building cognitive and somatic strength."
  },
  {
    id: 5,
    step: "Step:5",
    title: "Relentless Support",
    desc: "Get continuous check-ins and reflection worksheets to ensure you maintain progress between visits."
  },
  {
    id: 6,
    step: "Step:6",
    title: "Improvement & Recovery",
    desc: "Rebuild your mental resilience, achieve personal growth, and see your emotional wellbeing flourish."
  }
];

// Sample Testimonials Data
const testimonialsList = [
  {
    id: 1,
    text: "True healing began for me here. The guidance is built on immense trust, patience, and compassion. Ferdinand Marco and the staff provided ongoing encouragement that helped me step past my anxieties into a happier life.",
    clientName: "Eleanor Vance",
    role: "Therapy Client"
  },
  {
    id: 2,
    text: "The relationship counseling sessions saved our marriage. We learned how to communicate productively, build healthy boundaries, and rediscover our mutual trust in a safe, non-judgmental environment.",
    clientName: "David & Sarah Jenkins",
    role: "Couples Counseling"
  },
  {
    id: 3,
    text: "A truly professional center. The sexual wellness programs are informative, empathetic, and tailored. I highly recommend Mind Mantra to anyone seeking a comprehensive approach to mental wellness.",
    clientName: "Julian Barnes",
    role: "Wellness Client"
  }
];

export default function Home() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interaction states
  const [selectedVideo, setSelectedVideo] = useState(videoResources[0]);
  const [activeStep, setActiveStep] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Booking Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Psychological Counseling",
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
    const whatsappUrl = `https://api.whatsapp.com/send?phone=916395525749&text=${encodedMessage}`;
    
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
              <span>6935 Todds Lane San Antonio, TX 98336</span>
            </div>
            <div className={styles.infoItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", color: "var(--color-accent-teal)" }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Our Working Time: 09:00 am To 06:00 pm</span>
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
            <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
              <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
              <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span>MIND MANTRA</span>
          </a>

          <ul className={styles.navMenu}>
            <li><a href="#about" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About Us</a></li>
            <li><a href="#services" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
            <li><a href="#videos" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("videos"); }}>Video Resources</a></li>
            <li><a href="#why-choose-us" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("why-choose-us"); }}>Recovery Steps</a></li>
            <li><a href="#testimonials" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Testimonials</a></li>
          </ul>

          <button className={styles.btnAppointment} onClick={() => scrollToSection("booking")}>
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

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.sectionBadge}>Helping Hands</div>
            <h1 className={styles.heroTitle}>
              Healing Begins, <span>Growth Continues</span>, & Wellness Flourishes
            </h1>
            <p className={styles.heroDesc}>
              Welcome to Mind Mantra. We are a comprehensive mental health & psychological wellness center dedicated to guiding you toward long-term peace, recovery, and flourishing.
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
              <a href="tel:+916395525749" className={`${styles.heroContactPill} ${styles.outline}`}>
                <span>+91 63955 25749</span>
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
          <div className={styles.aboutGrid}>
            <div className={styles.collageContainer}>
              <div className={styles.largeCard}>
                <img src="/images/therapist-1.jpg" alt="Counseling session" />
              </div>
              <div className={styles.smallCard}>
                <img src="/images/therapist-2.jpg" alt="Individual counseling" />
              </div>
              <div className={styles.smallCard}>
                <img src="/images/therapist-3.jpg" alt="Mindfulness workshop" />
              </div>
              <div className={styles.badgeCircle}>
                <span className={styles.badgeNumber}>18+</span>
                <span className={styles.badgeText}>Years of<br/>Expertise</span>
              </div>
            </div>

            <div>
              <div className={styles.sectionBadge}>Our Trusted Support</div>
              <h2 className={styles.aboutTitle}>
                Passionate About <span>Providing Expert Guidance</span> And Emotional Support
              </h2>
              <p className={styles.aboutDesc}>
                Behind every successful recovery is a therapist's passion for care, continuous support, and clinical guidance. We believe in providing an atmosphere of trust where you can comfortably process experiences and grow.
              </p>
              <div className={styles.quoteBlock}>
                "True Healing Comes From More Than Treatments—It's Built On Trust, Patience, And Compassion, Reflected In Each Small Victory And Ongoing Encouragement. Effective Care Goes Beyond Treatment."
              </div>

              <div className={styles.doctorProfile}>
                <div className={styles.doctorInfo}>
                  <div className={styles.doctorAvatar}>
                    <img src="/images/dr-marco.jpg" alt="Senior Psychologist Ferdinand Marco" />
                  </div>
                  <div className={styles.doctorMeta}>
                    <h4>Ferdinand Marco</h4>
                    <p>Senior Doctor & Founder</p>
                  </div>
                </div>
                <div className={styles.signature}>Ferdinand Marco</div>
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
            {servicesList.map((service) => (
              <div
                key={service.id}
                className={styles.serviceCard}
                style={{ "--bg-image": `url(${service.image})` }}
              >
                {/* Embedded style helper since CSS modules can't easily read dynamic hover background images */}
                <style jsx>{`
                  .${styles.serviceCard}:nth-child(${service.id})::before {
                    background-image: url(${service.image});
                  }
                `}</style>
                <div className={styles.cardArrowBtn}>
                  <div className={styles.innerCircle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
                <h3 className={styles.serviceCardTitle}>{service.name}</h3>
              </div>
            ))}
          </div>

          <div className={styles.servicesPagination}>
            <span className={`${styles.dot} ${styles.active}`}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
      </section>

      {/* Video Resources Section */}
      <section id="videos" className={styles.videos}>
        <div className="container">
          <div className={styles.videosHeader}>
            <div>
              <div className={styles.sectionBadge}>Video Resources</div>
              <h2 className={styles.videosTitle}>
                Empowering Your <span>Steps Toward Emotional</span> Health
              </h2>
            </div>
          </div>

          <div className={styles.videosGrid}>
            <div className={styles.playerCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: 100 + "%", height: 100 + "%" }}
                ></iframe>
              </div>
              <div className={styles.videoInfoBlock}>
                <div className={styles.videoCategory}>{selectedVideo.category}</div>
                <h3 className={styles.activeVideoTitle}>{selectedVideo.title}</h3>
                <p>Learn clinical techniques and guided practices to maintain mental wellness in your everyday life. Watch other video classes using the menu.</p>
              </div>
            </div>

            <div className={styles.videoList}>
              {videoResources.map((video) => (
                <div
                  key={video.id}
                  className={`${styles.videoItem} ${selectedVideo.id === video.id ? styles.active : ""}`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className={styles.itemThumb}>
                    <img src={video.thumbnail} alt={video.title} />
                    <div className={styles.miniPlay}>
                      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className={styles.itemInfo}>
                    <h4>{video.title}</h4>
                    <p className="text-teal">{video.category} • {video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Process Section */}
      <section id="why-choose-us" className={styles.process}>
        <div className="container">
          <div className={styles.processHeader}>
            <div className={styles.sectionBadge}>Secure Care</div>
            <h2 className={styles.processTitle}>
              The Key Steps <span>To Begin Your Recovery</span> Journey
            </h2>
          </div>

          <div className={styles.radialLayout}>
            <div className={styles.radialCircle}>
              <div className={styles.radialCircleInner}>
                <div className={styles.centerImage}>
                  <img src="/images/process-center.jpg" alt="Patient counseling" />
                </div>
              </div>
            </div>

            {recoverySteps.map((item, idx) => {
              const isActive = activeStep === item.id;
              return (
                <div
                  key={item.id}
                  className={`${styles.stepNode} ${styles[`pos${item.id}`]} ${isActive ? styles.active : ""}`}
                  onMouseEnter={() => setActiveStep(item.id)}
                >
                  <button className={styles.stepLabel} onClick={() => setActiveStep(item.id)}>
                    {item.step}
                  </button>
                  {isActive && (
                    <div className={styles.stepCard}>
                      <h4 style={{ fontSize: "15px", marginBottom: "6px" }}>{item.title}</h4>
                      <p style={{ color: "var(--color-text-muted)", fontSize: "12px", margin: 0 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.testimonials}>
        <div className="container">
          <div className={styles.testimonialsHeader}>
            <div className={styles.sectionBadge}>Client Reviews</div>
            <h2 className={styles.testimonialsTitle}>
              What People Say <span>About Their Recovery</span>
            </h2>
          </div>

          <div className={styles.testimonialSlider}>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <p className={styles.testimonialText}>
                "{testimonialsList[activeTestimonial].text}"
              </p>
              <div className={styles.clientMeta}>
                <div className={styles.clientStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <h4 className={styles.clientName}>{testimonialsList[activeTestimonial].clientName}</h4>
                <p className={styles.clientRole}>{testimonialsList[activeTestimonial].role}</p>
              </div>
            </div>

            <div className={styles.servicesPagination}>
              {testimonialsList.map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.dot} ${activeTestimonial === idx ? styles.active : ""}`}
                  onClick={() => setActiveTestimonial(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className={styles.booking}>
        <div className={styles.bookingBgPattern}></div>
        <div className="container">
          <div className={styles.bookingGrid}>
            <div>
              <div className={styles.sectionBadge} style={{ color: "var(--color-accent-teal)" }}>Appointment Booking</div>
              <h2 className={styles.bookingTitle}>
                Book a Session To <span>Begin Your Wellness</span> Plan
              </h2>
              <p className={styles.bookingDesc}>
                Take the first step toward reclaiming your psychological well-being. Fill out the booking form, and our system will format your details and connect you directly to our WhatsApp support number for scheduling confirmations.
              </p>

              <div className={styles.bookingContactInfo}>
                <div className={styles.bookingContactItem}>
                  <div className={styles.bookingIconCircle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: "var(--color-white)", fontSize: "16px" }}>Emergency Call Support</h4>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>+91 63955 25749</p>
                  </div>
                </div>

                <div className={styles.bookingContactItem}>
                  <div className={styles.bookingIconCircle}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: "var(--color-white)", fontSize: "16px" }}>Email Communications</h4>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>info@mindmantra.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bookingFormContainer}>
              <form onSubmit={handleFormSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="name">Your Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.formInput}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={styles.formInput}
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="service">Select Service *</label>
                    <select
                      id="service"
                      name="service"
                      className={styles.formSelect}
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Psychological Counseling">Psychological Counseling</option>
                      <option value="Relationship Counseling">Relationship Counseling</option>
                      <option value="Sexual Health & Wellness">Sexual Health & Wellness</option>
                      <option value="Personal Growth & Mindfulness">Personal Growth & Mindfulness</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className={styles.formInput}
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="time">Preferred Time *</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      className={styles.formInput}
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="message">Brief Description of Wellness Request</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className={styles.formTextarea}
                    placeholder="Describe what you would like to discuss (optional)"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className={styles.btnSubmit}>
                  <span>Submit to WhatsApp</span>
                  <svg viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.32 5.325 0 11.866 0c3.168.001 6.147 1.234 8.389 3.477 2.242 2.241 3.472 5.218 3.472 8.388c-.004 6.545-5.327 11.866-11.869 11.866-1.999-.001-3.966-.508-5.711-1.472L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.407 1.46h.007c5.432 0 9.854-4.42 9.858-9.853.002-2.633-1.02-5.107-2.88-6.969C17.166 1.93 14.696.907 12.062.906c-5.434 0-9.857 4.422-9.86 9.855-.001 1.93.502 3.81 1.457 5.429L2.65 20.36l4.004-1.047-.007-.159z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.footerContainer} container`}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.4)" }}>&copy; {new Date().getFullYear()} Mind Mantra. All rights reserved.</p>
          </div>
          <div>
            <p style={{ color: "rgba(255,255,255,0.4)" }}>Designed & developed with care for client psychological wellness.</p>
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
