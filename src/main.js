import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'vue-daum-map'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.prototype.$http = axios;
//Vue.use(BootstrapVue);
 
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
