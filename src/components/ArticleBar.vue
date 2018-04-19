<template>
  <section class="c-article">
    <div class="wrapper">

      <div class="c-article-bar-bg"></div>
      <div class="c-article-bar" :style="{width : progressVal+'%'}"></div>

      <transition name="slide-fade">
        <ul class="c-article-list" v-if="isTrans1">
          <li class="c-article-list-item" v-for="titleItem1 in titleList1" :key="titleItem1.index">
            <p class="c-article-title">
              {{titleItem1.title}}
            </p>
            <v-button :article-path="titleItem1.path"></v-button>
          </li>
        </ul>
      </transition>

      <transition name="slide-fade">
        <ul class="c-article-list last" v-if="isTrans2">
          <li class="c-article-list-item"  v-for="titleItem2 in titleList2" :key="titleItem2.index">
            <p class="c-article-title">
              {{titleItem2.title}}
            </p>
            <v-button :article-path="titleItem2.path"></v-button>
          </li>
        </ul>
      </transition>

    </div>
  </section>
</template>

<script>
import 'whatwg-fetch';
import vButton from '../components/C-Button';

export default {
  name: "article-bar",
  components: {
    vButton
  },
  data () {
    return {

      progressVal: 0,
      isTrans1: true,
      isTrans2: false,
      titleList1: [],
      titleList2: [],
      count: 1
    }
  },

  created() {
    const timer = null;
    this.startProgress();
    this.getArticles();
  },

  computed: {
    
  },

  destroyed() {

    clearInterval(this.timer);
  },

  methods: {

    // get articles
    getArticles() {

      this.$http.get('../../static/titleData.json').then((response) => {
        this.titleList1 = response.data.article.slice(-3);
        this.titleList2 = response.data.article.slice(-6, -3);
      })
    },

    randomArr(arr) {

      for(let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      return arr;
    },


    // start progress
    startProgress() {

      this.count++;

      this.timer = setInterval(() => {
        if(this.progressVal < 70){
  
          this.progressVal++;
          if(this.count % 2 === 0){

            this.isTrans1 = false;
            this.isTrans2 = true;
          }
          else{
            this.isTrans1 = true;
            this.isTrans2 = false;
          }
        }else{

          this.progressVal = 0;
          if(this.count % 2 === 0){

            this.isTrans1 = true;
            this.isTrans2 = false;
          }
          else{
            this.isTrans1 = false;
            this.isTrans2 = true;
          }
          clearInterval(this.timer);

          setTimeout(() => {
            this.startProgress();
          }, 1000);
        } 
      }, 100);
    }
  }
}
</script>

<style lang="less" scoped>

@import "../css/userControl.less";
.c-article-title{

  width: 100%;
  text-align: center;
}
.c-article-bar, .c-article-bar-bg {

  margin-top: 100px;
  width: 0;
  height: 10px;
  border-radius: 10px;
  background-color: #F44336;
  display: inline-block;
  transition: width 1s;
  transition-timing-function: ease-in-out;
  -moz-transition: width 1s; /* Firefox 4 */
  -webkit-transition: width 1s; /* Safari 和 Chrome */
  -o-transition: width 1s; /* Opera */
  .ac;
}

.c-article-bar{
  position: absolute;
  left: 0;
}

.c-article-bar-bg {
  width: 60%;
  position: relative;
  background-color: lightgrey;
}

.c-article-list {

  width: 60%;
  display: -webkit-flex;
  margin-top: 20px;
  display: flex;
  overflow: hidden;
  &-item{

    width:30%;
    position: relative;
    margin-right: 10px;
    color: grey;
    height: 100px;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-flex-wrap: nowrap;
    text-align: center;
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
</style>


