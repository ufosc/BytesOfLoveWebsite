/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#9C4796',  // You can name this key whatever you like
      },
      borderColor: theme => ({
        ...theme('colors'),
        'custom-purple': '#9C4796',  // Reusing the custom color for border
      })
    }
  },
  plugins: [],
}

