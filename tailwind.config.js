const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
        },
        backgroundPosition: {
          'mobile': '60% 0%',
        },
        fontFamily: {
          'open_sans': ['Open Sans', 'sans-serif'],
          'roboto': ['Roboto', 'sans-serif']
        },
        extend: {
            colors: {
              amber: colors.amber,
              emerald: colors.emerald,
              teal: colors.teal,
              sky: colors.sky,
              'deep-dark': '#040b14',
              'deep-blue': '#2c2f3f',
              'custom-sky': '#149ddd',
              'dark-blue': '#173b6c',
            },
            backgroundImage: {
              'hero': "url('~@/static/img/hero-bg.jpg')"
            },
            inset: {
              '1/5': '20%',
              '1/6': '16.66%',
            },
          },
          screens: {
            'mobile': '390px',
            'desktop': '1280px',
          }
      }
}