const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let app = './app';
let dist = '../dist';

module.exports = {
  entry: {
    styles: app + '/stylesheets/styles.scss'
  },
  output: {
    filename: '../.chache/[name].bundle.js',
    path: __dirname + '/' + dist
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    require('autoprefixer'),
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[name].css'
    })
  ]
};
