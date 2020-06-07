import Vue from 'vue'
import Router from 'vue-router'
import Main from './component/Main'
import subMain from './component/subMain'

import forcast from './component/forcast'
import current from './component/current' 
import major from './component/major'

Vue.use(Router)
 
 export default new Router({
    mode:'history',
    routes: [
      {
          path:'/',
          name:'main',
          component:Main,
          children:[
            {
              path:'/',
              name:'subMain',
              component:subMain
            },
            {
              path:'/forcast',
              name:'forcast',
              component:forcast
            }
        ]
      }
    ]
  })