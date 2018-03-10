<template>
  <section class="article wrapper">
    <ul class="article-list">
      <transition-group name="list">
        <li v-for="(titleItem, index) in titleList" :key="index">{{titleItem}}</li>
      </transition-group>
    </ul>
  </section>
</template>
<script>

export default {
  name:'articlePage',
  data() {
    return {
      titleList:[]
    }
  },

  created() {

    this.$http.get('../../static/titleData.json').then((res) => this.titleList = res.data.articleTitle);
  }
}
</script>
<style lang="less" scoped>
.article, .wrapper{
  float: left;

  &-list{
    margin: 0 auto;
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(100px);
}
</style>
