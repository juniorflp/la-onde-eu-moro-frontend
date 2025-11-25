"use client";

import { useEffect, useState } from "react";
import ContainerDefault from "../global/ContainerDefault";
import CondominiumCard from "./CondominiumCard";
import LocationRatingCard from "./LocationRatingCard";

const NearbyCondominiums = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [condominiums, setCondominiums] = useState([]);
  const [isLoadingCondominiums, setIsLoadingCondominiums] = useState(false);

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
      }
    );
  };

  // Função para buscar condomínios próximos (a ser implementada)
  const fetchNearbyCondominiums = async (latitude, longitude) => {
    setIsLoadingCondominiums(true);
    try {
      // TODO: Implementar chamada para API do Google Places
      // const response = await fetch(`/api/nearby-condominiums?lat=${latitude}&lng=${longitude}`);
      // const data = await response.json();
      // setCondominiums(data);

      console.log("Buscando condomínios próximos a:", { latitude, longitude });

      // Por enquanto, mantém os dados mockados
      setCondominiums(mockCondominiums);
    } catch (error) {
      console.error("Erro ao buscar condomínios:", error);
    } finally {
      setIsLoadingCondominiums(false);
    }
  };

  // Dados mockados
  const mockCondominiums = [
    {
      id: 1,
      image: "/images/condominium-test-img.png",
      name: "Edifício Nara Cristina",
      address: "Rua das Flores, 123 - Centro",
      rating: "4.5",
      totalRatings: "1.123",
      reviewsCount: 4,
      href: "#",
    },
    {
      id: 2,
      image: "/images/condominium-test-img.png",
      name: "Edifício Nara Cristina",
      address: "Rua das Flores, 123 - Centro",
      rating: "4.5",
      totalRatings: "1.123",
      reviewsCount: 4,
      href: "#",
    },
    {
      id: 3,
      image: "/images/condominium-test-img.png",
      name: "Edifício Nara Cristina",
      address: "Rua das Flores, 123 - Centro",
      rating: "4.5",
      totalRatings: "1.123",
      reviewsCount: 4,
      href: "#",
    },
    {
      id: 4,
      image: "/images/condominium-test-img.png",
      name: "Edifício Nara Cristina",
      address: "Rua das Flores, 123 - Centro",
      rating: "4.5",
      totalRatings: "1.123",
      reviewsCount: 4,
      href: "#",
    },
    {
      id: 5,
      image: "/images/condominium-test-img.png",
      name: "Edifício Nara Cristina",
      address: "Rua das Flores, 123 - Centro",
      rating: "4.5",
      totalRatings: "1.123",
      reviewsCount: 4,
      href: "#",
    },
    {
      id: 6,
      image: "/images/condominium-test-img.png",
      name: "Edifício Nara Cristina",
      address: "Rua das Flores, 123 - Centro",
      rating: "4.5",
      totalRatings: "1.123",
      reviewsCount: 4,
      href: "#",
    },
    {
      id: 7,
      image: "/images/condominium-test-img.png",
      name: "Edifício Nara Cristina",
      address: "Rua das Flores, 123 - Centro",
      rating: "4.5",
      totalRatings: "1.123",
      reviewsCount: 4,
      href: "#",
    },
    {
      id: 8,
      image: "/images/condominium-test-img.png",
      name: "Edifício Nara Cristina",
      address: "Rua das Flores, 123 - Centro",
      rating: "4.5",
      totalRatings: "1.123",
      reviewsCount: 4,
      href: "#",
    },
  ];

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchNearbyCondominiums(userLocation.latitude, userLocation.longitude);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation]);

  console.log(userLocation);

  const ratings = [
    {
      id: 1,
      rating: "4.1",
      location: "Jardim Eldorado, Palhoça",
    },
    {
      id: 2,
      rating: "2.6",
      location: "Jardim Eldorado, Palhoça",
    },
    {
      id: 3,
      rating: "3.0",
      location: "Jardim Eldorado, Palhoça",
    },
    {
      id: 4,
      rating: "4.5",
      location: "Jardim Eldorado, Palhoça",
    },
    {
      id: 5,
      rating: "5.0",
      location: "Jardim Eldorado, Palhoça",
    },
  ];

  return (
    <ContainerDefault className="py-6 pl-0 pr-0 md:px-6 md:py-[80px]  flex-col">
      <div className="md:px-0 px-6">
        <h2 className="title-section">Condomínios próximos de você</h2>
        <p className="subtitle-section">
          Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas por
          categoria.
        </p>

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
      </div>

      <div className="w-full  pl-6 md:pl-0 mt-8 overflow-x-auto sm:overflow-visible scrollbar-hide py-2">
        {isLoadingCondominiums ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-gray-600">Carregando condomínios próximos...</div>
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

      <button className="button-text mx-auto mt-6">Ver todos os condomínios</button>

      <div className="mt-20 flex flex-col">
        <div className="md:px-0 px-6">
          <div className="flex justify-between ">
            <h2 className="title-section">Notas gerais por bairros próximas de você</h2>
            <button className="button-text w-fit hidden md:block">Ver mais</button>
          </div>
          <p className="subtitle-section">
            Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas por
            categoria.
          </p>
        </div>

        <div className="w-full pl-6 md:pl-0 flex flex-col mt-8 overflow-x-auto sm:overflow-visible scrollbar-hide py-2 ">
          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 min-w-max sm:min-w-0 pb-4">
            {ratings.map((rating) => (
              <div className="w-[239px] sm:w-auto flex-shrink-0" key={rating.id}>
                <LocationRatingCard location={rating.location} rating={rating.rating} />
              </div>
            ))}
          </div>
        </div>
        <button className="button-text mx-auto mt-2 block md:hidden">Ver mais</button>
      </div>
    </ContainerDefault>
  );
};

export default NearbyCondominiums;
