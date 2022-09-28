/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      current: 'currentColor',
      'white': '#ffffff',
      'gray-100': '#818080',
      'gray-900': '#111827',
      'black': '#000000',
      'gradient1': '#0d54be',
      'gradient2': '#20ECD3',
      'red': '#E84949',
      'red-600': '#dc2626',
      'navy': '#343D68',
      'purple': '#4F47C8',
      'blue-200': '#0571AD',
      'blue-100': '#0ACBBF',
      'blue-150': '#1AB7CC',

    },
    screens: {
      'sm': { 'min': '640px' },
      'md': { 'min': '768px' },
      'lg': { 'min': '1024px' },
      'xl': { 'min': '1280px' },
      'max-xl': { 'max': '1279px' },
      'max-lg': { 'max': '1023px' },
      'max-md': { 'max': '767px' },
      'max-sm': { 'max': '639px' },
    },
    extend: {
      fontFamily: {
        sans: 'Be Vietnam Pro, sans-serif'
      },
      boxShadow: {
        'custom': '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
        'custom2': '1px 3px 4px rgba(0, 0, 0, 0.17)',
        'custom3': '1px 3px 4px rgba(255, 255, 255, 0.8)'
      },
      backgroundImage: {
        'wave': "url('/src/assets/waveteste.png')",
        'polygon': "url('/src/assets/polygon.svg')",
      }
    },
  },
  plugins: [],
}
