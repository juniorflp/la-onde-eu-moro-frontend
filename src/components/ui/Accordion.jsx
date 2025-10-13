"use client";

import { useState } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";

const Accordion = ({
  question,
  answer,
  isOpen: controlledIsOpen,
  toggleAccordion: controlledToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const toggleAccordion = controlledToggle || (() => setInternalIsOpen(!internalIsOpen));
  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <div
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDownIcon />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
