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
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      xs: ['.6875rem', '1.3'],
      sm: ['.9375rem', '1.7'],
      md: ['1rem', '1'],
      lg: ['1.125rem', '1'],
      xl: ['1.25rem', '1'],
      '2xl': ['1.375rem', '1.6'],
      '3xl': ['1.75rem', '1'],
      '4xl': ['2.5rem', '1'],
      '5xl': ['2.625rem', '1.1'],
      '6xl': ['5.125rem', '1.1'],
    },
    letterSpacing: {
      tightest: '-0.04em',
      tighter: '-0.025em',
      tight: '-0.012em',
      normal: '0em',
      wide: '0.007em',
    },
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.3',
      normal: '1.6',
      relaxed: '1.7',
      loose: '1.8',
    },
    screens: {
      lg: '1220px',
    },
    extend: {
      backgroundImage: {
        hero: 'url("images/illustration-working.svg")',
        'boost-mobile': 'url("images/bg-boost-mobile.svg")',
        'boost-desktop': 'url("images/bg-boost-desktop.svg")',
        'shorten-mobile': 'url("images/bg-shorten-mobile.svg")',
        'shorten-desktop': 'url("images/bg-shorten-desktop.svg")',
      },
      backgroundSize: {
        'hero-size': 'auto 100%',
        '3/4': '75%',
      },
      gridTemplateColumns: {
        '2-center': '1fr repeat(2, 610px) 1fr',
      },
      spacing: {
        30: '7.5rem',
      },
    },
  },
  plugins: [],
};
