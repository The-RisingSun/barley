<template>
    <div id="big-img">
      <div class="img-group">
        <img v-lazy=src1 alt="">
        <div class="hide">
          <p>候化包物入面市业技处相县百离定三周在</p>
          <p>
            <span>700</span>元
          </p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'BigImg',
  data () {
    return {
    }
  },
  props: ['src1', 'src2', 'src3']
}
</script>

<style scoped>

</style>
