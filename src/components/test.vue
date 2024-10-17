<template>
    <div>
      <button @click="toggleRotation">
        {{ isRotating ? '停止旋转' : '开始旋转' }}
      </button>
      <div class="scene">
        <div class="cube" :class="{ rotate: isRotating }">
          <!-- 使用 v-for 动态创建每个面，并传入 iframe 链接 -->
          <div v-for="(url, index) in iframeUrls" 
               :key="index" 
               :class="'cube-face cube-face--' + faces[index]">
            <iframe :src="url" frameborder="0"></iframe>
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
        validator(value) {
          return value.length === 6; // 确保传入6个iframe链接
        },
      },
    },
    data() {
      return {
        isRotating: false, // 控制立方体是否旋转
        faces: ['front', 'back', 'left', 'right', 'top', 'bottom'], // 定义立方体的6个面
      };
    },
    methods: {
      toggleRotation() {
        this.isRotating = !this.isRotating;
      },
    },
  };
  </script>
  
  <style scoped>
  .scene {
    width: 300px;
    height: 300px;
    perspective: 1000px;
    margin: 0 auto;
    position: relative;
  }
  
  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(0) rotateY(0);
    transition: transform 1s ease;
  }
  
  .cube-face {
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .cube-face iframe {
    width: 100%;
    height: 100%;
  }
  
  .cube-face--front {
    transform: translateZ(150px);
  }
  
  .cube-face--back {
    transform: rotateY(180deg) translateZ(150px);
  }
  
  .cube-face--left {
    transform: rotateY(-90deg) translateZ(150px);
  }
  
  .cube-face--right {
    transform: rotateY(90deg) translateZ(150px);
  }
  
  .cube-face--top {
    transform: rotateX(90deg) translateZ(150px);
  }
  
  .cube-face--bottom {
    transform: rotateX(-90deg) translateZ(150px);
  }
  
  .cube.rotate {
    animation: spin 5s infinite linear;
  }
  
  @keyframes spin {
    from {
      transform: rotateX(0) rotateY(0);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
  </style>
  