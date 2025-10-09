import ChevronRightIcon from "../icons/ChevronRightIcon";
import RatingStars from "../ui/RatingStars";

/**
 * LocationRatingCard component - Displays a location with its rating
 *
 * @param {Object} props
 * @param {string} props.location - Name of the location
 * @param {string|number} props.rating - Rating value
 * @returns {JSX.Element}
 */
const LocationRatingCard = ({ location, rating }) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-xl hover-card" title={location}>
      <div className="flex items-center">
        <p className="text-[#373737]">
          <span className="font-bold text-2xl">{rating}</span>/5.0
        </p>
        <div className="ml-2">
          <RatingStars rating={rating} />
        </div>
        <div className="ml-auto">
          <ChevronRightIcon />
        </div>
      </div>

      <p className="font-bold truncate mt-4">{location}</p>
      <button className="button-text w-fit mt-1">Ver condomínios</button>
    </div>
  );
};

export default LocationRatingCard;
