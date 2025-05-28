/** @type {import('tailwindcss').Config} */
const typographyPlugin = require("@tailwindcss/typography");
const daisyUI = require("daisyui");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scaleAnim: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scale: "scaleAnim 300ms ease-in-out",
      },
    },
  },
  plugins: [typographyPlugin, daisyUI],
};
