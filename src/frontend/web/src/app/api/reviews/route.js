import { NextResponse } from "next/server";

// Fallback reviews to show if Google API is not configured or fails
const fallbackReviews = [
  {
    id: 1,
    name: "Rohan Sharma",
    initials: "RS",
    avatarBg: "#E0F2F1",
    avatarColor: "#00796B",
    rating: 5,
    date: "2 weeks ago",
    vertical: "OCD Recovery",
    text: "Ms. Gauri's ERP sessions literally gave me my life back. I was trapped in contamination loops for 4 hours a day. Her step-by-step guidance was compassionate but firm, helping me face my fears. Highly recommend her clinical expertise."
  },
  {
    id: 2,
    name: "Aanya Verma",
    initials: "AV",
    avatarBg: "#FCE4EC",
    avatarColor: "#C2185B",
    rating: 5,
    date: "1 month ago",
    vertical: "Anxiety Support",
    text: "The anxiety management techniques taught here are very practical. I used to get severe panic attacks before meetings. The somatic grounding and cognitive reframing tools have helped me regain my confidence completely."
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    initials: "VM",
    avatarBg: "#E8EAF6",
    avatarColor: "#303F9F",
    rating: 5,
    date: "3 weeks ago",
    vertical: "Sexual Wellness",
    text: "Very professional and completely confidential. I was extremely hesitant to discuss erectile dysfunction and performance anxiety, but Ms. Gauri created a safe, non-judgmental space that helped me heal my relationship."
  },
  {
    id: 4,
    name: "Priya Patel",
    initials: "PP",
    avatarBg: "#EFEBE9",
    avatarColor: "#4E342E",
    rating: 5,
    date: "2 months ago",
    vertical: "Depression Support",
    text: "I was suffering from postpartum depression and felt completely isolated. The counseling sessions helped me process my emotions and build a strong support system. I am forever grateful for the guidance I received."
  },
  {
    id: 5,
    name: "Kabir Mehta",
    initials: "KM",
    avatarBg: "#FFF3E0",
    avatarColor: "#E65100",
    rating: 5,
    date: "3 weeks ago",
    vertical: "ADHD Coaching",
    text: "The executive functioning tools and behavioral strategies I learned here changed how I work. I can finally organize my day, focus on tasks without getting overwhelmed, and manage my ADHD productively."
  }
];

function mapGoogleReview(review, index) {
  const name = review.author_name || "Anonymous User";
  
  // Extract initials
  const nameParts = name.trim().split(/\s+/);
  const initials = nameParts.map(part => part[0]).join("").substring(0, 2).toUpperCase();

  // Generate color palette based on initials
  const colors = [
    { bg: "#E0F2F1", text: "#00796B" }, // teal
    { bg: "#FCE4EC", text: "#C2185B" }, // pink
    { bg: "#E8EAF6", text: "#303F9F" }, // indigo
    { bg: "#EFEBE9", text: "#4E342E" }, // brown
    { bg: "#FFF3E0", text: "#E65100" }  // orange
  ];
  const charCodeSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const colorIndex = charCodeSum % colors.length;
  const avatarColors = colors[colorIndex] || colors[0];

  return {
    id: review.time || index + 1,
    name: name,
    initials: initials || "GR",
    avatarBg: avatarColors.bg,
    avatarColor: avatarColors.text,
    profilePhotoUrl: review.profile_photo_url || null,
    rating: review.rating || 5,
    date: review.relative_time_description || "Recently",
    vertical: "Verified Google Review",
    text: review.text || ""
  };
}

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    // Check if API Key and Place ID are set and not placeholder values
    if (
      !apiKey || 
      !placeId || 
      apiKey.includes("AIzaSy") === false || 
      placeId === "PLACEHOLDER_PLACE_ID"
    ) {
      console.log("Google Places API credentials not configured yet. Returning fallback reviews.");
      return NextResponse.json({
        reviews: fallbackReviews,
        isMocked: true
      });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache reviews for 1 hour
    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API error status:", data.status, data.error_message || "");
      return NextResponse.json({
        reviews: fallbackReviews,
        isMocked: true,
        error: data.error_message || data.status
      });
    }

    const googleReviews = data.result?.reviews || [];
    
    if (googleReviews.length === 0) {
      return NextResponse.json({
        reviews: fallbackReviews,
        isMocked: true
      });
    }

    const mappedReviews = googleReviews.map((review, idx) => mapGoogleReview(review, idx));

    return NextResponse.json({
      reviews: mappedReviews,
      isMocked: false
    });
  } catch (error) {
    console.error("API /api/reviews internal server error:", error);
    return NextResponse.json({
      reviews: fallbackReviews,
      isMocked: true,
      error: "Internal Server Error"
    });
  }
}
