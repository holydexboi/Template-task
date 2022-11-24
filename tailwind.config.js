/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {},
    fontFamily: {
      sans: ['"Circular Std"', "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
