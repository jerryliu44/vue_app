// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    isLoading: false,
    theme: getCookie('themeState') || 'Light'
  },
  mutations: {
    setLoading(state, status) {
      state.isLoading = status;
    },
    setTheme(state, theme) {
      state.theme = theme;  // 更新主题状态
    }
  },
  actions: {
    showLoading({ commit }) {
      commit('setLoading', true);
    },
    hideLoading({ commit }) {
    //   setTimeout(() => {
    //     commit('setLoading', false);
    //   }, 3000); // 这里的300毫秒是消失时间，你可以根据需要调整
        commit('setLoading', false);
    },
    
    updateTheme({ commit }, theme) {
      commit('setTheme', theme);  // 更新主题状态
      setCookie('themeState', theme, 365);  // 更新 cookie
    }
  }
});

// 主题cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}