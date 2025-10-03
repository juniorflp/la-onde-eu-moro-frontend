"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../global/Button";
import ButtonSquare from "../global/ButtonSquare";
import SearchIcon from "../icons/SearchIcon";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [placeDetails, setPlaceDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [typeSearch, setTypeSearch] = useState("condominium"); // "condominium", "city"

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao buscar dados");
      }

      const predictions = data.predictions || [];

      setResults(predictions);
    } catch (err) {
      console.error("Erro na busca:", err);
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setError("");
    setSelectedPlace(null);
    setPlaceDetails(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleViewDetails = async (placeId, description) => {
    setSelectedPlace({ placeId, description });
    setLoadingDetails(true);
    setError("");

    try {
      const response = await fetch(`/api/place-details?placeId=${encodeURIComponent(placeId)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao buscar detalhes do local");
      }

      setPlaceDetails(data.result || null);
    } catch (err) {
      console.error("Erro ao buscar detalhes:", err);
      setError(err.message);
      setPlaceDetails(null);
    } finally {
      setLoadingDetails(false);
    }
  };

  // Adicionamos um evento para fechar os resultados quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (results.length > 0 || placeDetails) {
        // Verifica se o clique foi fora do componente de resultados
        const resultsContainer = document.getElementById("search-results-container");
        const searchContainer = document.getElementById("search-bar-container");

        if (
          resultsContainer &&
          searchContainer &&
          !resultsContainer.contains(event.target) &&
          !searchContainer.contains(event.target)
        ) {
          handleClear();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [results, placeDetails]);

  const showResults = results.length > 0 || error || loadingDetails || placeDetails;

  return (
    <div className="w-full relative bg-white rounded-2xl  pb-6" id="search-bar-container">
      <div className="flex items-center w-full border-b border-gray mb-6 ">
        <ButtonSquare
          className="rounded-tl-2xl"
          onClick={() => setTypeSearch("condominium")}
          selected={typeSearch === "condominium"}
        >
          Condomínios
        </ButtonSquare>
        <ButtonSquare onClick={() => setTypeSearch("city")} selected={typeSearch === "city"}>
          Bairros/ Cidades
        </ButtonSquare>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mx-6 relative z-[999] bg-gray p-2 rounded-full ">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Busque pela cidade, bairro ou nome do condomínio"
          className="flex-1 rounded-full px-7 bg-gray outline-none focus:ring-2 focus:ring-secondary transition"
        />
        <div className="flex gap-2">
          <Button
            onClick={handleSearch}
            isLoading={loading}
            icon={<SearchIcon />}
            variant="orange"
            className="h-14"
          >
            Buscar
          </Button>
          {/* <button
            onClick={handleClear}
            disabled={loading || (!query && results.length === 0)}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 shadow-md transition-colors duration-200 flex-1 md:flex-none"
          >
            Limpar
          </button> */}
        </div>
      </div>

      {/* Resultados diretamente no componente */}
      <div
        id="search-results-container"
        className={twMerge(
          `absolute max-w-2xl w-full top-[194px] left-0 right-0 transition-all duration-300 ease-in-out`,
          showResults
            ? "z-[1] rounded-2xl shadow-xl  translate-y-0 max-h-[80vh] overflow-y-auto"
            : "max-h-0 opacity-0  overflow-hidden pointer-events-none"
        )}
      >
        {results.length > 0 && (
          <div className="bg-white  w-full  p-6 rounded-b-xl ">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Resultados:</h3>
            <ul className="border rounded-lg divide-y">
              {results.map((result) => {
                const isSelected = selectedPlace && selectedPlace.placeId === result.place_id;
                return (
                  <li
                    key={result.place_id}
                    className={`p-4 hover:bg-blue-50/60 cursor-pointer transition-colors duration-200 ${
                      isSelected ? "bg-blue-50/80" : ""
                    }`}
                    onClick={() => handleViewDetails(result.place_id, result.description)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{result.description}</span>
                      <span className="text-blue-500 text-sm">Ver detalhes</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Loader para detalhes */}
        {loadingDetails && (
          <div className="mb-4 p-4 bg-white border border-blue-200 rounded-lg shadow-lg">
            <p className="text-center text-blue-800">Carregando detalhes...</p>
          </div>
        )}

        {/* Detalhes do local */}
        {placeDetails && (
          <div className="mb-4 bg-white p-6 rounded-lg shadow-xl border border-gray-200">
            <h3 className="font-bold text-lg mb-2">{placeDetails.name}</h3>
            <p className="text-gray-600 mb-4">{placeDetails.formatted_address}</p>

            {/* Fotos */}
            {placeDetails.photos && placeDetails.photos.length > 0 && (
              <div className="mb-4">
                <h4 className="font-medium mb-2">Fotos:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {placeDetails.photos.slice(0, 4).map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-gray-200 rounded-md overflow-hidden relative"
                    >
                      <Image
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                        alt={`Foto ${index + 1} de ${placeDetails.name}`}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Avaliação */}
            {placeDetails.rating && (
              <div className="mb-3">
                <span className="font-medium">Avaliação: </span>
                <span className="text-yellow-500">{placeDetails.rating.toFixed(1)}</span>
                <span className="text-gray-500">
                  {" "}
                  ({placeDetails.user_ratings_total || 0} avaliações)
                </span>
              </div>
            )}

            {/* Telefone */}
            {placeDetails.formatted_phone_number && (
              <div className="mb-3">
                <span className="font-medium">Telefone: </span>
                <span>{placeDetails.formatted_phone_number}</span>
              </div>
            )}

            {/* Website */}
            {placeDetails.website && (
              <div className="mb-3">
                <span className="font-medium">Website: </span>
                <a
                  href={placeDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {placeDetails.website}
                </a>
              </div>
            )}

            {/* Link para Google Maps */}
            <div className="mt-4 flex justify-between">
              <a
                href={placeDetails.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Ver no Google Maps
              </a>

              <button
                onClick={handleClear}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
