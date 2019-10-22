const path = require('path')
const webpack = require('webpack')

let app = './app';
let dist = '../dist';

module.exports = {
  // mode: 'development',
  entry: {
    scripts: app + '/javascripts/scripts.js'
  },
  output: {
    filename: 'javascripts/[name].js',
    path: __dirname + '/' + dist
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
