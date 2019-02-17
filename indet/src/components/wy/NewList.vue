<template>
  <div class="shree-2">
    <h2>
        <span>
          新增购票人信息
        </span>
    </h2>
    <div class="shree-2b">
      <p>
        姓名：&nbsp;<input type="text" maxlength="6" v-model="username" placeholder="请填写姓名">
      </p>
      <div class="shree-2b-a">
        证件类型: &nbsp;
        <el-select v-model="value" placeholder="请选择" class="shree-2b-a1">
          <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
          </el-option>
        </el-select>
      </div>
      <p>
        证件号码:  &nbsp;&nbsp;<input type="text" maxlength="18" v-model="identity" placeholder="请填写证件号码">
      </p >
      <div class="shree-3c">
        <button @click="stockpile">保存</button>
        <button @click="cancel">取消</button>
      </div>
      <p class="offer">由芝麻信用提供验证</p >
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'NewList',
  data () {
    return {
      identity: '',
      username: '',
      tisi: '', // 姓名验证
      hint: '', // 身份证验证
      options: [{
        value: '选项1',
        label: '身份证'
      }, {
        value: '护照',
        label: '护照'
      }, {
        value: '港澳通行证',
        label: '港澳通行证'
      }, {
        value: '台胞证',
        label: '台胞证'
      }],
      value: '--请选择--'
    }
  },
  methods: {
    ...mapMutations(['push']),
    stockpile () {
      var re = /^[\u4e00-\u9fa5]{2,4}$/
      var rank = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/
      if (!re.test(this.username)) {
        this.tisi = '格式错误，请重填'
        return false
      }
      if (!rank.test(this.identity)) {
        this.hint = '身份证有误，请重填'
        return false
      }
      let sle = {
        calorie: this.value,
        name: this.username,
        address: this.identity
      }
      this.push(sle)
      console.log(22)
    },
    cancel () {
      this.username = null
      this.value = '--请选择-- '
      this.identity = null
    }
  }
}
</script>

<style scoped lang="less">
  .shree-2{
    width: 980px;
    border: 1px solid #ccc;
    -margin-top: 26px;
    h2{
      padding: 0px 0 0 0;
      height: 30px;
      line-height: 30px;
      width: 100%;
      border-bottom: 2px solid #efefef;
      span{
        display: inline-block;
        position: relative;
        height: 29px;
        top: -2px;
        padding: 0 10px 0 14px;
        font-size: 16px;
        font-weight: normal;
        color: #ff3c1b;
        border-bottom: 2px solid #ff3c1b;
      }
    }
    .shree-2a{
      width: 980px;
      height: 50px;
      line-height: 50px;
      border-bottom: 2px solid #ccc;
      h5{
        width: 160px;
        height: 50px;
        border-bottom: 2px solid red;
        text-align: center;
        font-size: 16px;
        font-weight: normal;
      }
    }
    .shree-2b{
      width: 980px;
      margin-top: 30px;
      p:nth-of-type(1){
        margin-left: 60px;
        height: 32px;
        line-height: 32px;
        input{
          width: 260px;
          height: 32px;
          line-height: 32px;
        }
      }
      .shree-2b-a{
        margin-left: 30px;
        margin-top: 20px;
        height: 32px;
        line-height: 32px;
        .shree-2b-a1{
          width: 262px;
        }
        ul{
          width: 260px;
          border: 1px solid #ccc;
          z-index: 1111;
          position: relative;
          margin-left: 86px;
          background: #fff;
          li{
            height: 30px;
            line-height: 30px;
            text-indent: 12px;
          }
          li:hover{
            background: blue;
            color: #fff;
          }
        }
      }
      p:nth-of-type(2){
        margin-left: 30px;
        height: 32px;
        line-height: 32px;
        margin-top: 20px;
        input{
          width: 260px;
          height: 32px;
          line-height: 32px;
        }
      }
      .offer{
        color: #999;
        font-size: 12px;
        margin-left: 112px;
      }
    }
    .shree-3c{
      margin-left: 112px;
      margin-top: 20px;
      button{
        width: 92px;
        height: 28px;
        line-height: 25px;
        margin-right: 20px;
        border: none;
        border-radius: 4px;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
      }
      button:nth-of-type(1){
        background: #ed3f14;
        border: none;
        color: #fff;
      }
    }
    p:last-of-type{
      margin-top: 10px;
      margin-left: 160px;
      margin-bottom: 50px;
    }
  }
</style>
