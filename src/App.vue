<template>
  <div id="app">
    <v-header></v-header>
    <transition  :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import vHeader from './components/Header'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

export default {
  name: 'App',
  components: {
    vHeader
  },

  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="less">
@import './css/userControl.less';
@import './css/github-markdown.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;

  .slide-left-enter-active{
        transition: transform .5s;
        transform-origin: right;
  }
  .slide-left-leave-active{
        transition: transform .5s;
        transform-origin: left;
  }
  .slide-left-enter, .slide-left-leave-active {
        transform: scale(0,1);
  }

  .slide-right-enter-active{
        transition: transform .5s;
        transform-origin: left;
  }
  .slide-right-leave-active{
        transition: transform .5s;
        transform-origin: right;
  }
  .slide-right-enter, .slide-right-leave-active {
        transform: scale(1,0);
  }

  .c-header{
    float: left;
  }

}
</style>
