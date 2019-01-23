import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/xxy/Home'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/ljd/List'
import Detail from '@/components/ljd/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
