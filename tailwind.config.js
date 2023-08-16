/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/index.html', './src/app/**/*.component.html', './src/app/**/*.component.ts'],
  theme: {
    extend: {
      colors: {
        'mainPurple': '#682BD7',
        'secondaryPurple': '#8d54f7',
        'dark': '#181a1b',
        "cards": "#292c2e",
        "cards": "#292c2e",
        "light-cards": "#bcbcbc",
      },
      screens: {
        'desktop': '1280px',
        'phoneL': '550px',
        'phone': '375px',
        'phoneXS': '200px',
        'tablet': '970px',
      },
      width: {
        124: '31rem'
      },
      height: {
        124: '31rem'
      },
    },
    fontSize: {
      xxxxs: '11px',
      xxxs: '12px',
      xxs: '13px',
      xs: '1.25rem',
      s: '18px',
      h1: '28px',
      h2: '24px',
    }
  },
  plugins: [],
}
