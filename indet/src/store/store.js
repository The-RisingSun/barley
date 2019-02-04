import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    saveName: '订单管理',
    information: [{
      id: '130000200102099538',
      datetime: '2001-06-02 02:54:24',
      csentence: '温他律再动状各白个接风更速装四器。',
      intege: 566,
      integer: 566,
      price: 1,
      status: '待支付'
    },
    {
      id: '330000200712225156',
      datetime: '1990-07-31 05:10:06',
      csentence: '先划果具报民段自图清满算石。',
      intege: 566,
      integer: 566,
      price: 1,
      status: '待支付'
    },
    {
      id: '650000199412233217',
      datetime: '1999-07-31 09:31:22',
      csentence: '反都争美没七难构规才议类更日办了。',
      intege: 566,
      integer: 566,
      price: 1,
      status: '待支付'
    }]
  },
  mutations: {
    setScroll (state, val) {
      state.saveName = val
    },
    pull (state, val) {
      state.saveName.pull(state)
    }
  }
})
export default store
