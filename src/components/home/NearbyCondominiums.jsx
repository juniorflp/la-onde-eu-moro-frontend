import ContainerDefault from "../global/ContainerDefault";
import CondominiumCard from "./CondominiumCard";
import LocationRatingCard from "./LocationRatingCard";

const NearbyCondominiums = () => {
  // Simulando dados que viriam de uma API
  const condominiums = [
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
    <ContainerDefault className="py-6 md:py-[80px]  flex-col">
      <h2 className="title-section">Condomínios próximos de você</h2>
      <p className="subtitle-section">
        Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas por
        categoria.
      </p>

      <div className="w-full mt-8 overflow-x-auto sm:overflow-visible scrollbar-hide py-2">
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
      </div>

      <button className="button-text mx-auto mt-6">Ver todos os condomínios</button>

      <div className="mt-20 flex flex-col">
        <div className="flex justify-between ">
          <h2 className="title-section">Notas gerais por bairros próximas de você</h2>
          <button className="button-text w-fit hidden md:block">Ver mais</button>
        </div>
        <p className="subtitle-section">
          Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas por
          categoria.
        </p>

        <div className="w-full flex flex-col mt-8 overflow-x-auto sm:overflow-visible scrollbar-hide py-2 ">
          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 min-w-max sm:min-w-0 pb-4">
            {ratings.map((rating) => (
              <div className="w-[239px] sm:w-auto flex-shrink-0" key={rating.id}>
                <LocationRatingCard location={rating.location} rating={rating.rating} />
              </div>
            ))}
          </div>

          <button className="button-text mx-auto mt-2 block md:hidden">Ver mais</button>
        </div>
      </div>
    </ContainerDefault>
  );
};

export default NearbyCondominiums;
