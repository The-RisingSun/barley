<template>
    <div id="headsearch">
      <img src="/static/img/logo.png" alt="">
      <div class="choosecity">北京 <i class="fa fa-angle-down fa-lg"></i></div>
      <div class="inputwrap">
        <input type="search" placeholder="请输入演出、艺人、场馆名称...">
        <button>搜索</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Headsearch'
}
</script>

<style lang="less" scoped>
#headsearch{
  padding: 0 74px;
  height: 92px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  img{
    width: 167px;
    height: 60px;
  }
  .choosecity{
    font-size: 16px;
    margin: -40px 0 0 28px;
    i{
      vertical-align: 0;
    }
  }
  .inputwrap{
    width: 574px;
    height: 40px;
    background: #ff3c1b;
    display: flex;
    align-items: center;
    margin: -20px 0 0 216px;
    input{
      width: 480px;
      height: 34px;
      border: none;
      margin-left: 2px;
      text-indent: 10px;
      font-size: 12px;
    }
    button{
      width: 90px;
      background: #ff3c1b;
      color: #fff;
      border: none;
      height: 34px;
    }
  }
}
</style>
