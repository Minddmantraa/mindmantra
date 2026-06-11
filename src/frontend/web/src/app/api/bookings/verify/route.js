import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import crypto from "crypto";

export async function POST(request) {
  try {
    const body = await request.json();
    const { bookingId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = body;

    if (!bookingId || !razorpayPaymentId) {
      return NextResponse.json(
        { error: "Missing required fields (bookingId, razorpayPaymentId)" },
        { status: 400 }
      );
    }

    // 1. Fetch the booking from the database to check status and order ID
    const { data: booking, error: fetchError } = await supabaseAdmin
      .from("bookings")
      .select("*")
      .eq("id", bookingId)
      .single();

    if (fetchError || !booking) {
      console.error("Booking Fetch Error:", fetchError);
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    // Check if the order was a mock checkout
    const isMockOrder =
      booking.razorpay_order_id && booking.razorpay_order_id.startsWith("order_mock_");
    const isEnvMock =
      !process.env.RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID === "rzp_test_placeholder";

    if (isMockOrder || isEnvMock) {
      // 2a. Mock Validation Flow
      const { error: updateError } = await supabaseAdmin
        .from("bookings")
        .update({
          payment_status: "paid",
          razorpay_payment_id: razorpayPaymentId,
        })
        .eq("id", bookingId);

      if (updateError) {
        console.error("Mock DB Update Error:", updateError);
        return NextResponse.json({ error: "Failed to update booking status" }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: "Mock payment verified and saved successfully",
      });
    }

    // 2b. Real Razorpay Signature Verification Flow
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
      // Mark as failed in DB
      await supabaseAdmin
        .from("bookings")
        .update({ payment_status: "failed" })
        .eq("id", bookingId);

      return NextResponse.json(
        { error: "Invalid payment signature verification failed" },
        { status: 400 }
      );
    }

    // 3. Mark as paid in DB
    const { error: updateError } = await supabaseAdmin
      .from("bookings")
      .update({
        payment_status: "paid",
        razorpay_payment_id: razorpayPaymentId,
      })
      .eq("id", bookingId);

    if (updateError) {
      console.error("DB Update Error (Verify):", updateError);
      return NextResponse.json({ error: "Failed to mark booking as paid" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified and booking finalized successfully",
    });
  } catch (error) {
    console.error("API /bookings/verify Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
