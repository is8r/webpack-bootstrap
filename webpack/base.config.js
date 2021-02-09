const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "../assets"),
  entry: {
    app: ["./javascripts/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./html/index.ejs",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
};
