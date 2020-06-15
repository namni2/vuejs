import Vue from 'vue'
import Router from 'vue-router'
import Main from './component/Main'
import subMain from './component/subMain'
import forcast from './component/forcast'

Vue.use(Router)
 
 export default new Router({
    mode:'history',
    routes: [
      {
          path:'/vuejs',
          name:'main',
          component:Main,
          children:[
            {
              path:'/vuejs',
              name:'subMain',
              component:subMain
            },
            {
              path:'/vuejs/forcast',
              name:'forcast',
              component:forcast
            }
        ]
      }
    ]
  })