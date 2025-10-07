"use client";

import Image from "next/image";
import Link from "next/link";
import ContainerDefault from "../global/ContainerDefault";
import SearchBar from "../search/SearchBar";

const Hero = () => {
  return (
    <div className="relative md:h-[731px] bg-primary ">
      <ContainerDefault className="h-full pl-0 pr-0 md:pl-4 lg:pr-0 gap-0 md:gap-4 flex-col-reverse md:flex-row">
        <div className="w-full max-w-full md:max-w-[638px] p-6 pb-12 md:pb-0 md:pt-40">
          <h1 className="text-[32px] md:text-5xl lg:text-[52px]  text-white mb-4 drop-shadow-lg leading-[110%] tracking-[-0.6] md:tracking-[-1px]">
            Veja a reputação de qualquer condomínio
          </h1>
          <p className=" text-white mb-8 md:mb-14 text-sm md:text-base">
            Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas por
            categoria.
          </p>

          <SearchBar />
          <spam className=" text-white mt-6 block">
            É síndico ou gestor?
            <Link href="#" className=" ml-2 font-bold hover:underline">
              Veja nossos serviços
            </Link>
          </spam>
          <br />
        </div>
        <div className="w-full max-w-full md:max-w-[614px] h-[300px] md:h-auto hero:absolute hero:right-0 hero:top-0 bg-white max-hero:w-full max-hero:mt-10">
          <Image
            src="/images/hero-bg.webp"
            alt="Imagem de destaque"
            width={614}
            height={731}
            className="object-cover h-full md:object-center object-top "
          />
        </div>
      </ContainerDefault>
    </div>
  );
};

export default Hero;
