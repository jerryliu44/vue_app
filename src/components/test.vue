<template>
  <div>
    <div class="scene">
      <!-- 包裹在 transition 中 -->
      <transition name="fade">
        <div class="glass-sphere" v-show="isVisible">
          <div class="polyhedron" :class="{ rotating: isRotating }">
            <!-- <div
              v-for="(url, index) in facesArray"
              :key="index"
              class="polyhedron-face"
              :class="{ selected: selectedIndex === index }"
              :style="generateFaceStyle(index)"
              @click="selectFace(index)"
            > -->
            <div
              v-for="(url, index) in facesArray"
              :key="index"
              class="polyhedron-face"
              :class="{ selected: selectedIndex === index, expanding: expandingIndex === index }"
              :style="generateFaceStyle(index)"
              @click="selectFace(index)"
            >
              <img v-if="url" :src="url" alt="face image" />
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- 新增的按钮 -->
    <transition name="fade">
      <button v-show="isVisible" @click="selectFaceManually">点击选择页面</button>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    iframeUrls: {
      type: Array,
      required: true,
    },
    isRotating: {
      type: Boolean,
      default: true, // 默认旋转
    },
  },
  data() {
    return {
      faceCount: 256, // 多面体的总面数
      radius: 315, // 球体的半径
      selectedIndex: 1, // 记录选中的面索引
      isVisible: true, // 控制是否显示除.scene以外的部分
      expandingIndex: null, // 用于记录正在放大的面的索引
    };
  },
  computed: {
    facesArray() {
      // 确保数组长度为 faceCount，未填充的部分用空字符串补齐
      return [...this.iframeUrls, ...Array(this.faceCount - this.iframeUrls.length).fill("")];
    },
  },
  methods: {
    generateFaceStyle(index) {
      const goldenRatio = (1 + Math.sqrt(5)) / 2; // 黄金分割比
      const increment = Math.PI * 2 * goldenRatio; // 计算增量

      const theta = Math.acos(1 - (2 * (index + 0.5)) / this.faceCount); // 垂直角度
      const phi = increment * index; // 水平角度

      const x = this.radius * Math.sin(theta) * Math.cos(phi);
      const y = this.radius * Math.sin(theta) * Math.sin(phi);
      const z = this.radius * Math.cos(theta);

      return {
        transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${phi + Math.PI}rad) rotateX(${Math.PI / 2 - theta}rad)`,
      };
    },
    // 传入选择的页面
    selectFace(index) {
      this.selectedIndex = index;
      this.expandingIndex = index; // 开始放大动画
      setTimeout(() => {
        this.isVisible = false; // 动画结束后隐藏其他内容
      }, 1000); // 动画持续时间
    },
    // 手动触发选择的按钮点击事件
    selectFaceManually() {
      this.selectFace(0); // 这里假设选中第一个页面，你可以修改为其他索引
    },
    
  },
};
</script>

<style scoped>
.scene {
  width: 600px;
  height: 600px;
  perspective: 1000px;
  margin: 0 auto;
  position: relative;
}

.glass-sphere {
  width: 600px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: opacity 0.5s ease, transform 0.5s ease; /* 加入过渡效果 */
}

.polyhedron {
  width: 0px;
  height: 0px;
  bottom: 50%;
  right: 50%;
  position: absolute;
  z-index: 1;
  transform-style: preserve-3d;
}

.polyhedron.rotating {
  animation: rotate 10s infinite linear; /* 整体旋转动画 */
}

.polyhedron-face {
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 2;
  transition: transform 1s ease, width 1s ease, height 1s ease; /* 添加过渡效果 */
}

.polyhedron-face img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片不失真地填充面 */
}

/* 选中特效 */
.polyhedron-face.selected {
  border-color: #ff6347; 
  box-shadow: 0 0 10px rgba(255, 99, 71, 0.8); 
  transform: scale(1.2); 
  z-index: 3; 
  background-color: black;
}

.polyhedron-face.expanding {
  transform: scale(12) translate(-50%, -50%); /* 放大效果 */
  z-index: 10; /* 确保放大的页面在最上层 */
  width: 100vw; /* 覆盖整个屏幕宽度 */
  height: 100vh; /* 覆盖整个屏幕高度 */
  top: 50%;
  left: 50%;
}

/* 动画效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* 整体旋转动画 */
@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
