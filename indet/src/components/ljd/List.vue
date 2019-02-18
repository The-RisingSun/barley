<template>
    <div id="list">
      <Headnav></Headnav>
      <Headsearch></Headsearch>
      <div class="main">
        <div class="shops">
          共 <span>23</span> 个商品
        </div>
        <div class="tab">
          <div class="city">
            <span>城 市:</span>
            <ul>
              <li @click="checked(index, item.list)" :class="{'active': index === thisIndex}" :key="index" v-for="(item, index) in items">{{item.list}}</li>
            </ul>
          </div>
          <div class="classify">
            <span>分 类:</span>
            <ul>
              <li @click="checked1(i)" :class="{'active': i === thisindex1}" :key="i" v-for="(item1,i) in items1">{{item1.list1}}</li>
            </ul>
          </div>
          <div class="time">
            <span>时 间:</span>
            <ul>
              <li @click="checked2(i)" :key="i" v-for="(item2,i) in items2" :class="{'active': i === thisindex2}">{{item2.list2}}</li>
            </ul>
            <div class="block">
              <el-date-picker v-model="value1" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="toptab">
              <ul>
              <li
                style="cursor: pointer"
                :class="[index === activeOk ? 'active1': '']"
                v-for="(item, index) in detailLists"
                :key="index"
                @click="typeNameClick(index, item.typeName)"
              >{{item.typeName}}</li>
            </ul>
            <div class="topright">
              <div
                :key="v"
                v-for="(item, v) in cssFont"
                @click="tab(v)"
                :class="[v === thisIndex3 ? 'active2': '']">
                <span :class="item.typeFont"></span>
              </div>
            </div>
          </div>
          <div class="ticketlist">
            <div class="ticket" v-for="(item,l) in listData" :key="l">
              <div class="pic">
                <img :src="item.img" alt="">
              </div>
              <div class="txt">
                <h5>{{item.name}}</h5>
                <p>{{item.title}}</p>
                <p><img :src="item.timeImg" alt="">{{item.time}}</p>
                <p><img :src="item.addressImg" alt="">{{item.address}}</p>
                <p><span>{{item.price}}元</span>{{item.state}}</p>
                <p><img :src="item.typeImg" alt="">{{item.type}}</p>
              </div>
            </div>
            <div class="page">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="40">
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="asiderig">
          <h6>您可能还喜欢</h6>
          <div class="tic">
            <div class="ticketde">
              <img src="/static/img/list.jpg" alt="">
            </div>
            <div class="txtrig">
              <h5>是的撒就结婚。</h5>
              <p>吉林省 白山市 将大大我去二群</p>
              <p>3123121312312312312321312</p>
              <p><span>82元</span>&nbsp;&nbsp;起</p>
            </div>
          </div>
          <div class="tic">
            <div class="ticketde">
              <img src="/static/img/list.jpg" alt="">
            </div>
            <div class="txtrig">
              <h5>是的撒就结婚。</h5>
              <p>吉林省 白山市 将大大我去二群</p>
              <p>3123121312312312312321312</p>
              <p><span>82元</span>&nbsp;&nbsp;起</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Headsearch from '@/components/ljd/Headsearch'
