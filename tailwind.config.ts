import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f8f8",
          100: "#deeded",
          200: "#bfdcdc",
          300: "#93c4c4",
          400: "#5ca2a6",
          500: "#3e868c",
          600: "#326b72",
          700: "#2d565c",
          800: "#2a474c",
          900: "#273e42"
        }
      }
    }
  },
  plugins: []
};

export default config;
