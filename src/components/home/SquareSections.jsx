import Image from "next/image";
import Button from "../global/Button";
import ChevronRightIcon from "../icons/ChevronRightIcon";

const SquareSections = () => {
  return (
    <section className="w-full flex md:flex-row flex-col items-center h-auto md:h-[730px]">
      <div className="w-full md:w-[45.28%] flex flex-col h-full">
        <div className="flex items-center h-[178px] md:h-full group cursor-pointer">
          <div className="w-1/2 h-full bg-tertiary text-base md:text-2xl font-medium p-6 md:p-10 flex">
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
        <div className="flex items-center h-[178px] md:h-full group cursor-pointer">
          <div className="w-1/2 h-full bg-primary relative overflow-hidden">
            <Image
              src="/images/square2.png"
              layout="fill"
              objectFit="cover"
              alt="familia 2"
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="w-1/2 h-full bg-secondary p-6 md:p-10 flex">
            <button className="text-white text-base md:text-2xl font-medium text-left flex items-center justify-between w-full mt-auto transition-transform duration-500 group-hover:-translate-y-4">
              <span className="max-w-[200px]">Para Síndicos, Administradores e Conselheiros</span>{" "}
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[54.72%] h-full relative flex flex-col bg-primary group ">
        <div className="relative h-[160px] md:h-[480px] overflow-hidden">
          <Image
            src="/images/square3.png"
            layout="fill"
            objectFit="cover"
            alt="familia 3"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="w-full p-6 md:p-10 flex flex-col text-white">
          <h3 className="text-2xl lg:text-3xl xl:text-[40px] font-medium md:font-bold leading-[110%]">
            Para Proprietários
          </h3>
          <p className="mt-4 max-w-[400px] mb-6">
            Veja o que moradores dizem sobre o prédio. Avaliações reais, anônimas e organizadas por
            categoria.
          </p>
          <Button variant="orange" className="w-fit h-12">
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SquareSections;