import Headnav from '@/components/ljd/Headnav'
import Footer from '@/components/ljd/Footer'
export default {
  name: 'List',
  components: {
    Headnav, Headsearch, Footer
  },
  data () {
    return {
      cssFont: [
        {typeFont: 'fa fa-bars'},
        {typeFont: 'fa fa-windows'}
      ],
      thisIndex3: 0,
      aabbcc: 0,
      // *****
      activeOk: 0,
      detailLists: [
        {typeName: '热门推荐'},
        {typeName: '最近开场'},
        {typeName: '最新上架'}
      ],
      // ****
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value1: '',
      value2: '',
      thisIndex: 0,
      thisindex1: 0,
      thisindex2: 0,
      listData: [],
      items: [
        {list: '全部'},
        {list: '北京'},
        {list: '上海'},
        {list: '广州'},
        {list: '成都'},
        {list: '西安'}
      ],
      items1: [
        {list1: '全部'},
        {list1: '音乐会'},
        {list1: '朗诵'},
        {list1: '曲苑杂坛'},
        {list1: '独奏'},
        {list1: '管弦乐'},
        {list1: '声乐及合唱'}
      ],
      items2: [
        {list2: '全部'},
        {list2: '今天'},
        {list2: '明天'}
      ]
    }
  },
  methods: {
    typeNameClick (x, e) {
      // console.log(x)
      // console.log(e)
      this.activeOk = x
      if (x === 0) {
        this.$http.get('https://www.easy-mock.com/mock/5c3c6b83cdcbc2522bf432cf/example/one').then((res) => {
          this.listData = res.data.data.dataList
        })
      } else if (x === 1) {
        this.$http.get('https://www.easy-mock.com/mock/5c3c6b83cdcbc2522bf432cf/example/two').then((res) => {
          this.listData = res.data.data.dataList
        })
      } else if (x === 2) {
        this.$http.get('https://www.easy-mock.com/mock/5c3c6b83cdcbc2522bf432cf/example/three').then((res) => {
          this.listData = res.data.data.dataList
        })
      }
    },
    checked (self, cityName) {
      this.thisIndex = self
      this.$http.get('https://www.easy-mock.com/mock/5c3c6b83cdcbc2522bf432cf/example/city').then((res) => {
        this.listData = res.data.data.cityData
      })
    },
    checked1 (self1) {
      this.thisindex1 = self1
      this.$http.get('https://www.easy-mock.com/mock/5c3c6b83cdcbc2522bf432cf/example/type').then((res) => {
        this.listData = res.data.data.typeData
      })
    },
    checked2 (self2) {
      this.thisindex2 = self2
      this.$http.get('https://www.easy-mock.com/mock/5c3c6b83cdcbc2522bf432cf/example/time').then((res) => {
        this.listData = res.data.data.timeData
      })
    },
    initGetData () {
      this.$http.get('https://www.easy-mock.com/mock/5c3c6b83cdcbc2522bf432cf/example/list').then((res) => {
        this.listData = res.data.data.dataList
      })
    },
    // 接口封装
    clickAjax () {
      return new Promise(function (resolve, reject) {
        this.$http.get('https://www.easy-mock.com/mock/5c3c6b83cdcbc2522bf432cf/example/list').then((res) => {
          resolve(res)
        })
      })
    },
    tab (v) {
      this.thisIndex3 = v
      // console.log(this.thisIndex3)
    }
  },
  created () {
    this.initGetData()
  }
}
</script>

