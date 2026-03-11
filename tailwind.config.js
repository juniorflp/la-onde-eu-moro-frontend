const { color } = require("motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        hero: "1250px", // Breakpoint personalizado para o componente Hero
        "3xl": "1920px", // Breakpoint para telas 1920px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#09A293",
          dark: "#00796B",
          light: "#4DB6AC",
        },
        secondary: {
          DEFAULT: "#FD6E36",
          dark: "#E65C00",
          light: "#FF7519",
        },
        tertiary: {
          DEFAULT: "#EB5959",
        },
        gray: {
          DEFAULT: "#F6F6F6",
          subtitle: "#5D5D5D",
        },
        "border-color": "#EDEBEB",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite reverse",
      },
      backgroundColor: {
        "menu-bg": "rgba(255, 255, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
