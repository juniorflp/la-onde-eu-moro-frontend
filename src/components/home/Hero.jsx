"use client";

import Image from "next/image";
import Link from "next/link";
import ContainerDefault from "../global/ContainerDefault";
import SearchBar from "../search/SearchBar";

const Hero = () => {
  return (
    <div className="relative h-[731px] bg-primary ">
      <ContainerDefault className=" h-full pr-0 lg:pr-0 gap-4">
        <div className="w-full max-w-[638px]  pt-40">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white mb-4 drop-shadow-lg tracking-[-1px]">
            Veja a reputação de qualquer condomínio
          </h1>
          <p className=" text-white mb-14  ">
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
        <div className="w-full max-w-[614px] hero:absolute hero:right-0 hero:top-0 bg-white max-hero:w-full max-hero:mt-10">
          <Image
            src="/images/hero-bg.webp"
            alt="Imagem de destaque"
            width={614}
            height={731}
            className="object-cover h-full"
          />
        </div>
      </ContainerDefault>
    </div>
  );
};

export default Hero;
