// src/app/api/place-details/route.js
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get("placeId");

  if (!placeId) {
    return NextResponse.json({ error: "placeId parameter is required" }, { status: 400 });
  }

  try {
    const response = await axios.get("https://maps.googleapis.com/maps/api/place/details/json", {
      params: {
        place_id: placeId,
        fields:
          "name,formatted_address,photos,formatted_phone_number,website,rating,reviews,geometry,url",
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        language: "pt-BR",
      },
      headers: {
        "Referrer-Policy": "no-referrer-when-downgrade",
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching place details from Google Maps API" },
      { status: 500 }
    );
  }
}
