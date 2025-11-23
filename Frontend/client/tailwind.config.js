/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        dark: {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          accent: '#3d3d3d'
        }
      },
      textColor: {
        dark: {
          primary: '#ffffff',
          secondary: '#b3b3b3',
          accent: '#808080'
        }
      },
      borderColor: {
        dark: {
          primary: '#404040',
          secondary: '#333333'
        }
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
      }
    },
  },
  plugins: [],
}