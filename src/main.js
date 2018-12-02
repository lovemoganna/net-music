import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import fastClick from 'fastclick'
import 'babel-polyfill'
import ECharts from 'echarts'
import VCharts from 'v-charts'
import BaiduMap from 'vue-baidu-map'
// import swuiper component
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 解决移动端300毫秒延迟问题.
fastClick.attach(document.body)
// 使用 swiper
Vue.use(VueAwesomeSwiper /* { default global options } */)
// 使用 v-charts
Vue.use(ECharts)
Vue.use(VCharts)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'FnUhCPn09m7GcD427TpFOlgCoVx5FkLy'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
