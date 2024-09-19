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
    'el-button': Button,
  },
};
</script>

<style scoped>
.ScriptRepository-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    backdrop-filter: blur(var(--back_filter)); 
    -webkit-backdrop-filter: blur(var(--back_filter)); 
    background-color: var(--back_filter_color); 
}
</style>