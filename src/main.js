import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'vue-daum-map'
import 'highcharts'


const vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});



