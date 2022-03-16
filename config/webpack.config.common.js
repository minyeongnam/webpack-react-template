const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].js',
    clean: true,
    publicPath: '/',
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      '~': path.resolve(__dirname, '..', 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: { not: [/inline/] }, // exclude react component if *.svg?inline
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: /inline/, // *.svg?inline
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[name][hash].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset',
        generator: {
          filename: 'font/[name][hash].[ext]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: { not: [/inline/] }, // exclude react component if *.svg?inline
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: /inline/, // *.svg?inline
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
