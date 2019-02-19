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
        <table border="1" class="order-detail">
          <tr>
            <th>订单编号</th>
            <th>商品名称</th>
            <th>订单金额</th>
            <th>应付金额</th>
          </tr>
          <tr v-for="(item, index) in getData1" :key="index">
            <td>{{item.integer}}</td>
            <td>{{item.price}}</td>
            <td>{{item.intege}}</td>
            <td>{{item.status}}</td>
          </tr>
        </table>
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
      radio: '1',
      getData1: []
    }
  },
  name: 'Payorder',
  components: {
    Headnav,
    Footer
  },
  methods: {
    getlist () {
      this.getData1 = JSON.parse(localStorage.getItem('localData'))
    }
  },
  created () {
    this.getlist()
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
      border: 1px solid #000;
      margin-top: 20px;
      th {
        background: #f8f8f9;
        width: 292px;
        height: 40px;
        line-height: 40px;
        float: left;
        font-size: 12px;
        color: #495060;
        text-indent: 15px;
        border-right: 1px solid #000;
      }
      td {
        width: 292px;
        height: 40px;
        line-height: 40px;
        float: left;
        font-size: 12px;
        color: #495060;
        text-align: center;
        border-right: 1px solid #000;
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
