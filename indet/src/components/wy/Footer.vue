<template>
  <div id="footer">
    <ul>
      <li>
        <a href="javascript:;">公司介绍</a>
      </li>
      <li>
        <a href="javascript:;">公司介绍</a>
      </li>
      <li>
        <a href="javascript:;">公司介绍</a>
      </li>
      <li>
        <a href="javascript:;">公司介绍</a>
      </li>
      <li>
        <a href="javascript:;">公司介绍</a>
      </li>
      <li>
        <a href="javascript:;">公司介绍</a>
      </li>
      <li>
        <a href="javascript:;">公司介绍</a>
      </li>
      <li>
        <a href="javascript:;">公司介绍</a>
      </li>
      <li>
        <a href="javascript:;">公司介绍</a>
      </li>
      <li>
        <a href="javascript:;">公司大事件</a>
      </li>
    </ul>
    <p>网络文化经营许可证 京网文[2018]3243-534号 | 营业性演出许可证 京市演出888号
    </p>
    <p>网络文化经营许可证 京网文[2018]3243-534号 | 营业性演出许可证 京市演出888号
    </p>
    <p>北京阿博文化有限公司 大麦网 Copyright 2008-2018 All Right Reserved</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="less">
#footer{
  width: 1000px;
  margin: 140px auto 0;
  ul{
    padding: 0 0 68px 36px;
    overflow: hidden;
    li{
      float: left;
      height: 14px;
      padding: 0 0px 0 26px;
      font-size: 12px;
      a{
        color: #000;
      }
      &:after{
        content: "|";
        padding-left: 12px;
      }
      &:last-child{
        &:after{
          content: '';
        }
      }
    }
  }
  p{
    padding-bottom: 18px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
