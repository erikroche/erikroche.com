/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./src/index.html', './src/app/app.component.html', './src/contact/contact.component.html', './src/work/work.component.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'violet-principale': '#9f00d7',
        'dark': '#181a1b',
        "cards": "#292c2e",
        "light-cards": "#bcbcbc",
        // 'bg':  withOpacity('--color-bg'),
        // 'text': withOpacity('--color-text'),
      },
      screens: {
        // 'tablet': '640px',
        // 'laptop': '1024px',
        // 'desktop': '1280px',
        'phoneL': '550px',
        'phone': '375px',
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
