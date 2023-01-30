/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "theme": "#EE9221"
      },
    },
    fontFamily:{
      Montserrat: ["Montserrat, sans-serif"]
    }
  },
  plugins: [
    require('tailwind-scrollbar'),],
}
