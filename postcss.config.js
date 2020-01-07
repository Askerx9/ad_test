module.exports = {
  plugins: [
    // require('stylelint'),
    require('postcss-harmonize'),
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')
  ]
}