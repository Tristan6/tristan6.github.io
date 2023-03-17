// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        highlight: '#bf5700',
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
