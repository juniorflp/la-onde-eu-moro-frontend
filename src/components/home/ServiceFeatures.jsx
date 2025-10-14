"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "../global/Button";
import ContainerDefault from "../global/ContainerDefault";
import ScratchIcon from "../icons/ScratchIcon";
import FeatureCard from "./FeatureCard";

const ServiceFeatures = () => {
  const scratchRef = useRef(null);
  const isInView = useInView(scratchRef, { once: true, amount: 0.3 });

  return (
    <ContainerDefault className="py-6 pl-0 pr-0 md:px-6 md:py-[108px] flex-col gap-20">
      <div className="w-full flex items-center justify-between px-6">
        <div className="flex-col max-w-[781px]">
          <h2 className="text-[32px] md:text-5xl lg:text-[56px] leading-[120%] tracking-[-1.1px]">
            Quem vive, <b>compartilha</b>
          </h2>
          <h2 className="text-[32px] md:text-5xl lg:text-[56px] leading-[120%] tracking-[-1.1px] mt-2 relative">
            Quem quer viver,{" "}
            <b className="relative">
              descobre
              <div ref={scratchRef} className="absolute -bottom-2 left-0 w-full">
                {isInView && <ScratchIcon />}
              </div>
            </b>
          </h2>
        </div>

        <Button onClick={() => {}} variant="orange" className="md:block hidden">
          Saiba mais
        </Button>
      </div>

      <div className="w-full  pl-6 md:pl-0 overflow-x-auto sm:overflow-visible scrollbar-hide py-2">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-max sm:min-w-0 pb-4">
          <div className="w-[294px] sm:w-auto flex-shrink-0">
            <FeatureCard
              imageSrc="/svg/card-1.svg"
              imageAlt="Imagem card 1"
              title="Buscar por um condomínio"
              description="Use a barra de busca para encontrar o prédio onde mora ou quer saber a reputação."
            />
          </div>
          <div className="w-[294px] sm:w-auto flex-shrink-0">
            <FeatureCard
              imageSrc="/svg/card2.svg"
              imageAlt="Imagem card 2"
              title="Veja o que moradores dizem"
              description="Notas por categoria (segurança, gestão, barulho etc.) e comentários anônimos, separados por tipo de morador."
            />
          </div>
          <div className="w-[294px] sm:w-auto flex-shrink-0">
            <FeatureCard
              imageSrc="/svg/card3.svg"
              imageAlt="Imagem card 3"
              title="Avaliar e descobrir mais dados"
              description="Quem avalia desbloqueia mais informações, e ajuda a construir uma reputação justa para todos."
            />
          </div>
          <div className="w-[294px] sm:w-auto flex-shrink-0">
            <FeatureCard
              imageSrc="/svg/card4.svg"
              imageAlt="Imagem card 4"
              title="Comparar e descobrir "
              description="Veja como o condomínio se compara a outros. Descubra os prédios bem avaliados e identifique pontos críticos."
            />
          </div>
        </div>
      </div>
    </ContainerDefault>
  );
};

export default ServiceFeatures;
