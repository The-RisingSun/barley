<template>
  <div id="drama" style="background:#f5f5f5">
    <Headnav></Headnav>
    <Headsearch></Headsearch>
    <section class="banner">
      <Tabs></Tabs>
      <Banner></Banner>
    </section>
    <!--猜你喜欢-->
    <section class="like">
      <Title :title1="obj[0]"></Title>
      <div class="wrap">
        <a class="thumbnail" href="#" v-for="(item,index) in drama.like" :key="(item,index)">
          <div class="img-group">
            <img v-lazy=item.url alt="">
            <div class="hide">
              <p><i class="fa fa-map-marker"></i>小柯音乐剧 我变了，我没变</p>
              <p><i class="fa fa-clock-o fa-rotate-90"></i>{{item.now}}</p>
            </div>
          </div>
          <div class="caption">
            <p class="style">小柯音乐剧 我变了 我没变</p>
            <p>票价: <span>&yen;{{item.integer}}</span>起</p>
          </div>
        </a>
      </div>
    </section>
    <!--精彩聚集-->
    <section class="gather like">
      <Title :title1="obj[1]"></Title>
      <div class="gather-wrap">
        <div class="img-group">
          <img v-lazy=leftImg alt="" width="283" height="538">
          <div class="hide">
            <p>候化包物入面市业技处相县百离定三周在</p>
            <p>
              <span>700</span>元
            </p>
          </div>
        </div>
        <div class="cont-img">
          <div class="img-wrap" v-for="(item,index) in centerImg" :key="(item,index)">
            <img v-lazy=item alt="" width="185" height="264">
            <div class="hide">
              <div class="text">
                <p>小柯音乐剧《我变</p>
                <p>了，我没变》</p>
                <p>2018年1月8日</p>
                <p>11:56</p>
              </div>
              <button type="button">立即查看</button>
            </div>
          </div>
        </div>
        <div class="img-group">
          <img v-lazy=rightImg alt="" width="283" height="538">
          <div class="hide">
            <p>候化包物入面市业技处相县百离定三周在</p>
            <p>
              <span>700</span>元
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--三个小图片-->
    <section class="array">
      <img v-lazy=item alt="" v-for="(item,index) in pattern" :key="(item,index)">
    </section>
    <!--选项卡-->
    <section class="tab-wrap">
      <ul class="tab">
        <li @click="move1" :class="{ active: isActive }">
          音乐会专区
        </li>
        <li @click="move2" :class="{ active: !isActive }">
          舞蹈专区
        </li>
      </ul>
      <div class="cont-wrap">
        <div class="sports">
          <ul>
            <li v-for="(item, index) in concert" v-bind:key="(item, index)">
              <a href="#">
                <img v-lazy=item alt="" width="212" height="100">
              </a>
              <div class="tab-text">
                <h2>小柯音乐剧未来三部曲之《我<br>&nbsp; 变了，我没变》</h2>
                <p>2018.1.8-2018.1.9</p>
                <p>深圳市少年宫剧场</p>
                <p>
                  &yen; 120起
                </p>
              </div>
            </li>
          </ul>
          <ul>
            <li v-for="(item,index) in dancing" v-bind:key="(item, index)">
              <a href="#">
                <img v-lazy=item alt="" width="212" height="100">
              </a>
              <div class="tab-text">
                <h2>小柯音乐剧未来三部曲之《我<br>&nbsp; 变了，我没变》</h2>
                <p>2018.1.8-2018.1.9</p>
                <p>深圳市少年宫剧场</p>
                <p>
                  &yen; 120起
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!--排行-->
    <section class="rank like">
      <Title :title1="obj[2]"></Title>
      <div class="rank-wrap gather-wrap">
        <div class="img-group">
          <img v-lazy=bigUrl alt="" width="201" height="316">
          <div class="hide">
            <p>小柯音乐剧《我变了，我没变》</p>
            <p class="timi">2018.1.8</p>
          </div>
        </div>
        <div class="cont-img">
          <div class="img-wrap" v-for="(item,index) in smallUrl" :key="(item,index)">
            <img v-lazy=item alt="" width="112" height="150">
            <div class="konan">
              <h2>小柯音乐剧《我变了，我没<br>&nbsp; 变》</h2>
              <p>2018.1.8-2018.1.9</p>
              <p>深圳市少年宫剧场</p>
              <p>
                &yen; 120起
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--日历-->
    <section class="daily">
      <fullcalendar></fullcalendar>
    </section>
    <section class="cooperation like">
      <Title :title1="obj[3]"></Title>
      <div class="institute">
        <div class="first-group">
          <img v-lazy="item" v-for="(item,index) in manyImg" :key="(item,index)">
        </div>
        <div class="second-group">
          <img v-lazy="item" v-for="(item,index) in muchImg" :key="(item,index)">
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Tabs from './Tabs'
import Banner from './Banner'
import Title from './Title'
import BigImg from './BigImg'
import fullcalendar from 'vue-fullcalendar'
import Headnav from '../ljd/Headnav'
import Headsearch from '../ljd/Headsearch'
import Footer from '../ljd/Footer'
import $ from 'jquery'
let obj = ['猜你喜欢', '精彩聚集', '热门排行', '合作方']
let manyImg = ['../../../static/xxy-img/hz3.png', '../../../static/xxy-img/hz2.png',
  '../../../static/xxy-img/hz4.png', '../../../static/xxy-img/hz5.png',
  '../../../static/xxy-img/hz6.png', '../../../static/xxy-img/hz7.png']
