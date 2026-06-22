"use client";

import { useState, useEffect } from "react";
import styles from "./appointment.module.css";

const servicesList = [
  { id: 1, name: "Obsessive Compulsive Disorder Recovery" },
  { id: 2, name: "Sexual Dysfunctionality (ED, PME & Compulsive Masturbation)" },
  { id: 3, name: "Bipolar Disorder Support" },
  { id: 4, name: "Sleep Disorder Management" },
  { id: 5, name: "Eating Disorder Therapy" },
  { id: 6, name: "Relationship Management" },
  { id: 7, name: "Schizophrenia Support" },
  { id: 8, name: "Anxiety & Depression Support" },
  { id: 9, name: "Addiction & De-addiction Support" }
];

const timeSlotsList = [
  "09:00 AM - 09:30 AM",
  "09:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
  "12:00 PM - 12:30 PM",
  "12:30 PM - 01:00 PM",
  "01:00 PM - 01:30 PM",
  "01:30 PM - 02:00 PM",
  "02:00 PM - 02:30 PM",
  "02:30 PM - 03:00 PM",
  "03:00 PM - 03:30 PM",
  "03:30 PM - 04:00 PM",
  "04:00 PM - 04:30 PM",
  "04:30 PM - 05:00 PM",
  "05:00 PM - 05:30 PM",
  "05:30 PM - 06:00 PM",
  "06:00 PM - 06:30 PM",
  "06:30 PM - 07:00 PM",
  "07:00 PM - 07:30 PM",
  "07:30 PM - 08:00 PM",
  "08:00 PM - 08:30 PM",
  "08:30 PM - 09:00 PM"
];

// Consultation Fee (INR)
const CONSULTATION_FEE = 1;

