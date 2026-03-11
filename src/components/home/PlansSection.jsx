import ContainerDefault from "../global/ContainerDefault";
import SectionHeader from "../global/SectionHeader";
import BagIcon from "../icons/BagIcon";
import BuildingIcon from "../icons/BuildingIcon";
import LeafIcon from "../icons/LeafIcon";
import PlanCard from "./PlanCard";

const PlansSection = () => {
  return (
    <div className="border-horizontal-b mt-16 md:mt-32">
      <SectionHeader
        title={
          <>
            Seja <span className="text-primary">Premium</span> e aproveite todos os recursos
          </>
        }
        subtitle="Confira todos os benefícios dos nossos planos abaixo."
      />
      <ContainerDefault className="flex-col items-center gap-6 ">
        <div className="flex w-full  max-w-[990px] 3xl:max-w-[1470px] flex-wrap">
          <PlanCard
            icon={<LeafIcon />}
            planName="Básico"
            description="Lorem ipsum dolor sit amet consectetur. Nam sit amet dictumst volutpat et gravida arcu."
            price="Grátis"
            priceSubtext="Para inquilinos e proprietários"
            buttonLabel="Criar minha conta"
            features={[
              "Avaliações anônimas",
              "Depoimentos de moradores",
              "Busca por condomínio",
              "Filtro por categorias",
              "Visualização de notas",
            ]}
          />

          <PlanCard
            icon={<BagIcon />}
            planName="PRO"
            description="Lorem ipsum dolor sit amet consectetur. Nam sit amet dictumst volutpat et gravida arcu."
            price="R$ 17,90"
            priceSubtext="Para inquilinos e proprietários"
            buttonLabel="Selecionar plano"
            features={[
              "Avaliações anônimas",
              "Depoimentos de moradores",
              "Busca por condomínio",
              "Filtro por categorias",
              "Visualização de notas",
              "Acesso a dados históricos",
              "Comparação entre condomínios",
            ]}
            isPopular
          />

          <PlanCard
            icon={<BuildingIcon />}
            planName="EMPRESA"
            description="Lorem ipsum dolor sit amet consectetur. Nam sit amet dictumst volutpat et gravida arcu."
            price="R$ 39,90"
            priceSubtext="Cobrado anualmente"
            buttonLabel="Assinar agora"
            features={[
              "Avaliações anônimas",
              "Depoimentos de moradores",
              "Busca por condomínio",
              "Filtro por categorias",
              "Visualização de notas",
              "Acesso a dados históricos",
              "Comparação entre condomínios",
              "Suporte prioritário",
              "Acesso antecipado a novos recursos",
            ]}
          />
        </div>
      </ContainerDefault>
    </div>
  );
};

export default PlansSection;
