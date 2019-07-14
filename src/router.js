import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './component/HelloWorld'
import Main from './component/Main'

Vue.use(Router)
 
 export default new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
          path:'/main',
          name:'main',
          component:Main

      }
    ]
  })