<template>
  <div id="login">
    <Public></Public> <!-- 登录头部 -->
    <div class="box">
      <img src="https://gw.alicdn.com/tfs/TB1IWIBzAvoK1RjSZFNXXcxMVXa-720-440.png_q75.jpg" alt="">
      <div class="message">
        <ul>
          <li class="active">账号登录</li>
          <li>短信快捷登录</li>
        </ul>
        <div class="center">
          <form action="">
            <p>
              <span class="fa fa-user"></span>
              <input type="text" value="">
            </p>
            <p>
              <span class="fa fa-unlock-alt"></span>
              <input type="text" value="">
            </p>
            <input type="submit" value="登录">
            <div class="from-bottom">
              <div class="ntxt-time">
                <span class="bottom-left"><input type="checkbox"></span>
                下次自动登录
              </div>
              <span><i>忘记密码?</i>忘记密码</span>
            </div>
            <div class="else">
              <span>其他登录:</span>
              <a href=""><img src="https://gw.alicdn.com/tfs/TB1TikIsAvoK1RjSZFDXXXY3pXa-230-104.png" alt=""></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Public from './Public'
export default {
  name: 'Logon',
  components: {
    Public
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
        &.active{
          color: #ff5235;
          background: #fff;
          border-bottom: 1px solid #fff;
        }
      }
    }
    .center{
      padding: 20px 26px 0;
      p{
        margin-bottom: 24px;
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
              z-index: 1;
              cursor: pointer;
              opacity: 0;
            }
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
          overflow: hidden;
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
</style>
