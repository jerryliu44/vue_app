项目结构
css
复制代码
my-vue-app/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── iconfont/
│   │   │   └── iconfont.css
│   │   └── styles/
│   │       └── main.scss
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   │   └── About.vue
│   ├── App.vue
│   └── main.js
├── .gitignore
├── package.json
└── vue.config.js


public/index.html
html
复制代码
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Vue App</title>
  <link rel="icon" href="./favicon.ico">
</head>
<body>
  <div id="app"></div>
</body>
</html>




src/main.js
javascript
复制代码
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');




src/App.vue
html
复制代码
<template>
  <div id="app">
    <header>
      <h1>My Vue App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';

header {
  background-color: #42b983;
  color: white;
  padding: 1rem;
  text-align: center;

  nav {
    margin-top: 1rem;

    a {
      color: white;
      margin: 0 1rem;
      text-decoration: none;
    }
  }
}

main {
  padding: 2rem;
}
</style>




src/router/index.js
javascript
复制代码
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});




src/store/index.js
javascript
复制代码
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Define your state variables here
  },
  mutations: {
    // Define your mutations here
  },
  actions: {
    // Define your actions here
  },
  getters: {
    // Define your getters here
  },
});





src/views/Home.vue
html
复制代码
<template>
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the home page.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>




src/views/About.vue
html
复制代码
<template>
  <div>
    <h2>About Page</h2>
    <p>This is the about page.</p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>





src/assets/styles/main.scss
scss
复制代码
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  text-align: center;
}





vue.config.js
javascript
复制代码
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your API server
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
      },
    },
  },
};




package.json
json
复制代码
{
  "name": "my-vue-app",
  "version": "1.0.0",
  "main": "src/main.js",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "vue": "^2.6.14",
    "vue-router": "^3.5.3",
    "vuex": "^3.6.2"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.5.15",
    "@vue/cli-plugin-eslint": "^4.5.15",
    "@vue/cli-service": "^4.5.15",
    "eslint": "^7.32.0",
    "eslint-plugin-vue": "^7.21.1"
    <!-- "node-sass": "^4.14.1",
    "sass-loader": "^7.1.0" -->
  },
  "browserslist": {
    "production": [
      ">1%",
      "last 2 versions",
      "not dead"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
这个框架提供了一个基本的 Vue 项目设置，包括 Vue Router 和 Vuex 的配置。你可以根据需要进一步扩展和调整它。