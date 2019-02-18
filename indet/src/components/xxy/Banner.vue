<template>
  <div class="block">
    <el-carousel trigger="click" :interval=0 height="420">
      <el-carousel-item v-for="item in data" :key="item">
        <img v-bind:src="item" width="1200" style="margin:0 auto;transform: translateX(20px)" height="420">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import {Carousel} from 'element-ui'
let data = [
  '/static/xxy-img/banner1.jpg',
  '/static/xxy-img/banner2.jpg',
  '/static/xxy-img/banner3.jpg',
  '/static/xxy-img/banner4.png'
]
export default {
  name: 'Banner',
  data () {
    return {
      data,
      index: 0
    }
  },
  components: {
    Carousel
  }
}
</script>

<style>
  .el-carousel{
    position: relative;
    left: 0px;
    height: 420px !important;
  }
  .el-carousel .el-carousel__container {
    height: 100%;
  }
  .el-carousel .el-carousel__container .el-carousel__arrow--left {
    left:-1px;
  }
  el-carousel__item{
    height: 420px;
  }
  el-carousel__item img{
    height: 420px;
    text-align: center;
  }

  el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__arrow {
    z-index: 201 !important;
  }
</style>
