/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FFBF00",
        secondary:"#FFCC33",
        tertiary:"#CCFF2E",
        fc:"#ffa500",
      },
      fontFamily:{
        opensans:["'Open Sans', sans-serif"],
        poppins:["'Poppins', sans-serif"],
        volkhov:["'Volkhov', serif"],
      },
    },
  },
  plugins: [],
}

