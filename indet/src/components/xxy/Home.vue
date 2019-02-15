<template>
  <div id="home" style="background-color: #f5f5f5">
    <!--header start-->
    <Headnav></Headnav>
    <Headsearch></Headsearch>
    <!--header end-->
    <!--banner开始-->
    <el-container id="menu">
      <el-header height="50" style="line-height: 50px" id="header">
        <h2>全部商品分类</h2>
        <ul id="tab">
          <router-link to="/drama" tag="li">戏剧</router-link>
          <router-link to="/sports" tag="li">体育</router-link>
          <router-link to="/children" tag="li">亲子</router-link>
          <router-link to="/dance" tag="li">舞蹈古典</router-link>
          <router-link to="/rock" tag="li">摇滚</router-link>
        </ul>
      </el-header>
      <el-aside width="200px" style="background-color: rgb(255, 60, 27)" id="aside">
        <el-menu class="item" @mouseenter.native="changed(index)" v-for="(item,index) in obj"
                 :key="(item,index)">
          {{item}}
          <i class="fa fa-angle-right"></i>
        </el-menu>
      </el-aside><!--左侧栏内容-->
      <!--子菜单-->
      <el-main id="subMenu" class="sub-menu" v-show="true">
        <Banner></Banner>
      </el-main>
      <section id="hover" v-show="off">
        <div class="hover-wrap">
          <div class="head">
            <div class="head-wrap">
              <button>{{msg.btn}}</button> <!--axios-->
              <span>&gt;</span>
              <ul id="title">
                <li v-for="(item,index) in msg.sub" :key="(item,index)"> <!--axios-->
                  <a href="#">{{item}}</a>
                </li>
              </ul>
              <i class="fa fa-remove" @click="close()"></i>
            </div>
            <h2 class="hot">相关热门</h2>
            <div class="wrap">
              <a class="thumbnail" href="#" v-for="(item,index) in msg.url" :key="(item,index)">
                <div class="img-group">
                  <img :src=item alt="">
                  <div class="hide">
                    <p><i class="fa fa-map-marker"></i>{{msg.csentence[index]}}</p>
                    <p><i class="fa fa-clock-o fa-rotate-90"></i>2017.12.03 19:30</p>
                  </div>
                </div>
                <div class="caption">
                  <p class="style">{{msg.csentence[index]}}</p>
                  <p>票价:<span>&yen;{{msg.integer[index]}}</span></p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </el-container>
    <!--banner结束-->
    <!--tab开始-->
    <el-tabs v-model="activeName" @tab-click="handleClick" id="tabs">
      <el-tab-pane label="今日推荐" name="first" class="head">
        <el-row class="row">
          <el-col :span="3" v-for="(item, index) in tabs" :key="(item, index)" :offset="index > 0 ? 1 : 0" width="150"
                  class="wrap"
          >
            <a class="thumbnail" href="#">
              <div class="img-group">
                <img v-lazy=item.image class="image" width="150" height="191">
                <div class="hide">
                  <p><i class="fa fa-map-marker"></i>{{item.csentence}}</p>
                  <p><i class="fa fa-clock-o fa-rotate-90"></i>2017.12.03 19:30</p>
                </div>
              </div>
              <div class="caption">
                <p class="style">{{item.csentence}}</p>
                <p>票价:<span>&yen;{{item.integer}}</span></p>
              </div>
            </a>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="即将开售" name="second" class="head">
        <el-row class="row">
          <el-col :span="3" v-for="(item, index) in tabs2" :key="(item, index)" :offset="index > 0 ? 1 : 0" width="150"
                  class="wrap"
          >
            <a class="thumbnail" href="#">
              <div class="img-group">
                <img v-lazy=item.image class="image" width="150" height="191">
                <div class="hide">
                  <p><i class="fa fa-map-marker"></i>{{item.csentence}}</p>
                  <p><i class="fa fa-clock-o fa-rotate-90"></i>2017.12.03 19:30</p>
                </div>
              </div>
              <div class="caption">
                <p class="style">{{item.csentence}}</p>
                <p>票价:<span>&yen;{{item.integer}}</span></p>
              </div>
            </a>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <!--tab结束-->
    <!--主内容开始-->
    <section class="content">
      <div class="left-wrap">
        <div class="floor" v-for="(item,index) in botData" :key="(item,index)">
          <h2>
            <span>{{item.floor}}</span>
            {{item.title}}
          </h2>
          <div class="img-group">
            <img v-lazy=item.bigImg alt="">
            <div class="hide">
              <p>{{item.csentence[0]}}</p>
              <p>
                <span>{{item.integer[0]}}</span>元
              </p>
            </div>
          </div>
          <div class="floor-cont">
            <div class="img-wrap">
              <img v-lazy=item.url[0] alt="">
              <div class="hide">
                <p>
                  <i class="fa fa-map-marker"></i>
                  <span>{{item.csentence[1]}}</span>
                </p>
                <p>
                  <i class="fa fa-clock-o fa-rotate-90"></i>
                  <span>2017.12.03 19:30</span>
                </p>
              </div>
            </div>
            <h3>{{item.csentence[1]}}</h3>
            <ul>
              <li>
                <em>{{item.date[0]}}</em>-<em>{{item.date[1]}}</em>
              </li>
              <li>
                <p>
                  <b>{{item.province[0]}}</b> <strong>{{item.city[0]}}</strong>
                </p>
              </li>
              <li>
                &yen;<span>{{item.integer[1]}}</span>起
              </li>
            </ul>
          </div>
          <div class="floor-cont">
            <div class="img-wrap">
              <img v-lazy=item.url[1] alt="">
              <div class="hide">
                <p>
                  <i class="fa fa-map-marker"></i>
                  <span>{{item.csentence[2]}}</span>
                </p>
                <p>
                  <i class="fa fa-clock-o fa-rotate-90"></i>
                  <span>2017.12.03 19:30</span>
                </p>
              </div>
            </div>
            <h3>{{item.csentence[2]}}</h3>
            <ul>
              <li>
                <em>{{item.date[2]}}</em>-<em>{{item.date[3]}}</em>
              </li>
              <li>
                <p>
                  <b>{{item.province[1]}}</b> <strong>{{item.city[1]}}</strong>
                </p>
              </li>
              <li>
                &yen;<span>{{item.integer[2]}}</span>起
              </li>
            </ul>
          </div>
          <div class="floor-cont">
            <div class="img-wrap">
              <img v-lazy=item.url[2] alt="">
              <div class="hide">
                <p>
                  <i class="fa fa-map-marker"></i>
                  <span>{{item.csentence[3]}}</span>
                </p>
                <p>
                  <i class="fa fa-clock-o fa-rotate-90"></i>
                  <span>2017.12.03 19:30</span>
                </p>
              </div>
            </div>
            <h3>{{item.csentence[3]}}</h3>
            <ul>
              <li>
                <em>{{item.date[4]}}</em>-<em>{{item.date[5]}}</em>
              </li>
              <li>
                <p>
                  <b>{{item.province[2]}}</b> <strong>{{item.city[2]}}</strong>
                </p>
              </li>
              <li>
                &yen;<span>{{item.integer[3]}}</span>起
              </li>
            </ul>
          </div>
          <div class="floor-cont">
            <div class="img-wrap">
              <img v-lazy=item.url[3] alt="">
              <div class="hide">
                <p>
                  <i class="fa fa-map-marker"></i>
                  <span>{{item.csentence[4]}}</span>
                </p>
                <p>
                  <i class="fa fa-clock-o fa-rotate-90"></i>
                  <span>2017.12.03 19:30</span>
                </p>
              </div>
            </div>
            <h3>{{item.csentence[4]}}</h3>
            <ul>
              <li>
                <em>{{item.date[6]}}</em>-<em>{{item.date[7]}}</em>
              </li>
              <li>
                <p>
                  <b>{{item.province[3]}}</b> <strong>{{item.city[3]}}</strong>
                </p>
              </li>
              <li>
                &yen;<span>{{item.integer[4]}}</span>起
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-wrap">
        <div class="rank" v-for="(item,index) in rightData" :key="(item,index)">
          <a href="#">查看全部&gt;&gt;</a>
          <h4>热门演出排行</h4>
          <ul class="list">
            <li v-for="(item2,index2) in item.csentence" :key="(item2,index2)">
              <i class="square">{{index2+1}}</i>
              {{item2}}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!--主内容结束-->
    <aside id="back">
      <div class="item">
        <a class="alime" href="//online.damai.cn/alime/index?spm=a2oeg.home.slidelayer.dcustomerservice.591b23e1cV8DU2&amp;from=damai_pc_item&amp;v=3" target="_blank">
          <div class="icon service"></div>
          <p>在线客服</p>
        </a>
      </div>
      <div class="item" style="border-bottom-width: 1px;">
        <a href="javascript:void(0)" target="_blank" id="mouseover">
          <div class="icon damai"></div>
          <p>APP下载</p>
          <div class="qrcode">
            <img src="//img.alicdn.com/tfs/TB1r0uFxHSYBuNjSspiXXXNzpXa-280-280.png" width="72" height="72">
          </div>
        </a>
      </div>
      <div class="item" @click="back()" v-show="toggle">
        <div class="icon gotop"></div>
        <p>回到顶部</p>
      </div>
    </aside>
    <Footer></Footer>
  </div>
