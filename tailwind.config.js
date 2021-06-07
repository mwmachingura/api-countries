module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)', //Dark Mode Elements
        'very-dark-blue': 'hsl(207, 26%, 17%)', //Dark Mode Background
        'dark-blue-text': 'hsl(200, 15%, 8%)', //Light Mode Text
        'dark-gray': 'hsl(0, 0%, 52%)', //Light Mode Input
        'very-light-gray': 'hsl(0, 0%, 98%)', //Light Mode Background
        'white': 'hsl(0, 0%, 100%)', //Dark Mode Text & Light Mode Elements
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
