const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/**/**/*.{js,jsx,ts,tsx,css}",
    "./src/*.{js,jsx,ts,tsx,css}"
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
});
