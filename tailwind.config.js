/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'dark-image': "url(../image/bg-curvy-dark-modeee.svg)",
        'light-image': "url(../image/bg-curvy-light-mode.svg)",

      }),
    },

    fontFamily: {
      sans: ['Roboto'],
      OpenSans: ['Open Sans, sans-serif']
    },
    colors: {
      'regal-gray': 'rgb(249 250 251)',
      'regal-black': 'hsl(218 28% 13%)',
      'black': 'hsl(217 28% 15%)',
      'gray-100': 'rgb(243 244 246)',
      'gray-50': '#f9fafb',
      'black-500': 'rgb(107 114 128)',
      'gray': '#9ca3af',
      'cyan': 'rgb(103 232 249)',
      'white': '#fff',
      'green-300': '#86efac',
      'green-400': '#4ade80',
      'blue-500': 'hsl(219 30% 18% )',
      'stone': '#1e293b',



    },
  },
  plugins: [],
}

