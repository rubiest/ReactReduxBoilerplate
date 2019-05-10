const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: [
          path.resolve(__dirname, "./node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ['@babel/react', '@babel/preset-env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};