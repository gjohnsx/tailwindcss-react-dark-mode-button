/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};