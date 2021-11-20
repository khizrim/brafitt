module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    fontFamily: {
      sans: ['TT Hazelnuts', 'sans-serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      main: ['18px', '32px'],
      md: ['24px', '36px'],
      lg: ['36px', '48px'],
      xl: ['72px', '84px'],
      xxl: ['122px', '122px'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      lightGray: '#909090',
      gray: '#46494a',
      green: {
        60: '#8bb49c',
        80: '#3e845f',
        100: '#006c43',
      },
      ginger: {
        60: '#f5c496',
        80: '#e59e52',
        100: '#db8b2d',
      },
      beige: {
        60: '#f9f4d7',
        80: '#e9d095',
        100: '#dda46f',
      },
      burgundi: {
        60: '#ca8a90',
        80: '#9f3c4e',
        100: '#870130',
      },
    },

    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
