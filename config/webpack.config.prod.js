const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].js',
    clean: true,
    publicPath: '/',
  },
});
