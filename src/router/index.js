import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store'; // 引入 Vuex store


// 直接加载
import Home from '../views/Home.vue';

// 按需加载
const NotFound = () => import('../views/404.vue');
const Laboratory = () => import('../views/Lab.vue');
const ScriptRepository = () => import('../views/ScriptRepository.vue');
const HotNews = () => import('../views/HotNews.vue');

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
      path: '/news',
      name: 'HotNews',
      component: HotNews
    },
    {
      path: '*', // 捕捉所有未匹配的路径
      name: 'NotFound',
      component: NotFound
    }
  ]
});



router.beforeEach((to, from, next) => {
  // 页面导航开始时显示加载界面
  store.dispatch('showLoading');
  next();
  // setTimeout(() => { next(); }, 500); 延时导航
});

router.afterEach((to, from) => {
  const hideLoadingWithDelay = () => {

    store.dispatch('hideLoading');
    
    // setTimeout(() => { store.dispatch('hideLoading'); }, 500); 延时隐藏
  };

  if (document.readyState === 'complete') {
    hideLoadingWithDelay();
  } else {
    // 页面还未加载完成时，监听 load 事件
    const onLoad = () => {
      hideLoadingWithDelay();
      window.removeEventListener('load', onLoad); // 只监听一次
    };
    window.addEventListener('load', onLoad);
  }
});

export default router;
