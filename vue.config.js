/*
 * @Descripttion:
 * @version:
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2020-02-29 01:40:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-02-29 17:34:11
 */
const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('lib', path.resolve(__dirname, './lib'))
      .set('static', path.resolve(__dirname, './static'))
      .set('examples', path.resolve(__dirname, './examples'))
      .set('locale', path.resolve(__dirname, './locale'))
    config.performance.hints(false)
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Bes-ui Title'
    }
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://47.100.47.3/',
        /* 允许跨域 */
        changeOrigin: true
      }
    }
  }
}
