<template>
  <div>
    <div class="scene">
      <div class="glass-sphere">
        <div class="polyhedron" :class="{ rotating: isRotating }">
          <!-- 动态生成256个面，每个面围绕中心旋转 -->
          <div
            v-for="(url, index) in facesArray"
            :key="index"
            class="polyhedron-face"
            :style="generateFaceStyle(index)"
          >
            <img v-if="url" :src="url" alt="face image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iframeUrls: {
      type: Array,
      required: true,
    },
    isRotating: { // 新增的属性，控制旋转状态
      type: Boolean,
      default: true, // 默认旋转
    },
  },
  data() {
    return {
      faceCount: 256, // 多面体的总面数
      radius: 315, // 增大球体的半径
    };
  },
  computed: {
    facesArray() {
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
}

.polyhedron {
  width: 0px;
  height: 0px;
  bottom: 50%;
  right: 50%;
  position: absolute;
  transform-style: preserve-3d;
}

/* 只有在 isRotating 为 true 时才应用旋转动画 */
.polyhedron.rotating {
  animation: rotate 10s infinite linear; /* 整体旋转动画 */
}

.polyhedron-face {
  position: absolute;
  width: 50px; /* 调整面的大小，确保不超出球体边界 */
  height: 50px; /* 调整面的大小，确保不超出球体边界 */
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 2;
}

.polyhedron-face img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片不失真地填充面 */
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
