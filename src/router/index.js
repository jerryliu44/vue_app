import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/404.vue'; // 404 页面组件
import store from '@/store'; // 引入 Vuex store

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: () => import('../views/About.vue')
    },
    {
      path: '*', // 捕捉所有未匹配的路径
      name: 'NotFound',
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch('showLoading'); // 显示加载动画
  next();
});

router.afterEach((to, from) => {
  store.dispatch('hideLoading'); // 隐藏加载动画
});

export default router;
