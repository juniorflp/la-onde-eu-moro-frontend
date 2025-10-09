import ContainerDefault from "../global/ContainerDefault";
import BagIcon from "../icons/BagIcon";
import BuildingIcon from "../icons/BuildingIcon";
import LeafIcon from "../icons/LeafIcon";
import PlanCard from "./PlanCard";

const PlansSection = () => {
  return (
    <ContainerDefault className="py-20 flex-col items-center gap-6 ">
      <h2 className=" text-[32px] md:text-[56px] leading-[120%] tracking-[-1.1%] max-w-[660px] text-center ">
        Seja <span className="text-secondary font-bold">Premium</span> e aproveite todos os recursos
      </h2>

      <p className="text-center ">Confira todos os benefícios dos nossos planos abaixo.</p>

      <div className="flex gap-2 w-full max-w-[1039px] mt-6 flex-wrap">
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
  );
};

export default PlansSection;
