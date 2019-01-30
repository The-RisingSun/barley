<template>
  <div class="box">
    <div class="nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">我的大麦</el-breadcrumb-item>
        <el-breadcrumb-item v-model="accounttwo">{{accounttwo}}</el-breadcrumb-item>
        <el-breadcrumb-item v-model="contact">{{contact}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PersonalPuslt',
  computed: {
    ...mapState(['saveName'])
  },
  data () {
    return {
      order: '我的订单',
      account: '个人信息',
      contact: '订单管理',
      accounttwo: '交易中心'
    }
  },
  created (vm) {
    this.getParams()
  },
  methods: {
    getParams () {
      // 取到路由带过来的参数
      if (this.saveName === this.contact) {
      } else {
        this.contact = this.saveName
        this.accounttwo = '账户中心'
      }
      // if (this.rom.title !== undefined) {
      //   // this.$set(this.list, this.list.length, this.rom)
      // }
      // this.list = Object.assign(this.list, this.rom)
      // const routerParams = this.$route.query
      // // 将数据放在当前组件的数据内
      // this.mallInfo.searchMap.mallCode = routerParams;
      // this.keyupMallName()
    }
    // parent (e) {
    //   alert(22)
    //   if (e === this.contact) {
    //     console.log(2)
    //   } else {
    //     this.contact = e
    //     this.accounttwo = '账户中心'
    //   }
    // }
  },
  watch: {
    '$route': 'getParams'
  }
}
</script>

<style scoped lang="less">
  .box{
    .nav{
      height: 26px;
      padding: 10px 0 0 14px;
      width: 100%;
      border-bottom: 1px solid #efefef;
      border-left: 1px solid #efefef;
      background: linear-gradient(#efefef,#fff);
      overflow: hidden;
    }
  }
</style>
