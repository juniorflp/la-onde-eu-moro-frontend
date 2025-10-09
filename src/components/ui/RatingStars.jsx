import StarEmptyIcon from "../icons/StarEmptyIcon";
import StarFilledIcon from "../icons/StarFilledIcon";

/**
 * RatingStars component - Displays a rating using filled and empty star icons
 *
 * @param {Object} props
 * @param {string|number} props.rating - Rating value (e.g. "4.5" or 4.5)
 * @param {boolean} props.showValue - Whether to show the numerical rating value
 * @param {string} props.className - Additional CSS classes for the container
 * @param {number} props.maxStars - Maximum number of stars to display (default: 5)
 * @returns {JSX.Element}
 */
const RatingStars = ({ rating, showValue = false, className = "", maxStars = 5 }) => {
  // Convert rating to number if it's a string
  const ratingValue = typeof rating === "string" ? parseFloat(rating) : rating;

  // Create array of stars based on rating
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      if (i <= Math.floor(ratingValue)) {
        // Full star
        stars.push(<StarFilledIcon key={i} />);
      } else if (i - 0.5 <= ratingValue) {
        // This would be for half stars if you had a HalfStarIcon component
        // For now we'll just use full stars
        stars.push(<StarFilledIcon key={i} />);
      } else {
        // Empty star
        stars.push(<StarEmptyIcon key={i} />);
      }
    }

    return stars;
  };

  return (
    <div className={`flex items-center ${className}`}>
      {showValue && (
        <p className="text-[#373737] mr-2">
          <span className="font-bold text-2xl">{rating}</span>/5.0
        </p>
      )}
      <div className="flex items-center">{renderStars()}</div>
    </div>
  );
};

export default RatingStars;
