import { useQuery } from "@tanstack/react-query";

/**
 * Hook para buscar detalhes de um local específico via Next.js API route
 * @param {string} placeId - ID do local no Google Places
 * @param {boolean} enabled - Se a query deve ser executada
 */
export function usePlaceDetails(placeId, enabled = true) {
  return useQuery({
    queryKey: ["placeDetails", placeId],
    queryFn: async () => {
      if (!placeId) {
        throw new Error("placeId é obrigatório");
      }

      const response = await fetch(`/api/place-details?placeId=${encodeURIComponent(placeId)}`);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao buscar detalhes do local");
      }

      const data = await response.json();
      return data.result;
    },
    enabled: enabled && !!placeId,
    staleTime: 10 * 60 * 1000, // 10 minutos
    cacheTime: 30 * 60 * 1000, // 30 minutos
    retry: 1,
  });
}
