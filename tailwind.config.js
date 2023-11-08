/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(4, 100%, 67%)",
        "Dark-Slate-Grey": "hsl(234, 29%, 20%)",
        "Charcoal-Grey": "hsl(235, 18%, 26%)",
        "Grey": "hsl(231, 7%, 60%)",
        "White": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "Roboto": ['Roboto', "sans-serif"],
      }
    },
  },
  plugins: [],
}

