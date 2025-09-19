"use client";

import ContainerDefault from "../global/ContainerDefault";
import SearchBar from "../search/SearchBar";

const Hero = () => {
  return (
    <div className="relative pt-16 bg-gradient-to-br h-[731px] from-[#009C60] via-[#016941] to-[#009C60]  ">
      <ContainerDefault className=" h-full gap-8">
        <div className="w-full max-w-[709px] pt-32">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Veja a reputação de qualquer condomínio
            </h1>
            <p className=" text-blue-100 mb-8 max-w-[534px] ">
              Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas
              por categoria.
            </p>

            <SearchBar />
          </div>
        </div>

        <div className="flex-1"></div>
      </ContainerDefault>
    </div>
  );
};

export default Hero;
