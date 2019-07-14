import Vue from 'vue'
import router from './router'
import App from './App.vue'
//import VueRouter from 'vue-router'


 
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
