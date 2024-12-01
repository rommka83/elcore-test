/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      'bg-primary': '#fff',
      'bg-secondary': '#000',
      'bg-tertiary': '#262626',
      'text-primary': '#262626',
      'text-secondary': '#fff',
      'text-tertiary': '#6C6C6C',
      'text-btn': '#428D26',
      'bg-btn-primary': '#fff',
      'bg-btn-secondary': '#428D26',
      transparent: 'transparent',
    },
  },
  plugins: [],
};
