<template>
  <div id="demo">
    <div id="tab">
      <ul class="tabs">
        <li @click="move1">
          leftSlide
        </li>
        <li @click="move2">
          rightSlide
        </li>
      </ul>
      <div class="wrap">
        <transition-group  tag="ul" class="sports">
          <li v-for="item in items" v-bind:key="item.id">
            {{ item.text }}
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
let items = [
  {
    'id': '你好',
    'text': '你好a'
  },
  {
    'id': '我不好',
    'text': '我不好a'
  }
]
export default {
  name: 'Headcomp',
  data () {
    return {
      show: true,
      items,
      moveObj: '',
      disabled: false
    }
  },
  methods: {
    move1 () {
      // this.show = !this.show
      const leftMove = $('.sports')
      console.log(leftMove)
      if (this.show === true) {
        if (!leftMove.is(':animated')) {
          leftMove.animate({}, function () {
            leftMove.css({'left': '-200px'})
          })
          this.show = false
        }
      }
    },
    move2 () {
      const leftMove = $('.sports')
      if (this.show === false) {
        if (!leftMove.is(':animated')) {
          leftMove.animate({}, function () {
            leftMove.css({'left': '0px'})
          })
          this.show = true
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
#tab{
  width: 204px;
  height: 400px;
  margin: 0 auto;
  border: 1px solid blue;
  overflow: hidden;
  .tabs{
    width: 100%;
    li{
      float: left;
      width: 100px;
      height: 100px;
      border: 1px solid yellow;
    }
  }
  .wrap {
    width: 200px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid blue;
    overflow: hidden;
    .sports{
      width: 430px;
      height: 400px;
      margin: 0 auto;
      position: relative;
      left:0;
      transition: left .5s linear;
      background-color: red;
      li{
        width: 200px;
        height: 100%;
        float: left;
      }
    }
  }
}
</style>
