"use client";
import React, { useState } from "react";
import ButtonSquare from "../global/ButtonSquare";
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
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group flex flex-1 flex-col bg-white border-vertical p-10 transition-all duration-300 h-auto md:h-auto min-w-[300px] hover:bg-primary/5  ${className}`}
    >
      <div className="flex items-center justify-between">
        {icon}
        {isPopular && (
          <ButtonSquare variant="outline" className="h-[36px] cursor-default">
            Mais Popular
          </ButtonSquare>
        )}
      </div>
      <h3 className="text-[24px] font-bold mt-8">{planName}</h3>
      <p className="text-[14px] mt-4">{description}</p>
      <div className="w-full h-[1px] bg-[#DDD] my-8" />

      <h4 className="text-[24px] font-bold ">
        {price}
        {price !== "Grátis" && <span className="text-[#373737] text-base font-normal">/mês</span>}
      </h4>
      <p className="text-[14px] mt-2">{priceSubtext}</p>

      <div className="w-full h-[1px] bg-[#DDD] my-8" />

      <ButtonSquare variant={hovered ? "primary" : "outline"} className="w-full">
        {buttonLabel}
      </ButtonSquare>

      <p className="font-bold mt-8">Incluído:</p>

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
