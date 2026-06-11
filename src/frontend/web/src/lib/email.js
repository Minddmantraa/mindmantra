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
}
