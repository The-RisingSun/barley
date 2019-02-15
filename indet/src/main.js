// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/xxy-img/error.png',
  loading: '../static/xxy-img/load.gif',
  attempt: 1,
  throttleWait: 500
})
Vue.use(vueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$url = '\n' + 'https://www.easy-mock.com/mock/5c42d600bfeaf7769cc002df/text' // \n是转义的意思
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
