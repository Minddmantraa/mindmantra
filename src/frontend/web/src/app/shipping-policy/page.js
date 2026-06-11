import styles from "../policy.module.css";

export const metadata = {
  title: "Shipping & Service Delivery Policy | Mind Mantra",
  description: "Learn how session consultations and digital services are delivered at Mind Mantra.",
};

export default function ShippingPolicyPage() {
  return (
    <div className={styles.policyWrapper}>
      <div className={`${styles.policyContainer} container`}>
        <h1 className={styles.policyTitle}>Shipping & Service Delivery Policy</h1>
        <div className={styles.policySubtitle}>Last Updated: June 11, 2026</div>

        <div className={styles.policyContent}>
          <p>
            This Shipping & Service Delivery Policy applies to the services offered by Mind Mantra. Since we are a psychological wellness center providing consultation and therapeutic services, no physical shipping is involved in our operations.
          </p>

          <h2>1. Nature of Services</h2>
          <p>
            Mind Mantra provides mental health counseling, clinical psychotherapy, cognitive behavioral therapy (CBT), ERP therapy, relationship coaching, and sexual wellness counseling.
          </p>
          <ul>
            <li>These are <strong>intangible professional services</strong>.</li>
            <li>No physical goods, medical supplies, or tangible items will be shipped or dispatched to your physical shipping address.</li>
          </ul>

          <h2>2. How Services Are Delivered</h2>
          <p>
            Our consultation sessions are delivered in two ways, based on the slot preference selected during booking or coordinate discussion:
          </p>
          <ul>
            <li><strong>Online Consultations (Virtual Delivery):</strong> Sessions are conducted via secure, end-to-end encrypted video conferencing platforms (such as Google Meet or Zoom). A session link is sent to your registered phone number (WhatsApp) and email prior to the start of the scheduled session.</li>
            <li><strong>In-Person Consultations (Physical Delivery):</strong> Sessions are conducted face-to-face at our clinical psychological wellness center located at:
              <br />
              <em>Safdarjung Enclave, Delhi, India 110023</em>
            </li>
          </ul>

          <h2>3. Delivery Timeframe</h2>
          <ul>
            <li><strong>Booking Confirmation:</strong> A booking reference number and confirmation receipt are generated instantly upon successful payment checkout.</li>
            <li><strong>Session Delivery:</strong> The counseling services are delivered exactly on the **scheduled date and time slot** selected by the client during the booking process, or as adjusted through mutual rescheduling agreements.</li>
          </ul>

          <h2>4. Service Delivery Delays or Failures</h2>
          <ul>
            <li>If there is a delay in session delivery due to technical issues on our side (such as internet outages or server downtime), we will immediately coordinate with you to restore connectivity or extend the session time.</li>
            <li>If a session cannot be delivered due to unexpected events, you will be provided a full reschedule slot or a 100% refund of the fee paid.</li>
          </ul>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions regarding the delivery of your booked counseling sessions, please reach out to us at:
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
