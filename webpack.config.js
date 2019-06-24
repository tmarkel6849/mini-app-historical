const path = require('path')
      SRC_DIR = path.join(__dirname, '/client/Index.jsx')
      DIST_DIR = path.join(__dirname, '/public')

module.exports = {
  mode: 'development',
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
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