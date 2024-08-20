/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), daisyui],
  daisyui: {
    themes: [
      {
        colors:{
          "primary": '#65A30D',
        }
      },
      "dark",
      "light",
    ],
  },
};
