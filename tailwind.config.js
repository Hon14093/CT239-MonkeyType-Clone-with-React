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
        sub_color: '#f3e03b'
      },
      fontFamily: {
        mT: ['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}

