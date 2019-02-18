<template>
  <div id="detail">
    <Headnav></Headnav>
    <Headsearch></Headsearch>
    <div class="navclass">
      <a href="#">大麦</a> >
      <a href="#">北京</a> >
      <a class="active" href="#">电影</a> >
      <a href="#">大型多媒体励志互动儿童剧《奇门遁甲》(11月)</a>
    </div>
    <div class="main">
      <div class="choosebuy">
        <div class="pic">
          <img src="/static/img/detail.jpg" alt="">
        </div>
        <div class="choose">
          <h6>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</h6>
          <p>"奇门遁甲"</p>
          <div class="course">
            <span><i class="fa fa-check"></i></span>
            <span>项目待定</span>
            <span>&nbsp;——&nbsp;</span>
            <span><i class="fa fa-check"></i></span>
            <span>预售/预定</span>
            <span>&nbsp;——&nbsp;</span>
            <span><i>3</i></span>
            <span>售票中</span>
            <span>&nbsp;——&nbsp;</span>
            <span><i>4</i></span>
            <span>演出开始</span>
          </div>
          <div class="choosetime">
            <p>演出时间 :</p>
            <ul>
              <li
                @click="change(index)"
                v-for="(item, index) in items"
                :key="index"
                :class="{'active1': index === thisIndex}"
              >{{item.list}}</li>
            </ul>
          </div>
          <div class="chooseprice">
            <p>选择票价 :</p>
            <ul>
              <li
                class="active2"
                v-for="(item, index) in priceList"
                :key="index"
              >{{item.price}}元</li>
            </ul>
          </div>
          <div class="chooseseat">
            <button>选座购买</button>
          </div>
        </div>
        <div class="score">
          <h5>大麦网评分:</h5>
          <div class="starscore">
            <el-rate
              style="display: inline-block"
              v-model="value5"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
            <span><i>3000</i>人参与评论</span>
          </div>
          <div class="txt">
            <p>演出时间</p>
            <p>2017-12-23-2017-12-26</p>
          </div>
          <div class="txt">
            <p>演出场馆</p>
            <p>中国儿童中心剧院-海淀</p>
            <p><img src="/static/img/listlogo1.jpg" alt="">交通路线</p>
          </div>
          <div class="txt">
            <p>票品支持</p>
            <p><span>$</span>&nbsp;返积分</p>
          </div>
          <div class="txt">
            <p>实票配送</p>
            <p>同城满100.00元免运费,不满收10.00元,发货后1-3天到达</p>
          </div>
        </div>
      </div>
      <div class="detailleft">
        <ul class="tabnav">
          <li
            @click="tabchange(index)"
            :class="[index == activeOk ? 'active3': '']"
            v-for="(item, index) in items2"
            :key="index">{{item.list2}}</li>
        </ul>
        <div class="tabDiv" v-if="activeOk == 0">
          <div class="tit">
            <h3>基本信息</h3>
            <span></span>
          </div>
          <div class="table">
            <ul>
              <li>演出时间</li>
              <li>2018.01.06-01.14</li>
              <li>演出场馆</li>
              <li>光华路大大大</li>
            </ul>
            <ul>
              <li>演出时间</li>
              <li>2018.01.06-01.14</li>
              <li>演出场馆</li>
              <li>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
              </li>
            </ul>
          </div>
          <div class="textgroup">
            <h3>英文站入口</h3>
            <p>英文站购买地址 : https://en.dami.com</p>
            <h3>演出介绍</h3>
            <p>世界大萨达撒多</p>
            <p>阿斯德大萨达</p>
            <p>大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家</p>
            <div  class="img">
              <img src="/static/img/detail.jpg" alt="">
            </div>
            <p>世界大萨达撒多世界大萨达撒多</p>
            <p>世界大萨达撒多世界大萨达撒多</p>
            <p>世界大萨达撒多世界大萨达撒多</p>
          </div>
          <div class="tit">
            <h3>写剧评</h3>
            <span></span>
          </div>
          <div class="chosscore">
            <p>打个分吧: <el-rate style="display: inline-block" v-model="score"></el-rate></p>
            <textarea v-model="scoreText"></textarea>
            <button @click="scoreClick()">评价</button>
          </div>
          <div class="commentlist" v-if="scoreList.length <= 0">
            暂无评价…………
          </div>
          <div class="commentlist" v-else
               v-for="(item, index) in scoreList"
               :key="index"
          >
            <div class="user">
              <img src="/static/img/detail.jpg" alt="">
              12
            </div>
            <div class="comment">
              <p>{{item.scoreText}}</p>
              <p>评分：<el-rate
                style="display: inline-block"
                v-model="item.score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate> 分 &nbsp;&nbsp; 评论时间：<span>{{item.nowTime}}</span></p>
            </div>
          </div>
        </div>
        <div class="tabDiv" v-if="activeOk == 1">
          <div class="tit">
            <h3>写剧评</h3>
            <span></span>
          </div>
          <div class="chosscore">
            <p>打个分吧: <el-rate style="display: inline-block" v-model="score"></el-rate></p>
            <textarea v-model="scoreText"></textarea>
            <button @click="scoreClick()">评价</button>
          </div>
          <div class="commentlist" v-if="scoreList.length <= 0">
            暂无评价…………
          </div>
          <div class="commentlist" v-else
               v-for="(item, index) in scoreList"
               :key="index"
          >
            <div class="user">
              <img src="/static/img/detail.jpg" alt="">
              12
            </div>
            <div class="comment">
              <p>{{item.scoreText}}</p>
              <p>评分：<el-rate
                style="display: inline-block"
                v-model="item.score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate> 分 &nbsp;&nbsp; 评论时间：<span>{{item.nowTime}}</span></p>
            </div>
          </div>
          <div class="tit">
            <h3>基本信息</h3>
            <span></span>
          </div>
          <div class="table">
            <ul>
              <li>演出时间</li>
              <li>2018.01.06-01.14</li>
              <li>演出场馆</li>
              <li>光华路大大大</li>
            </ul>
            <ul>
              <li>演出时间</li>
              <li>2018.01.06-01.14</li>
              <li>演出场馆</li>
              <li>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="tabDiv" v-if="activeOk == 2">
          <div class="tit">
            <h3>项目介绍</h3>
            <span></span>
          </div>
          <div class="textgroup">
            <h3>英文站入口</h3>
            <p>英文站购买地址 : https://en.dami.com</p>
            <h3>演出介绍</h3>
            <p>世界大萨达撒多</p>
            <p>阿斯德大萨达</p>
            <p>大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家大神大神解答时间冻结阿萨德会撒谎的三大合适的话撒谎的委屈回家可委屈额外加强客户家</p>
            <div  class="img">
              <img src="/static/img/detail.jpg" alt="">
            </div>
            <p>世界大萨达撒多世界大萨达撒多</p>
            <p>世界大萨达撒多世界大萨达撒多</p>
            <p>世界大萨达撒多世界大萨达撒多</p>
          </div>
        </div>
        <div class="tabDiv" v-if="activeOk == 3">
          <div class="tit">
            <h3>基本信息</h3>
            <span></span>
          </div>
          <div class="table">
            <ul>
              <li>演出时间</li>
              <li>2018.01.06-01.14</li>
              <li>演出场馆</li>
              <li>光华路大大大</li>
            </ul>
            <ul>
              <li>演出时间</li>
              <li>2018.01.06-01.14</li>
              <li>演出场馆</li>
              <li>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
                <p>光华路大大大</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="activeOk !== 1 || 2 || 3" class="detailright">
        <h3>热门推荐</h3>
        <img src="/static/img/detail.jpg" alt="">
        <p class="ti">大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <div class="txt1">
          <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
          <p>2017年12月31日</p>
        </div>
        <div class="txt1">
          <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
          <p>2017年12月31日</p>
        </div>
        <div class="txt1">
          <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
          <p>2017年12月31日</p>
        </div>
        <div class="txt1">
          <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
          <p>2017年12月31日</p>
        </div>
        <div class="txt1">
          <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
          <p>2017年12月31日</p>
        </div>
      </div>
      <div v-if="activeOk !== 1 || 2 || 3" class="detailrigbottom">
        <h3>浏览历史</h3>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
        <p>大型多媒体励志互动儿童剧《奇门遁甲》(11月)</p>
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
  name: 'Detail',
  components: {
    Headnav, Headsearch, Footer
  },
  data () {
    return {
      priceList: [
        {price: 80}
      ],
      price: 80, // 选择票价
      activeOk: 0,
      scoreList: [],
      nowTime: '',
      score: '',
      scoreText: '',
      value5: 4.6,
      thisIndex: 0,
      items: [
        {list: '1999-11-09 09:44:55'},
        {list: '1999-11-09 09:44:55'},
        {list: '1999-11-09 09:44:55'},
        {list: '1999-11-09 09:44:55'}
      ],
      items1: [
        {price: '80元'}
      ],
      items2: [
        {list2: '演出信息'},
        {list2: '精彩剧评'},
        {list2: '购买说明'},
        {list2: '付款方式'}
      ]
    }
  },
  methods: {
    tabchange (index) {
      this.activeOk = index
    },
    change (self) {
      this.thisIndex = self
      if (self === 0) {
        this.priceList = [
          {price: 80}
        ]
      } else if (self === 1) {
        this.priceList = [
          {price: 80},
          {price: 180},
          {price: 280}
        ]
      } else if (self === 2) {
        this.priceList = [
          {price: 30},
          {price: 140},
          {price: 70}
        ]
      } else if (self === 3) {
        this.priceList = [
          {price: 480},
          {price: 680},
          {price: 880}
        ]
      }
    },
    scoreClick () {
      if (this.score === '' || this.scoreText === '') {
        alert(`请打分，并写上您的评价内容哦！~`)
      } else {
        let myData = new Date()
        let y = myData.getFullYear()
        let m = myData.getMonth() + 1
        let d = myData.getDate()
        let h = myData.getHours()
        let mm = myData.getMinutes()
        let s = myData.getSeconds()
        if (d < 10 || s < 10) {
          this.nowTime = y + '/ ' + m + '/' + d + '  ' + h + ': ' + '0' + mm + ':' + '0' + s
        } else {
          this.nowTime = y + '/ ' + m + '/' + d + '  ' + h + ': ' + mm + ':' + s
        }
        let newArrar = [
          {
            score: this.score,
            scoreText: this.scoreText,
            nowTime: this.nowTime
          }
        ]
        /*
        *   1。ES6 拓展运算符 第一种
        * */
        this.scoreList = [...newArrar, ...this.scoreList]
        /*
        * 2。查找原型来unshift数组 这是ES5 第二种
        * */
        // Array.prototype.unshift.apply(this.scoreList, newArrar)
        /*
        * 3。这种相对来说最麻烦 还得需要二维数组-> 一维数组   第3种
        * */
        // this.scoreList.unshift(newArrar)
        // var arr2 = this.scoreList.reduce(function (a, b) { return a.concat(b) })
        // this.scoreList = arr2
        // 还有啥上面那个选项卡设计图没给我 所以复制几个内容就行了看得懂不 哈哈
        // 就是 点刚才那个Tab 还要切换下 下面的 内容是的 就多复制几个不一样的就行 有效果就行
        this.score = ''
        this.scoreText = ''
        this.nowTime = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
  #detail{
    .navclass{
      padding: 10px 0 16px 94px;
      color: #ccc;
      background: #f6f6f6;
      a{
        font-size: 12px;
        color: #495060;
      }
      a.active{
        color: #ff3c1b;
      }
    }
    .main{
      position: relative;
      padding: 0 54px 0 74px;
      background: #f5f5f5;
      .choosebuy{
        background: #fff;
        display: flex;
        padding: 32px 0 0 24px;
        .pic{
          padding-bottom: 52px;
          img{
            width: 277px;
            height: 372px;
          }
        }
        .choose{
          width: 720px;
          margin-left: 20px;
          h6{
            font-size: 20px;
            font-weight: normal;
          }
          p{
            font-size: 12px;
            margin-top: 38px;
          }
          .course{
            width: 720px;
            height: 85px;
            background: #f7f7f7;
            margin-top: 24px;
            display: flex;
            align-items: center;
            span:nth-of-type(1){
              width: 26px;
              height: 26px;
              line-height: 26px;
              text-align: center;
              border: 1px solid #ff3c1b;
              border-radius: 13px;
              margin-left: 30px;
              i{
                color: #ff3c1b;
              }
            }
            span:nth-of-type(4){
              width: 26px;
              height: 26px;
              line-height: 26px;
              text-align: center;
              border: 1px solid #ff3c1b;
              border-radius: 13px;
              i{
                color: #ff3c1b;
              }
            }
            span:nth-of-type(7){
              width: 26px;
              height: 26px;
              line-height: 26px;
              text-align: center;
              border-radius: 13px;
              background: #ff3c1b;
              i{
                color: #fff;
                font-style: normal;
              }
            }
            span:nth-of-type(10){
              width: 26px;
              height: 26px;
              line-height: 26px;
              text-align: center;
              border: 1px solid #ccc;
              background: #fff;
              border-radius: 13px;
              i{
                color: #ccc;
                font-style: normal;
              }
            }
            span:nth-of-type(2){
              font-size: 12px;
              margin-left: 10px;
              color: #ccc;
            }
            span:nth-of-type(3){
              color: #ff3c1b;
            }
            span:nth-of-type(5){
              color: #ccc;
              margin-left: 10px;
              font-size: 12px;
            }
            span:nth-of-type(6){
              margin-left: 10px;
              color: #ff3c1b;
            }
            span:nth-of-type(8){
              color: #666;
              margin-left: 6px;
              font-size: 12px;
            }
            span:nth-of-type(9){
              color: #ccc;
            }
            span:nth-of-type(11){
              color: #999;
              margin-left: 6px;
              font-size: 12px;
            }
          }
          .choosetime{
            display: flex;
            p{
              margin: 44px 10px 0 0;
              height: 30px;
              line-height: 30px;
            }
            ul{
              display: flex;
              flex-wrap: wrap;
              width: 470px;
              margin-top: 26px;
              li{
                width: 146px;
                height: 30px;
                margin-right: 8px;
                margin-bottom: 6px;
                line-height: 30px;
                text-align: center;
                border: 1px solid #ccc;
                border-radius: 2px;
                font-size: 9px;
                cursor: pointer;
              }
              li.active1{
                border: 1px solid #ff3c1b;
                color: #ff3c1b;
              }
            }
          }
          .chooseprice{
            display: flex;
            p{
              height: 32px;
              line-height: 24px;
            }
            ul{
              display: flex;
              margin-top: 32px;
              margin-left: 10px;
              li{
                width: 62px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                font-size: 12px;
                margin-right: 8px;
                border: 1px solid #ccc;
                border-radius: 3px;
              }
              li.active2{
                background: #f7f7f7;
                color: #ccc;
              }
            }
          }
          .chooseseat{
            margin: 24px 62px;
            button{
              width: 150px;
              height: 40px;
              border-radius: 4px;
              background: #ff3c1b;
              color: #fff;
              border: none;
            }
          }
        }
        .score{
          margin-left: 30px;
          h5{
            font-weight: normal;
          }
          .starscore{
            margin-top: 20px;
            height: 38px;
            border-bottom: 1px dashed #ccc;

            span{
              font-size: 14px;
              i{
                color: #ff3c1b;
                font-style: normal;
              }
            }
          }
          .txt{
            border-bottom: 1px dashed #ccc;
            p{
              font-size: 12px;
              height: 40px;
              line-height: 40px;
              display: flex;
              align-items: center;
              span{
                color: #ff3c1b;
                font-weight: 700;
              }
            }
          }
        }
      }
      .detailleft{
        width: 1022px;
        padding-left: 21px;
        padding-bottom: 40px;
        margin-top: 30px;
        background: #fff;
        .tabnav{
          margin-left: -21px;
          display: flex;
          li.active3{
            border-top: 2px solid #ff3c1b;
            color: #ff3c1b;
          }
          li{
            width: 88px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            font-size: 12px;
            cursor: pointer;
          }
        }
        .tit{
          height: 32px;
          display: flex;
          h3{
            width: 96px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            border-left: 2px solid #ff3c1b;
            font-size: 20px;
            font-weight: normal;
          }
          span{
            width: 903px;
            margin-left: 20px;
            display: inline-block;
            height: 20px;
            border-bottom: 1px dashed #ccc;
          }
        }
        .table{
          padding: 24px 0 34px 102px;
          ul{
            display: flex;
            li{
              font-size: 12px;
            }
          }
          ul:nth-of-type(1){
            width: 740px;
            height: 50px;
            line-height: 50px;
            li{
              border: 1px solid #ccc;
            }
            li:nth-of-type(1){
              background: #eee;
              width: 110px;
              height: 50px;
              line-height: 50px;
              text-align: center;
            }
            li:nth-of-type(2){
              width: 262px;
              text-align: center;
            }
            li:nth-of-type(3){
              background: #eee;
              width: 110px;
              height: 50px;
              line-height: 50px;
              text-align: center;
            }
            li:nth-of-type(4){
              width: 262px;
              text-align: center;
            }
          }
          ul:nth-of-type(2){
            width: 740px;
            height: 175px;
            li{
              border: 1px solid #ccc;
            }
            li:nth-of-type(1){
              background: #eee;
              width: 110px;
              line-height: 50px;
              text-align: center;
            }
            li:nth-of-type(2){
              width: 262px;
              line-height: 50px;
              text-align: center;
            }
            li:nth-of-type(3){
              background: #eee;
              width: 110px;
              line-height: 50px;
              text-align: center;
            }
            li:nth-of-type(4){
              width: 262px;
              text-align: center;
              p:nth-of-type(1){
                margin-top: 20px;
              }
            }
          }
        }
        .textgroup{
          padding: 30px 0 54px 102px;
          h3{
            height: 40px;
            line-height: 40px;
            background: #eee;
            font-weight: normal;
            font-size: 18px;
            text-indent: 10px;
          }
          p:nth-of-type(1){
            height: 75px;
            line-height: 75px;
            font-size: 12px;
          }
          p:nth-of-type(2){
            margin-top: 30px;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
          }
          p:nth-of-type(3){
            font-size: 12px;
            height: 20px;
            line-height: 20px;
          }
          p:nth-of-type(4){
            font-size: 12px;
            height: 100px;
            line-height: 20px;
          }
          .img{
            text-align: center;
            img{
              margin-left: 30%;
            }
          }
          p:nth-of-type(5) {
            margin-top: 20px;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
          }
          p:nth-of-type(6){
            font-size: 12px;
            height: 20px;
            line-height: 20px;
          }
          p:nth-of-type(7){
            font-size: 12px;
            height: 20px;
            line-height: 20px;
          }
        }
        .chosscore{
          padding: 36px 0 0 102px;
          p{
            font-size: 12px;
            span{
              color: #ff3c1b;
            }
          }
          textarea{
            width: 740px;
            height: 94px;
            margin-top: 10px;
            border-radius: 4px;
          }
          button{
            display: block;
            width: 150px;
            height: 42px;
            margin: 20px;
            border: none;
            border-radius: 4px;
            background: #ff3c1b;
            font-size: 12px;
            color: #fff;
          }
        }
        .commentlist{
          display: flex;
          margin-bottom: 36px;
          .user{
            width: 45px;
            text-align: center;
            img{
              width: 45px;
              height: 45px;
            }
          }
          .comment{
            margin-left: 52px;
            width: 740px;
            height: 86px;
            background: #f0f0f0;
            p{
              margin-left: 30px;
              font-size: 12px;
            }
            p:nth-of-type(1){
              height: 56px;
              line-height: 56px;
            }
          }
        }
      }
      .detailright{
        position: absolute;
        background: #fff;
        top: 512px;
        right: 54px;
        padding: 0 6px 36px 6px;
        h3{
          font-weight: normal;
          border-bottom: 1px solid #ccc;
          font-size: 18px;
          height: 32px;
          line-height: 32px;
        }
        img{
          width: 284px;
          height: 356px;
          margin: 30px auto;
        }
        .ti{
          height: 40px;
        }
        .txt1{
          border-bottom: 1px solid #ccc;
          padding: 10px 0;
          p{
            font-size: 12px;
            height: 20px;
            line-height: 20px;
          }
        }
      }
      .detailrigbottom{
        position: absolute;
        background: #fff;
        padding: 0 6px 36px 6px;
        width: 332px;
        top: 1362px;
        right: 54px;
        h3{
          font-weight: normal;
          border-bottom: 1px solid #ccc;
          font-size: 18px;
          height: 32px;
          line-height: 32px;
        }
        p{
          font-size: 12px;
          height: 60px;
          line-height: 50px;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
</style>
