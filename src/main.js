import Vue from 'vue'
import vuex from 'vuex'

import router from './router'
import App from './App.vue'
import axios from 'axios'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'vue-daum-map'
import 'bootstrap'
import 'highcharts'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.prototype.$http = axios;
//Vue.use(BootstrapVue);
Vue.use(vuex) 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
