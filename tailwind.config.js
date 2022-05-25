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
        extend: {
            colors: {
              amber: colors.amber,
              emerald: colors.emerald,
            }
          }
      }
}