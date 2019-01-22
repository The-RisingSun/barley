<template>
    <div id="footer">
      <div class="help">
        <ul>
          <li>订购方式</li>
          <li>
            <a href="#">在线订购</a>
          </li>
          <li>
            <a href="#">在线订购</a>
          </li>
          <li>
            <a href="#">电话订购</a>
          </li>
          <li>
            <a href="#">上门订购</a>
          </li>
          <li>
            <a href="#">大客户团体订购</a>
          </li>
          <li>
            <a href="#">大麦超级票订购</a>
          </li>
        </ul>
        <ul>
          <li>配送方式</li>
          <li>
            <a href="#">送货上门</a>
          </li>
          <li>
            <a href="#">电子票</a>
          </li>
          <li>
            <a href="#">上门自取</a>
          </li>
          <li>
            <a href="#">大麦自助机换票</a>
          </li>
        </ul>
        <ul>
          <li>支付方式</li>
          <li>
            <a href="#">在线支付</a>
          </li>
          <li>
            <a href="#">柜台付款</a>
          </li>
        </ul>
        <ul>
          <li>大麦网微信</li>
          <li>
            <img src="/static/img/download.jpg" alt="">
          </li>
        </ul>
        <ul>
          <li>大麦网触屏版</li>
          <li>
            <img src="/static/img/download.jpg" alt="">
          </li>
        </ul>
        <ul>
          <li>账户安全</li>
          <li>
            <a href="#">找回密码</a>
          </li>
          <li>
            <a href="#">账户注册</a>
          </li>
          <li>
            <a href="#">账户绑定</a>
          </li>
          <li>
            <a href="#">SSL安全证书</a>
          </li>
        </ul>
        <ul>
          <li>配送方式</li>
          <li>
            <a href="#">退换及缺货说明</a>
          </li>
          <li>
            <a href="#">发票帮助</a>
          </li>
          <li>
            <a href="#">订票服务条款</a>
          </li>
        </ul>
        <ul>
          <li>特色服务</li>
          <li>
            <a href="#">演出订阅</a>
          </li>
        </ul>
      </div>
      <div class="copyimg">
        <div class="company">
          <a href="#">公司介绍</a>
          <a href="#">品牌识别</a>
          <a href="#">企业荣誉</a>
          <a href="#">隐私声明</a>
          <a href="#">联系及合作</a>
          <a href="#">招聘信息</a>
          <a href="#">网站地图</a>
          <a href="#">友情链接</a>
          <a href="#">公司大事记</a>
        </div>
        <div class="copypic">
          <img src="/static/img/foot01.png" alt="">
          <img src="/static/img/foot02.png" alt="">
          <img src="/static/img/foot03.gif" alt="">
          <img src="/static/img/foot04.png" alt="">
          <img src="/static/img/foot05.png" alt="">
          <img src="/static/img/foot06.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
#footer{
  padding: 52px 54px 52px 74px;
  background: #e6e6e6;
  .help{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ff3c1b;
    ul{
      width: 154px;
      li:nth-of-type(1){
        font-size: 18px;
      }
      li:last-of-type{
        margin-bottom: 18px;
      }
      li{
        color: #333;
        height: 28px;
        line-height: 28px;
        font-size: 12px;
        img{
          margin-top: 10px;
        }
        a{
          color: #333;
        }
      }
    }
  }
  .copyimg{
    text-align: center;
    .company{
      a{
        display: inline-block;
        margin-top: 18px;
        padding: 0 12px;
        border-right: 1px solid #7a668e;
        font-size: 16px;
        color: #333;
      }
      a:last-of-type{
        border: none;
      }
    }
    .copypic{
      img{
        display: inline-block;
        margin-right: 17px;
        margin-top: 42px;
      }
    }
  }
}
</style>
