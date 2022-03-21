const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
  devtool: 'inline-source-map',
});
