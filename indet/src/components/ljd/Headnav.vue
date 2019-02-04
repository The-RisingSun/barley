<template>
  <div id="headnav">
    <div class="txtleft">
      <span>HI , 欢迎来到大麦 [<router-link to="/login"> 登录</router-link> <router-link  to="/login">注册 </router-link>]</span>
      <p>&nbsp;&nbsp;我的大麦 <i class="fa fa-angle-down fa-lg"></i></p>
    </div>
    <div class="txtright">
      <a href="#">大麦网微信</a>
      <a href="#">手机版</a>
      <a href="#">客户服务<i class="fa fa-angle-down fa-lg"></i></a>
      <a href="#">网站导航<i class="fa fa-angle-down fa-lg"></i></a>
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
    span{
      a:nth-of-type(1){
        color: #ff3c1b;
      }
    }
    p{
      i{
        vertical-align: 0;
      }
    }
  }
  .txtright{
    a{
      color: #1b1b1b;
      margin-right: 26px;
      i{
        vertical-align: 0;
      }
    }
  }
}
</style>
