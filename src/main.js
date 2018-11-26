import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import fastClick from 'fastclick'

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
