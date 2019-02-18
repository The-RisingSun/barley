<template>
  <div id="login">
    <Public></Public> <!-- 登录头部 -->
    <div class="box">
      <img src="https://gw.alicdn.com/tfs/TB1IWIBzAvoK1RjSZFNXXcxMVXa-720-440.png_q75.jpg" alt="">
      <div class="message">
        <ul>
          <li :id="index" v-for="(item, index) in alisn" :key="index" @click="witch(index)" :class=" {active:index===indet}">
            {{item}}
          </li>
        </ul>
        <div v-if="this.indet === 0" class="smu">
          <form id="1" class="center" action="">
            <p>
              <span class="fa fa-user"></span>
              <input v-model="name" @blur="username" type="text" value="">
            </p>
            <span>{{this.tisi}}</span>
            <p>
              <span class="fa fa-unlock-alt"></span>
              <input v-model="passWord" @blur="password" type="text" value="">
            </p>
            <span>{{this.pass}}</span>
            <input @click="login" type="submit" value="登录">
            <div class="from-bottom">
              <div class="ntxt-time">
                <el-checkbox v-model="checked">下次自动登录</el-checkbox>
              </div>
              <span><i>忘记密码?</i>忘记密码</span>
            </div>
            <div class="else">
              <span>其他登录:</span>
              <a href="javascript:;"><span class="fa fa-weixin"></span></a>
            </div>
          </form>
        </div>
        <div v-if="this.indet === 1" class="smu">
          <form id="2" class="center" action="">
            <p>
              <span class="fa fa-mobile"></span>
              <input v-model="name" @blur="username" type="text" value="">
            </p>
            <span>{{this.tisi}}</span>
            <p>
              <input id="sunber" @blur="verify" v-model="yard" maxlength="10" type="text" value="" placeholder="请输入4位数字验证码"/>
              <input @click="countDown" type="button" id="btn" v-model="btn">
            </p>
            <span>{{this.verification}}</span>
            <input @click="mobileLogin" type="submit" value="登录">
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Public from './Public'
import Footer from './Footer'
export default {
  name: 'Logon',
  data () {
    return {
      alisn: ['账号登录', '短信快捷登录'],
      name: null,
      passWord: null,
      tisi: null,
      pass: null,
      checked: true,
      off: true,
      indet: 0,
      btn: '获取验证码',
      verification: null,
      mobile: null,
      yard: null, // 验证码
      it: 60,
      time: null // 时间
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
      } else {
        this.tisi = null
      }
      // 是否加载密码
      // if(JSON.parse(localStorage.getItem(this.name)).mo === 1 && JSON.parse(localStorage.getItem(this.name)).Uase === this.name) {
      //   this.passWord = JSON.parse(localStorage.getItem(this.name)).pass
      // }
    },
    verify () {
      var re = /^[0-9]{4}$/
      if (!re.test(this.yard)) {
        this.verification = '验证码有误，请重填'
      } else {
        this.verification = null
      }
    },
    password () {
      var re = /^[a-zA-Z0-9]{6,22}$/
      if (!re.test(this.passWord)) {
        this.pass = '输入密码不符合要求！密码由6-22位数字和英文混合组成'
      } else {
        this.pass = null
      }
    },
    countDown () {
      let _this = this
      this.time = setInterval(function () {
        _this.it--
        console.log(_this.it)
        if (_this.it <= 0) {
          _this.btn = '重新获取验证码'
          _this.it = 60
          clearInterval(_this.time)
        } else {
          _this.btn = _this.it + '秒'
        }
      }, 1000)
    },
    witch (en) {
      this.indet = en
    },
    login () {
      var re = /^1[34578]\d{9}$/
      var ra = /^[a-zA-Z0-9]{6,22}$/
      if (!ra.test(this.passWord)) {
        this.pass = '输入密码不符合要求！密码由6-22位数字和英文混合组成'
        return false
      }
      if (!re.test(this.name)) {
        this.tisi = '手机号码有误，请重填'
        return false
      }
      if (localStorage.getItem(this.name) === null) { // 判断用户
        this.$message('没有当前用户请注册')
      } else if (parseInt(JSON.parse(localStorage.getItem(this.name)).pass) !== parseInt(this.passWord)) {
        this.$message('密码不正确，请重试')
      } else {
        if (this.checked) {
          // var most = JSON.parse(localStorage.getItem(this.name))  是否加载密码
          // most.mo = 1
          // most = JSON.stringify(most)
          // console.log(most)
          // localStorage.setItem(this.name, most)
          localStorage.setItem('mo', this.name)
        }
        this.$router.push({path: '/home'})
      }
    },
    mobileLogin () {
      console.log(localStorage.getItem(this.name))
      if (localStorage.getItem(this.name) === null || this.tisi === null || this.yard === null) {
        this.$message('输入不完整')
      } else {
        this.$router.push({path: '/home'})
      }
    }
  }
}
</script>

<style scoped lang="less">
#login{
  width: 100%;
  background: #f5f5f5;
  .box{
    width: 1000px;
    margin: 90px auto 0;
    display: flex;
    justify-content: space-between;
    img{
      width: 526px;
      height: 398px;
    }
  }
  .message{
    width: 458px;
    background: #fff;
    border: 1px solid #dddee1;
    ul{
      height: 31px;
      display: flex;
      background: #fff;
      border-bottom: 1px solid #dddee1;
      li{
        padding: 0 16px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        background: #f8f8f9;
        margin-right: 4px;
        border-radius: 4px 4px 0  0 ;
        border: 1px solid #dddee1;
        cursor: pointer;
        &.active{
          color: #ff5235;
          background: #fff;
          border-bottom: 1px solid #fff;
        }
      }
    }
    .smu{
      .center{
        padding: 20px 26px 0;
        &>span{
          font-size: 12px;
          display: inline-block;
          height: 20px;
          color: red;
        }
        p{
          height: 34px;
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
            width: 380px;
            border: none;
          }
          #btn{
            width: 120px;
            height: 34px;
            background: #ccc;
          }
        }
        .from-bottom{
          margin-top: 22px;
          display: flex;
          justify-content: space-between;
          .ntxt-time{
            font-size: 12px;
            .bottom-left{
              display: inline-block;
              width: 14px;
              height: 14px;
              position: relative;
              top: 0;
              left: 0;
              border: 1px solid #dddee1;
              border-radius: 2px;
              background-color: #fff;
              transition: border-color .2s ease-in-out,background-color .2s ease-in-out;
              input{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 12;
                cursor: pointer;
                opacity: 0;
                border: none;
              }
            }
            label{
              position: relative;
              top: -3px;
              display: inline-block;
              line-height: 14px;
            }
          }
          span{
            font-size: 12px;
            color: red;
            i{
              font-style:normal;
              padding-right: 6px;
              color: #000;
            }
          }
        }
        .else{
          span{
            line-height: 16px;
            font-size: 12px;
          }
          a{
            position: relative;
            top: 10px;
            display: inline-block;
            width: 24px;
            height: 24px;
            background: #80a910;
            text-align: center;
            border-radius: 12px;
            overflow: hidden;
            span{
              font-size: 12px;
              color: #fff;
            }
            img{
              width: 24px;
              height: 72px;
            }
          }
        }
        input[type="submit"]{
          width: 100%;
          height: 40px;
          background: #ff3c1b;
          color: #fff;
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
}
</style>
