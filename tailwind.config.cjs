/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-cyan': 'hsl(180, 66%, 49%)',
      'primary-violet': 'hsl(257, 27%, 26%)',
      'secondary-red': 'hsl(0, 87%, 67%)',
      'neutral-white': 'hsl(0, 0%, 100%)',
      'neutral-gray': 'hsl(0, 0%, 75%)',
      'neutral-grayish-violet': 'hsl(257, 7%, 63%)',
      'neutral-dark-blue': 'hsl(255, 11%, 22%)',
      'neutral-dark-violet': 'hsl(260, 8%, 14%)',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        30: '7.5rem',
      },
    },
  },
  plugins: [],
};
