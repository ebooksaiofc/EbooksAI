/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#03caca', // Cyan
          DEFAULT: '#0077ff', // Deep Sky Blue
          dark: '#6c1db6', // Blue Violet
        },
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #03caca, #6c1db6)',
      },
    },
  },
  plugins: [],
};