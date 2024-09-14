import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/404.vue'; // 404 页面组件

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
      component: NotFound
    }
  ]
});

export default router;

