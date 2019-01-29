import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    saveName: '订单管理'
  },
  mutations: {
    setScroll (state, val) {
      state.saveName = val
    }
  }
})
export default store
