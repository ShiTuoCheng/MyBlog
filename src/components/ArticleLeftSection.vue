<template>
  <section class="article-left" :style="{height: leftHeight+'px'}" :class="{leftArticle: isFold}">
    <ul class="article-left-list">
      <li class="article-left-item" v-for="articleItem in articleList" :key="articleItem.index">
        {{articleItem}}
      </li>
    </ul>
  </section>
</template>
<script>
import 'whatwg-fetch';

export default {
  name: 'articleLeftSection',
  data(){
    return {
      articleList: [],
      leftHeight: 0,
      isFold: false
    }
  },

  created() {

    this.$http.get('../../static/titleData.json')
    .then(res => this.articleList = res.data.article.map(v => v.title))
    .then(() => setTimeout(() => this.leftHeight = window.innerHeight, 1000))
    .then(() => setTimeout(() => this.isFold = true, 2000));
  }
}
</script>
<style lang="less" scoped>

.article-left{

  position: fixed;
  background-color: #f0f0f0;
  left: 0;
  top: 60px;
  transition: all .5s;

  &-list{

    display: inline-block;
    height: inherit;
    overflow: hidden;
    font-size: 0;
    margin: 16px;
  }

  &-item{

    font-size: 14px;
    margin: 10px 0;
    cursor: pointer;
  }
}

.leftArticle{

  left: -500px;
}
</style>

