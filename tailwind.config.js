/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        lightGray: '##E5E7EB',

        darkLight: '#1E293B',
        darkDeep: '#0F172A',
        brand: '#FF0000',
        primary: '#E91F63',
        lightDeepText: '#A2ACBD',
        lightLightText: '#D1D5DC',
        lightBasicText: '#0F1714',
        lightGrayBorder: '#E5E7EB',
        darkBasicText: '#DFDFDF',
        darkAccentText: '#FED500',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
