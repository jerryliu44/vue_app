<template>
    <div :class="containerClass" :style="{ backgroundImage: `url(${logoSrc})` }">
      <img :src="frameSrc" :style="frameStyle" alt="Logo Frame">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Logo',
    props: {
      logoSrc: {
        type: String,
        default: '/images/logo.jpg' // 默认背景图
      },
      frameSrc: {
        type: String,
        default: '/images/logokuang.png' // 默认框的图片
      },
      frameStyle: {
        type: Object,
        required: true
      },
      containerClass: {
        type: String,
        // default: 'logo' // 默认容器类
        required: true
      }
    }
  };
  </script>
  
<style scoped>
    .logo {
        flex-shrink: 0;
        width: 90%;
        position: relative;
        aspect-ratio: 1/1;
        margin-top: 50px;
        background-size: cover;
        border-radius: 50%;
    }


    .index-logo {
        flex-shrink: 0;
        width: 40%;
        margin-top: 30px;
        position: relative;
        max-width: 200px;
        aspect-ratio: 1/1;
        background-size: cover;
        border-radius: 50%;
        border: 0.5px solid #ffffff;
    }
</style>