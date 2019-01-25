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
      </div>
    </div>
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

export default {
  name: 'Orderconfirm',
  data () {
    return {
      isshow: false,
      newshow: false
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
    }
  },
  components: {
    Headnav
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
