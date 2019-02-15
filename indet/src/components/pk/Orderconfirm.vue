<template>
  <div id="content">
    <Headnav></Headnav>
    <div class="content-wrap">
      <ul class="nav-tab">
        <li>
          1 选择商品
          <i></i>
        </li>
        <li>
          2 确认订单信息
          <i></i>
        </li>
        <li>
          3 支付订单
        </li>
        <li>
          4 收取商品
        </li>
      </ul>
      <div class="buyer">
        <h3>实名证件信息</h3>
        <span>购票人 ：</span>
        <button @click="showpopup">选择购票人</button>
      </div>
      <div class="buyways">
        <h3>选择付款方式</h3>
        <i class="big-circle">
          <i class="small-circle"></i>
        </i>
        <span>网上付款</span>
      </div>
      <div class="goodlist">
        <h3>商品清单</h3>
        <ul class="list-title">
          <li>商品名称</li>
          <li>座位号</li>
          <li>价格</li>
          <li>数量</li>
          <li>价格小计(元)</li>
        </ul>
      </div>
      <div class="tickets">
        <h3>我要开发票</h3>
        <ul class="tickets-way">
          <li
            @click="change (i)"
            v-for="(item, i) in cont"
            :class="{active:i === index}"
            :key=i
          >
            {{item.title}}
          </li>
        </ul>
        <div v-show="index ===0" class="content company-content">
          <form action="">
            <div class="header">
              <span>公司抬头:</span>
              <input type="text" placeholder="请输入公司抬头">
            </div>
            <div class="number">
              <span>公司税号:</span>
              <input type="text" placeholder="请输入公司税号">
            </div>
            <button>确认发票信息</button>
          </form>
        </div>
        <div v-show="index ===1" class="content person-content">
          <form action="">
            <div class="header">
              <span>个人抬头:</span>
              <input type="text" placeholder="请输入个人抬头">
            </div>
            <div class="number">
              <span>个人税号:</span>
              <input type="text" placeholder="请输入个人税号">
            </div>
            <button>确认发票信息</button>
          </form>
        </div>
      </div>
      <div class="insurance">
        <div class="check-wrap">
          <div class="check" @click="checkbtn">
            <i class="fa fa-check" aria-hidden="true" v-show="checkif"></i>
          </div>
          <p>购买"安心订票保险"，本单保费金额：<strong>20.00</strong>元</p>
        </div>
        <p class="insurance-detail">查看<span>保险服务说明</span>和<span>《安心订票保险条款》</span></p>
        <p>购买保险，请填写真实姓名</p>
        <p class="good-num">商品金额：<span>￥180</span></p>
        <p class="good-insurance">商品保险： +<span>￥20.00</span></p>
      </div>
      <div class="payment">
        <p class="pay-num">
          待支付总额：
          <span>￥2.00</span>
        </p>
        <div class="pay-wrap">
          <div class="pay" @click="paybtn">
            <i class="fa fa-check" aria-hidden="true" v-show="payif"></i>
          </div>
          <p class="pay-detail">我已阅读并同意<strong>"订购服务条款"</strong><strong>"退换货约定"</strong><strong>"退款约定"</strong></p>
          <p>同意"票品为不记名凭证，请您妥善保管，遗失不补"</p>
          <button :class="{active}">同意以上协议并提交订单</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <!--点击选择购票人弹窗-->
    <div class="buyer-pop-up-wrap" v-if="isshow">
      <div class="buyer-pop-up">
        <h3>
          常用购票人
          <i class="fa fa-times" aria-hidden="true" @click="closepopup"></i>
        </h3>
        <div class="newbuyer">
          <button @click="newshowpop">新增购票人</button>
        </div>
      </div>
    </div>
    <!--新增购票人弹窗-->
    <div class="new-buyer" v-if="newshow">
      <i class="fa fa-times" aria-hidden="true" @click="newclosepop"></i>
      <h3><span>新增购票人信息</span></h3>
    </div>
  </div>
</template>

<script>
import Headnav from '@/components/ljd/Headnav'
import Footer from '@/components/wy/Footer'

export default {
  name: 'Orderconfirm',
  data () {
    return {
      isshow: false,
      newshow: false,
      index: 0,
      cont: [
        {'title': '公司'},
        {'title': '个人'}
      ],
      checkif: true,
      payif: true
    }
  },
  methods: {
    closepopup () {
      this.isshow = false
    },
    showpopup () {
      this.isshow = true
    },
    newshowpop () {
      this.newshow = true
    },
    newclosepop () {
      this.newshow = false
    },
    change (i) {
      this.index = i
    },
    checkbtn () {
      if (this.checkif) {
        this.checkif = false
      } else {
        this.checkif = true
      }
    },
    paybtn () {
      if (this.payif) {
        this.payif = false
      } else {
        this.payif = true
      }
    }
  },
  components: {
    Headnav,
    Footer
  }
}
</script>

