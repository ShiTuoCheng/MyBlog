<template>
  <div id="app">
    <v-header></v-header>
    <div class="clear"></div>
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

  .clear{

    clear: both;
  }
}
</style>
