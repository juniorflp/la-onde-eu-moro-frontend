import Image from "next/image";
import Button from "./Button";
import ContainerDefault from "./ContainerDefault";

const Cta = () => {
  return (
    <div className="relative w-full h-[236px] md:h-[392px] flex  items-center">
      <Image
        fill
        src="/images/cta-img.webp"
        alt="call to action background"
        className="hidden md:flex w-full h-full object-cover"
        priority
      />
      <Image
        fill
        src="/images/cta-img-mobile.webp"
        alt="call to action background"
        className="flex md:hidden w-full h-full object-cover"
        priority
      />
      <ContainerDefault className="relative flex flex-col">
        <div className="flex-col max-w-[300px] md:max-w-[781px]">
          <h2 className="text-[24px] md:text-[40px]  leading-[120%] tracking-[-1.1px]">
            Quem vive, <b>compartilha</b>
          </h2>
          <h2 className="text-[24px] md:text-[40px] leading-[120%] tracking-[-1.1px] mt-2">
            Quem quer viver, <b>descobre</b>
          </h2>
        </div>
        <Button variant="orange" className="w-fit mt-[32px]">
          Saiba mais
        </Button>
      </ContainerDefault>
    </div>
  );
};

export default Cta;
