/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      borderRadius: {
        'large': '30px',
      },
      margin:{
        '-92': '-342px'
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      }
    },
    
  },
  plugins: [],
}

