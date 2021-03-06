module.exports = {
  entry: './client/app.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
      }
    ]
  }
}