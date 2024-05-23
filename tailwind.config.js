/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EEBD69',
          opacity: '#EEBD69d4',
          ligth: '#F5C36F',
          300: '#F9C773',
          400: '#80663B',
        },
        secondary: {
          DEFAULT: '#EC672F',
          opacity: '#EC672Fd4',
          ligth: '#FF976B',
          300: '#A55536',
          400: '#7F422A',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
