<template>
  <div class="box">
    <PersonalPuslt></PersonalPuslt>
  </div>
</template>

<script>
import PersonalPuslt from './PersonalPuslt'
export default {
  name: 'PersonOrder',
  components: {
    PersonalPuslt
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
