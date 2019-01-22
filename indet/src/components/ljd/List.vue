<template>
    <div id="list">
      <Headnav></Headnav>
      <Headsearch></Headsearch>
      <Footer></Footer>
    </div>
</template>

<script>
import Headsearch from '@/components/ljd/Headsearch'
import Headnav from '@/components/ljd/Headnav'
import Footer from '@/components/ljd/Footer'
export default {
  name: 'List',
  components: {
    Headnav, Headsearch, Footer
  }
}
</script>

<style scoped>
</style>
