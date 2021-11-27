const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  mode: 'development',
  // 入口文件，webpack 会首先从这里开始编译
  entry: {
    app: './src/index.js'
  },
  // 定义了打包后输出的位置，以及对应的文件名
  output: {
    path: path.resolve(__dirname, './dist'),
    // [name] 是个占位符，等价于 entry 中定义的 key 值，即 app
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack 搭建 vue 项目',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new friendlyErrorsWebpackPlugin()
  ]
}
