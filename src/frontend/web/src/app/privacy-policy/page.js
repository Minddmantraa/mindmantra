import styles from "../policy.module.css";

export const metadata = {
  title: "Privacy Policy | Mind Mantra",
  description: "Learn how Mind Mantra collects, protects, and uses your personal and clinical data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.policyWrapper}>
      <div className={`${styles.policyContainer} container`}>
        <h1 className={styles.policyTitle}>Privacy Policy</h1>
        <div className={styles.policySubtitle}>Last Updated: June 11, 2026</div>

        <div className={styles.policyContent}>
          <p>
            At Mind Mantra, we are deeply committed to protecting your privacy and ensuring the confidentiality of your personal and clinical information. This Privacy Policy describes how we collect, use, store, and safeguard your data when you visit our website and book our psychological counseling services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            To facilitate clinical bookings and deliver expert therapeutic care, we collect the following types of information:
          </p>
          <ul>
            <li><strong>Personal Details:</strong> Your full name, phone number, and email address.</li>
            <li><strong>Appointment Information:</strong> Your preferred date, time slot, and the specific focus area or clinical service requested.</li>
            <li><strong>Clinical Concerns:</strong> Any descriptions of symptoms, clinical concerns, or notes you voluntarily share in the booking form.</li>
            <li><strong>Transaction Data:</strong> Razorpay order IDs, payment IDs, and transaction statuses (we do not collect or store your card or bank credentials directly; payments are securely handled by Razorpay).</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the collected information solely for the following purposes:
          </p>
          <ul>
            <li>To schedule and manage your therapy and counseling sessions.</li>
            <li>To enable Ms. Gauri (Clinical Psychologist) to prepare for your specific clinical targets before the session.</li>
            <li>To process and verify transaction payments securely through our payment gateway (Razorpay).</li>
            <li>To send automated session details and confirmation links via WhatsApp or email.</li>
            <li>To respond to your inquiries and offer dedicated customer support.</li>
          </ul>

          <h2>3. Data Security and Confidentiality</h2>
          <p>
            Your clinical data is treated with the highest degree of medical and professional confidentiality.
          </p>
          <ul>
            <li>All booking records are stored in secure cloud database instances (Supabase) protected by strict Row-Level Security (RLS) policies.</li>
            <li>Only authorized administrative personnel and your clinical psychologist have access to your details.</li>
            <li>No clinical descriptions or personal details are shared with external marketing agencies or third parties.</li>
          </ul>

          <h2>4. Third-Party Services</h2>
          <p>
            We utilize secure third-party integrations to run our platform operations:
          </p>
          <ul>
            <li><strong>Razorpay:</strong> To process consultation fees. Razorpay complies with all PCI-DSS standards to protect card and transaction data.</li>
            <li><strong>Supabase:</strong> For cloud database management and secure storage.</li>
            <li><strong>WhatsApp:</strong> To trigger optional direct communication for scheduling updates.</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, request corrections, or request the permanent deletion of your booking history from our active records. To exercise these rights, please contact us at the email provided below.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            For any queries or concerns regarding this Privacy Policy or your data, please contact us at:
          </p>
          <p>
            <strong>Mind Mantra</strong><br />
            Safdarjung Enclave, Delhi, India 110023<br />
            Email: <a href="mailto:minddmantraa@gmail.com" style={{ color: "var(--color-accent-teal)", textDecoration: "underline" }}>minddmantraa@gmail.com</a><br />
            Phone: +91 77060 00771
          </p>
        </div>
      </div>
    </div>
  );
}
