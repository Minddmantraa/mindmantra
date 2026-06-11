"use client";

import { useState, useEffect } from "react";
import styles from "./about.module.css";

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

export default function AboutClient() {
  const [reviews, setReviews] = useState(reviewsList);
  const [testimonialSlideIndex, setTestimonialSlideIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

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

  return (
    <section className={styles.testimonials}>
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
  );
}
