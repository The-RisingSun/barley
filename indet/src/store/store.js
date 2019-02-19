import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    saveName: '订单管理',
    information: [{
      id: '130000200102099538',
      datetime: '2001-06-02 02:54:24',
      csentence: '大型多媒体励志互动儿童剧。',
      intege: 1,
      integer: '6排3座',
      price: 100,
      status: '待支付'
    },
    {
      id: '330000200712225156',
      datetime: '1990-07-31 05:10:06',
      csentence: '大型多媒体励志互动儿童剧。',
      intege: 1,
      integer: '6排1座',
      price: 100,
      status: '待支付'
    },
    {
      id: '650000199412233217',
      datetime: '1999-07-31 09:31:22',
      csentence: '大型多媒体励志互动儿童剧。',
      intege: 1,
      integer: '6排2座',
      price: 100,
      status: '待支付'
    }]
  },
  mutations: {
    setScroll (state, val) {
      state.saveName = val
    },
    pull (state, val) {
      state.saveName.pull(state)
    },
    order (state, val) {
      state.information.push(val)
    }
  }
})
export default store
