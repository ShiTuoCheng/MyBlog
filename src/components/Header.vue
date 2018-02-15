<template>
  <header class="c-header">
    <div class="wrapper">
      <nav class="c-header-nav">
        <router-link class="c-header-nav-item" v-for="navItem in navList" :key="navItem.title" tag="li">
          {{ navItem.title }}
          <div class="c-header-bar"></div>
        </router-link>
      </nav>

      <h1 class="c-header-title">{{ headTitle }}</h1>

      <hr>
    </div>
  </header>
</template>
<script>
export default {
  name: 'c-header',
  data () {
    return {
      navList: [
            {
              title: 'STC'
            },

            {
              title: 'ARTICLES'
            },

            {
              title: 'MEMORIES'
            },

            {
              title: 'ABOUT'
            },
            
            {
              title: 'CONTACT'
            },
      ],

      headTitle: "HI - I'M STC AND I WRITE ABOUT CODING ^.^"
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
    cursor: pointer;
    transition: color 1s;

    &:first-child{

      font-weight: bolder;
      font-size: 30px;
      margin-right: 40px;
      vertical-align: middle;
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

  &-title{

    font-weight: bolder;
    font-size: 50px;
    margin-top: 50px;
    width: 550px;
  }

  hr{

    border: 1px solid gray;
    margin-top: 30px;
    width: 60%;
  }
}
</style>
