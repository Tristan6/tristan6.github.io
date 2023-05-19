// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  media: false, // or 'darkMode' or 'class'
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
      width: {
        '112': '28rem',
        '160': '40rem',
        '200': '50rem',
        '300': '75rem',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
