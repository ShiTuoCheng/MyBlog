<template>
  <section class="index">
    <h1 class="index-title">{{ headTitle }}</h1>
    <v-article-bar></v-article-bar>
    <div class="index-bg" :style="{height: bgHeight + 'px'}"></div>
    <div class="clear"></div>
  </section>
</template>
<script>
import vArticleBar from '../components/ArticleBar'
export default {
  name: 'index',
  components:{
    vArticleBar
  },

  data() {
    return {

      bgHeight: 0,
      headTitle: "HI - I'M STC AND I SHARE ABOUT CODING TECHINIC ^.^"
    }
  },

  created() {
    this.bgHeight = window.innerHeight - 100;
  }
}
</script>
<style lang="less" scoped>
.index{

  .c-article{
    float: left;
  }

  &-bg{
    width: 400px;
    background-image: url('../assets/bg.png');
    background-size: cover;
    margin: 70px 0 0 800px;
  }


  &-title{

    font-weight: bolder;
    font-size: 50px;
    margin-top: 50px;
    width: 550px;
    float: left;
  }

  .clear{

    clear: both;
  }
}

</style>
