<template>
  <div id="content">
    <Headnav></Headnav>
    <div class="content-wrap">
      <ul class="nav-tab">
        <li>
          1 选择商品
        </li>
        <li>
          2 确认订单信息
          <i></i>
        </li>
        <li>
          3 支付订单
          <i></i>
        </li>
        <li>
          4 收取商品
        </li>
      </ul>
      <div class="order-detail-wrap">
        <ul class="order-detail">
          <li>订单编号</li>
          <li>商品名称</li>
          <li>订单金额</li>
          <li>应付金额</li>
        </ul>
        <p class="shouldpay">应付总金额<span>  84.71</span>元</p>
        <p class="pay-intro">以下支付平台都支持大多数银行卡</p>
        <template class="radio-group">
          <el-radio v-model="radio" label="1">微信支付</el-radio>
          <el-radio v-model="radio" label="2">支付宝支付</el-radio>
        </template>
        <el-button type="primary" class="btn-primary">确认无误，支付</el-button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Headnav from '@/components/ljd/Headnav'
import Footer from '@/components/wy/Footer'
export default {
  data () {
    return {
      radio: '1'
    }
  },
  name: 'Payorder',
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
    padding: 10px 20px;

    .nav-tab {
      width: 1200px;
      height: 50px;
      line-height: 50px;
      background: #4b4b4b;
      margin: 0 auto;
      -overflow: hidden;
      position: relative;

      li {
        width: 300px;
        text-align: center;
        float: left;
        font-size: 18px;
        color: white;
      }

      li:nth-of-type(2) {
        position: relative;

        i {
          width: 0;
          height: 0;
          position: absolute;
          right: -50px;
          bottom: -1px;
          display: block;
          z-index: 100;
          border-width: 26px;
          border-style: solid;
          border-color: transparent transparent transparent #4b4b4b;
        }
      }

      li:nth-of-type(3) {
        height: 52px;
        background: #ff3c1b;
        bottom: 1px;
        position: relative;

        i {
          width: 0;
          height: 0;
          position: absolute;
          right: -52px;
          bottom: 0;
          display: block;
          z-index: 100;
          border-width: 26px;
          border-style: solid;
          border-color: transparent transparent transparent #ff3c1b;
        }
      }
    }
    .order-detail {
      overflow: hidden;
      background: #f8f8f9;
      border: 1px solid #000;
      margin-top: 20px;

      li {
        width: 297px;
        height: 40px;
        line-height: 40px;
        float: left;
        font-size: 12px;
        color: #495060;
        text-indent: 15px;
        border-right: 1px solid #000;
      }

      li:last-of-type {
        border: none;
      }
    }
    .shouldpay{
      height: 40px;
      line-height:40px;
      font-size: 16px;
      color: #495060;
      span{
        color: red;
        font-size: 14px;
      }
    }
    .pay-intro{
      font-size: 12px;
      color: #000;
      margin-bottom: 20px;
    }
    .btn-primary{
      margin-top: 20px;
      display: block;
      background: #ff3c1b;
      border: none;
    }

  }
}
</style>
