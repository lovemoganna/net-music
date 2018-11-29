const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://hdbk.site/api/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
