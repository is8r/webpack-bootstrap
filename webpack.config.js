const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ManifestPlugin = require('webpack-manifest-plugin')

let js = require('./webpack/js.webpack.config')
let css = require('./webpack/css.webpack.config')

module.exports = [
  js,
  css
]
