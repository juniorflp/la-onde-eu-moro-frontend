import * as React from "react";
import { twMerge } from "tailwind-merge";

function ButtonSquare(
  { className, children, disabled, selected, isFilled, variant = "primary", ...rest },
  ref,
) {
  const primary = variant === "primary" ? "bg-primary text-white hover:bg-primary-dark" : "";
  const secondary =
    variant === "secondary" ? "bg-secondary text-white hover:bg-secondary-dark" : "";
  const ghost = variant === "ghost" ? "bg-transparent text-primary hover:bg-[#09a29312]" : "";
  const white = variant === "white" ? "bg-white text-primary hover:bg-[#f0f0f0]" : "";
  const outline =
    variant === "outline"
      ? "bg-transparent text-primary border border-primary hover:bg-[#09a29312]"
      : "";

  return (
    <button
      ref={ref}
      className={twMerge(
        "h-12 px-3 text-sm font-bold flex items-center justify-center cursor-pointer transition-all duration-100 ",
        primary,
        secondary,
        ghost,
        white,
        outline,
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default React.forwardRef(ButtonSquare);
