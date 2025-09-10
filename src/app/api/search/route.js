// src/app/api/search/route.js
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json",
      {
        params: {
          input: query + " condomínio", // Adiciona "condomínio" à busca
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          components: "country:br",
          language: "pt-BR",
          types: "establishment", // Foca em estabelecimentos, que incluem condomínios
        },
        headers: {
          "Referrer-Policy": "no-referrer-when-downgrade",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching data from Google Maps API" },
      { status: 500 }
    );
  }
}