</template>
<script>
import Banner from './Banner'
import Card from './Card'
import Headnav from '../ljd/Headnav'
import Headsearch from '../ljd/Headsearch'
import Footer from '../ljd/Footer'
let obj = ['演唱会', '音乐会', '歌剧话剧', '曲苑杂坛', '体育比赛', '儿童亲子', '舞蹈芭蕾']
export default {
  name: 'Home',
  components: {
    Card,
    Banner,
    Headnav,
    Headsearch,
    Footer
  },
  data () {
    return {
      msg: '',
      obj,
      tabs: '',
      tabs2: '',
      botData: '',
      off: false,
      datax: '',
      activeName: 'second',
      currentDate: new Date(),
      rightData: '',
      toggle: false
    }
  },
  created () {
    this.$http.get(this.$url + '/home').then((res) => {
      this.datax = res.data.data
      this.botData = res.data.botData
      this.tabs = res.data.tabs
      this.tabs2 = res.data.tabs2
      this.rightData = res.data.rightData
      console.log(this.tabs)
    }).catch((error) => {
      console.log('错误信息', error)
    })
  },
  mounted () {
    const This = this
    window.onscroll = function () {
      if (document.documentElement.scrollTop === 0) {
        This.toggle = false
      } else if (document.documentElement.scrollTop >= 500) {
        This.toggle = true
      }
    }
  },
  methods: {
    // this.$store.commit('mouseover')
    changed (index) {
      this.msg = this.datax[index]
      console.log(this.msg)
      this.off = true
    },
    close () {
      this.off = false
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    back () {
      let timer = null
      timer = setInterval(function () {
        let top = document.documentElement.scrollTop || document.body.scrollTop
        if (document.documentElement.scrollTop === 0) {
          clearInterval(timer)
        }
        document.documentElement.scrollTop = top - 30
      }, 10)
    }
  }
}
</script>
<style scoped lang="less">
  /* public.less */
  b,strong,em,i{
    font-style: normal;
    font-weight: normal;
  }
  #hover {
    z-index: 600;
    margin-left: 200px;
    position: absolute;
    top: 50px;
    background-color:rgba(218,230,244,.9);
    width: 900px;
    height: 422px;
    .hover-wrap{
      width: 857px;
      height: 100%;
      margin:18px auto 41px;
      .head{
        width: 100%;
        height: 45px;
        border-bottom: 1px dashed #000;
        .head-wrap{
          margin-bottom: 18px;
          height: 27px;
          line-height: 27px;
          overflow: hidden;
          span{
            float: left;
            color:#808080;
            margin-left: 12px;
          }
          button{
            float: left;
            width: 72px;
            height:27px;
            border-radius: 9px;
            border:none;
            background: #fff;
          }
          .fa{
            float: right;
            cursor: pointer;
          }
          #title{
            float: left;
            li{
              float: left;
              a{
                width: 20px;
                height: 11px;
                padding:0px 16px 0px 19px ;
                border-right: 1px solid #000;
                font-size: 11px;
              }
            }
          }
        }
        h2{
          padding: 22px 0 24px;
          font-size: 17px;
          font-weight: normal;
          color: #737b84;
        }
      }
    }
  };
  .wrap {
    .thumbnail{
      display: inline-block;
      float: left;
      width: 146px;
      height: 300px;
      margin-right:30px;
      p{
        color:#495060;
        font-size: 12px !important;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 134px;
        span{
          color:#000;
        }
        &.style{
          height: 50px;
          line-height: 50px;
        }
      }
      &:last-of-type {
        margin: 0;
      }
      .img-group{
        width: 100%;
        position: relative;
        &:hover .hide{
          display: block;
        }
      }
      img{
        width:146px;
        height: 192px;
      }
    }
  };
  .hide{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
    background-color: rgba(202,61,34,.9);
    position: absolute;
    left: 0;
    bottom: 0;
    display: none;
    p{
      color:#fff !important;
      i{
        &.fa-map-marker{
          transform: translateX(1px);
          margin-right: 12px;
        }
        margin-right: 10px;
      }
    }
  }
  a{
    color:#000;
  }

  // start
  #menu {
    position: relative;
    width: 1200px;
    margin: 0 auto;
  }
  #tab{
    cursor:pointer;
    position: absolute;
    top: 0;
    left:204px;
  }
  #tab li {
    float: left;
  }
  #header{
    padding: 0;
  }
  #header h2{
    background:#000;
    width: 200px;
    font-size:13px;
    color: white;
    text-align: center;
  }
  #tab{
    width: 1000px;
    border: 1px solid #dcdcdc;
    height: 48px;
  }
  #tab li{
    font-size: 16px;
    padding: 0 30px;
    &:hover {
      color:red
    }
  }
  #aside{
    overflow:hidden;
    position: absolute;
    z-index: 200;
    margin-top: 50px;
    height: 422px;
  }
  #aside .item{
    font-size: 12px;
    color:#fff;
    width: 200px;
    border: none !important;
    padding: 15px 16px 15px 70px;
    box-sizing: border-box;
    background: #ff3c1b;
    cursor: pointer;
    position: relative;
    background-position:left 32px top 15px;
    .fa-angle-right {
      font-size: 10px;
      position: absolute;
      right: 0;
      margin-right: 16px;
      line-height: 17px;
      height: 17px;
    }
    &:hover {
      background-color: #de290a !important;
    }
    &:first-of-type{
      background: url(../../../static/xxy-img/icon/microphone.png) no-repeat left 32px top 15px;
    }
    &:nth-of-type(2){
      background: url(../../../static/xxy-img/icon/concert.png) no-repeat left 32px top 15px;
    }
    &:nth-of-type(3){
      background: url(../../../static/xxy-img/icon/opera.png) no-repeat left 32px top 15px;
    }
    &:nth-of-type(4){
      background: url(../../../static/xxy-img/icon/forum.png) no-repeat left 32px top 15px;
    }
    &:nth-of-type(5){
       background: url(../../../static/xxy-img/icon/competition.png) no-repeat left 32px top 15px;
    }
    &:nth-of-type(6){
      background: url(../../../static/xxy-img/icon/child.png) no-repeat left 32px top 15px;
    }
    &:last-of-type{
      background: url(../../../static/xxy-img/icon/dance.png) no-repeat left 32px top 15px;
    }
  }
  #subMenu {
    padding: 0;
    position: relative;
    }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  #card {
    width: 100px;
    margin: 0 auto;
  }
  .head{
    width: 1200px;
    margin: 0 auto;
    .row {
      width:1200px;
      margin: 0 auto;
    }
  }
  //主题内容开始
  .content {
    width: 1200px;
    margin: 0 auto;
    // border: 1px solid red;
    background: #f5f5f5;
    overflow: hidden;
    height: 100%;
    .left-wrap {
      width: 896px;
      margin-right: 24px;
      float: left;
      .floor {
        width: 100%;
        height: 471px;
        margin-bottom: 31px;
        background: #fff;
        h2 {
          font-size: 16px;
          height: 68px;
          line-height: 68px;
          font-weight: normal;
          margin-left: 26px;
          color:#495060;
          span {
            font-size: 15px;
            font-weight: bold;
            color: #ff3c1b;
          }
        };
        .img-group {
          width: 240px;
          height: 365px;
          margin:0 34px 39px 26px;
          cursor: pointer;
          position: relative;
          float: left;
          img{
            width: 100%;
            height: 100%;
          }
          .hide{
            p{
              width: 181px;
              font-size: 12px;
              color: #fff;
              &:first-child{
                margin: 22px 0 24px 20px;
              }
              &:last-child{
                margin: 0 0 33px 20px;
              }
            }
          }
          &:hover .hide{
            display: block;
          }
        };
        .floor-cont {
          width: 276px;
          height: 151px;
          // border: 1px solid blue;
          float: left;
          text-indent: 8px;
          .img-wrap{
            width: 112px;
            height: 100%;
            float: left;
            cursor: pointer;
            position: relative;
            img{
              width: 100%;
              height: 100%;
            }
            &:hover .hide{
              display: block
            }
            .hide{
              width: 100%;
              box-sizing: border-box;
              color: #fff;
              background-color: rgba(202,61,34,.9);
              position: absolute;
              left: 0;
              bottom: 0;
              display: none;
              padding: 6px 0;
              p{
                color:#fff !important;
                font-size: 12px !important;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                width: 100%;
                text-indent: 4px;
                i{
                  display: inline-block;
                  &.fa-map-marker {
                    transform: translateY(-1px);
                  }
                  &.fa-clock-o{
                    transform: translate(-2px,-1px);
                  }
                };
                span{
                  display: inline-block;
                  width: 100px;
                  transform: translateX(-15px);
                }
              }
            }
          }
          h3{
            float: left;
            height: 21px;
            line-height: 21px;
            font-size: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 163px;
            color: #705060;
          }
          ul{
            font-size: 12px;
            color: #495060;
            li{
              &:first-of-type{
                margin-top: 47px;
              }
               &:nth-of-type(2){
                 margin:18px auto;
                 p{
                   width: 156px;
                   height: 17px;
                   text-overflow: ellipsis;
                   overflow: hidden;
                   white-space: nowrap;
                 }
              }
            }
          }
          &:nth-child(odd){
            margin-right: 14px;
          };
          &:nth-child(3),&:nth-child(4) {
            margin-bottom: 60px;
          };
        }
      }
    };
    .right-wrap {
      width: 280px;
      float: left;
      .rank {
        width: 281px;
        height: 471px;
        font-size: 12px;
        color:#1b1b1b;
        position: relative;
        background: #fff;
        margin-bottom: 31px;
        h4{
          color: #925091;
          font-weight: normal;
          position: absolute;
          margin-top:31px;
          left: 27px;
        }
        a{
          display: block;
          position: absolute;
          right: 25px;
          margin-top:20px;
          &:hover {
            color: red;
          }
          color: #1b1b1b;
          font-size: 12px;
        }
        .list {
          position: absolute;
          margin-top: 76px;
          left: 33px;
          width: 216px;
          li{
            height: 12px;
            line-height: 12px;
            margin-bottom: 18px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            i.square{
              text-align: center;
              display: inline-block;
              width: 16px;
              height: 12px;
              background: #808080;
              color: #fff;
              margin-right: 4px;
            }
            &:first-child i.square,&:nth-child(2) i.square,&:nth-child(3) i.square{
              background: #ff3c1b;
            };
          }
        }
      }
    }
  }
  //主题内容结束

  //返回顶部开始
  #back {
    background: #fff;
    border: 1px solid #EBEBEB;
    width: 80px;
    position: fixed;
    right: 4px;
    top: 72.5%;
    margin-top: -105px;
    z-index: 9999;
    .item{
      height: 60px;
      border-bottom: 1px solid #EBEBEB;
      text-align: center;
      padding-top: 10px;
      color: #111;
      font-size: 12px;
      position: relative;
      cursor: pointer;
      box-sizing: content-box;
      &:hover {
        color: #FF1268;
      }
      a{
        display: block;
        color: #111;
        &:hover {
          color: #FF1268;
        }
        &#mouseover:hover .qrcode{
          display: block;
        }
      }
      .icon{
        background: url(//img.alicdn.com/tfs/TB1u1U9xmzqK1RjSZFHXXb3CpXa-64-180.png) no-repeat;
        margin: 0 auto;
        width: 32px;
        height: 29px;
        background-size: 100%;
      }
      .service{
        background-position: 3px -30px;
      }
      .damai{
        background-position: 0 4px;
      }
      .gotop {
        background-position: 4px -65px;
      }
      p{
        margin: 5px 0 0;
        font-size: 12px;
      }
      .qrcode {
        width: 72px;
        height: 72px;
        display: none;
        position: absolute;
        left: -92px;
        top: -6px;
        box-shadow: 2px 2px 4px #ccc;
        background: #fff;
        padding: 5px;
        &:after{
          position: absolute;
          display: inline-block;
          top: 50%;
          margin-top: -2.5px;
          right: -5px;
          width: 0;
          height: 0;
          content: '';
          border-style: solid;
          border-width: 5px;
          border-color: #fff #fff transparent transparent;
          transform: rotate(45deg);
          box-shadow: 1px -1px 1px #ccc;
        }
        img{
          border: 0;
        }
      }
      &:last-child {
        border-bottom-width: 0;
      }
    }
  }
  //返回顶部结束
</style>
<style lang="less" scoped>
  #tabs {
    width: 1170px;
    margin:30px auto;
    background: #fff;
    padding-left: 32px;
  & .el-tabs__active-bar{
      background-color: red !important;
    };
  }
  .el-tabs__item:hover {
    color: red;
    cursor: pointer;
  }
  .el-tabs__item.is-active {
    color: red;
  }
</style>
