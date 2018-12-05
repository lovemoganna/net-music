import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import fastClick from 'fastclick'
import 'babel-polyfill'

// import swuiper component
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
// 解决移动端300毫秒延迟问题.
fastClick.attach(document.body)
// 使用 swiper
Vue.use(VueAwesomeSwiper /* { default global options } */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
