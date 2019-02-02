import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/xxy/Home' // 首页
import HelloWorld from '@/components/HelloWorld'
import Children from '@/components/xxy/Children' // 儿童亲子
import Dance from '@/components/xxy/Dance' // 舞蹈芭蕾
import Drama from '@/components/xxy/Drama'// 戏剧话剧
import Rock from '@/components/xxy/Rock'// 摇滚音乐
import Sports from '@/components/xxy/Sports'// 体育活动
import List from '@/components/ljd/List'
import Chooseseat from '@/components/pk/Chooseseat'
import Orderconfirm from '@/components/pk/Orderconfirm'
import Detail from '@/components/ljd/Detail'
import Login from '@/components/wy/Login' // ��¼ҳ��
import Registered from '@/components/wy/Registered' // 账户注册
import Personal from '@/components/wy/Personal'
import PersonOrder from '@/components/wy/PersonOrder' // 订单管理
import PersonInfo from '@/components/wy/PersonInfo' // 个人信息
import PersonTicket from '@/components/wy/PersonTicket' // 常用购票人
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/drama',
      component: Drama
    },
    {
      path: '/sports',
      component: Sports
    },
    {
      path: '/children',
      component: Children
    },
    {
      path: '/rock',
      component: Rock
    },
    {
      path: '/dance',
      component: Dance
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registered',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/personal',
      component: Personal,
      children: [{
        path: '',
        name: 'Personal',
        component: PersonOrder
      },
      {
        path: 'PersonInfo',
        name: 'PersonInfo',
        component: PersonInfo
      },
      {
        path: 'PersonTicket',
        name: 'PersonTicket',
        component: PersonTicket
      }]
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/Chooseseat',
      name: 'Chooseseat',
      component: Chooseseat
    },
    {
      path: '/orderconfirm',
      name: 'Orderconfirm',
      component: Orderconfirm
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
