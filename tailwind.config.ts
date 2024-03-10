import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      white: "#f3f3f3",
      light: "#dddddd",
      gray: "#b3b3b3",
      neutral: "#888888",
      dark: "#666666",
      black: "#222222",
      blacks: "#0c0c0c",
      blue: "#0000f5",
      yellow: "#ffff0a",
    },
    extend: {
      screens: {
        "3xl": "1650px",
      },

      fontFamily: {
        pixel: "Pixel, sans-serif",
      },

      fontSize: {
        "2xs": "10px",
        "3xs": "8px",
      },

      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
