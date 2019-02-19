import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var xxy = {
  state: {
    info: '全部商品分类',
    tabData: {
      url: '',
      title: '',
      city: '',
      province: '',
      date: ''
    }
  },
  mutations: {
    pullData (state, params) {
      alert(params)
      console.log(params)
      state.tabData.url = params[0]
      state.tabData.title = params[1]
      state.tabData.city = params[2]
      state.tabData.province = params[3]
      state.tabData.date = params[4]
    }
  }
}
var store = new Vuex.Store({
  state: {
    saveName: '订单管理',
    num: 1,
    tableData: [{
      calorie: '身份证',
      name: '你的',
      address: '4106211995041044077'
    }, {
      calorie: '身份证',
      name: '王小',
      address: '410621199310244077'
    }, {
      calorie: '身份证',
      name: '王虎',
      address: '410621199309144028'
    }, {
      calorie: '身份证',
      name: '王小虎',
      address: '410621199312124028'
    }],
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
    }
    ]
  },
  mutations: {
    setScroll (state, val) {
      state.saveName = val
    },
    setn (state, val) {
      state.num = val
    },
    push (state, val) {
      console.log(state.tableData)
      state.tableData.push(val)
      console.log(state.tableData)
    },
    pull (state, val) {
      state.saveName.pull(state)
    },
    order (state, val) {
      state.information.push(val)
    }
  },
  modules: {
    xxy
  }
})
export default store
