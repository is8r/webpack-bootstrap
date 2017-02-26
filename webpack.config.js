var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [{
  entry: {
    scripts: './app/scripts.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: 'dist',
    port: 8080
  }
}, {
  entry: {
    styles: './app/styles.scss'
  },
  output: {
    filename: '[name].css',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
       {
         test: /\.(scss|css)$/,
         loaders: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader', 'sass-loader', 'postcss-loader']
          })
       }
     ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      }
    }),
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
  ]
}];
