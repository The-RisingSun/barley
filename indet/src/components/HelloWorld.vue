<template>
  <div class="hello">
    11111111
    <router-link to="/list">list</router-link>
    <router-link to="/detail">detail</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello{
    color: red;
    a{
      color: red;
    }
  }
</style>
