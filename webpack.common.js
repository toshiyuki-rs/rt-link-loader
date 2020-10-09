
const config = {
  module: {
    rules:[
      {
        test: /\.ts$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  }
}

module.exports = config
// vi: se ts=2 sw=2 et:
