import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import Razorpay from "razorpay";

const CONSULTATION_FEE = 90; // INR

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
    const { name, phone, email, service, date, timeSlot, message } = body;

    if (!name || !phone || !service || !timeSlot) {
      return NextResponse.json(
        { error: "Missing required fields (name, phone, service, timeSlot)" },
        { status: 400 }
      );
    }

    const bookingRef = generateBookingRef();

    // 1. Insert record into database as 'pending'
    const { data: dbData, error: dbError } = await supabaseAdmin
      .from("bookings")
      .insert({
        booking_ref: bookingRef,
        name,
        phone,
        email: email || null,
        service,
        date: date || null,
        time_slot: timeSlot,
        message: message || null,
        payment_status: "pending",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Supabase Insert Error:", dbError);
      return NextResponse.json(
        { error: "Failed to create booking in database" },
        { status: 500 }
      );
    }

    // 2. Determine if we are using real Razorpay or simulation fallback
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
          amount: CONSULTATION_FEE * 100, // Razorpay expects amount in paise
          currency: "INR",
          receipt: bookingRef,
          notes: {
            booking_id: dbData.id,
            client_name: name,
          },
        });

        orderId = rzpOrder.id;
      } catch (rzpErr) {
        console.error("Razorpay Order Creation Error:", rzpErr);
        // Clean up the pending database entry if payment generation fails
        await supabaseAdmin.from("bookings").delete().eq("id", dbData.id);
        return NextResponse.json(
          { error: "Failed to initialize payment gateway" },
          { status: 500 }
        );
      }
    }

    // 3. Update the database record with the order_id
    const { error: updateError } = await supabaseAdmin
      .from("bookings")
      .update({ razorpay_order_id: orderId })
      .eq("id", dbData.id);

    if (updateError) {
      console.error("Database Update Error (Order ID):", updateError);
      return NextResponse.json(
        { error: "Failed to link order ID to booking" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      bookingId: dbData.id,
      bookingRef: dbData.booking_ref,
      orderId,
      amount: CONSULTATION_FEE,
      isMock,
      keyId: isMock ? "" : keyId,
    });
  } catch (error) {
    console.error("API /bookings/create Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
