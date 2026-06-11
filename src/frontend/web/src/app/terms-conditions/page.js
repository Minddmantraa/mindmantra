import styles from "../policy.module.css";

export const metadata = {
  title: "Terms & Conditions | Mind Mantra",
  description: "Terms of service for clinical appointments, payments, and counseling consultations at Mind Mantra.",
};

export default function TermsConditionsPage() {
  return (
    <div className={styles.policyWrapper}>
      <div className={`${styles.policyContainer} container`}>
        <h1 className={styles.policyTitle}>Terms & Conditions</h1>
        <div className={styles.policySubtitle}>Last Updated: June 11, 2026</div>

        <div className={styles.policyContent}>
          <p>
            Welcome to Mind Mantra. By accessing our website, booking clinical appointments, or utilizing our counseling services, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully.
          </p>

          <h2>1. Services Offered</h2>
          <p>
            Mind Mantra offers psychological counseling, clinical hypnotherapy, relationship management, and special mental health support (including OCD recovery, anxiety, and depression therapy) conducted by Ms. Gauri (Clinical Psychologist). 
          </p>

          <h2>2. Medical & Emergency Disclaimer</h2>
          <p style={{ fontWeight: "600", color: "var(--color-accent-teal)" }}>
            CRITICAL NOTICE: Mind Mantra is an outpatient psychological counseling center. We do NOT provide immediate psychiatric crisis intervention or emergency suicide prevention services.
          </p>
          <p>
            If you or someone you know is experiencing acute self-harm thoughts, severe distress, or a psychiatric emergency, please contact local emergency helplines immediately (such as Vandrevala Foundation or AASRA in India) or visit the nearest hospital emergency room.
          </p>

          <h2>3. Appointments and Payment Terms</h2>
          <ul>
            <li><strong>Session Booking:</strong> To book a preferred date and time slot, you must complete the booking form and make the consultation fee payment.</li>
            <li><strong>Fees:</strong> All fees are stated in Indian Rupees (INR) and are payable online via our secure payment gateway (Razorpay) before slot confirmation.</li>
            <li><strong>Rescheduling:</strong> Sessions can be rescheduled up to 24 hours before the scheduled appointment start time by contacting us directly.</li>
          </ul>

          <h2>4. Cancellation and Refund Policy</h2>
          <p>
            Please note our refund guidelines:
          </p>
          <ul>
            <li>If a session is cancelled by the client at least 24 hours in advance, a full refund of the fee will be processed.</li>
            <li>Cancellations made less than 24 hours prior to the session start time, or "no-shows," are not eligible for a refund.</li>
            <li>In the rare event that Mind Mantra has to cancel a session due to unforeseen circumstances, you will be offered a full refund or an immediate alternative slot.</li>
          </ul>

          <h2>5. Client Conduct</h2>
          <p>
            Clients are expected to maintain respect, safety, and decorum during therapy sessions. Mind Mantra reserves the right to terminate session consultations immediately without refund if a client exhibits threatening, abusive, or inappropriate behavior.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Psychotherapy and counseling outcomes depend on active client collaboration and individual factors. Mind Mantra and Ms. Gauri do not guarantee specific outcomes and shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of our services or website information.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            If you have questions about these Terms, please reach out to us at:
          </p>
          <p>
            <strong>Mind Mantra</strong><br />
            Safdarjung Enclave, Delhi, India 110023<br />
            Email: <a href="mailto:minddmantraa@gmail.com" style={{ color: "var(--color-accent-teal)", textDecoration: "underline" }}>minddmantraa@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
