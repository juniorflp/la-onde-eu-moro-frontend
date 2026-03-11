import Image from "next/image";
import ButtonSquare from "./ButtonSquare";
import ContainerDefault from "./ContainerDefault";

const Cta = () => {
  return (
    <div className="relative w-full h-[236px] md:h-[392px] flex  items-center mt-16 md:mt-32 border-horizontal">
      <Image
        fill
        src="/svg/cta-bg.svg"
        alt="call to action background"
        className="hidden md:flex w-full h-full object-cover"
        priority
      />

      <ContainerDefault className="relative flex flex-col items-center">
        <div className="flex-col max-w-[300px] md:max-w-[781px] items-center text-center">
          <h2 className="text-[24px] md:text-[40px]  leading-[120%] tracking-[-1.1px]">
            Quem vive, <b>compartilha</b>
          </h2>
          <h2 className="text-[24px] md:text-[40px] leading-[120%] tracking-[-1.1px] mt-2">
            Quem quer viver, <b>descobre</b>
          </h2>
        </div>
        <ButtonSquare variant="primary" className="w-fit mt-[32px]">
          Saiba mais
        </ButtonSquare>
      </ContainerDefault>
    </div>
  );
};

export default Cta;