let muchImg = [
  '../../../static/xxy-img/hz1.png', '../../../static/xxy-img/hz8.png',
  '../../../static/xxy-img/hz9.png', '../../../static/xxy-img/hz10.png',
  '../../../static/xxy-img/hz11.png', '../../../static/xxy-img/hz12.png'
]
export default {
  name: 'Drama',
  components: {
    Banner, Tabs, Title, BigImg, fullcalendar, Headnav, Headsearch, Footer
  },
  data () {
    return {
      show: false,
      drama: '',
      obj,
      leftImg: '',
      centerImg: '',
      rightImg: '',
      pattern: '',
      isActive: true,
      concert: '',
      dancing: '',
      bigUrl: '',
      smallUrl: '',
      manyImg,
      muchImg
    }
  },
  created () {
    this.$http.get(this.$url + '/drama').then((res) => {
      this.drama = res.data
      this.gather = this.drama.assemble
      this.pattern = this.drama.imgGroup
      this.leftImg = this.gather[0].leftUrl
      this.centerImg = this.gather[1].centerUrl
      this.rightImg = this.gather[2].rightUrl
      this.concert = this.drama.concert
      this.dancing = this.drama.dancing[0].image
      this.bigUrl = this.drama.rank[0].bigUrl
      this.smallUrl = this.drama.rank[0].smallUrl
      console.log(this.dancing)
    }).catch((error) => {
      console.log('错误信息', error)
    })
  },
  methods: {
    move1 () {
      const leftMove = $('.sports')
      console.log(leftMove)
      if (this.show === true) {
        if (!leftMove.is(':animated')) {
          leftMove.animate({}, function () {
            leftMove.css({'left': '0'})
          })
          this.show = false
          this.isActive = true
        }
      }
    },
    move2 () {
      const leftMove = $('.sports')
      if (this.show === false) {
        if (!leftMove.is(':animated')) {
          leftMove.animate({}, function () {
            leftMove.css({'left': '-1200px'})
          })
          this.show = true
          this.isActive = false
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/assets/less/public.less";
 /* public */
  .banner {
    margin-bottom: 22px;
  }
 /* content */
 .like{
   width: 1200px;
   height: 344px;
   margin: 0 auto 20px;
   background: #fff;
  .wrap{
    .thumbnail{
      width: 142px;
      height: 193px;
      margin-right: 67px;
      &:first-of-type {
        margin-left: 6px;
      }
      &:last-of-type{
        margin-right: 0;
      }
      img{
          width: 100%;
        }
      }
    }
 }
 /* 精彩聚集 */
.gather {
  cursor: pointer;
  width: 1200px;
  height: 630px;
  }
  .gather-wrap {
    .img-group {
      float: left;
      width: 283px;
      height: 538px;
      &:first-of-type {
        margin-left: 5px;
      }

      &:last-of-type {
        margin-right: 5px;
      }
    }

    .cont-img {
      width: 575px;
      float: left;
      height: 538px;
      margin: 0 24px;

      .img-wrap {
        float: left;
        width: 185px;
        height: 265px;
        position: relative;

        &:first-child, &:nth-child(2), &:nth-child(4), &:nth-child(5) {
          margin: 0 10px 10px 0;
        }

        &:nth-child(3), &:nth-child(6) {
          margin-bottom: 10px;
        }

        &:hover .hide{
          display: block;
        }

        .hide {
          width: 100%;
          height: 100%;
          padding: 10px;
          box-sizing: border-box;
          color: #fff;
          background-color: rgba(202, 61, 34, .9);
          position: absolute;
          left: 0;
          bottom: 0;
          display:none;
          text-align: center;
          .text {
            width: 118px;
            font-size: 14px;
            border: 1px solid rgba(232, 226, 227, .9);
            margin: 50px auto 0;
            p {
              padding: 4px 0;
            }
          }

          button[type="button"] {
            color: #fff;
            width: 120px;
            height: 24px;
            border: 1px solid rgba(232, 226, 227, .9);
            border-top-width: 2px;
            border-bottom-width: 2px;
            margin: 2px auto 0;
            font-size: 13px;
            line-height: 21px;
            padding-bottom: 3px;
            background: none;
          }
        };
      }
    }
  }
  // three imgs
  .array{
    margin: 0 auto 24px;
    width:1200px;
    overflow: hidden;
    img{
      margin-right: 25px;
      float: left;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  // tabs
  .tab-wrap{
    width: 1200px;
    height: 273px;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 20px;
    .tab{
      float: left;
      width: 193px;
      height: 32px;
      li{
        cursor: pointer;
        background: #fff;
        float: left;
        border: 1px solid #dddee1;
        font-size: 13px;
        padding: 10px 15px;
        &.active{
          color: red;
          border-bottom: none;
          border-top: 2px solid red;
        }
      }
    };
    .cont-wrap{
      float: left;
      width: 100%;
      background: #fff;
      .sports{
        width: 2400px;
        height: 210px;
        margin: 20px 0px 10px 6px;
        background: #fff;
        position: relative;
        left:0;
        transition: left .5s linear;
        ul{
          float: left;
          width: 1197px;
          height: 100%;
          li{
            float:left;
            width: 376px;
            height: 100px;
            background: #fff;
            margin:0px 22px 10px 0;
            a{
              float: left;
              width: 212px;
              height: 100px;
              img{
                width: 212px;
                height: 100px;
              }
            }
            .tab-text{
              width: 164px;
              text-indent: 8px;
              height: 100px;
              float: left;
              h2,p{
                font-size: 12px;
              }
              h2{
                padding: 4px 0;
              }
              p:first-of-type{
                height: 28px;
                line-height: 28px;
              }
              p:last-of-type{
                margin-top: 4px;
              }
            }
          }
        }
      }
    }
  }
  // rank
  .rank {
    height: 410px;
    .rank-wrap{
      height: 330px;
      .img-group{
        width: 200px;
        height: 316px;
        cursor: pointer;
        margin-bottom: 16px;
        .hide{
          p{
            font-size: 12px;
            text-align: center;
            &.timi{
              width: auto;
            }
          }
        }
      }
      .cont-img{
        width: 886px;
        height: 316px;
        .img-wrap{
          width: 264px;
          height: 150px;
          margin: 0 31px 16px 0;
          img{
            float: left;
          }
            .konan{
              float: left;
              text-indent: 8px;
              width: 152px;
              height: 100%;
              h2,p{
                font-size: 12px;
              }
              h2{
                padding: 3px 0;
              }
              p:first-of-type{
                height: 37px;
                line-height: 37px;
                margin-top: 33px;
              }
              p:last-of-type{
                margin-top: 14px;
              }
            };
          }
        };
      }
    }
  //calendar
  .daily{
    width: 1200px;
    margin: 0 auto 20px;
    /deep/ .comp-full-calendar{
      max-width: none;
      margin-bottom: 20px;
      width: 1200px;
      padding:20px 0px;
      background:#eaeaea url('../../../static/xxy-img/calendarTitle.png') no-repeat;
      background-size: 1200px 150px;
      /deep/ .full-calendar-header{
        width: 100%;
        height: 120px;
        color: #ffffff;
        font-weight: 900;
        font-size: 24px;
        transform: translateY(-40px);
        .title,
        .next-month,
        .prev-month {
          font-weight: normal;
          color:#fff;
          line-height: 200px;
          cursor: pointer;
        }
        .title{
          display: inline-block;
          width: 200px;
        }
      }
    }
  }
  // cooperation
  .cooperation{
    height: 260px;
    margin-bottom: 20px;
    .institute{
      width: 968px;
      height: 177px;
      margin:0 auto;
      .first-group{
        width: 100%;
        margin-bottom: 30px;
        height: 52px;
        img {
          float: left;
          &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5)
          {
            margin-right: 62px;
          }
          &:nth-of-type(1) {
            margin: 0 30px 0px 0;
          }
        }
       };
        .second-group{
          width: 100%;
          height: 82px;
          img{
            width: 82px;
            height: 82px;
            float: left;
            &:first-of-type{
              width: 150px;
              height: 55px;
              margin: 14px 42px 0 0;
            };
            &:not(first-of-type){
              margin-right: 81px;
            };
            &:nth-of-type(2){
              margin-right:86px;
            }
            &:nth-of-type(5){
              margin-left:15px
            }
            &:last-of-type{
              margin-right: 0;
            }
          }
        }
      }
    }
</style>
