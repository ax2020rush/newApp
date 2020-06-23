import Vue from 'vue'
import './assets/css/css.css' // 字体引入
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(vant)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
