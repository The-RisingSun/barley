<template>
  <div id="headnav">
    <div class="txtleft">
      <span>HI , 欢迎来到大麦 [<router-link to="/login"> 登录</router-link> <router-link  to="/login">注册 </router-link>]</span>
      <p>&nbsp;&nbsp;我的大麦 <i class="fa fa-angle-down fa-lg"></i></p>
      <ul>
        <li>个人信息</li>
        <li>订单管理</li>
      </ul>
    </div>
    <div class="txtright">
      <a href="#">大麦网微信</a>
      <div class="codeimg">
        <img src="/static/img/download.jpg" alt="">
      </div>
      <a href="#">手机版</a>
      <div class="codeimg1">
        <img src="/static/img/download.jpg" alt="">
      </div>
      <a href="#">客户服务<i class="fa fa-angle-down fa-lg"></i></a>
      <ul>
        <li>帮助中心</li>
        <li>在线客服</li>
        <li>人工服务</li>
      </ul>
      <a href="#">网站导航<i class="fa fa-angle-down fa-lg"></i></a>
      <div class="wwwnav">
        <div class="left">
          <h5>演出分类</h5>
          <a href="#">演唱会</a>
          <a href="#">音乐会</a>
          <a href="#">舞蹈芭蕾</a>
          <a href="#">曲苑杂坛</a>
          <a href="#">度假休闲</a>
          <a href="#">儿童亲子</a>
          <a href="#">话剧歌剧</a>
          <a href="#">动漫</a>
        </div>
        <div class="right">
          <h5>城市切换</h5>
          <a href="#">北京</a>
          <a href="#">广州</a>
          <a href="#">上海</a>
          <a href="#">南京</a>
          <a href="#">香港</a>
          <a href="#">台州</a>
          <a href="#">西安</a>
          <a href="#">杭州</a>
          <a href="#">成都</a>
          <a href="#">重庆</a>
          <a href="#">宁波</a>
          <a href="#">无锡</a>
          <a href="#">深圳</a>
          <a href="#">武汉</a>
          <a href="#">济南</a>
          <a href="#">昆明</a>
          <a href="#">南宁</a>
          <a href="#">佛山</a>
          <a href="#">太原</a>
          <a href="#">哈尔滨</a>
          <a href="#">南昌</a>
          <a href="#">温州</a>
          <a href="#">长沙</a>
          <a href="#">福州</a>
          <a href="#">天津</a>
          <a href="#">苏州</a>
          <a href="#">郑州</a>
          <a href="#">东莞</a>
        </div>
      </div>
      <a href="#">English</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headnav'
}
</script>

<style lang="less" scoped>
#headnav{
  padding: 0 75px;
  height: 34px;
  background: #f7f7f7;
  font-size: 12px;
  color: #1b1b1b;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .txtleft{
    display: flex;
    position: relative;
    span{
      a:nth-of-type(1){
        color: #ff3c1b;
      }
    }
    p{
      cursor: pointer;
      i{
        vertical-align: 0;
      }
    }
    p:hover + ul,ul:hover{
      opacity: 1;
      display: block;
    }
    ul{
      width: 90px;
      background: #fff;
      opacity: 0;
      transition: 0.3s;
      position: absolute;
      top:18px;
      display: none;
      left: 154px;
      z-index: 1;
      border-radius: 4px;
      li{
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
      }
      li:nth-of-type(1){
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .txtright{
    position: relative;
    a{
      cursor: pointer;
      color: #1b1b1b;
      margin-right: 26px;
      i{
        vertical-align: 0;
      }
    }
    a:nth-of-type(1):hover + .codeimg,.codeimg:hover{
      display: block;
      opacity: 1;
    }
    a:nth-of-type(2):hover + .codeimg1,.codeimg1:hover{
      opacity: 1;
      display: block;
    }
    a:nth-of-type(3):hover + ul,ul:hover{
      opacity: 1;
      display: block;
    }
    a:nth-of-type(4):hover + .wwwnav,.wwwnav:hover{
      opacity: 1;
      display: block;
    }
    ul{
      position: absolute;
      left: 134px;
      top: 20px;
      opacity: 0;
      z-index: 1;
      transition: 0.3s;
      display: none;
      width: 100px;
      height: 90px;
      background: #fff;
      text-align: center;
      border-radius: 6px;
      li{
        line-height: 30px;
        cursor: pointer;
      }
    }
    .codeimg{
      width: 120px;
      height: 120px;
      border-radius: 4px;
      opacity: 0;
      transition: 0.3s;
      background: #fff;
      position: absolute;
      display: none;
      top: 18px;
      left: -28px;
      border: 1px solid #ccc;
      z-index: 1;
      img{
        width: 100px;
        height: 100px;
        margin: 10px auto;
      }
    }
    .codeimg1{
      width: 120px;
      height: 120px;
      border-radius: 4px;
      opacity: 0;
      display: none;
      transition: 0.3s;
      background: #fff;
      position: absolute;
      top: 18px;
      left: 50px;
      border: 1px solid #ccc;
      z-index: 1;
      img{
        width: 100px;
        height: 100px;
        margin: 10px auto;
      }
    }
    .wwwnav{
      position: absolute;
      top: 20px;
      left: 80px;
      width: 360px;
      height: 160px;
      background: #fff;
      overflow: hidden;
      border-radius: 4px;
      opacity: 0;
      display: none;
      transition: 0.3s;
      z-index: 1;
      .left{
        width: 160px;
        float: left;
        h5{
          font-weight: normal;
          font-size: 14px;
          color: #666;
          margin-left: 10px;
        }
        a{
          font-size: 12px;
          display: inline-block;
          margin: 0 10px;
          cursor: pointer;
          margin-top: 10px;
        }
        a:hover{
          color: #2d8cf0;
        }
      }
      .right{
        float: left;
        width: 200px;
        h5{
          font-weight: normal;
          font-size: 14px;
          color: #666;
        }
        a{
          font-size: 12px;
          margin-right: 20px;
          margin-top: 10px;
          display: inline-block;
          cursor: pointer;
        }
        a:hover{
          color: #2d8cf0;
        }
      }
    }
  }
}
</style>
