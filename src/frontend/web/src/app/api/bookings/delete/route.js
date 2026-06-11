import { NextResponse } from "next/server";
import { supabase, supabaseAdmin } from "@/lib/supabase";

export async function POST(request) {
  try {
    const body = await request.json();
    const { bookingId, bookingIds } = body;
    const idsToDelete = bookingIds || (bookingId ? [bookingId] : []);

    if (idsToDelete.length === 0) {
      return NextResponse.json(
        { error: "Missing required bookingId or bookingIds field" },
        { status: 400 }
      );
    }

    // 1. Authenticate the admin user server-side using the Authorization token
    const authHeader = request.headers.get("Authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        { error: "Access denied. Authentication token is missing." },
        { status: 401 }
      );
    }

    // Verify the JWT token with Supabase Auth
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      console.error("Auth Token Verification Error:", authError);
      return NextResponse.json(
        { error: "Access denied. Invalid or expired session token." },
        { status: 401 }
      );
    }

    // 2. Perform the deletion using the admin client (bypasses RLS)
    const { error: deleteError } = await supabaseAdmin
      .from("bookings")
      .delete()
      .in("id", idsToDelete);

    if (deleteError) {
      console.error("Supabase Admin Delete Error:", deleteError);
      return NextResponse.json(
        { error: `Failed to delete record: ${deleteError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Booking record permanently deleted from database.",
    });
  } catch (error) {
    console.error("API /bookings/delete Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
