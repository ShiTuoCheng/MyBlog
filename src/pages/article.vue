<template>
  <section class="article wrapper">
    <ul class="article-list">
      <transition-group name="list">
        <li class="article-list-item" v-for="(titleItem, index) in titleList" :key="index">{{titleItem}}</li>
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
  transform: translateX(10%);

  &-list{
    text-align: center;
    margin-top: 70px;

    &-item:hover {

        box-shadow: 0px 0px 5px #b2b2b2;
    }

    &-item{

      height: 50px;
      line-height: 50px;
      text-align: center;
      width: 100%;
      border-radius: 10px;
      margin-top: 5px;
      border: 1px solid #e6e6e6;
      cursor: pointer;
      transition: all .7s;
    }
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
