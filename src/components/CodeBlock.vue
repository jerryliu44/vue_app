<template>
  <div class="code-block">
    <div
      class="code-header"
      :style="{ marginBottom: isCodeVisible ? '8px' : '0' }"
    >
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
      <pre v-if="isCodeVisible"><code :class="`language-${language.toLowerCase()}`" ref="code">{{ code }}</code></pre>
    </transition>
  </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-python.min.js'; // 导入 Python 语言支持
import 'prismjs/themes/prism-okaidia.css'; // 使用 Okaidia 主题

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
    language: { // 添加 language 属性
      type: String,
      default: 'JavaScript', // 默认代码语言
    },
  },
  data() {
    return {
      isCodeVisible: true, // 控制代码块显示与隐藏的状态
      copySuccess: false, // 控制复制成功状态
    };
  },
  mounted() {
    Prism.highlightElement(this.$refs.code); // 对代码块进行高亮
  },
  methods: {
    copyToClipboard() {
      const code = this.code; // 获取代码
      navigator.clipboard.writeText(code).then(() => {
        console.log('代码已复制到剪贴板');
        this.copySuccess = true; // 设置复制成功状态
        setTimeout(() => {
          this.copySuccess = false; // 1秒后重置状态
        }, 1000);
      });
    },
    toggleCodeBlock() {
      this.isCodeVisible = !this.isCodeVisible; // 切换代码块的显示状态
      // 如果代码块变为可见，重新高亮
      if (this.isCodeVisible) {
        this.$nextTick(() => {
          Prism.highlightElement(this.$refs.code); // 重新高亮代码
        });
      }
    },
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

pre {
  margin: 0;
  overflow: auto;
  white-space: pre-wrap; /* 允许文本换行 */
  word-wrap: break-word; /* 允许单词换行 */
  padding: 8px; /* 内边距 */
  padding-bottom: 30px;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 4px; /* 设置滚动条的宽度 */
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #888; /* 滚动条的颜色 */
  border-radius: 16px; /* 设置圆角 */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* 鼠标悬停时的颜色 */
}

::-webkit-scrollbar-track {
  background: transparent; /* 滚动条轨道的背景 */
}

code {
  font-size: 14px; /* 调整字体大小 */
  font-weight: 100;
}

/* 添加淡入淡出效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0s; /* 设置过渡时间为 0 秒 */
}
.fade-enter, .fade-leave-to /* (可以使用 .fade-leave-active 代替) */ {
  opacity: 0; /* 在进入和离开时的透明度 */
}
</style>
