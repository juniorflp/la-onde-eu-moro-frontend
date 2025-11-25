// src/app/api/nearby-condominiums/route.js
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const radius = searchParams.get("radius") || "5000"; // 5km por padrão

  if (!lat || !lng) {
    return NextResponse.json({ error: "Parâmetros lat e lng são obrigatórios" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      {
        params: {
          location: `${lat},${lng}`,
          radius: radius,
          keyword: "condomínio",
          language: "pt-BR",
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
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
      { error: "Erro ao buscar condomínios próximos na API do Google Maps" },
      { status: 500 }
    );
  }
}
