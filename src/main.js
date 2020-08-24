// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

// 源于CSDN博客
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

// 引用axios，并设置基础URL为nginx监听url
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:1107'
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.use(VueResource)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
