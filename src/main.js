import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import './assets/styles/main.scss';
import '../src/assets/static/css/style.css';
import '../src/assets/static/css/root.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
