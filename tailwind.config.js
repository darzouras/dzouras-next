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
        'plum': '#310a31',
        'violet': '#847996',
        'lake': '#88b7b5',
        'swamp': '#a7cab1',
        'sand': '#f4ecd6'
      }
    },
  },
  plugins: [],
  safelist: [
    ...typoSafelist
  ]
}
