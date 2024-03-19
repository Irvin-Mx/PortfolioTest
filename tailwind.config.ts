import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'Primary': "#002333",
        'Secondary': "#159A9C",
        'altWhite': "#FFFFFF",
        'secondaryAltWhite': "#DEEFE7",
        'SecondaryBlue': '#0d314b',
        'aqua': '#86fbfb',
        'Orange': '#ff1200',
        'Orangeb': '#E53D00',
      },
      height: {
        '20vh': '20vh',
        '80p': '80vh',
        '90p': '90vh',
        '90perc': '90%',
        '700': '700px',
      },
      screens:{
        'Mobile': '340px',
      },
    },
  },
  plugins: [],
};
export default config;
