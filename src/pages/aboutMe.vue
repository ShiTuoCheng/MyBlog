<template>
  <section class="about-wrapper">
    <h1 class="about-tit">About Me</h1>
    <hr  :class="{titLine:isLoaded}">

    <h2 class="about-skill-tit">Professional Skills</h2>
    <ul class="about-list" :class="{listContent: listLoaded}">
      <li class="about-item" v-for="aboutItem in aboutList" :key="aboutItem.index">
        <span>{{aboutItem.title}}</span>
        <div class="about-item-progress" :style="{width: aboutItem.progress * '5' + 'px', background: aboutItem.color}"></div>
        <span class="about-item-percent">{{aboutItem.progress | percent}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import 'whatwg-fetch';
import {TweenMax, TimelineLite} from "gsap";

export default {
  name: 'aboutMe', 
  data() {
    return {
      // 技能列表
      aboutList: [
        {
          progress: '0',
          title: 'JavaScript'
        },
        {
          progress: '0',
          title: 'TypeScript'
        },
        {
          progress: '0',
          title: 'CSS'
        },
        {
          progress: '0',
          title: 'HTML'
        }
      ],

      // 加载入场
      isLoaded: false,

      // 列表入场
      listLoaded: false
    }
  },

  methods: {

    getSkill() {

      this.$http.get('/static/skillData.json').then(res => this.aboutList.map((v, i) => {
        v.progress = res.data.SkillData[i].progress;
        v.color = res.data.SkillData[i].color;
      }));
    }
  },

  created() {

    // 动画
    new Promise(r => {

      setTimeout(() => {
        this.isLoaded = true;
        r();
      }, 500);
    }).then(() => {
      this.listLoaded = true;
    }).then(() => {

      setTimeout(() => {

        this.getSkill(); 
      }, 1000);
    });
  },

  watch: {
    aboutList:  {
      handler(oldVal, newVal) {
        newVal.forEach((v, i) => {
          
          // TweenLite.to(this.aboutList.progress, 0.5, { this.aboutList.progress[i]: v.progress});
        });
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
.about{

  &-wrapper{
    float: left;
    margin: 120px auto;
    width: 1200px;
  }

  &-tit{

    font-size: 42px;
    border-bottom: 0;
    transition: all .5s;
  }

  &-skill-tit{

    margin: 10px 0 10px 50px;
  }

  &-list{
    margin: 10px 0 10px 60px;
    opacity: 0;
    transition: all .5s;
    margin-top: 200px;
    font-size: 0;
  }

  &-item{

    height: 20px;
    margin-top: 15px;
    width: 1200px;
    display: inline-block;

    span{

      height: 20px;
      line-height: 20px;
      display: inline-block;
      width: 100px;
      float: left;
      font-size: 16px;
    }

    &-progress {

      float: left;
      height: 20px;
      width: 0;
      margin-left: 15px;
      transition: all .5s;
      border-radius: 10px;
    }

    &-percent{

      margin-left: 30px;
    }
  }
}

hr{
  height: 3px;
  background-color: #d3d3d3;
  width: 0;
  transition: all .5s;
}

.titLine{

  width: 1200px;
}

.listContent{

  margin-top: 0;
  opacity: 1;
}

</style>
