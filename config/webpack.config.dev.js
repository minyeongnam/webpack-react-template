const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonCongig = require('./webpack.config.common.js');

module.exports = merge(commonCongig, {
  mode: 'development',
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
  devtool: 'inline-source-map',
});
