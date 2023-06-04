/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(22, 65%, 57%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
