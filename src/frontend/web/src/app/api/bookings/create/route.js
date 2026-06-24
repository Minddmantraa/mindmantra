import { NextResponse } from "next/server";
import Razorpay from "razorpay";


// Helper to generate a unique human-readable booking reference (e.g., MM-R7A8B)
function generateBookingRef() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Avoid confusing chars like O, 0, I, 1
  let ref = "";
  for (let i = 0; i < 5; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `MM-${ref}`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, bookingType = "rca", date, timeSlot, message } = body;

    if (!name || !phone || !service || !timeSlot) {
      return NextResponse.json(
        { error: "Missing required fields (name, phone, service, timeSlot)" },
        { status: 400 }
      );
    }

    const bookingRef = generateBookingRef();
    const feeAmount = bookingType === "direct" ? 199 : 9;
    const finalService = `${service} - ${bookingType === "direct" ? "Direct Consultation (₹199)" : "RCA (₹9)"}`;

    // 1. Determine if we are using real Razorpay or simulation fallback
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const isMock = !keyId || keyId === "rzp_test_placeholder";

    let orderId = "";

    if (isMock) {
      // Simulation mode
      orderId = `order_mock_${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
    } else {
      // Real Razorpay integration
      try {
        const razorpay = new Razorpay({
          key_id: keyId,
          key_secret: keySecret,
        });

        const rzpOrder = await razorpay.orders.create({
          amount: feeAmount * 100, // Razorpay expects amount in paise
          currency: "INR",
          receipt: bookingRef,
          notes: {
            booking_ref: bookingRef,
            client_name: name,
            client_phone: phone,
            client_email: email || "",
            service: finalService,
            date: date || "",
            time_slot: timeSlot,
            message: message || "",
          },
        });

        orderId = rzpOrder.id;
      } catch (rzpErr) {
        console.error("Razorpay Order Creation Error:", rzpErr);
        return NextResponse.json(
          { error: "Failed to initialize payment gateway" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      bookingId: bookingRef,
      bookingRef: bookingRef,
      orderId,
      amount: feeAmount,
      isMock,
      keyId: isMock ? "" : keyId,
    });
  } catch (error) {
    console.error("API /bookings/create Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

