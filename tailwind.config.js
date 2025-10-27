/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.json',
  ],
  safelist: ['two-column-left', 'two-column-right', 'left-column', 'center-column', 'right-column'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        crimson: ['Crimson Text', 'serif'],
        libre: ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
};
