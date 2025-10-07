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
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#009C60",
          dark: "#008050",
          light: "#00B670",
          50: "#E6F7EF",
          100: "#CCEFE0",
          200: "#99DFC1",
          300: "#66CFA1",
          400: "#33BF82",
          500: "#009C60",
          600: "#007D4D",
          700: "#005E3A",
          800: "#003E27",
          900: "#001F13",
        },
        secondary: {
          DEFAULT: "#FD6E36",
          dark: "#E65C00",
          light: "#FF7519",
        },
        gray: "#F6F6F6",
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
