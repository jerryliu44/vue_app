// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    setLoading(state, status) {
      state.isLoading = status;
    }
  },
  actions: {
    showLoading({ commit }) {
      commit('setLoading', true);
    },
    hideLoading({ commit }) {
      // 在 Vuex actions 中添加延时逻辑
      setTimeout(() => {
        commit('setLoading', false);
      }, 3000); // 这里的300毫秒是消失时间，你可以根据需要调整
    }
  }
});
