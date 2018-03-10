<template>
  <header class="c-header">
    <div class="wrapper">
      <nav class="c-header-nav">
        <li class="c-header-nav-item" v-for="navItem in navList" :to="navItem.url" :key="navItem.title" v-on:click="clickNav(navItem.url)" v-bind:class="{selected: navSel === navItem.url}">
          {{ navItem.title }}
          <div class="c-header-bar"></div>
        </li>
      </nav>
    </div>
  </header>
</template>
<script>
import router from 'vue-router';

const r = new router();
export default {
  name: 'c-header',
  data () {
    return {
      navSel: null,
      navList: [
            {
              title: 'STC',
              url: '/'
            },

            {
              title: 'ARTICLES',
              url: '/araticle'
            },

            {
              title: 'MEMORIES',
              url: '/memory'
            },

            {
              title: 'ABOUT',
              url: '/about'
            },
            
            {
              title: 'CONTACT',
              url: '/aboutMe'
            },
      ]
    }
  },

  computed: {
    navObj(nav) {
      return {
        'selected':this.navSel === nav
      }
    }
  },

  methods: {
    clickNav: function(eve) {
      r.replace(eve);
      this.navSel = eve;
    }
  }
}
</script>
<style lang="less" scoped>
.c-header{
  margin-top: 70px;

  &-nav-item{

    margin-right: 30px;
    color: lightgray;
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: color 1s;

    &:first-child{

      font-weight: bolder;
      font-size: 30px;
      margin-right: 40px;
      vertical-align: middle;

      .selected;
    }

    &:hover{

      color: #000;

      .c-header-bar{
        width: 100%;
      }
    }
  }

  &-bar{

    transition: width 1s;
    position: absolute;
    display: inline-block;
    height: 2px;
    width: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
  }
}

.selected{

  color: #000;

  .c-header-bar{
    width: 100%;
  }
}
</style>
