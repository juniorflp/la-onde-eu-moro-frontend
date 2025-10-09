import Image from "next/image";

const FeatureCard = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="w-full bg-secondary rounded-xl hover-card">
      <div className="h-[181px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={294}
          height={181}
          className="object-contain rounded-xl w-full h-[181px]"
        />
      </div>
      <div className="h-[192px] rounded-xl bg-white flex flex-col gap-4 p-6">
        <h4 className="text-2xl font-bold leading-[110%]">{title}</h4>
        <p className="font-[#5D5D5D] leading-[120%]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
