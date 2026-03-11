"use client";

import { useNearbyCondominiums } from "@/hooks/useNearbyCondominiums";
import { useNearbyNeighborhoodRatings } from "@/hooks/useNearbyNeighborhoodRatings";
import { useEffect, useState } from "react";
import ButtonSquare from "../global/ButtonSquare";
import ContainerDefault from "../global/ContainerDefault";
import SectionHeader from "../global/SectionHeader";
import CondominiumCard from "./CondominiumCard";
import LocationRatingCard from "./LocationRatingCard";

const NearbyCondominiums = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  // React Query hook para buscar condomínios próximos
  const {
    data: condominiums = [],
    isLoading: isLoadingCondominiums,
    error: condominiumsError,
  } = useNearbyCondominiums(
    userLocation?.latitude,
    userLocation?.longitude,
    5000, // 5km de raio
    !!userLocation, // só executa se tiver localização
    8, // limite de 8 condomínios na home
  );

  // React Query hook para buscar ratings de bairros próximos
  const {
    data: neighborhoodRatings = [],
    isLoading: isLoadingRatings,
    error: ratingsError,
  } = useNearbyNeighborhoodRatings(
    userLocation?.latitude,
    userLocation?.longitude,
    5000,
    !!userLocation,
    4, // limite de 4 bairros na home
  );

  // Função para obter a localização do usuário
  const getUserLocation = () => {
    setIsLoadingLocation(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError("Geolocalização não é suportada pelo seu navegador");
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setUserLocation(location);
        setIsLoadingLocation(false);
        console.log("Localização obtida:", location);
      },
      (error) => {
        let errorMessage = "Erro ao obter localização";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Permissão de localização negada. Por favor, permita o acesso à sua localização.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Informação de localização indisponível.";
            break;
          case error.TIMEOUT:
            errorMessage = "Tempo esgotado ao tentar obter localização.";
            break;
          default:
            errorMessage = "Erro desconhecido ao obter localização.";
        }

        setLocationError(errorMessage);
        setIsLoadingLocation(false);
        console.error("Erro de geolocalização:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <>
      <SectionHeader
        title="Condomínios próximos de você"
        subtitle="Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas por categoria."
        action={<ButtonSquare variant="ghost">Ver todos os condomínios</ButtonSquare>}
      />
      <div className="border-horizontal-b">
        <ContainerDefault className="flex-col border-vertical ">
          <div className="w-full  pl-6 md:pl-0  overflow-x-auto sm:overflow-visible scrollbar-hide py-2">
            <div>
              {/* Indicador de status de localização */}
              {isLoadingLocation && (
                <div className="mt-4 text-sm text-gray-600">📍 Obtendo sua localização...</div>
              )}

              {locationError && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{locationError}</p>
                  <button
                    onClick={getUserLocation}
                    className="mt-2 text-sm text-red-700 underline hover:text-red-800"
                  >
                    Tentar novamente
                  </button>
                </div>
              )}

              {userLocation && !locationError && (
                <div className="mt-4 text-sm text-green-600">✓ Localização obtida com sucesso</div>
              )}

              {condominiumsError && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-700">
                    Erro ao buscar condomínios: {condominiumsError.message}
                  </p>
                </div>
              )}
            </div>
            {isLoadingCondominiums ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-gray-600">Carregando condomínios próximos...</div>
              </div>
            ) : condominiums.length === 0 && userLocation ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-gray-500">
                  Nenhum condomínio encontrado próximo à sua localização.
                </div>
              </div>
            ) : (
              <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-w-max sm:min-w-0 pb-4">
                {condominiums.map((condo) => (
                  <div className="w-[294px] sm:w-auto flex-shrink-0" key={condo.id}>
                    <CondominiumCard
                      image={condo.image}
                      name={condo.name}
                      address={condo.address}
                      rating={condo.rating}
                      totalRatings={condo.totalRatings}
                      reviewsCount={condo.reviewsCount}
                      href={condo.href}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </ContainerDefault>
      </div>

      <div className="mt-16 md:mt-32 flex flex-col border-horizontal-b">
        <SectionHeader
          title="Notas gerais por bairros próximas de você"
          subtitle="Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas por categoria."
          action={<button className="button-text w-fit hidden md:block">Ver mais</button>}
        />
        <ContainerDefault className="flex-col border-vertical ">
          <div className="w-full pl-6 md:pl-0 flex flex-col mt-8 overflow-x-auto sm:overflow-visible scrollbar-hide py-2 ">
            {isLoadingRatings ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-gray-600">Carregando avaliações de bairros...</div>
              </div>
            ) : neighborhoodRatings.length === 0 && userLocation ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-gray-500">
                  Nenhuma avaliação de bairro encontrada próximo à sua localização.
                </div>
              </div>
            ) : (
              <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 min-w-max sm:min-w-0 pb-4">
                {neighborhoodRatings.map((rating) => (
                  <div className="w-[239px] sm:w-auto flex-shrink-0 cursor-pointer" key={rating.id}>
                    <LocationRatingCard location={rating.location} rating={rating.rating} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </ContainerDefault>
      </div>
    </>
  );
};

export default NearbyCondominiums;
