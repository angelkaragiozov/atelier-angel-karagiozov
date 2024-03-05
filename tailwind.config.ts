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
        'white': '#ffffff',
        'light': '#f2f2f2',
        'gray': '#cccccc',
        'neutral': '#888888',
        'dark': '#333333',
        'black': '#222222',
        'blacks': '#000000',
        'blue': '#0000f5',
        'yellow': '#ffff0a',
      },
      extend: {
        

        fontFamily: {
          pixel: 'Pixel, sans-serif'
        },

        fontSize: {
          '2xs': '10px',
          '3xs': '8px'
        },
     
        animation: {
          'spin-slow': 'spin 60s linear infinite',
        }, 
         
      },
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
  };
export default config;
