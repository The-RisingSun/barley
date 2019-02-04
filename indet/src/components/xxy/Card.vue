<template>
  <div id="card">
    {{test}}
  </div>
</template>
<script>
export default {
  name: 'Card',
  data () {
    return {

    }
  },
  computed: {
    test () {
      return this.$store.state.info
    }
  }
}
</script>
<style scoped>

</style>
