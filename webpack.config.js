
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    port: 8090,
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'src'),
    bonjour: true,
    watchContentBase: true
  },
  mode: 'production'
}
