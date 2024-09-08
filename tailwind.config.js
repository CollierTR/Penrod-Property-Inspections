/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      light: "#ffffff",
      dark: "#0F0E0C",
      primary: "#420202",
      activeLink: "#909090",
    },
  },
  plugins: [],
};
