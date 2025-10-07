import * as React from "react";
import { twMerge } from "tailwind-merge";

function Button(
  {
    variant = "solid",
    className,
    isLoading = false,
    children,
    disabled,
    icon: Icon = null,
    iconClassName = "h-5 w-5",
    ...rest
  },
  ref
) {
  // Base styles for all button variants
  const baseStyles =
    "rounded-full text-sm px-6 h-12 font-bold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-90";

  // Variant-specific styles
  const variantStyles = {
    solid: "bg-primary hover:bg-primary-dark text-white",
    orange: "bg-secondary hover:bg-secondary-dark text-white",
    white: "bg-white hover:bg-gray-50 text-primary border border-gray-200",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/5",
    "outline-white": "bg-transparent border border-white text-white hover:bg-white/10",
  };
  return (
    <button
      ref={ref}
      className={twMerge(
        baseStyles,
        variantStyles[variant] || variantStyles.solid,
        disabled && "bg-gray-300 hover:bg-gray-300 text-gray-600 border-gray-300",
        className
      )}
      disabled={isLoading || disabled}
      {...rest}
    >
      <span className="flex items-center justify-center gap-2">
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : Icon ? (
          <span className={`icon-container ${iconClassName}`}>{Icon}</span>
        ) : null}
        {children}
      </span>
    </button>
  );
}

export default React.forwardRef(Button);
