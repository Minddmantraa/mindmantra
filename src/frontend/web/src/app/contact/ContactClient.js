"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !phone || !message) {
      alert("Please fill in your name, phone number, and message.");
      return;
    }

    const requestHeader = "*MIND MANTRA - CONTACT INQUIRY*";

    const textMessage = 
      `${requestHeader}\n` +
      `---------------------------------------\n` +
      `*Client Name:* ${name}\n` +
      `*Phone Number:* ${phone}\n` +
      `*Email Address:* ${email || "Not provided"}\n` +
      `*Message:* ${message}\n` +
      `---------------------------------------\n` +
      `_Submitted via contact page._`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=917706000771&text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={styles.contactFormCard}>
      <h3 className={styles.formTitle}>Send Us a Message</h3>
      <p className={styles.formSubtitle}>We typically respond to inquiries within a few hours.</p>

      <form onSubmit={handleFormSubmit} className={styles.contactForm}>
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

        <div className={styles.formGroup}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="How can we help you today? Please feel free to ask questions about our therapeutic programs..."
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>
          <span>Send Message</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </form>
    </div>
  );
}
