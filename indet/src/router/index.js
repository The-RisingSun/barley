import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/xxy/Home'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/ljd/List'
import Chooseseat from '@/components/pk/Chooseseat'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/HelloWorld',  /*默认路径是/*/
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/',  /*默认路径是/Chooseseat*/
      name: 'Chooseseat',
      component: Chooseseat
    }
  ]
})
