<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/Header'

export default {
  name: 'App',
  components: {
    vHeader
  }
}
</script>

<style lang="less">
@import './css/userControl.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;

  .c-header{
    float: left;
  }

}
</style>
