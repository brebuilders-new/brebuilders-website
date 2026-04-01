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
        void: '#050a0f',
        deep: '#0a1520',
        panel: '#0f1e2d',
        surface: '#142233',
        teal: '#1ecfc9',
        gold: '#c8923a',
        cream: '#f0ece4',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        ui: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
