/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        MTbg: '#141221',
        sub_color: '#f3e03b',
        chaosBG: 'rgba(30,29,47,255)',
        pastel: {
          100: '#ab92e1', // purple
          200: '#f3ea5d', // yellow
          300: '#7ae1bf', // teal
          400: '#ff5869', // red
        }
      },
      fontFamily: {
        mT: ['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}

