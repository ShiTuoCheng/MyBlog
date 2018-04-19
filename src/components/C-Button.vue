<template>
  <div class="c-article-more-btn" @click="open()"><p class="btn-font">More</p><div class="btn-arrow"></div></div>
</template>

<script>
export default {
  name: 'c-button',
  props: ['articlePath'],

  methods: {

    open() {
      // this.$router.push('articleDetail');
      console.log(this.articlePath);
    }
  }
}
</script>

<style lang="less" scoped>
.c-article-more-btn{

  border-radius: 15px;
  display: inline-block;
  position: absolute;
  background-color: lightseagreen;
  width: 70px;
  height: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 10px lightgray;
  bottom: 0;
  left: 50%;
  transform: translateX(50%);
  margin-left: -60px;

  .btn-font{

    text-align: center;
    float: left;
    line-height: 30px;
    color: white;
    font-weight: bolder;
    transition: all .5s;
    margin-left: 15px;
  }

  .btn-arrow{
    width: 5px;
    height: 5px;
    border-right: 2px solid white; 
    border-bottom: 2px solid white;
    transform: rotate(-45deg);  
    float: right;
    display: none;
    margin-top: 12px;
    margin-right: 8px;
    transition: all 1s;
  }

  &:hover{
    .btn-font{
      transform: translateX(-5px);
    }

    .btn-arrow{
      display: block;
    }
  }
}
</style>

