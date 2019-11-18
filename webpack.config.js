const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
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
    new webpack.HotModuleReplacementPlugin({}),
    new HtmlWebpackPlugin({
      title: "Plugins"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
