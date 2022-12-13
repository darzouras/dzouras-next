/** @type {import('tailwindcss').Config} */
const typoSafelist = [
  'dark',
  'text-xl',
  'text-lg',
  'font-bold',
  'font-normal',
  'text-plum',
  'text-sand',
  'text-violet',
  'border-plum',
  'border-sand',
  'border-swamp',
  'border-violet',
  'bg-plum',
  'bg-sand',
  'bg-swamp',
  'bg-violet',
  'py-2',
  'py-4',
]

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
