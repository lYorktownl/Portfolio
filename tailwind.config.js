/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
      },
      colors: {
        'dark-blue': '#0A1524',
        'main-gray': '#272a2a' 
      },
      screens: {
        'gt': '1000px'
      },
    },

    
  },
  plugins: [],
}

