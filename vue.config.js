const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  // 设置别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))
  }
  // devServer: {
  //   // 设置代理服务器
  //   proxy: {
  //     '/api': {
  //       target: 'https://hdbk.site/api/',
  //       changeOrigin: true,
  //       secure: false,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
