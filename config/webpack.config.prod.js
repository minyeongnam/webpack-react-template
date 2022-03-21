const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonCongig = require('./webpack.config.common.js');

module.exports = merge(commonCongig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].js',
    clean: true,
    publicPath: '/',
  },
});
