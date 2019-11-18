const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    prices: path.resolve(__dirname, "src/js/prices.js"),
    contact: path.resolve(__dirname, "src/js/contact.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Plugins"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
