import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import './assets/styles/main.scss';

// 引入全局样式文件
// import '../src/assets/css/style.css';
// import '../src/assets/css/root.css';

Vue.config.productionTip = false;

new Vue({
  store, // 将 store 注入到 Vue 实例中
  render: h => h(App),
  router,
}).$mount('#app');