<style lang="less" scoped>
#list{
  .main{
    padding: 0 54px 42px 76px;
    background: #f5f5f5;
    position: relative;
    .shops{
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: #fff;
      font-size: 14px;
      text-indent: 20px;
      span{
        color: #ff3c1b;
      }
    }
    .tab{
      width: 996px;
      height: 230px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 1px;
      font-size: 14px;
      padding: 0 22px;
      .city{
        display: flex;
        border-bottom: 1px dashed #ccc;
        padding-top: 12px;
        span{
          display: inline-block;
          height: 26px;
          line-height: 26px;
          margin-left: 44px;
        }
        ul{
          display: flex;
          height: 78px;
          li{
            padding: 0 7px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            margin-left: 20px;
            cursor: pointer;
          }
          li.active{
            background: #ff3c1b;
            color: #fff;
          }
        }
      }
      .classify{
        display: flex;
        border-bottom: 1px dashed #ccc;
        padding-top: 12px;
        span{
          display: inline-block;
          height: 26px;
          line-height: 26px;
          margin-left: 44px;
        }
        ul{
          display: flex;
          height: 78px;
          li{
            padding: 0 7px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            margin-left: 20px;
            cursor: pointer;
          }
          li.active{
            background: #ff3c1b;
            color: #fff;
          }
        }
      }
      .time{
        display: flex;
        border-bottom: 1px dashed #ccc;
        padding-top: 12px;
        span{
          display: inline-block;
          height: 26px;
          line-height: 26px;
          margin-left: 44px;
        }
        ul{
          display: flex;
          height: 78px;
          li{
            padding: 0 7px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            margin-left: 20px;
            cursor: pointer;
          }
          li.active{
            background: #ff3c1b;
            color: #fff;
          }
        }
        .block{
          margin: -8px 0 0 20px;
        }
      }
    }
    .toptab{
      width: 1042px;
      height: 34px;
      margin-top: 18px;
      line-height: 34px;
      background: #f8f8f9;
      border: 1px solid #ccc;
       border-bottom: none;
      border-radius: 2px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      ul{
        display: flex;
        li{
          width: 90px;
          text-align: center;
        }
        li.active1{
          color: #ff3c1b;
          background: #fff;
        }
      }
      .topright{
        display: flex;
        div{
          width: 49px;
          height: 32px;
          line-height: 31px;
          text-align: center;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 3px;
        }
        div.active2{
          border: 1px solid #ff3c1b;
          border-radius: 3px;
          span{
            color: #ff3c1b;
          }
        }
        div:nth-of-type(2){
          margin-right: 30px;
        }
      }
    }
    .list {
      width: 1042px;
      .ticketlist{
        padding: 0 10px;
        width: 1022px;
        background: #fff;
        .ticket{
          border-bottom: 1px dashed #ccc;
          height: 250px;
          display: flex;
          padding: 0 10px;
          align-items: center;
          .txt{
            height: 210px;
            margin-left: 20px;
            h5{
              font-size: 16px;
              font-weight: normal;
              height: 30px;
              line-height: 30px;
            }
            p:nth-of-type(1){
              color: #ccc;
              font-size: 12px;
              height: 30px;
              line-height: 30px;
            }
            p:nth-of-type(2){
              display: flex;
              align-items: center;
              font-size: 12px;
              color: #ccc;
              height: 30px;
              line-height: 30px;
            }
            p:nth-of-type(3){
              display: flex;
              align-items: center;
              font-size: 12px;
              height: 30px;
              line-height: 30px;
            }
            p:nth-of-type(4){
              font-size: 12px;
              color: #ccc;
              span{
                color: #ff3c1b;
                font-size: 14px;
              }
            }
            p:nth-of-type(5){
              display: flex;
              align-items: center;
              font-size: 12px;
              height: 30px;
              line-height: 30px;
            }
          }
        }
        .page{
          height: 44px;
          .el-pagination{
            text-align: center;
            margin-top: 10px;
          }
        }
      }
    }
    .asiderig{
      width: 328px;
      height: 376px;
      background: #fff;
      position: absolute;
      top: 50px;
      right: 54px;
      h6{
        background: #e6e6e6;
        color: #495060;
        font-weight: normal;
        font-size: 14px;
        height: 36px;
        line-height: 36px;
        text-indent: 16px;
      }
      .tic{
        display: flex;
        .ticketde{
          margin: 22px 0 0 14px;
          img{
            width: 98px;
            height: 134px;
          }
        }
        .txtrig{
          margin: 22px 0 0 20px;
          h5{
            font-size: 12px;
            font-weight: normal;
          }
          p:nth-of-type(1){
            overflow: hidden;
            width: 110px;
            margin-top: 46px;
            font-size: 12px;
            color: #ccc;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 20px;
            line-height: 20px;
          }
          p:nth-of-type(2){
            overflow: hidden;
            width: 110px;
            font-size: 12px;
            color: #ccc;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p:nth-of-type(3){
            font-size: 14px;
            color: #ccc;
            margin-top: 20px;
            span{
              color: #ff3c1b;
            }
          }
        }
      }
    }
  }
}
</style>
