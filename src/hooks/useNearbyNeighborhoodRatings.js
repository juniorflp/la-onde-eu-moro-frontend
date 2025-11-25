import { useQuery } from "@tanstack/react-query";

/**
 * Hook para buscar ratings médios de bairros próximos
 * Agrupa condomínios por bairro e calcula a média de avaliações
 * @param {number} latitude - Latitude da localização
 * @param {number} longitude - Longitude da localização
 * @param {number} radius - Raio de busca em metros (padrão: 5000m = 5km)
 * @param {boolean} enabled - Se a query deve ser executada
 */
export function useNearbyNeighborhoodRatings(latitude, longitude, radius = 5000, enabled = true) {
  return useQuery({
    queryKey: ["nearbyNeighborhoodRatings", latitude, longitude, radius],
    queryFn: async () => {
      if (!latitude || !longitude) {
        throw new Error("Latitude e longitude são obrigatórios");
      }

      const response = await fetch(
        `/api/nearby-condominiums?lat=${latitude}&lng=${longitude}&radius=${radius}`
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao buscar dados de bairros próximos");
      }

      const data = await response.json();
      const results = data.results || [];

      // Agrupa por bairro/localização e calcula média de ratings
      const neighborhoodMap = new Map();

      results.forEach((place) => {
        if (!place.rating || place.rating === 0) return;

        // Extrai o bairro do endereço (última parte antes da cidade)
        const addressParts = place.vicinity?.split(",") || [];
        if (addressParts.length < 2) return;

        // Pega as duas últimas partes e remove números da rua
        const lastTwoParts = addressParts.slice(-2).map((part) => {
          // Remove números e hífens no início (ex: "1221 - Forquilhas" -> "Forquilhas")
          return part.trim().replace(/^\d+\s*-?\s*/, "");
        });

        const neighborhood = lastTwoParts.join(", ").trim();

        if (!neighborhoodMap.has(neighborhood)) {
          neighborhoodMap.set(neighborhood, {
            ratings: [],
            count: 0,
          });
        }

        const data = neighborhoodMap.get(neighborhood);
        data.ratings.push(place.rating);
        data.count++;
      });

      // Calcula a média e formata os resultados
      const neighborhoodRatings = Array.from(neighborhoodMap.entries())
        .map(([location, data]) => ({
          id: location,
          location,
          rating: (data.ratings.reduce((sum, r) => sum + r, 0) / data.count).toFixed(1),
          condominiumCount: data.count,
        }))
        .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)) // Ordena por rating (maior primeiro)
        .slice(0, 10); // Limita a 10 bairros

      return neighborhoodRatings;
    },
    enabled: enabled && !!latitude && !!longitude,
    staleTime: 15 * 60 * 1000, // 15 minutos
    cacheTime: 30 * 60 * 1000, // 30 minutos
    retry: 1,
  });
}
