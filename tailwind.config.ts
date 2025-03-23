import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      fontFamily: {
        lexiadama: ["var(--font-lexiadama)"],
        gotham_bold: ["var(--font-gotham_bold)"],
        gotham_light: ["var(--font-gotham_light)"],
      },
    },
  },
  plugins: [],
};
export default config;
