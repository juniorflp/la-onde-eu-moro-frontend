import * as React from "react";
import { twMerge } from "tailwind-merge";

function ButtonSquare({ className, children, disabled, selected, ...rest }, ref) {
  return (
    <button
      ref={ref}
      className={twMerge(
        "h-16 px-6 flex items-center justify-center  hover:bg-gray border-b-transparent transition-all duration-300 border-r border-gray",
        selected && "border-b-2 border-secondary border-r-gray ",
        disabled && "bg-gray-300 hover:bg-gray-300 text-gray-600 border-gray-300",
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default React.forwardRef(ButtonSquare);
