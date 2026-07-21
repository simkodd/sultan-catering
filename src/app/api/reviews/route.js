import { NextResponse } from "next/server";

export const revalidate = 604800;

export async function GET() {
  const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  if (!PLACE_ID || !API_KEY) {
    return NextResponse.json({ error: "API credentials missing" }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "reviews.rating,reviews.text,reviews.authorAttribution,reviews.relativePublishTimeDescription",
        },
        next: { revalidate: 604800 },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("---> GOOGLE API ASIL HATA DETAYI <---", JSON.stringify(errorData, null, 2));
      throw new Error(`Google API Hatası: ${errorData?.error?.message || response.statusText}`);
    }

    const data = await response.json();

    if (!data.reviews || data.reviews.length === 0) {
      return NextResponse.json({ reviews: [] }, { status: 200 });
    }

    const filteredReviews = data.reviews
      .filter((rev) => rev.rating >= 4 && rev.text && rev.text.text)
      .map((rev, index) => {
        const name = rev.authorAttribution?.displayName || "Google User";
        const photoUrl = rev.authorAttribution?.photoUri || null;
        
        // Yorumun Google Haritalar linki (Yoksa işletmenin genel yorum sayfasına atar)
        const reviewUrl = rev.authorAttribution?.uri || `https://search.google.com/local/reviews?placeid=${PLACE_ID}`;
        
        const initials = name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2);

        const colors = [
          { themeColor: "text-orange", bgColor: "bg-red" },
          { themeColor: "text-green", bgColor: "bg-orange" },
          { themeColor: "text-red", bgColor: "bg-green" },
        ];
        const colorPair = colors[index % colors.length];

        return {
          id: `google-${index}`,
          name: name,
          initials: initials,
          photoUrl: photoUrl,
          role: `Google Review • ${rev.relativePublishTimeDescription || "Recently"}`,
          text: rev.text.text,
          stars: rev.rating,
          reviewUrl: reviewUrl, // Yönlendirme linkini buraya ekledik
          ...colorPair,
        };
      });

    return NextResponse.json({ reviews: filteredReviews }, { status: 200 });
  } catch (error) {
    console.error("Google Reviews Fetch Error:", error.message);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}