module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#090909',
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        brand: {
          100: '#f4e8ec',
          200: '#e3c7cf',
          300: '#d1a5b2',
          400: '#af6179',
          500: '#8d1d3f',
          600: '#7f1a39',
          700: '#551126',
          800: '#3f0d1c',
          900: '#2a0913',
        },
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace']
      },
      transitionProperty: {
        visibility: 'visibility',
        width: 'width',
      },
      spacing: {
        '2px': '2px',
        '7': '1.75rem',
        '13': '2.75rem',
      },
      minWidth: theme => ({
        ...theme('spacing'),
      }),
      maxWidth: theme => ({
        ...theme('spacing'),
      }),
    },
  },
  variants: {
    textColor: ['hover', 'focus', 'group-hover'],
    opacity: ['hover', 'group-hover'],
    width: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [],
}
