<template>
  <header class="c-header" :class="{innerHeader: floatHeader}">
    <div class="wrapper">
      <nav class="c-header-nav">
        <li class="c-header-nav-item" v-for="(navItem, index) in navList" :to="navItem.url" :key="navItem.title" @click="clickNav(navItem.url, index)" :class="{selected: navSel === navItem.url}">
          {{ navItem.title }}
          <div class="c-header-bar"></div>
        </li>
      </nav>
    </div>
  </header>
</template>
<script>
import router from 'vue-router';

export default {
  name: 'c-header',
  data () {
    return {
      floatHeader: false,
      match: false,
      navSel: null,
      navList: [
            {
              title: 'STC',
              url: '/'
            },

            {
              title: 'ARTICLES',
              url: 'article'
            },

            {
              title: 'MEMORIES',
              url: 'memory'
            },

            {
              title: 'ABOUT',
              url: 'aboutMe'
            },
            
            {
              title: 'CONTACT',
              url: 'contactMe'
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

  created() {
    this.floatHeader = (this.$route.path !== '/') ? true: false;
  },

  methods: {
    clickNav: function(eve, i) {
      this.$router.push(eve);
      this.navSel = eve;

      // this.floatHeader = (i !== 0) ?  true :  false;
      this.floatHeader = (this.$route.path !== '/') ? true: false;
    }
  }
}
</script>
<style lang="less" scoped>
.c-header{
  position: fixed;
  float: left;
  z-index: 10;
  padding: 20px 0 0 20px;
  background: white;
  width: 100%;
  top: 0;
  transition: all .7s;

  .wrapper{
    min-width: 1200px;
    width: 1200px;
    margin: 0;
  }

  &-nav{
    transition: all .7s;
  }

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

.innerHeader{
  .c-header{
    padding: 0;
  }
  .c-header-nav{
    transform: translateX(30%);
  }
}
</style>
