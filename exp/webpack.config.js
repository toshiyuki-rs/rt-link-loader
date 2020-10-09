const path = require('path')


const config = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'lib.js'),
  output: {
    path: __dirname,
    filename: 'lib.js',
    library: 'mainCssLib'
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [
          path.resolve(__dirname, '..', 'dist', 'index.js')
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'main.css' : path.resolve(__dirname, 'src', 'main.css')
    }
  }
}

module.exports = config
// vi: se ts=2 sw=2 et:
