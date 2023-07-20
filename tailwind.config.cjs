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
    },
  },
  plugins: [],
};
