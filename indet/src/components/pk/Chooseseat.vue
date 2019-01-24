<template>
  <div id="content">
    <Headnav></Headnav>
    <Headsearch></Headsearch>
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>大麦</el-breadcrumb-item>
        <el-breadcrumb-item>电影</el-breadcrumb-item>
        <el-breadcrumb-item>大型多媒体</el-breadcrumb-item>
        <el-breadcrumb-item>1999-11-03</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ul class="nav-tab">
      <li>
        1 选择区域
        <i></i>
      </li>
      <li>
        2 选择座位
        <i></i>
      </li>
      <li>
        3 结账付钱
      </li>
    </ul>
    <div class="seat-wrap">

    </div>
  </div>
</template>

<script>
import Headnav from '@/components/ljd/Headnav'
import Headsearch from '@/components/ljd/Headsearch'
import Footer from '@/components/ljd/Footer'
export default {
  name: 'Chooseseat',
  components: {
    Headnav,
    Headsearch,
    Footer
  }
}
</script>

<style lang="less">
  #content {
    width: 100%;
    background: #f5f5f5;

    .crumbs {
      width: 1200px;
      margin: 0 auto;
    }

    .nav-tab {
      width: 1200px;
      height: 50px;
      line-height: 50px;
      background: #4d4d4d;
      margin: 0 auto;
      margin-top: 40px;
      -overflow: hidden;
      position: relative;

      li {
        width: 400px;
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
          border-color: transparent transparent transparent #4d4d4d;
        }
      }

      li:nth-of-type(2) {
        height: 52px;
        background: #d8000b;
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
          border-color: transparent transparent transparent #d8000b;
        }
      }
    }
  }
</style>
