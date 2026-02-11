"use client";

import { usePlaceDetails } from "@/hooks/usePlaceDetails";
import { useSearchPlaces } from "@/hooks/useSearchPlaces";
import { useMemo, useState } from "react";
import ButtonSquare from "../global/ButtonSquare";
import SearchIcon from "../icons/SearchIcon";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [typeSearch, setTypeSearch] = useState("condominium"); // "condominium", "city"

  // React Query hooks
  const {
    data: searchData,
    isLoading: loading,
    error: searchError,
  } = useSearchPlaces(searchQuery, !!searchQuery);

  const {
    data: placeDetails,
    isLoading: loadingDetails,
    error: detailsError,
  } = usePlaceDetails(selectedPlace?.placeId, !!selectedPlace?.placeId);

  const results = useMemo(() => searchData?.predictions || [], [searchData]);
  const error = searchError?.message || detailsError?.message || "";

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearchQuery(query);
  };

  const handleClear = () => {
    setQuery("");
    setSearchQuery("");
    setSelectedPlace(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="w-full relative bg-white  pb-6 border border-border-color"
      id="search-bar-container"
    >
      <div className="flex items-center w-full border-horizontal-b mb-6 ">
        <button
          className={`h-16 px-6 border-r font-bold border-border-color transition-all ${
            typeSearch === "condominium"
              ? "border-b-4 border-b-primary"
              : "border-b-4 border-b-transparent"
          }`}
          onClick={() => setTypeSearch("condominium")}
        >
          Condomínios
        </button>
        <button
          className={`h-16 px-6 border-r font-bold border-border-color transition-all ${
            typeSearch === "city"
              ? "border-b-4 border-b-primary"
              : "border-b-4 border-b-transparent"
          }`}
          onClick={() => setTypeSearch("city")}
        >
          Localização
        </button>
      </div>
      <div className="flex gap-0 md:gap-3 mx-4 md:mx-4 relative z-[999] bg-gray p-2  h-16">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Busque pelo nome do ${typeSearch === "condominium" ? "condomínio" : "localização"}`}
          className="flex-1 pr-7 pl-0 md:pl-7 bg-gray outline-none focus:ring-2 focus:ring-primary transition"
        />
        <ButtonSquare
          onClick={handleSearch}
          isLoading={loading}
          icon={<SearchIcon />}
          variant="primary"
          className=""
        >
          Buscar
        </ButtonSquare>
      </div>
    </div>
  );
}
