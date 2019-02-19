<template>
  <div id="test">
    <p ref="p">淘小说</p>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Test',
  data () {
    return {
    }
  },

  mounted () {
    console.log(this.$refs.p) // 同样输出：<p data-v-56bb6bb9="" id="p">淘小说</p>
  }
}
</script>
