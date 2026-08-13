/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon': '#39FF14',
        'dark': '#050505',
        'charcoal': '#0F0F0F',
        'light-gray': '#B0B0B0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { textShadow: '0 0 5px #39FF14, 0 0 10px #39FF14' },
          '100%': { textShadow: '0 0 20px #39FF14, 0 0 40px #39FF14' },
        }
      }
    },
  },
  plugins: [],
}