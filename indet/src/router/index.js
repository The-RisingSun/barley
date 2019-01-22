import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD

import HelloWorld from '@/components/HelloWorld'
import List from '@/components/ljd/List'
=======
import Home from '@/components/xxy/Home'
>>>>>>> d0a8b47c8d321c032f3fe0cfaad4da260735c7ce
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List
=======
      name: 'Home',
      component: Home
>>>>>>> d0a8b47c8d321c032f3fe0cfaad4da260735c7ce
    }
  ]
})
