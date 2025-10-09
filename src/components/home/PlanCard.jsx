import React from "react";
import Button from "../global/Button";
import CheckIcon from "../icons/CheckIcon";

/**
 * PlanCard component for displaying subscription plan information
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icon component to display
 * @param {string} props.planName - Name of the plan (e.g., "Básico", "Premium")
 * @param {string} props.description - Description of the plan
 * @param {string} props.price - Price of the plan (e.g., "Grátis", "R$ 17,90/mês")
 * @param {string} props.priceSubtext - Additional text under the price
 * @param {string} props.buttonLabel - Text for the call-to-action button
 * @param {string[]} props.features - Array of features included in the plan
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
const PlanCard = ({
  icon,
  planName,
  description,
  price,
  priceSubtext,
  buttonLabel = "Criar minha conta",
  features = [],
  className = "",
  isPopular = false,
}) => {
  return (
    <div
      className={`flex flex-1 flex-col bg-white rounded-xl p-8 transition-all duration-300 h-auto md:h-[780px] min-w-[300px] border border-[#c2c2c2] hover:border-primary hover:bg-primary/5 hover-card ${className}`}
    >
      <div className="flex items-center justify-between">
        {icon}
        {isPopular && (
          <Button variant="orange" className="h-[36px] cursor-default">
            Mais Popular
          </Button>
        )}
      </div>
      <h3 className="text-[24px] font-bold mt-4">{planName}</h3>
      <p className="text-[14px] mt-2">{description}</p>
      <div className="w-full h-[1px] bg-[#DDD] my-6" />

      <h4 className="text-[24px] font-bold mt-4">
        {price}
        {price !== "Grátis" && <span className="text-[#373737] text-base font-normal">/mês</span>}
      </h4>
      <p className="text-[14px] mt-2">{priceSubtext}</p>

      <div className="w-full h-[1px] bg-[#DDD] my-6" />

      <Button variant="orange" className="w-full">
        {buttonLabel}
      </Button>

      <p className="font-bold mt-6">Incluído:</p>

      <ul className="list-none list-inside mt-2 flex flex-col gap-2 text-[14px] flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon /> <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
