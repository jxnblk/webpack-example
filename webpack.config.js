// const HTMLPlugin = require('mini-html-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: '!!prerender-loader?string!index.html'
    })
  ]
}
