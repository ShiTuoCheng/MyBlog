/*jshint esversion:6 */
import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/index';
import Article from '../pages/article';
import ArticleDetail from "../pages/articleDetail";
import AboutMe from "../pages/aboutMe";

Vue.use(Router);

export default new Router(
  {
    routes: [
      {
        path: '/',
        component: Index
      },

      {
        path: '/article',
        component: Article
      },

      {
        path: '/articleDetail',
        name: 'articleDetail',
        component: ArticleDetail
      },

      {
        path: '/aboutMe',
        name: 'aboutMe',
        component: AboutMe
      }
    ]
  }
);