<style lang="less">
  #content {
    width: 100%;
    background: #f5f5f5;
    position: relative;

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

        li:nth-of-type(1) {
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

        li:nth-of-type(2) {
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

      .buyer {
        h3 {
          font-size: 16px;
          color: #ff3c1b;
          border-bottom: 1px solid #000;
          padding: 8px;
          margin-bottom: 10px;
        }

        button {
          font-size: 12px;
          color: #fff;
          padding: 10px 15px;
          border: none;
          border-radius: 6px;
          background: #ff3c1b;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .buyways {
        margin-top: 30px;
        overflow: hidden;

        h3 {
          font-size: 16px;
          color: #ff3c1b;
          border-bottom: 1px solid #000;
          padding: 8px;
          margin-bottom: 10px;
        }

        .big-circle {
          width: 16px;
          height: 16px;
          display: block;
          border-radius: 50%;
          border: 1px solid #ff3c1b;
          float: left;
          margin: 2px 10px 0 0;

          .small-circle {
            width: 10px;
            height: 10px;
            display: block;
            border-radius: 50%;
            background: #ff3c1b;
            margin: 3px 0 0 3px;
          }
        }
      }

      .goodlist {
        margin-top: 30px;

        h3 {
          font-size: 16px;
          color: #ff3c1b;
          border-bottom: 1px solid #000;
          padding: 8px;
          margin-bottom: 10px;
        }

        .list-title {
          overflow: hidden;
          background: #f8f8f9;
          border: 1px solid #000;

          li {
            width: 238px;
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
      }

      .tickets {
        margin-top: 30px;
        overflow: hidden;

        h3 {
          font-size: 16px;
          color: #ff3c1b;
          border-bottom: 1px solid #000;
          padding: 8px;
          margin-bottom: 10px;
        }

        .tickets-way {
          overflow: hidden;

          li {
            float: left;
            padding: 10px 15px;

            &:hover {
              cursor: pointer;
            }
          }

          li.active {
            color: #ff3c1b;
            border-bottom: 2px solid #ff3c1b;
          }
        }

        .company-content {
          padding: 25px 15px 30px;
          border: 1px solid #000;

          span {
            font-size: 12px;
            color: #495060;
          }

          input {
            width: 300px;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            font-size: 12px;
            color: #495060;
            border-radius: 6px;
          }

          button {
            font-size: 12px;
            color: #fff;
            background: #ff3c1b;
            padding: 10px 15px;
            border-radius: 6px;
            border: none;
            margin-left: 30px;

            &:hover {
              cursor: pointer;
            }
          }

          .header {
            margin-bottom: 30px;
          }

          .number {
            margin-bottom: 30px;
          }
        }

        .person-content {
          padding: 25px 15px 30px;
          border: 1px solid #000;

          span {
            font-size: 12px;
            color: #495060;
          }

          input {
            width: 300px;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            font-size: 12px;
            color: #495060;
            border-radius: 6px;
          }

          button {
            font-size: 12px;
            color: #fff;
            background: #ff3c1b;
            padding: 10px 15px;
            border-radius: 6px;
            border: none;
            margin-left: 30px;

            &:hover {
              cursor: pointer;
            }
          }

          .header {
            margin-bottom: 30px;
          }

          .number {
            margin-bottom: 30px;
          }
        }
      }

      .insurance {
        margin-top: 20px;
        border-top: 1px solid #000;
        padding: 25px 0;
        text-align: right;

        .check-wrap {
          display: block;

          .check {
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            border: 1px solid #000;
            background: #f4f4f4;
            float: left;
            margin-left: 840px;

            &:hover {
              cursor: pointer;
            }
          }

          p {
            padding: 0 0 10px 0;
          }
        }

        p {
          padding: 10px 0;
        }

        .insurance-detail {
          span {
            color: #ff3c1b;

            &:hover {
              cursor: pointer;
            }
          }
        }

        .good-num {
          span {
            color: #ff3c1b;
          }
        }

        .good-insurance {
          span {
            color: #ff3c1b;
          }
        }
      }

      .payment {
        border-top: 1px dashed #000;
        text-align: right;
        padding: 10px 0 60px;

        .pay-wrap {
          display: block;

          .pay {
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            border: 1px solid #000;
            background: #f4f4f4;
            float: left;
            margin-left: 770px;

            &:hover {
              cursor: pointer;
            }
          }

          p {
            padding: 0 0 10px 0;
          }
        }

        p {
          padding: 10px 0;
        }

        .pay-detail {
          strong {
            &:hover {
              cursor: pointer;
            }
          }
        }

        button {
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          background: #ff3c1b;
          padding: 10px 15px;
          border-radius: 4px;
          border: none;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }

    /* 点击选择购票人弹窗*/

    .buyer-pop-up-wrap {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .4);

      .buyer-pop-up {
        position: fixed;
        top: 100px;
        width: 500px;
        height: 500px;
        left: 50%;
        transform: translate(-50%);
        background: #fff;

        h3 {
          font-size: 18px;
          color: gray;
          position: relative;
          padding: 10px;
          background: #f5f5f5;

          .fa-times {
            font-size: 25px;
            position: absolute;
            right: 10px;

            &:hover {
              cursor: pointer;
            }
          }
        }

        .newbuyer {
          border-bottom: 1px solid #000;
          padding: 10px;
          text-align: right;

          button {
            background: pink;
            color: #fff;
            font-size: 16px;
            padding: 5px 20px;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }

    /*新增购票人弹窗*/

    .new-buyer {
      position: fixed;
      top: 100px;
      width: 500px;
      height: 500px;
      left: 50%;
      transform: translate(-50%);
      background: #ccc;

      h3 {
        padding: 10px 0;
        border-bottom: 2px solid gray;

        span {
          padding: 10px;
          border-bottom: 2px solid red;
        }
      }

      .fa-times {
        display: block;
        text-align: right;
        font-size: 25px;
        padding: 5px 0;
        background: #f5f5f5;

        &:hover {
          cursor: pointer;
        }
      }
    }

  }
</style>
