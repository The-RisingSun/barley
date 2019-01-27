<template>
  <div id="header">
    <div class="center">
      <img src="https://gw.alicdn.com/tfs/TB1D1QUxjDpK1RjSZFrXXa78VXa-230-104.png" alt="">
      <i></i>
      <!--<slot name="login"></slot>-->
      <slot>
        <span slot="register">欢迎登陆</span>
      </slot>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Public'
}
</script>

<style scoped lang="less">
#header{
  width: 100%;
  height: 88px;
  line-height: 88px;
  background: #fff;
  .center{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    img{
      margin-top: 16px;
      height: 58px;
    }
    i{
      display: inline-block;
      width: 2px;
      margin: 24px 16px 0;
      height: 50px;
      background: #dadada;
    }
    span{
      display: inline-block;
      height: 88px;
      line-height: 88px;
      font-size: 24px;
      color: #000;
    }
  }
}
</style>
