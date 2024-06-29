/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#9C4796',
        'light-purple': '#B266B2',
        'dark-purple': '#7A2C7A'
      },
      borderColor: theme => ({
        ...theme('colors'),
        'custom-purple': '#9C4796' // Reusing the custom color for border
      })
    }
  },
  plugins: []
}
