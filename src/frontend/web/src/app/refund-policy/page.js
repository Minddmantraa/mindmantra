import styles from "../policy.module.css";

export const metadata = {
  title: "Cancellation & Refund Policy | Mind Mantra",
  description: "Read about our cancellation and refund policies for psychological therapy sessions at Mind Mantra.",
};

export default function RefundPolicyPage() {
  return (
    <div className={styles.policyWrapper}>
      <div className={`${styles.policyContainer} container`}>
        <h1 className={styles.policyTitle}>Cancellation & Refund Policy</h1>
        <div className={styles.policySubtitle}>Last Updated: June 11, 2026</div>

        <div className={styles.policyContent}>
          <p>
            At Mind Mantra, we understand that changes in plans and scheduling conflicts can arise. Our goal is to provide a fair and structured cancellation and refund policy that respects both the time of our clients and our consulting psychologist.
          </p>

          <h2>1. Session Cancellations</h2>
          <ul>
            <li><strong>24-Hour Notice:</strong> You can cancel your scheduled therapy session up to 24 hours before the appointment start time. Upon cancellation, you are eligible for a **100% refund** of the booking consultation fee.</li>
            <li><strong>Late Cancellations:</strong> If you cancel your session less than 24 hours before the scheduled start time, the consultation fee will be forfeited and no refund will be issued.</li>
            <li><strong>No-Shows:</strong> If you fail to join or attend your scheduled session within 15 minutes of the start time, it will be marked as a "No-Show." No-shows are not eligible for refunds or free rescheduling.</li>
          </ul>

          <h2>2. Appointment Rescheduling</h2>
          <ul>
            <li>You can request to reschedule your session to a different date or time slot (subject to availability) up to 24 hours before your original appointment start time without any penalty.</li>
            <li>To request a reschedule, please contact us via email at <a href="mailto:minddmantraa@gmail.com" style={{ color: "var(--color-accent-teal)", textDecoration: "underline" }}>minddmantraa@gmail.com</a> or message us directly on WhatsApp at +91 77060 00771.</li>
          </ul>

          <h2>3. Refund Processing Timeline</h2>
          <p>
            If your refund request meets the criteria (cancelled at least 24 hours in advance):
          </p>
          <ul>
            <li>The refund will be processed and credited back to your **original payment source** (e.g. your credit card, debit card, bank account, or UPI app) through our payment gateway, Razorpay.</li>
            <li>Refunds are initiated immediately upon cancellation. However, it typically takes **5 to 7 working days** for the amount to reflect in your account, depending on your bank's processing cycles.</li>
          </ul>

          <h2>4. Cancellations by Mind Mantra</h2>
          <p>
            On rare occasions, due to clinical emergencies, illness, or technical outages, Mind Mantra may need to reschedule or cancel your session:
          </p>
          <ul>
            <li>In such cases, we will notify you immediately.</li>
            <li>You will be given the option to reschedule to the earliest available slot of your preference, or receive a **100% refund** processed immediately.</li>
          </ul>

          <h2>5. Contact Us for Refunds</h2>
          <p>
            To cancel a session and request a refund, please email us with your **Booking Reference ID** and payment details at:
          </p>
          <p>
            <strong>Mind Mantra Support</strong><br />
            Email: <a href="mailto:minddmantraa@gmail.com" style={{ color: "var(--color-accent-teal)", textDecoration: "underline" }}>minddmantraa@gmail.com</a><br />
            Phone/WhatsApp: +91 77060 00771
          </p>
        </div>
      </div>
    </div>
  );
}
