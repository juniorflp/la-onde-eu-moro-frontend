import { useQuery } from "@tanstack/react-query";

/**
 * Hook para buscar condomínios próximos usando Google Places Nearby Search
 * @param {number} latitude - Latitude da localização
 * @param {number} longitude - Longitude da localização
 * @param {number} radius - Raio de busca em metros (padrão: 5000m = 5km)
 * @param {boolean} enabled - Se a query deve ser executada
 */
export function useNearbyCondominiums(latitude, longitude, radius = 5000, enabled = true) {
  return useQuery({
    queryKey: ["nearbyCondominiums", latitude, longitude, radius],
    queryFn: async () => {
      if (!latitude || !longitude) {
        throw new Error("Latitude e longitude são obrigatórios");
      }

      const response = await fetch(
        `/api/nearby-condominiums?lat=${latitude}&lng=${longitude}&radius=${radius}`
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao buscar condomínios próximos");
      }

      const data = await response.json();

      // Transforma os resultados do Google Places para o formato esperado
      const condominiums = (data.results || []).map((place) => ({
        id: place.place_id,
        placeId: place.place_id,
        name: place.name,
        address: place.vicinity || place.formatted_address || "",
        rating: place.rating ? place.rating.toFixed(1) : "0.0",
        totalRatings: place.user_ratings_total || 0,
        reviewsCount: 0, // Google Places não retorna isso diretamente
        image: place.photos?.[0]
          ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
          : "/images/condominium-test-img.png",
        location: {
          lat: place.geometry?.location?.lat,
          lng: place.geometry?.location?.lng,
        },
        href: `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
      }));

      return condominiums;
    },
    enabled: enabled && !!latitude && !!longitude,
    staleTime: 10 * 60 * 1000, // 10 minutos
    cacheTime: 30 * 60 * 1000, // 30 minutos
    retry: 1,
  });
}
