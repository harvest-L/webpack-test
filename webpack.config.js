/*
 * @Author: flyharvest
 * @Date: 2020-07-13 19:15:55
 * @LastEditTime: 2020-07-14 22:14:29
 * @LastEditors: flyharvest
 */ 
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: '/dist/',
        sideEffects: false
      }
    ]
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}