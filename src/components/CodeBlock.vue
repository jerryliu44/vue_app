<template>
    <div class="code-block">
      <div class="code-header">
        <div class="button close"></div>
        <div class="button minimize"></div>
        <div class="button maximize"></div>
      </div>
      <pre><code class="language-javascript" ref="code">{{ code }}</code></pre>
    </div>
  </template>

  
<script>

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // 使用 Okaidia 主题

  
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  mounted() {
    Prism.highlightElement(this.$refs.code); // 对代码块进行高亮
  },
};
</script>
  
  <style scoped>
  .code-block {
    background-color: #2e2e2e;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    position: relative;
    padding: 16px;
  }
  
  .code-header {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }
  
  .button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
  }
  
  .button.close {
    background-color: #ff5f56;
  }
  
  .button.minimize {
    background-color: #ffbd2e;
  }
  
  .button.maximize {
    background-color: #27c93f;
  }
  
  pre {
    margin: 0;
    overflow: auto;
    white-space: pre-wrap; /* 允许文本换行 */
    word-wrap: break-word; /* 允许单词换行 */
    padding: 8px; /* 内边距 */
  }
  </style>