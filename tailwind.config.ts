import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium ed-tech palette: crisp slate neutrals + indigo accent.
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#312e81',
        },
      },
      fontFamily: {
        // Kannada script falls back through the standard Windows/Android Kannada fonts.
        sans: [
          'Inter',
          'Segoe UI',
          'system-ui',
          'Noto Sans Kannada',
          'Tunga',
          'Nirmala UI',
          'sans-serif',
        ],
      },
      keyframes: {
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-slide': 'fade-slide 220ms ease-out',
        'pop-in': 'pop-in 180ms ease-out',
      },
      boxShadow: {
        glow: '0 0 0 3px rgba(99, 102, 241, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
