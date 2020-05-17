import Vue from 'vue'
import Router from 'vue-router'
import Main from './template/Main'
import subMain from './component/subMain'


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
              path:'/major',
              name:'major',
              component:major
            },{
              path:'/current',
              name:'current',
              component:current
            }
        ]
      }
    ]
  })