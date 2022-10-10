/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.html",
    "./*.html",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Rubik"', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    extend: {
      // fontFamily: {
      //   'rubik': ['rubik', 'sans-serif'],
      // },
      colors: {
        "white": "#f8f8f8",
        "black": "#212121"
      }
    },
  },
  plugins: [],
}
