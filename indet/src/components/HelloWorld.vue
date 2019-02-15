<template>
  <div class="hello">
    11111111
    <router-link to="/list">list</router-link>
    <router-link to="/detail">detail</router-link>
    <div class="tabs">
      <ul class="tab">
        <li @click="left()">Nihao</li>
        <li>Hello</li>
      </ul>
      <div class="cont">
        <transition name="move">
          <article>
            11111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111
            11111111111111111111222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222
          </article>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      index: 0
    }
  },
  methods: {
    // left () {}
  }
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
  .tabs {
    .tab{
      text-align: center;
      width: 1200px;
      margin: 0 auto;
      border: 1px solid #000;
      overflow: hidden;
      li{
        width: 100px;
        height: 50px;
        line-height: 50px;
        float: left;
        border-right: 1px solid #000;
        &.transite{
          transition: all .5s linear;
        }
      }
    }
    .cont{
      width: 1200px;
      margin: 0 auto;
      border: 1px solid #000;
      border-top: none;
      overflow: hidden;
      article{
        width: 2400px;
        height: 200px;
        line-height: 200px;
      }
    }
  }
 /* .transitionName-enter-active, .transitionName-leave-active {
    transition: opacity .3s ease;
  }
  .transitionName-enter-to, .transitionName-leave-to
    !* .component-fade-leave-active for below version 2.1.8 *! {
    opacity: 0;
  }*/
.move-transition{
  opacity: 1;
  transform: translate3d(0,0,0);
}
.move-enter-active,.move-leave-active{
  opacity: 0;
  transform: translate3d(5px,0,0);
 }
</style>
