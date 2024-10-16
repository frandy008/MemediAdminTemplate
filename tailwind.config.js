/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'serif'],
        'lobster': ['Lobster', 'sans-serif'],
        'mochiy': ['Mochiy Pop One', 'sans-serif'],
        'montserrat': ['Montserrat', 'serif'],
      }
    },
  },
  plugins: [],
}

