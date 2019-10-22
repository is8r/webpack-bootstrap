const HtmlWebpackPlugin = require('html-webpack-plugin')

let app = './app'
let dist = '../dist'

module.exports = {
  entry: {
    scripts: app + '/javascripts/scripts.js'
  },
  output: {
    filename: 'javascripts/[name].js',
    path: __dirname + '/' + dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: app + '/html/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
}
