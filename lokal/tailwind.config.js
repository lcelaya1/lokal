/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lokal-black': '#0B0B0A',
        'lokal-violet': '#3D2059',
        'lokal-lila': '#A651A0',
      },
      fontFamily: {
        'spartan':['League Spartan'],
        'blinker':['Blinker'],
      },
      flexBasis: {
        '53': '53.541666%',
        '46': '46.458333%',
      },
    },
  },
  plugins: [],
}
