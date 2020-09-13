import Vue from 'vue'
import Router from 'vue-router'
import subMain from './component/subMain'
import forcast from './component/forcast'

Vue.use(Router)
 
 export default new Router({
    mode:'history',
    routes: [
      {
        path:'/vuejs',
        name:'subMain',
        component:subMain
      }
     , {
        path:'/forcast',
        name:'forcast',
        component:forcast
       }
    ]
  })