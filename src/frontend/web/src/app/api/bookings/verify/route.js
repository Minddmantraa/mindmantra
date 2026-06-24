import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import crypto from "crypto";
import { sendBookingEmails } from "@/lib/email";

export async function POST(request) {
  try {
    const body = await request.json();
    const { bookingId, razorpayPaymentId, razorpayOrderId, razorpaySignature, formData } = body;

    if (!bookingId || !razorpayPaymentId) {
      return NextResponse.json(
        { error: "Missing required fields (bookingId, razorpayPaymentId)" },
        { status: 400 }
      );
    }

    // Check if the order is a mock checkout
    const isMockOrder = !razorpayOrderId || razorpayOrderId.startsWith("order_mock_");
    const isEnvMock =
      !process.env.RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID === "rzp_test_placeholder";

    // Build booking details from formData passed from frontend
    const bookingRef = bookingId;
    const finalService = formData
      ? `${formData.service} - ${formData.bookingType === "direct" ? "Direct Consultation (₹199)" : "RCA (₹9)"}`
      : "Unknown Service";

    const booking = {
      booking_ref: bookingRef,
      name: formData ? formData.name : "Unknown",
      phone: formData ? formData.phone : "Unknown",
      email: formData ? (formData.email || null) : null,
      service: finalService,
      date: formData ? (formData.date || null) : null,
      time_slot: formData ? formData.timeSlot : "Unknown",
      message: formData ? (formData.message || null) : null,
      payment_status: "paid",
      razorpay_order_id: razorpayOrderId || null,
      razorpay_payment_id: razorpayPaymentId,
    };

    if (isMockOrder || isEnvMock) {
      // 1. Mock Validation Flow
      let dbFailed = false;
      try {
        const { error: insertError } = await supabaseAdmin
          .from("bookings")
          .insert({
            booking_ref: booking.booking_ref,
            name: booking.name,
            phone: booking.phone,
            email: booking.email,
            service: booking.service,
            date: booking.date,
            time_slot: booking.time_slot,
            message: booking.message,
            payment_status: "paid",
            razorpay_order_id: booking.razorpay_order_id,
            razorpay_payment_id: booking.razorpay_payment_id,
          });

        if (insertError) {
          console.error("Supabase mock booking insert error:", insertError);
          dbFailed = true;
        }
      } catch (err) {
        console.error("Database connection exception during mock insert:", err);
        dbFailed = true;
      }

      // Trigger automated notification emails (non-blocking errors)
      const emailBooking = {
        ...booking,
        dbFailed,
      };
      await sendBookingEmails(emailBooking).catch((err) =>
        console.error("Failed to send mock booking emails:", err)
      );

      return NextResponse.json({
        success: true,
        message: dbFailed
          ? "Mock payment verified (database offline)"
          : "Mock payment verified and saved successfully",
        dbFailed,
      });
    }

    // 2. Real Razorpay Signature Verification Flow
    if (!razorpayOrderId || !razorpaySignature) {
      return NextResponse.json(
        { error: "Missing Razorpay order ID or signature for real payment verification" },
        { status: 400 }
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    const signPayload = `${razorpayOrderId}|${razorpayPaymentId}`;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(signPayload)
      .digest("hex");

    const isSignatureValid = expectedSignature === razorpaySignature;

    if (!isSignatureValid) {
      return NextResponse.json(
        { error: "Invalid payment signature verification failed" },
        { status: 400 }
      );
    }

    // Try saving the paid booking in DB
    let dbFailed = false;
    try {
      const { error: insertError } = await supabaseAdmin
        .from("bookings")
        .insert({
          booking_ref: booking.booking_ref,
          name: booking.name,
          phone: booking.phone,
          email: booking.email,
          service: booking.service,
          date: booking.date,
          time_slot: booking.time_slot,
          message: booking.message,
          payment_status: "paid",
          razorpay_order_id: booking.razorpay_order_id,
          razorpay_payment_id: booking.razorpay_payment_id,
        });

      if (insertError) {
        console.error("Supabase insert error during verification:", insertError);
        dbFailed = true;
      }
    } catch (err) {
      console.error("Database connection exception during insert:", err);
      dbFailed = true;
    }

    // Trigger automated notification emails (non-blocking errors)
    const emailBooking = {
      ...booking,
      dbFailed,
    };
    await sendBookingEmails(emailBooking).catch((err) =>
      console.error("Failed to send booking confirmation emails:", err)
    );

    return NextResponse.json({
      success: true,
      message: dbFailed
        ? "Payment verified (database offline)"
        : "Payment verified and booking finalized successfully",
      dbFailed,
    });
  } catch (error) {
    console.error("API /bookings/verify Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

