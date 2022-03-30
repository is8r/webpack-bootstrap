const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  context: path.resolve(__dirname, "../assets"),
  entry: {
    scripts: ["./javascripts/index.js"],
    styles: ["./stylesheets/styles.scss"],
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: true,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", { grid: true }]],
              },
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
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(ico|png|svg|jpe?g|gif|webp)$/i,
        generator: {
          filename: "images/[name][ext][query]",
        },
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      //   filename: "[name].[chunkhash:8].css",
    }),
    new HtmlWebpackPlugin({
      template: "./html/index.ejs",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
  target: ["web", "es5"],
};
