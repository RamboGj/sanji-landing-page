/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow700: "#D64016",
        yellow600: "#ED7A14",
        yellow500: "#F6C21D",
        yellow400: "#F5DD4B",
        yellow300: "#F4E170",
        yellow200: "#ECEEB8",

        black: '#070809',

        blue500: '#6A8D95',
        
        safari500: '#9A9B72'
      }
    },
  },
  plugins: [],
}

