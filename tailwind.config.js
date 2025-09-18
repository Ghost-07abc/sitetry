/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF', // main purple
          dark: '#3A3A6A',
          light: '#A5A3FF',
        },
        accent: {
          DEFAULT: '#5EEAD4', // teal accent
        },
        background: {
          DEFAULT: '#2D2A4A', // main background
          light: '#3B3768',
        },
        card: {
          DEFAULT: 'rgba(255,255,255,0.08)',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #6C63FF 0%, #3A3A6A 100%)',
        'card-glass': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
