<template>
    <div id="content">
      <Headnav></Headnav>
      <div class="content-wrap">
      <div class="code-wrap">
       <p>订单将在2小时后关闭，请及时付款</p>
       <p>请使用微信扫一扫完成支付</p>
      </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Headnav from '@/components/ljd/Headnav'
import Footer from '@/components/wy/Footer'
export default {
  name: 'Paypage',
  components: {
    Headnav,
    Footer
  }
}
</script>

<style lang="less">
  #content{
    width: 100%;
    background: #f5f5f5;
    .content-wrap {
      width: 1200px;
      margin: 0 auto;
      background: #fff;
      padding: 80px;
    }
  }
</style>
