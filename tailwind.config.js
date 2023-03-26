// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        highlight: '#bf5700',
        lightSand: '#E6BAA3',
        darkSand: '#BF9E87',
      },
      backgroundImage: {
        'picacho': "url('@/assets/img/picacho-sidestream.png')",
        'picacho-extended': "url('@/assets/img/picacho-sidestream-extended.png')",
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
