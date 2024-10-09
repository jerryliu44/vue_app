<template>
  <div class="code-input-block" :class="{ shake: isShaking }">
    <div class="code-header" :style="{ marginBottom: isCodeVisible ? '8px' : '0' }">
      <div class="button close"></div>
      <div class="button minimize"></div>
      <div class="button maximize"></div>
      <span class="language-label" style="margin-left: 3px;">{{ language }}</span>
      <div class="icon-container">
        <img
          v-if="!copySuccess"
          src="/images/复制.png"
          alt="Copy"
          class="copy-button"
          @click="copyToClipboard"
        />
        <img
          v-if="copySuccess"
          src="/images/复制成功.png"
          alt="Success"
          class="copy-button success"
        />
        <img
          src="/images/下拉.png"
          alt="Dropdown"
          class="copy-button second-icon"
          @click="toggleCodeBlock"
          :class="{ 'rotate': !isCodeVisible }"
        />
      </div>
    </div>
    <transition name="fade">
      <div v-if="isCodeVisible">
        <textarea
          v-model="codeInput"
          :placeholder="placeholder"
          :rows="rows"
          style="width: 100%; margin-top: 10px; border: 1px solid #ccc; border-radius: 4px; padding: 10px; resize: none;"
          @input="updateHighlightedCode"
        >
        <pre>
          <code v-html="highlightedCode"></code>
        </pre>
        </textarea>
      </div>
    </transition>
  </div>
</template>
  
  <script>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-python.min.js'; // 导入 Python 语言支持
  import 'prismjs/themes/prism-okaidia.css'; // 使用 Okaidia 主题
  
  export default {
    props: {
      language: {
        type: String,
        default: 'JavaScript', // 默认代码语言
      },
      placeholder: {
        type: String,
        default: '在此输入您的代码...', // 默认提示文本
      },
      rows: {
        type: Number,
        default: 10, // 默认行数
      },
    },
    data() {
      return {
        isCodeVisible: true, // 控制代码块显示与隐藏的状态
        copySuccess: false, // 控制复制成功状态
        codeInput: '', // 用户输入的代码
        isShaking: false, // 控制抖动状态
      };
    },
    computed: {
        highlightedCode() {
            const languageKey = this.language.toLowerCase(); // 转换为小写语言名称
            return Prism.highlight(this.codeInput, Prism.languages[languageKey], languageKey);
        },
    },
    methods: {
      updateHighlightedCode() {
        this.$nextTick(() => {
          const textarea = this.$el.querySelector('textarea');
          const codeContainer = this.$el.querySelector('code');
          if (textarea && codeContainer) {
            codeContainer.style.height = `${textarea.scrollHeight}px`;
          }
        });
      },
      copyToClipboard() {
        navigator.clipboard.writeText(this.codeInput).then(() => {
          console.log('代码已复制到剪贴板');
          this.copySuccess = true; // 设置复制成功状态
          setTimeout(() => {
            this.copySuccess = false; // 1秒后重置状态
          }, 1000);
        });
      },
      toggleCodeBlock() {
        this.isCodeVisible = !this.isCodeVisible; // 切换代码块的显示状态
      },
      getValue() {
        return this.codeInput;
      },
      clearContent() {
        this.codeInput = ''; // 将 codeInput 设为空字符串
        this.updateHighlightedCode(); // 更新高亮显示
      },
      // 新增：触发抖动效果
      shakeBlock() {
        this.isShaking = true; // 设置抖动状态为 true
        setTimeout(() => {
          this.isShaking = false; // 在0.5秒后重置状态
        }, 500);
      },
    },
  };
  </script>
  
  <style scoped>
  .code-input-block {
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
    align-items: center; /* 垂直居中对齐 */
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
  
  .language-label {
    color: #fff; /* 代码类型文本颜色 */
    font-weight: bold; /* 加粗 */
  }
  
  .icon-container {
    display: flex; /* 使图标容器成为 flexbox */
    gap: 5px; /* 设置图标之间的间距 */
    margin-left: auto; /* 将图标容器推到右侧 */
  }
  
  .copy-button {
    width: 18px; /* 设置图片宽度 */
    height: auto; /* 高度自适应 */
    cursor: pointer; /* 鼠标悬停效果 */
    transition: opacity 0.3s ease, transform 0.3s ease; /* 添加过渡效果 */
  }
  
  .success {
    /* 可以添加一些成功状态的样式，比如放大等效果 */
    transform: scale(1.1); /* 成功状态稍微放大 */
  }
  
  .second-icon {
    transition: transform 0.3s ease; /* 添加过渡效果 */
  }
  
  .rotate {
    transform: rotate(-90deg); /* 逆时针旋转 90 度 */
  }
  
  textarea {
    margin: 0;
    overflow: auto;
    white-space: pre-wrap; /* 允许文本换行 */
    word-wrap: break-word; /* 允许单词换行 */
    padding: 8px; /* 内边距 */
    padding-bottom: 30px;
    user-select: text; /* 允许文本选择 */
    background-color: #2e2e2e; /* 背景色 */
    color: #fff; /* 文本颜色 */
    border: 1px solid #555; /* 边框颜色 */
  }
  
  /* 添加淡入淡出效果 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0s; /* 设置过渡时间 */
  }
  .fade-enter, .fade-leave-to /* (可以使用 .fade-leave-active 代替) */ {
    opacity: 0; /* 在进入和离开时的透明度 */
  }

  /* 添加抖动动画 */
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
  }

  /* 绑定抖动效果的类 */
  .shake {
    animation: shake 0.5s;
  }
  
  
  </style>