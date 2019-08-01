import Vue from 'vue'
import Router from 'vue-router'
import Main from './component/Main'
import myLocation from './template/myLocation'
import bodyHtml from './template/body'

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
              path:'/main',
              name:'body',
              component:bodyHtml
            },{
              path:'/location',
              name:'subMenuLocation',
              component:myLocation
            }
        ]
      }
    ]
  })