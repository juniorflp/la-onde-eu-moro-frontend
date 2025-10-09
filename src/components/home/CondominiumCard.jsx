import Image from "next/image";
import Link from "next/link";
import StarFilledIcon from "../icons/StarFilledIcon";
import TrendingIcon from "../icons/TrendingIcon";

const CondominiumCard = ({
  image = "/images/condominium-test-img.png",
  rating = "4.5",
  totalRatings = "1.123",
  name = "Edifício Nara Cristina",
  address = "Edifício Nara Cristina",
  reviewsCount = 4,
  href = "#",
}) => {
  return (
    <div className="w-full h-full flex flex-col rounded-xl overflow-hidden hover-card">
      <div className="h-[241px] w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none"></div>
        <Image
          src={image}
          alt={name}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-center px-4 py-2 bg-[#242424] text-white w-full">
        <StarFilledIcon />
        <p className="text-2xl mx-2 truncate flex-1">
          {rating} <span className="text-base text-[#A2A2A2]">/5.0</span>
          <span className="text-base text-[#A2A2A2] ml-1">({totalRatings} avaliações)</span>
        </p>
        <TrendingIcon className="flex-shrink-0" />
      </div>

      <div className="flex flex-col p-4 bg-white">
        <p className="font-bold truncate" title={name}>
          {name}
        </p>
        <p className="text-[14px] truncate" title={address}>
          {address}
        </p>

        <Link href={href} className="font-semibold mt-2 underline">
          {reviewsCount} depoimentos
        </Link>
      </div>
    </div>
  );
};

export default CondominiumCard;
