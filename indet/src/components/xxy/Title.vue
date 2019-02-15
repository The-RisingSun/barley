<template>
  <div id="title">
    <h2 class="title">
      <p>{{title1}}</p>
      <i></i>
    </h2>
  </div>
</template>
<script>
export default {
  name: 'Title',
  props: {
    title1: String,
    required: true
  }
}
</script>

<style scoped lang="less">
@import "~@/assets/less/public.less";
/* public */
h2.title{
  text-align: center;
  height: 80px;
  p{
    font-size: 18px;
    color: #495060;
    transform: translateY(16px);
  }
  i{
    margin-left: 290px;
    display: block;
    background: url(../../../src/assets/xxy-img/icon/ribbon.png) no-repeat center;
    width: 655px;
    height: 43px;
  }
}
</style>
