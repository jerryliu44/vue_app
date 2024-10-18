<template>
  <div>
    <div class="scene">
      <div class="glass-sphere">
        <div class="polyhedron">
          <!-- 动态生成128个面，每个面围绕中心旋转 -->
          <div
            v-for="(url, index) in facesArray"
            :key="index"
            class="polyhedron-face"
            :style="generateFaceStyle(index)"
          >
            <!-- 如果需要，可以将 iframe 引入每个面 -->
            <iframe v-if="url" :src="url" frameborder="0"></iframe>
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
  },
  data() {
    return {
      faceCount: 128, // 多面体的总面数
      radius: 250, // 增大球体的半径
    };
  },
  computed: {
    facesArray() {
      // 如果传入的 iframe 链接少于 128 个，用空白填充
      return [...this.iframeUrls, ...Array(this.faceCount - this.iframeUrls.length).fill("")];
    },
  },
  methods: {
    // 生成每个面的位置和旋转，使它们指向公共中心
    generateFaceStyle(index) {
        const goldenRatio = (1 + Math.sqrt(5)) / 2; // 黄金分割比
        const increment = Math.PI * 2 * goldenRatio; // 计算增量

        // 使用黄金分割来计算面的位置
        const theta = Math.acos(1 - (2 * (index + 0.5)) / this.faceCount); // 垂直角度
        const phi = increment * index; // 水平角度

        // 基于多面体的半径，计算每个面的三维位置
        const x = this.radius * Math.sin(theta) * Math.cos(phi);
        const y = this.radius * Math.sin(theta) * Math.sin(phi);
        const z = this.radius * Math.cos(theta);

        // 计算每个面指向中心的旋转
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
  /* overflow: hidden; */
}

.polyhedron {
  width: 0px;
  height: 0px;
  bottom: 50%; 
  right: 50%; 
  position: absolute;
  transform-style: preserve-3d;
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

.polyhedron-face iframe {
  width: 100%;
  height: 100%;
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
