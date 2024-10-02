<template>
    <div
      class="image-container"
      ref="imageContainer"
      @wheel="handleWheel"
      :class="{ 'no-image': !imageSrc || imageError }"
    >
      <!-- 只有在有图片时才显示 img 标签并绑定相关事件 -->
      <img
        v-if="imageSrc"
        :src="imageSrc"
        alt="图片"
        class="zoom-image"
        :style="imageStyle"
        @mousedown="startDragging"
        @mousemove="dragImage"
        @mouseup="stopDragging"
        @error="handleImageError"
      />
      <!-- 没有图片或图片加载失败时显示提示 -->
      <p v-else class="no-image-text">暂无图片</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true, // 确保传入图片路径
      },
    },
    data() {
      return {
        scale: 1, // 当前的缩放比例
        maxScale: 6, // 最大缩放比例
        minScale: 1, // 最小缩放比例
        isDragging: false, // 是否正在拖动
        startX: 0, // 鼠标按下时的 X 坐标
        startY: 0, // 鼠标按下时的 Y 坐标
        translateX: 0, // 图片的 X 平移距离
        translateY: 0, // 图片的 Y 平移距离
        imageError: false, // 图片加载失败标志
      };
    },
    computed: {
      // 计算图片的样式，包含缩放和平移
      imageStyle() {
        return {
          transform: `scale(${this.scale}) translate(${this.translateX}px, ${this.translateY}px)`,
          cursor: this.isDragging ? 'grabbing' : 'grab',
          transition: this.isDragging ? 'none' : 'transform 0.3s ease',
        };
      },
    },
    methods: {
      // 处理滚轮事件，进行图片的缩放
      handleWheel(event) {
        if (!this.imageSrc || this.imageError) return; // 如果没有图片或图片加载失败，不进行任何操作
        event.preventDefault();
        const delta = event.deltaY > 0 ? -0.1 : 0.1; // 滚轮滚动方向
        let newScale = this.scale + delta;
        newScale = Math.min(Math.max(this.minScale, newScale), this.maxScale); // 限制缩放范围
        this.scale = newScale;
      },
      // 开始拖动图片
      startDragging(event) {
        if (!this.imageSrc || this.imageError) return; // 没有图片或图片加载失败时，禁止拖动
        event.preventDefault();
        this.isDragging = true;
        this.startX = event.clientX - this.translateX;
        this.startY = event.clientY - this.translateY;
        document.body.style.userSelect = 'none';
      },
      // 拖动图片
      dragImage(event) {
        if (!this.imageSrc || !this.isDragging || this.imageError) return; // 如果没有图片或没有在拖动或图片加载失败，禁止操作
        event.preventDefault();
        this.translateX = event.clientX - this.startX;
        this.translateY = event.clientY - this.startY;
      },
      // 停止拖动图片
      stopDragging(event) {
        if (!this.imageSrc || this.imageError) return; // 没有图片或图片加载失败时不执行停止拖动
        event.preventDefault();
        this.isDragging = false;
        document.body.style.userSelect = '';
      },
      // 处理图片加载失败
      handleImageError() {
        this.imageError = true;
        console.error('Image loading failed:', this.imageSrc);
      },
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  
  .zoom-image {
    max-width: 100%;
    max-height: 80vh; /* 限制图片最大高度 */
    cursor: grab; /* 初始光标样式 */
  }
  
  .no-image-text {
    color: #888;
    font-size: 18px;
    text-align: center;
  }
  
  .no-image {
    cursor: not-allowed; /* 没有图片或图片加载失败时禁用指针 */
    pointer-events: none; /* 禁止没有图片或图片加载失败时的任何交互操作 */
  }
  </style>