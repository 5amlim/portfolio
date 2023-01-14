module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/flowbite/**/*.js",
   ],
   theme: {
    fontSize: {
      xsm: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': ['3.052rem', {
        lineHeight: '5rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
    },
     extend: {},
   },
   plugins: [require('flowbite/plugin')],
 }
