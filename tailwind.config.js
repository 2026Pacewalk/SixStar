/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0099d7',
          light: '#3fbfe2',
          dark: '#007bb0',
          navy: '#0b2a3a',
        },
        ink: '#0f2733',
        muted: '#5b7280',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        heading: ['Heebo', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(9, 42, 58, 0.18)',
        card: '0 20px 50px -20px rgba(0, 153, 215, 0.35)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0099d7 0%, #3fbfe2 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
