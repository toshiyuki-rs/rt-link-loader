const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const { HtmlLinkInjection } = require('./dist/index.js')
const config = require('./webpack.common.js')


config.entry = './src/test/index-0.js' 
config.output = {
  path: path.resolve(__dirname, 'test-out')
}
config.plugins = [
  new HtmlWebpack(),
  new HtmlLinkInjection()
]


module.exports = config

// vi: se ts=2 sw=2 et:
