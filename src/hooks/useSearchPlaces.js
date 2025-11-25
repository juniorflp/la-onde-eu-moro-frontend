import { useQuery } from "@tanstack/react-query";

/**
 * Hook para buscar locais usando a API do Google Places via Next.js API route
 * @param {string} query - Termo de busca
 * @param {boolean} enabled - Se a query deve ser executada
 */
export function useSearchPlaces(query, enabled = true) {
  return useQuery({
    queryKey: ["searchPlaces", query],
    queryFn: async () => {
      if (!query || !query.trim()) {
        return { predictions: [] };
      }

      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao buscar dados");
      }

      return response.json();
    },
    enabled: enabled && !!query?.trim(),
    staleTime: 5 * 60 * 1000, // 5 minutos
    cacheTime: 10 * 60 * 1000, // 10 minutos
    retry: 1,
  });
}
