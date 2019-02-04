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
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Headnav from '@/components/ljd/Headnav'
import Footer from '@/components/wy/Footer'
export default {
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

  }
}
</style>
