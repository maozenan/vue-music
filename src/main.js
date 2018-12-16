import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.styl'
import 'babel-polyfill'
import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'

Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
})
fastclick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
