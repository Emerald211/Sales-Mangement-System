/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#FAE1DA'
      },
      backgroundColor: {
        main: '#FAE1DA'
      },
      fontFamily: {
      
        serrat: ["Montserrat"],
      },
      backgroundImage: {
        main: "url('./src/assets/What-is-Sales.avif')"
      }
    },
  },
  plugins: [],
};
