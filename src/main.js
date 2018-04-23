// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import router from "./router/router.js";

Vue.config.productionTip = false;

// 百分比过滤器
Vue.filter('percent', (v) => {

  if (!v) return;
  return v + '%';
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
