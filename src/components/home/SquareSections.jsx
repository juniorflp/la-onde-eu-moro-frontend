import Image from "next/image";
import ButtonSquare from "../global/ButtonSquare";
import ContainerDefault from "../global/ContainerDefault";
import ChevronRightIcon from "../icons/ChevronRightIcon";

const SquareSections = () => {
  return (
    <section className="w-full mt-32 mb-32 border-horizontal-t border-horizontal-b">
      <ContainerDefault className="flex md:flex-row flex-col items-center h-auto md:h-[730px] gap-1">
        <div className="w-full flex flex-col h-full gap-1">
          <div className="flex items-center h-[178px] md:h-full group cursor-pointer gap-1">
            <div className="w-1/2 h-full bg-[#009C60] text-base md:text-2xl font-medium p-6 md:p-10 flex">
              <button className="text-white flex items-center justify-between w-full mt-auto transition-transform duration-500 group-hover:-translate-y-4">
                Para Inquilinos <ChevronRightIcon />
              </button>
            </div>
            <div className="w-1/2 h-full bg-primary relative overflow-hidden">
              <Image
                src="/images/square1.png"
                layout="fill"
                objectFit="cover"
                alt="familia 1"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex items-center h-[178px] md:min-h-[219px] group cursor-pointer gap-1">
            <div className="w-1/2 h-full bg-primary relative overflow-hidden">
              <Image
                src="/images/square2.png"
                layout="fill"
                objectFit="cover"
                alt="familia 2"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="w-1/2 h-full bg-[#286A66] p-6 md:p-10 flex">
              <button className="text-white text-base md:text-2xl font-medium text-left flex items-center justify-between w-full mt-auto transition-transform duration-500 group-hover:-translate-y-4">
                <span className="max-w-[200px]">Para Síndicos, Administradores e Conselheiros</span>{" "}
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full  h-full relative flex flex-col gap-1">
          <div className="relative h-[160px] md:h-full overflow-hidden ">
            <Image
              src="/images/square3.png"
              layout="fill"
              objectFit="cover"
              alt="familia 3"
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="w-full p-6  flex flex-col h-[200px] md:min-h-[219px] text-white bg-primary">
            <h3 className="text-2xl md:text-2xl font-medium md:font-bold leading-[110%]">
              Para Proprietários
            </h3>
            <p className="mt-4 mb-6 max-w-[400px] ">
              Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas
              por categoria.
            </p>
            <ButtonSquare variant="white" className="w-fit">
              Saiba mais
            </ButtonSquare>
          </div>
        </div>
      </ContainerDefault>
    </section>
  );
};

export default SquareSections;
