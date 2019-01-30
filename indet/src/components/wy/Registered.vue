<template>
  <div id="Registered">
    <Public>
      <slot>
        <span name="register">账户注册</span>
      </slot>
    </Public>
    <div class="register">
      <form action="" class="center">
        <p>
          <span class="fa fa-user"></span>
          <input v-model="name" @blur="username" type="text" value="">
        </p>
        <span>{{tisi}}</span>
        <p>
          <span class="fa fa-unlock-alt"></span>
          <input v-model="password" @blur="apassword" type="text" value="">
        </p>
        <span>{{cipher}}</span>
        <p>
          <span class="fa fa-unlock-alt"></span>
          <input v-model="nopassword" @blur="anopassword" type="text" value="">
        </p>
        <span>{{nocipher}}</span>
        <div class="verify">
          <div class="disp">
            <p>
              <span class="fa fa-commenting"></span>
              <input v-model="verify" @blur="Hintverify" type="text" value="">
            </p>
            <input type="button" v-model="exchange" @click="second" value="exchange">
          </div>
          <span>{{verifyHint}}</span>
        </div>
        <input @click="login" type="submit" value="立即注册">
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Public from './Public'
import Footer from './Footer'
export default {
  name: 'Registered',
  data () {
    return {
      name: null,
      password: null,
      nopassword: null,
      verify: null,
      tisi: null, // 用户名提示
      cipher: null, // 密码提示
      nocipher: null, // 密码再次提示
      verifyHint: null, // 验证码再次提示
      off: true,
      exchange: '获取验证码',
      time: 60, // 时间
      sum: true
    }
  },
  components: {
    Public,
    Footer
  },
  methods: {
    username () {
      var re = /^1[34578]\d{9}$/
      if (!re.test(this.name)) {
        this.tisi = '手机号码有误，请重填'
        this.sum = false
      } else {
        this.tisi = null
      }
    },
    apassword () {
      var re = /^[a-zA-Z0-9]{6,22}$/
      if (!re.test(this.password)) {
        this.cipher = '输入密码不符合要求！密码由6-22位数字和英文混合组成'
        this.sum = false
      } else {
        this.cipher = null
      }
    },
    anopassword () {
      var re = this.password
      console.log(re + ',' + this.nopassword)
      if (this.nopassword === re) {
        this.nocipher = null
      } else {
        this.nocipher = '密码不一致，请确认'
        this.sum = false
      }
    },
    login () { // 加入本地存储
      this.anopassword()
      this.apassword()
      this.username()
      this.Hintverify()
      if (this.sum === true) {
        localStorage.setItem(this.name, this.password)
      }
    },
    second () { // 验证倒计时
      this.off = false
      var _this = this
      let interval = window.setInterval(function () {
        // that.setStorage(that.second);
        _this.time--
        _this.exchange = _this.time + 's'
        if (_this.time <= 0) {
          _this.time = 60
          _this.off = true
          _this.exchange = '重新发送验证码'
          window.clearInterval(interval)
        }
      }, 1000)
    },
    Hintverify () {
      var re = /^[0-9]{4}$/
      if (!re.test(this.verify)) {
        this.verifyHint = '验证码格式不对'
        this.sum = false
      } else {
        this.verifyHint = null
      }
    }
  }
}
</script>

<style scoped lang="less">
#Registered{
  width: 100%;
  background: #f5f5f5;
  .register{
    width: 1000px;
    height: 440px;
    margin: 90px auto 0;
    background: #fff;
    .center{
      padding: 40px 200px;
      &>span{
        font-size: 12px;
        display: inline-block;
        height: 20px;
        color: red;
      }
      p{
        height: 34px;
        margin-top: 10px;
        line-height: 34px;
        border-radius: 4px;
        border: 1px solid #dddee1;
        display: flex;
        overflow: hidden;
        span{
          display: inline-block;
          width: 24px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          background: #eee;
          border-right: 1px solid #dddee1;
        }
        input{
          text-indent: 6px;
          height: 32px;
          width: 570px;
          border: none;
        }
      }
      .verify{
       &>span{
          font-size: 12px;
          display: inline-block;
          height: 20px;
          color: red;
        }
        .disp{
          display: flex;
          p{
            width: 324px;
            height: 34px;
            line-height: 34px;
            border-radius: 4px;
            border: 1px solid #dddee1;
            display: flex;
            overflow: hidden;
            input{
              width: 300px;
            }
          }
          input[type='button']{
            width: 100px;
            height: 36px;
            margin: 10px 0 0 30px;
            border: none;
            background: none;
            border: 1px solid #dddee1;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            cursor: pointer;
          }
        }
      }
      input[type="submit"]{
        width: 100%;
        height: 32px;
        background: #ff3c1b;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        text-align: center;
      }
    }
  }
}
</style>
