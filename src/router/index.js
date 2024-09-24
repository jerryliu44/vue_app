import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store'; // 引入 Vuex store


// 直接加载
import Home from '../views/Home.vue';

// 按需加载
const NotFound = () => import('../views/404.vue');
const Laboratory = () => import('../views/Lab.vue');
const ScriptRepository = () => import('../views/ScriptRepository.vue');

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/scripts',
      name: 'ScriptRepository',
      component: ScriptRepository
    },
    {
      path: '/lab',
      name: 'Laboratory',
      component: Laboratory
    },
    {
      path: '*', // 捕捉所有未匹配的路径
      name: 'NotFound',
      component: NotFound
    }
  ]
});


router.afterEach((to, from) => {
  if (document.readyState === 'complete') {
    // 页面已经加载完成时直接隐藏
    store.dispatch('hideLoading');
  } else {
    // 页面还未加载完成时，监听 load 事件
    const onLoad = () => {
      store.dispatch('hideLoading');
      window.removeEventListener('load', onLoad); // 只监听一次
    };
    window.addEventListener('load', onLoad);
  }
});


export default router;