// PLACE YOUR RAZORPAY KEY ID HERE
// e.g. "rzp_test_xxxxxxxxxxxxxx"
export default function AppointmentClient() {
  const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Processing, 4: Success
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Obsessive Compulsive Disorder Recovery",
    bookingType: "rca",
    date: "",
    timeSlot: "09:00 AM - 09:30 AM",
    message: ""
  });
  
  const [paymentId, setPaymentId] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [bookingRef, setBookingRef] = useState("");
  const [loading, setLoading] = useState(false);
  const [minDate, setMinDate] = useState("");

  // Dynamically load Razorpay Checkout script, calculate today's date, and check for service query parameter
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Calculate today's date in local time zone format YYYY-MM-DD
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);

    // Pre-select service from URL parameter
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        const matchedService = servicesList.find((s) => 
          s.name.toLowerCase() === serviceParam.toLowerCase() ||
          s.name.toLowerCase().includes(serviceParam.toLowerCase()) ||
          serviceParam.toLowerCase().includes(s.name.toLowerCase())
        );
        if (matchedService) {
          setFormData((prev) => ({ ...prev, service: matchedService.name }));
        }
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      selectedDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        alert("Preferred date cannot be in the past. Please select today's date or a future date.");
        return;
      }
    }
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const processWhatsAppRedirect = (completedPaymentId, finalRef) => {
    const { name, phone, email, service, date, timeSlot, message } = formData;
    
    const requestHeader = "*MIND MANTRA - CLINICAL SESSION REQUEST*";
    const payId = completedPaymentId || `pay_mock_${Math.random().toString(36).substring(2, 11)}`;
    const ref = finalRef || bookingRef || "Pending";

    const textMessage = 
      `${requestHeader}\n` +
      `---------------------------------------\n` +
      `*Booking Ref ID:* ${ref}\n` +
      `*Client Name:* ${name}\n` +
      `*Phone Number:* ${phone}\n` +
      `*Email Address:* ${email || "Not provided"}\n` +
      `*Booking Type:* ${formData.bookingType === "direct" ? "Direct Consultation (₹199)" : "Root Cause Analysis (RCA) (₹9)"}\n` +
      `*Focus Area/Service:* ${service}\n` +
      `*Preferred Date:* ${date || "Flexible / First Available"}\n` +
      `*Preferred Time Slot:* ${timeSlot}\n` +
      `*Clinical Note:* ${message || "None"}\n` +
      `---------------------------------------\n` +
      `*Payment Status:* Paid (Razorpay Secure Checkout)\n` +
      `*Razorpay Payment ID:* ${payId}\n` +
      `---------------------------------------\n` +
      `_Submitted via website portal._`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=917706000771&text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const triggerGoogleAdsConversion = (completedPaymentId) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18222711498/ijuKCM6zwsMcEMqFovFD",
        value: formData.bookingType === "direct" ? 199.0 : 9.0,
        currency: "INR",
        transaction_id: completedPaymentId || "",
      });
    }
  };

  const handlePaymentSubmit = async () => {
    setLoading(true);
    try {
      // 1. Create order and database entry
      const res = await fetch("/api/bookings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Failed to initialize booking transaction.");
        setLoading(false);
        return;
      }

      setBookingId(data.bookingId);
      setBookingRef(data.bookingRef);

      if (data.isMock) {
        // Fallback to simulated payment verification
        setLoading(false);
        runSimulatedCheckout(data.bookingId, data.bookingRef);
      } else {
        // Real Razorpay checkout flow
        setLoading(false);
        if (!window.Razorpay) {
          alert("Payment gateway script could not be loaded. Please reload and try again.");
          return;
        }

        const options = {
          key: data.keyId,
          amount: data.amount * 100, // in paise
          currency: "INR",
          name: "Mind Mantra",
          description: "Clinical Therapy Session Booking",
          image: "/images/favicon.png",
          order_id: data.orderId,
          prefill: {
            name: formData.name,
            email: formData.email || "",
            contact: formData.phone
          },
          theme: {
            color: "#2ca5a7"
          },
          handler: async function (response) {
            setStep(3); // Show processing spinner
            try {
              const verifyRes = await fetch("/api/bookings/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  bookingId: data.bookingId,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                }),
              });

              const verifyData = await verifyRes.json();
              if (verifyRes.ok) {
                setPaymentId(response.razorpay_payment_id);
                triggerGoogleAdsConversion(response.razorpay_payment_id);
                setStep(4); // Success screen
                setTimeout(() => {
                  processWhatsAppRedirect(response.razorpay_payment_id, data.bookingRef);
                }, 1500);
              } else {
                alert(verifyData.error || "Payment signature verification failed.");
                setStep(2); // Back to overview
              }
            } catch (verErr) {
              console.error("Signature Verification API Error:", verErr);
              alert("Network error during payment verification.");
              setStep(2);
            }
          },
          modal: {
            ondismiss: function() {
              alert("Payment window closed. Please complete the payment to book the session.");
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      }
    } catch (err) {
      console.error("Booking submit error:", err);
      alert("Failed to connect to the server. Please check your internet connection.");
      setLoading(false);
    }
  };

  const runSimulatedCheckout = (id, ref) => {
    setStep(3); // Go to processing state
    
    // Simulate payment transaction delays
    setTimeout(async () => {
      const mockPayId = `pay_mock_${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
      
      try {
        const verifyRes = await fetch("/api/bookings/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId: id,
            razorpayPaymentId: mockPayId,
          }),
        });

        const verifyData = await verifyRes.json();
        if (verifyRes.ok) {
          setPaymentId(mockPayId);
          triggerGoogleAdsConversion(mockPayId);
          setStep(4); // Go to success state
          
          // Auto-redirect to WhatsApp after success showing
          setTimeout(() => {
            processWhatsAppRedirect(mockPayId, ref);
          }, 1800);
        } else {
          alert(verifyData.error || "Mock payment verification failed.");
          setStep(2);
        }
      } catch (err) {
        console.error("Mock verification call failed:", err);
        alert("Mock payment verification failed due to network error.");
        setStep(2);
      }
    }, 2000);
  };

  return (
    <div className={styles.bookingFormCard}>
      {/* Step Progress Bar */}
      {step <= 2 && (
        <div className={styles.stepsProgress}>
          <div className={styles.stepsProgressBar}>
            <div className={`${styles.stepsProgressBarFill} ${step === 2 ? styles.step2Active : ""}`}></div>
          </div>
          
          <div className={`${styles.progressStep} ${step >= 1 ? styles.active : ""} ${step > 1 ? styles.completed : ""}`}>
            <div className={styles.stepIcon}>{step > 1 ? "✓" : "1"}</div>
            <span className={styles.stepLabel}>Details</span>
          </div>

          <div className={`${styles.progressStep} ${step === 2 ? styles.active : ""}`}>
            <div className={styles.stepIcon}>2</div>
            <span className={styles.stepLabel}>Payment</span>
          </div>
        </div>
      )}

      {/* STEP 1: FILL DETAILS */}
      {step === 1 && (
        <>
          <h3 className={styles.formTitle}>Book a Session</h3>
          <p className={styles.formSubtitle}>Select your focus area and slot preferences to continue.</p>

          <form onSubmit={handleNextStep} className={styles.bookingForm}>
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
              <label htmlFor="service">Focus Area / Service</label>
              <select 
                id="service" 
                name="service" 
                value={formData.service} 
                onChange={handleInputChange}
              >
                {servicesList.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Booking Type *</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input 
                    type="radio" 
                    id="bookingType-rca"
                    name="bookingType" 
                    value="rca" 
                    checked={formData.bookingType === "rca"} 
                    onChange={handleInputChange} 
                  />
                  <span>Root Cause Analysis (RCA) - ₹9</span>
                </label>
                <label className={styles.radioLabel}>
                  <input 
                    type="radio" 
                    id="bookingType-direct"
                    name="bookingType" 
                    value="direct" 
                    checked={formData.bookingType === "direct"} 
                    onChange={handleInputChange} 
                  />
                  <span>Direct Consultation (Ms. Gauri) - ₹199</span>
                </label>
              </div>
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
                  min={minDate}
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
                  {timeSlotsList.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Describe your clinical concerns / symptoms</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleInputChange} 
                placeholder="Provide details about your concerns or symptoms to help us prepare for the session..."
              ></textarea>
            </div>

            <button type="submit" className={styles.btnBookingSubmit}>
              <span>Proceed to Next</span>
              <div className={styles.btnBookingSubmitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </button>
          </form>
        </>
      )}

      {/* STEP 2: PAYMENT OVERVIEW */}
      {step === 2 && (
        <div className={styles.paymentSection}>
          <h3 className={styles.formTitle}>Secure Payment</h3>
          <p className={styles.formSubtitle}>Complete the payment step to secure and finalize your session booking.</p>
          
          <div className={styles.paymentSummary}>
            <div className={styles.summaryHeader}>Booking Summary</div>
            
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Client Name:</span>
              <span className={styles.summaryValue}>{formData.name}</span>
            </div>
            
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Selected Service:</span>
              <span className={styles.summaryValue}>{formData.service}</span>
            </div>
            
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Date & Time:</span>
              <span className={styles.summaryValue}>
                {formData.date || "Flexible Date"} @ {formData.timeSlot}
              </span>
            </div>
            <div className={styles.feeDisplay}>
              <span className={styles.feeLabel}>Session Consultation Fee</span>
              <span className={styles.feeAmount}>₹{formData.bookingType === "direct" ? 199 : 9}</span>
            </div>
          </div>

          <div className={styles.razorpayBadge}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span className={styles.razorpayText}>Secured via Razorpay Checkout</span>
          </div>

          <div className={styles.btnActionGroup}>
            <button type="button" className={styles.btnBookingBack} onClick={handlePrevStep}>
              Back
            </button>
            <button 
              type="button" 
              className={styles.btnBookingSubmit} 
              onClick={handlePaymentSubmit}
              disabled={loading}
              style={loading ? { opacity: 0.7, cursor: "not-allowed" } : {}}
            >
              <span>{loading ? "Initializing..." : "Pay & Confirm Booking"}</span>
              <div className={styles.btnBookingSubmitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: PAYMENT PROCESSING */}
      {step === 3 && (
        <div className={styles.processingOverlay}>
          <div className={styles.spinner}></div>
          <h3 className={styles.processingText}>Processing Secure Payment...</h3>
          <p className={styles.processingSubtitle}>Please do not refresh or close this window.</p>
        </div>
      )}

      {/* STEP 4: PAYMENT SUCCESS */}
      {step === 4 && (
        <div className={styles.successOverlay}>
          <div className={styles.successIconCircle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" style={{ width: "36px", height: "36px" }}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className={styles.successTitle}>Session Booked!</h3>
          <p className={styles.successDesc}>Your session has been successfully booked.</p>
          <p className={styles.successDesc} style={{ marginTop: "12px", fontSize: "14px", color: "var(--color-text-muted)" }}>
            You can also click the button below to share your booking reference with Ms. Gauri on WhatsApp.
          </p>
          
          <a
            href={`https://api.whatsapp.com/send?phone=917706000771&text=${encodeURIComponent(
              `*MIND MANTRA - CLINICAL SESSION REQUEST*\n\n` +
              `*Reference ID:* ${bookingRef || "Pending"}\n` +
              `*Payment ID:* ${paymentId || "Success"}\n` +
              `*Name:* ${formData.name}\n` +
              `*Phone:* ${formData.phone}\n` +
              `*Booking Type:* ${formData.bookingType === "direct" ? "Direct Consultation (₹199)" : "Root Cause Analysis (RCA) (₹9)"}\n` +
              `*Focus Area:* ${formData.service}\n` +
              `*Scheduled Date:* ${formData.date ? new Date(formData.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "Flexible"}\n` +
              `*Time Slot:* ${formData.timeSlot}\n\n` +
              `*Clinical Notes/Symptoms:*\n${formData.message || "None provided"}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsappSuccess}
          >
            <span>Send booking details to Whatsapp</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
