<template>
  <div id="app">
    <v-header></v-header>
    <v-article-bar></v-article-bar>
      <div class="bg" :style="{height: bgHeight + 'px'}"></div>
    <div class="clear"></div>
  </div>
</template>

<script>
import vHeader from './components/Header'
import vArticleBar from './components/ArticleBar'

export default {
  name: 'App',
  components: {
    vHeader,
    vArticleBar
  },
  data() {
    return {

      bgHeight: 0
    }
  },

  created() {
    this.bgHeight = window.innerHeight;
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

  .c-header, .c-article{
    float: left;
  }

  .bg{
    width: 400px;
    background-image: url('./assets/bg.png');
    background-size: cover;
    margin-left: 800px;
  }

  .clear{

    clear: both;
  }
}
</style>
