/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(22, 65%, 57%)",
        secondary: "hsl(0, 0%, 100%)",
        dark: "hsl(0, 0%, 0%)",
        gray: "gray",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
      fontWeight: {
        800: "800",
      },
    },
  },
  plugins: [],
};
