/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  // Aqui se ingresan los documentos que van a hacer uso de tailwind
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.js",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        "vtd-primary": colors.indigo
      },
      keyframes: {
        fadeinright: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeoutright: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(50px)' },
        },
        fadeinleft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeoutleft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-50px)' },
        },
        flipup: {  
          '0%': { opacity: '0', transform: 'rotateX(90deg) translateY(50px)' },
          '100%': { opacity: '1', transform: 'rotateX(0deg) translateY(0)' },
        },
        fadeout: { 
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeinright: 'fadeinright 0.8s ease-out',
        fadeoutright: 'fadeoutright 0.8s ease-out',
        fadeinleft: 'fadeinleft 0.8s ease-out',
        fadeoutleft: 'fadeoutleft 0.8s ease-out',
        flipup: 'flipup 0.8s ease-out',
        fadeout: 'fadeout 0.8s ease-out',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
    require('flowbite/plugin')
  ],
  darkMode: ['selector', '[data-mode="dark"]']
}