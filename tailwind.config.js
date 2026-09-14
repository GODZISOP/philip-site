/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        prime: {
          950: '#07080A',
          900: '#0B0D10',
          850: '#101317',
          800: '#161920',
          750: '#1D212A',
          700: '#252A36',
          600: '#383F50',
          500: '#525C72',
          400: '#7E8B9F',
          300: '#A4B0C1',
          200: '#D0D7E2',
          100: '#F0F3F7',
          50: '#F9FAFC',
        },
        gold: {
          300: '#EBD28B',
          400: '#DEBD67',
          500: '#C5A059', // Primary metallic bronze-gold
          600: '#AD8741',
          700: '#89672C',
        },
        carbon: {
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(197, 160, 89, 0.35)',
          surface: '#11141A',
          subtle: '#141820',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'wider-xl': '0.18em',
        'widest-2xl': '0.25em',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(197, 160, 89, 0.25)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
