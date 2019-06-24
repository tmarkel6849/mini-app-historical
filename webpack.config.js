const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/Index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-class-properties']
        }
      }
    ]
  }
}