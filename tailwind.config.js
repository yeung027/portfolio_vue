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
        minHeight: {
          '1/2': '50%',
        },
        backgroundPosition: {
          'mobile': '60% 0%',
          'desktop': '200% 60%',
        },
        fontFamily: {
          'open_sans': ['Open Sans', 'sans-serif'],
          'roboto': ['Roboto', 'sans-serif'],
          'raleway': ['Raleway', 'sans-serif']
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
              'light-sky': '#cff0ff',
              'dark-blue': '#173b6c',
              'light-light-green': '#f7fee7',
              'light-green': '#84cc16',
              'green': '#65a30d',
              'light-gray': '#525252',
            },
            backgroundImage: {
              'hero': "url('~@/static/img/hero-bg.jpg')",
              'hei': "url('~@/static/img/hei.jpeg')"
            },
            inset: {
              '1/5': '20%',
              '1/6': '16.66%',
            },
            zIndex: {
              'n1': '-1',
            },
            backdropBlur: {
              xs: '2px',
            }
          },
          screens: {
            'mobile': '390px',
            'desktop': '1280px',
          },
          boxShadow: {
            'box1': '0px 0px 9px 3px rgba(0,0,0,0.12)',
          },
          backdropBlur: {
            xs: '2px',
          }
      },
      variants: {
        extend: {
          translate: ['group-hover', 'hover'],
          textColor:['hover']
        }
      },
}