/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void:    '#141210',
        deep:    '#1c1916',
        panel:   '#24201c',
        surface: '#2e2922',
        teal:    '#c07d3e',
        gold:    '#d4953a',
        cream:   '#f2ede6',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        ui:      ['DM Sans', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
