/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'appear': 'appear 1s ease-in',
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: '100%' },
        }
      }
    },
  },
  plugins: [],
}
