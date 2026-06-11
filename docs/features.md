# Features Directory

Welcome to the feature directory for the Mind Mantra web application.

- [Hero & Core Branding](#hero--core-branding)
- [About & Medical Expertise](#about--medical-expertise)
- [Interactive Service Directory](#interactive-service-directory)
- [Educational Video Library](#educational-video-library)
- [Interactive Recovery Journey](#interactive-recovery-journey)
- [Client Testimonials](#client-testimonials)
- [Secure Payment & Session Booking](#secure-payment--session-booking)
- [Secure Admin Portal & Dashboard](#secure-admin-portal--dashboard)
- [SMTP Automated Email Notifications](#smtp-automated-email-notifications)
- [Regulatory Compliance & Policies](#regulatory-compliance--policies)

---

## Hero & Core Branding
* **Description:** An engaging introduction displaying opening hours, address, and the primary mission tagline. Includes quick call-to-actions via phone and email.
* **Supported Platforms:** Web
* **Current Status:** Completed / Production-ready
* **Module Reference:** Frontend UI Shell

## About & Medical Expertise
* **Description:** Highlights therapist backgrounds, certifications, clinical credentials, and Ms. Gauri's professional philosophy.
* **Supported Platforms:** Web
* **Current Status:** Completed / Production-ready
* **Module Reference:** Core Presentation Components

## Interactive Service Directory
* **Description:** A detailed directory showing counseling domains: Psychological Counseling, Relationship Counseling, and Sexual Health & Wellness.
* **Supported Platforms:** Web
* **Current Status:** Completed / Production-ready
* **Module Reference:** Core Presentation Components

## Educational Video Library
* **Description:** Curated mental health resources where users can view psycho-educational videos directly on the page.
* **Supported Platforms:** Web
* **Current Status:** Completed / Production-ready
* **Module Reference:** Media Integration Modules

## Interactive Recovery Journey
* **Description:** A step-by-step visual overview of how therapy works, starting from booking a visit to clinical recovery.
* **Supported Platforms:** Web
* **Current Status:** Completed / Production-ready
* **Module Reference:** Core Presentation Components

## Client Testimonials
* **Description:** A carousel showcasing client experiences and recovery stories.
* **Supported Platforms:** Web
* **Current Status:** Completed / Production-ready
* **Module Reference:** Core Presentation Components

## Secure Payment & Session Booking
* **Description:** A multi-step scheduling form that gathers the client's preferences (focus area, date, time slot, message), inserts a pending record into the database, generates a Razorpay Order ID, processes payments via a secure Razorpay popup, cryptographically verifies the transaction signature, and saves the details. Past dates are disabled, and a click-to-send WhatsApp button is provided on confirmation.
* **Supported Platforms:** Web & Mobile
* **Current Status:** Completed / Production-ready
* **Module Reference:** Razorpay SDK Integration & Supabase Database Client

## Secure Admin Portal & Dashboard
* **Description:** A protected backend section (`/admin`) for Ms. Gauri and clinic administrators:
  * **Auth:** Secure session checks via Supabase Email/Password authentication.
  * **Analytics:** Real-time stats cards (Total Bookings, Total Revenue in INR, Pending Payments).
  * **Search & Filters:** Search bookings by name, phone, or Ref ID; filter by focus areas, status, or booking dates.
  * **Details Drawer:** Slide-out panel showing client contact records, booking schedules, transaction logs, and sensitive clinical symptoms.
  * **Booking Control:** Ability to delete database records permanently.
* **Supported Platforms:** Web & Mobile (Fully Responsive)
* **Current Status:** Completed / Production-ready
* **Module Reference:** Next.js App Router API & Admin Stylesheet

## SMTP Automated Email Notifications
* **Description:** Server-side email trigger using `nodemailer` and Gmail SMTP (configured via App Passwords). Upon transaction confirmation, it automatically sends a detailed alert to the admin (`minddmantraa@gmail.com`) and a booking confirmation receipt to the client.
* **Supported Platforms:** Server Backend
* **Current Status:** Completed / Production-ready
* **Module Reference:** Nodemailer SMTP Transport Client

## Regulatory Compliance & Policies
* **Description:** Required compliance terms and policies linked dynamically in the footer to meet payment processor (Razorpay) verification requirements:
  * **Privacy Policy (`/privacy-policy`):** Outlines data collection, security, and usage rules.
  * **Terms & Conditions (`/terms-conditions`):** Sets acceptable use and clinical emergency disclaimers.
  * **Cancellation & Refund Policy (`/refund-policy`):** Specifies 24-hour rescheduling rules and refund timelines.
  * **Shipping Policy (`/shipping-policy`):** Clarifies service delivery terms for virtual and clinical sessions.
* **Supported Platforms:** Web & Mobile (Fully Responsive)
* **Current Status:** Completed / Production-ready
* **Module Reference:** Compliance UI Pages
