import nodemailer from "nodemailer";

/**
 * Sends booking confirmation emails to the admin and client.
 * Will log a warning and return early if SMTP credentials are not configured in environment variables.
 * 
 * @param {Object} booking - The booking details object from the database.
 */
export async function sendBookingEmails(booking) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  
  if (!smtpUser || !smtpPass) {
    console.warn(
      "SMTP_USER or SMTP_PASS environment variables are not set. Skipping automated email notifications."
    );
    return;
  }

  const adminEmail = process.env.SMTP_TO || "minddmantraa@gmail.com";
  const fromEmail = process.env.SMTP_FROM || smtpUser;

  // Create Nodemailer Transporter using Gmail service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const formattedDate = booking.date
    ? new Date(booking.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Flexible / First Available";

  const isDirect = booking.service && booking.service.includes("Direct Consultation (₹199)");
  const isRca = booking.service && booking.service.includes("RCA (₹9)");
  const feeAmount = isDirect ? "₹199.00" : isRca ? "₹9.00" : "₹1.00";

  const whatsappLink = `https://api.whatsapp.com/send?phone=917706000771&text=${encodeURIComponent(
    `Hello Ms. Gauri, I have completed the payment. My Booking Reference ID is: ${booking.booking_ref}`
  )}`;

  // Email 1: ADMIN NOTIFICATION (New Session Alert)
  const adminMailOptions = {
    from: `"Mind Mantra Notifications" <${fromEmail}>`,
    to: adminEmail,
    subject: `🚨 New Paid Booking Received: ${booking.booking_ref}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e2f31; line-height: 1.6;">
        <h2 style="color: #1F3F43; border-bottom: 2px solid #b54c62; padding-bottom: 8px;">New Paid Booking Request</h2>
        <p>A new counseling appointment has been booked and paid for. Details are listed below:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-weight: bold; width: 180px;">Booking Ref:</td>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-family: monospace; font-size: 15px; color: #b54c62; font-weight: bold;">${booking.booking_ref}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-weight: bold;">Client Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${booking.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${booking.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${booking.email || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-weight: bold;">Clinical Service:</td>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${booking.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-weight: bold;">Preferred Date:</td>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-weight: bold;">Time Slot:</td>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${booking.time_slot}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-weight: bold;">Razorpay Payment ID:</td>
            <td style="padding: 8px; border-bottom: 1px solid #edf2f7; font-family: monospace; font-size: 12px; color: #4a5568;">${booking.razorpay_payment_id || "N/A"}</td>
          </tr>
        </table>
        
        <h3 style="color: #1F3F43; margin-top: 24px;">Client Submitted Concerns / Notes:</h3>
        <div style="background-color: #faf0f2; padding: 16px; border-left: 4px solid #b54c62; border-radius: 8px; font-style: italic; white-space: pre-wrap;">
          ${booking.message || "No clinical description submitted."}
        </div>
        
        <p style="margin-top: 30px; font-size: 13px; color: #627577; text-align: center;">
          This is an automated system notification from the Mind Mantra App.
        </p>
      </div>
    `,
  };

  try {
    // Send admin notification
    await transporter.sendMail(adminMailOptions);
    console.log(`[Email] Admin notification sent for ref: ${booking.booking_ref}`);
  } catch (adminErr) {
    console.error(`[Email] Error sending admin notification:`, adminErr);
  }

  // Email 2: CLIENT CONFIRMATION (only if email was provided)
  if (booking.email && booking.email.trim() !== "") {
    const clientMailOptions = {
      from: `"Ms. Gauri | Mind Mantra" <${fromEmail}>`,
      to: booking.email,
      subject: `Booking Confirmed: Mind Mantra Therapy Session (${booking.booking_ref})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e2f31; line-height: 1.6;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #1F3F43; font-family: Georgia, serif; font-size: 28px; margin-bottom: 4px;">Mind Mantra</h1>
            <p style="color: #b54c62; font-weight: bold; margin: 0; text-transform: uppercase; letter-spacing: 1px; font-size: 12px;">Psychologist & Clinical Hypnotherapy</p>
          </div>
          
          <p>Dear ${booking.name},</p>
          
          <p>Thank you for choosing Mind Mantra. We are writing to confirm that we have successfully received your booking consultation fee of <strong>${feeAmount}</strong>. Your session appointment slot has been reserved.</p>
          
          <div style="background-color: #faf0f2; border: 1px solid #edf2f7; border-radius: 12px; padding: 20px; margin: 24px 0;">
            <h3 style="color: #1F3F43; margin-top: 0; border-bottom: 1px solid rgba(31,63,67,0.1); padding-bottom: 8px;">Reservation Summary</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #627577; font-weight: bold; width: 150px;">Reference ID:</td>
                <td style="padding: 6px 0; font-family: monospace; font-weight: bold; color: #b54c62;">${booking.booking_ref}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #627577; font-weight: bold;">Focus Area:</td>
                <td style="padding: 6px 0; font-weight: 500;">${booking.service}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #627577; font-weight: bold;">Preferred Date:</td>
                <td style="padding: 6px 0; font-weight: 500;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #627577; font-weight: bold;">Preferred Slot:</td>
                <td style="padding: 6px 0; font-weight: 500;">${booking.time_slot}</td>
              </tr>
            </table>
          </div>

          <h3 style="color: #1F3F43; margin-top: 24px;">What's Next?</h3>
          <p>To finalize the video call link or setup clinical directions for your in-person session, please share this booking reference directly with us on WhatsApp:</p>
          
          <div style="text-align: center; margin: 28px 0;">
            <a href="${whatsappLink}" target="_blank" style="background-color: #25D366; color: #ffffff; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 15px; display: inline-block; box-shadow: 0 4px 10px rgba(37,211,102,0.25);">
              Chat with Ms. Gauri on WhatsApp
            </a>
          </div>

          <hr style="border: 0; border-top: 1px solid #edf2f7; margin-top: 30px;" />
          
          <p style="font-size: 13px; color: #627577;">
            <strong>Mind Mantra Psychological Wellness Center</strong><br />
            Safdarjung Enclave, Delhi, India 110023<br />
            Need assistance? Reply to this email or reach us at <a href="mailto:minddmantraa@gmail.com" style="color: #b54c62;">minddmantraa@gmail.com</a>
          </p>
        </div>
      `,
    };

    try {
      // Send client confirmation
      await transporter.sendMail(clientMailOptions);
      console.log(`[Email] Confirmation email sent to client: ${booking.email}`);
    } catch (clientErr) {
      console.error(`[Email] Error sending client confirmation:`, clientErr);
    }
  }
}
