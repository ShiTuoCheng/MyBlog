<template>
  <section class="article-detail">
    <div id="article-detail-content">
    </div>
  </section>
</template>
<script>
export default {
  name: 'ArticleDetail',
  data() {
    return {
      article: null
    }
  },

  mounted() {
    this.article = require('../../static/articles/param.md');
    document.getElementById('article-detail-content').innerHTML = this.article;
  },
}
</script>
<style lang="less" scoped>

.article-detail{
  margin-top: 100px;
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
  float: left;
  background-color: #eeeeee;

    padding: 20px;

  &-content{
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
