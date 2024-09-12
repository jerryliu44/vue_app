<template>
    <div v-if="isLoading" id="loading">
      <div id="loading-center"></div>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // 当页面加载完成后，设置动画消失
    window.addEventListener('load', this.hideLoading);
  },
  beforeDestroy() {
    // 清理事件监听
    window.removeEventListener('load', this.hideLoading);
  },
  methods: {
    hideLoading() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }
};
</script>
  
<style scoped>
/* 加载界面圆点动画 */
#loading {
  background: radial-gradient(white, #d8eaff);
  background-size: 100%;
  background-position: center;

  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 999999;
  margin-top: 0px;
  top: 0px;
  pointer-events: none;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#loading-center {
    height: 150px;
    width: 150px;
    position: relative;
    border-radius: 50%;
    background: #472eff;

    animation: zoom 1s linear infinite;
}

@keyframes zoom {
  0% {
      transform: scale(0);
      opacity: 1;
  }

  50% {
      opacity: 0.5;
  }

  100% {
      transform: scale(1);
      opacity: 0;
  }
}
</style>