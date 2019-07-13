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
//   entry: {
//     index: app+'/html/index.ejs'
//   },
//   output: {
//     filename: '[name].html',
//     publicPath: __dirname + '/' + dist,
//     path: __dirname + '/' + dist
//   },
//   module: {
//     rules: [{
//       test: /\.ejs$/,
//       loader: ExtractTextPlugin.extract({
//         use: [
//           'html-loader',
//           'ejs-html-loader'
//         ]
//       })
//     }]
//   },
//   plugins: [
//     new ExtractTextPlugin('[name].html')
//   ],
}
