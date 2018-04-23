<template>

  <section class="article-detail">
    <article id="article-detail-content" class="markdown-body">
    </article>
  </section>
</template>
<script>
export default {
  name: 'ArticleDetail',
  data() {
    return {
      PATH: '',
      article: null,
      data: []
    }
  },
  // 实现的太low了
  created() {
    // to-do 待解决

    // console.log(this.$router);

    this.PATH = this.$router.history.current.params.path;

    this.data.push(require('../../static/articles/equal.md')); // 0
    this.data.push(require('../../static/articles/eventLoop.md')); // 1
    this.data.push(require('../../static/articles/execution.md')); //2
    this.data.push(require('../../static/articles/http.md')); //3
    this.data.push(require('../../static/articles/jsContext.md')); //4
    this.data.push(require('../../static/articles/opz_css_js.md')); //5
    this.data.push(require('../../static/articles/param.md')); //6
    this.data.push(require('../../static/articles/perfectionkills_js_quiz.md')); //7
    this.data.push(require('../../static/articles/scope.md')); //8
    this.data.push(require('../../static/articles/quizeAnswer.md')); //9
    this.data.push(require('../../static/articles/webStorage.md')); // 10

    console.log(document.getElementById('article-detail-content'))
  },

  mounted() {

    if(this.PATH === '../../static/articles/equal.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[0];
    }else if(this.PATH === '../../static/articles/eventLoop.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[1];
    }else if(this.PATH === '../../static/articles/execution.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[2];
    }else if(this.PATH === '../../static/articles/http.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[3];
    }else if(this.PATH === '../../static/articles/jsContext.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[4];
    }else if(this.PATH === '../../static/articles/opz_css_js.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[5];
    }else if(this.PATH === '../../static/articles/param.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[6];
    }else if(this.PATH === '../../static/articles/perfectionkills_js_quiz.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[7];
    }else if(this.PATH === '../../static/articles/scope.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[8];
    }else if(this.PATH === '../../static/articles/quizeAnswer.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[9];
    }else if(this.PATH === '../../static/articles/webStorage.md'){
      document.getElementById('article-detail-content').innerHTML = this.data[10];
    }
  }
}
</script>
<style lang="less" scoped>

.article-detail{
  position: absolute;
  top: 120px;
  width: 1150px;
  min-width: 1150px;
  margin: 0 auto;
  background-color: #eeeeee;

    padding: 20px;

  &-content{
    width: 1150px;
    margin: 0 auto;
  }
}
</style>
