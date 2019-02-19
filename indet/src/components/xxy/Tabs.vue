<template>
  <div id="tabs">
    <ul id="tab">
      <router-link to="/" tag="li" exact active-class="active">首页</router-link>
      <router-link to="/sports" tag="li" exact active-class="active">体育</router-link>
      <router-link to="/dance" tag="li" exact active-class="active">舞蹈古典</router-link>
      <router-link to="/children" tag="li" exact active-class="active">亲子</router-link>
      <router-link to="/rock" tag="li" exact active-class="active">摇滚</router-link>
      <router-link to="/drama" tag="li" exact active-class="active">戏剧</router-link>
      <router-view></router-view>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Tabs'
}
</script>
<style scoped lang="less">
  #tab{
    background: #fff;
    cursor:pointer;
    width: 1200px;
    height: 48px;
    margin: 0 auto;
    line-height: 48px;
    li{
      float: left;
      font-size: 12px;
      padding: 0 30px;
      &.active {
        background: red;
        color: #fff
      }
    }
}
</style>
