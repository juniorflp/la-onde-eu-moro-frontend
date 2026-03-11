"use client";

import Image from "next/image";
import Link from "next/link";
import ContainerDefault from "../global/ContainerDefault";
import SearchBar from "../search/SearchBar";

const Hero = () => {
  return (
    <section className="relative border-horizontal-b">
      <ContainerDefault className="h-full flex-col-reverse md:flex-row w-full  border-vertical ">
        <div className="w-full max-w-full flex flex-col justify-center p-4 md:p-10">
          <h1 className="text-[32px] md:text-5xl lg:text-[52px] font-bold leading-9 md:leading-[120%]  text-[#0C201F] mb-4 ">
            Veja a reputação de <span className="text-primary">Qualquer</span> condomínio
          </h1>
          <p className=" text-[#0C201F] mb-8 md:mb-14 text-sm md:text-base">
            Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas por
            categoria.
          </p>

          <SearchBar />
          <span className=" text-[#0C201F] mt-6 block">
            É síndico ou gestor?
            <Link href="#" className=" ml-2 text-[#286A66] font-bold hover:underline">
              Veja nossos serviços
            </Link>
          </span>
          <br />
        </div>
        <div className="relative w-full max-w-full h-[400px] md:h-[820px] 3xl:max-w-[994px]">
          <Image
            src="/svg/fade-green.svg"
            alt="Imagem de destaque"
            fill
            className="object-cover object-top md:object-center"
          />
        </div>
      </ContainerDefault>
    </section>
  );
};

export default Hero;
