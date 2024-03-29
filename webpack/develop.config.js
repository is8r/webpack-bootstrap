const baseConfig = require("./base.config.js");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "development",
  watch: true,
});
