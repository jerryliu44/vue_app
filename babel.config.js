// babel.config.js
module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset', // 使用 Vue CLI 提供的 Babel 预设，专门为 Vue 项目配置的 Babel 转换规则
    ],
    plugins: [
      [
        'component',
        {
          libraryName: 'element-ui',  // 这是 Element UI 组件库的名称
          styleLibraryName: 'theme-chalk',  // 这是 Element UI 的样式库
        },
      ],
    ],
  };
  