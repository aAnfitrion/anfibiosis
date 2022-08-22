/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yaru: {
        100: '#f1f1f1',
        200: '#222',
        300: '#070707',
        400: '#303030',
        500: '#181818',
        600: '#272727',
        700: '#373737',
        800: '#808080'
      },
      purple: {
        100: '#31087B',
        200: '#350ff0'
      },
      pink: {
        100: '#FA2FB5'
      },
      blue: {
        100: '#7289DA'
      },
      red: {
        100: '#FF0000'
      },
      teal: {
        100: '#1c1f24'
      }
    } 
  },
  safelist: [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
    'col-span-8',
    'col-span-9',
    'hover:bg-blue-100',
    'hover:bg-red-100',
    'hover:bg-teal-100'
  ]
}
