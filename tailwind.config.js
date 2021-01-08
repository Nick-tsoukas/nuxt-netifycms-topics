module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {
  //     typography: {
  //       '2xl': {
  //         css: {
  //           h1: {
  //             fontSize: '10px',
  //           },
  //           // ...
  //         },
  //       },
  //     },
  //   }
  // },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')]
}
