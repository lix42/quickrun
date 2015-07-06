var path = require('path'),
    webpack = require('webpack'),
    nodeModules = path.resolve(__dirname, 'node_modules'),
    pathToReact = path.resolve(nodeModules, 'react/dist/react.min.js');

var config = {
  devtool: 'eval',
  entry: path.resolve(__dirname, 'src/all.js'),
  resolve: {
    alias: {
      'react': pathToReact
    }
  },

  output: {
    path: path.resolve(__dirname, 'bld'),
    filename: 'all.js'
  },
  module: {
    noParse: [pathToReact],
    loaders: [{
      test: /\.jsx?$/,
      exclude: nodeModules,
      loader: 'babel?stage=0&optional=runtime&externalHelpers'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?outputStyle=nested&' +
          'includePaths[]=' + nodeModules
    }, {
      test: /\.*(png|jpg)$/,
      loader: 'url?limit=10000'
    }, {
      test: pathToReact,
      loader: 'expose?React'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    contentBase: "./",
    publicPath: "/bld/",
    progress: true,
    colors: true,
    //hot: true, // don't know the reason, but setting hot in config gives HRM is disabled exception. so set it in CLI or npm.
    inline: true
  }
};

module.exports = config;
