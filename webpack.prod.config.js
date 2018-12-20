const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "core.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.min.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
