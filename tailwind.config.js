/** @type {import('tailwindcss').Config} */
const typoSafelist = [
  'text-xl',
  'text-lg',
  'font-bold'
]

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive': '#4e5021',
        'bubblegum': '#f298bf',
        'goldenrod': '#fccc13',
        'khaki': '#e2d6a4',
        'beige': '#e6dbce'
      }
    },
  },
  plugins: [],
  safelist: [
    ...typoSafelist
  ]
}
