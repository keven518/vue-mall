// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods.vue';

Vue.use(VueRouter);

/* eslint-disable no-new */
let routes = [
  {path: '/', name: 'index', component: App, children: [{path: '/goods', component: goods}]}
];
let router = new VueRouter({
  'linkActiveClass': 'active',
  routes // （缩写）相当于 routes: routes
});
let app = new Vue({
  router
}).$mount('#app');
export default app;
