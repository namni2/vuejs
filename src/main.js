import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'vue-daum-map'
import 'highcharts'
import './assets/css/app.css';


const vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});



