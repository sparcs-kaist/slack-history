const webpack = require('webpack');
const { resolve } = require('path');
const appConfig = require('./config');

const webpackConfig = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    // 'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './client/index.js'
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  // devServer: {
  //   hot: true,
  //   // activate hot reloading

  //   contentBase: `http://${appConfig.host}:${appConfig.devPort}`,
  //   // match the output path

  //   publicPath: '/',
  //   // match the output `publicPath`
    
  //   proxy: {
  //       "**": `http://${appConfig.host}:${appConfig.port}`
  //   }
  // },

  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&camelCase',
          'sass-loader?sourceMap',
          // 'postcss-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // activates HMR

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
}

module.exports = webpackConfig;