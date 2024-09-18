<template>
  <div class="ScriptRepository-page">
    <el-button type="primary">Primary Button</el-button>
  </div>
</template>

<script>
// 按需引入 Element UI 的 Button 组件
import { Button } from 'element-ui';

export default {
  name: 'ScriptRepository',
  components: {
    'el-button': Button, // 注册 Button 组件
  },
};
</script>

<style scoped>
.ScriptRepository-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    backdrop-filter: blur(19px);
    -webkit-backdrop-filter: blur(19px); /* 兼容 Safari */
    background-color: rgba(0, 0, 0, 0.3); /* 半透明黑色背景 */
}
</style>