/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%': { width: '10vw' },
          '100%': { width: '50vw' },
        },
        expandWidthAndOpac: {
          '0%': { width: '10vw', opacity: '0.5' },
          '100%': { width: '50vw', opacity: '1' },
        },
        opachalf: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.5' },
        },
        liftText: {
          '0%': { transform: 'translateY(0px)', color: 'transparent' },
          '100%': { transform: 'translateY(-170px)', color: 'white' },
        }
      },
      animation: {
        expandAndOpac: 'expandWidthAndOpac 2s ease-in-out forwards',
        expand: 'expand 2s ease-in-out forwards',
        opacHalf: 'opachalf 2s ease-in-out forwards',
        textLift: 'liftText 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}