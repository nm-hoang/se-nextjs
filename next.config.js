/** @format */

const path = require('path')
// const withCSS = require('@zeit/next-css')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss/custom')],
  },
  // withCSS: withCSS({
  //   /* my next config */
  // }),
}
