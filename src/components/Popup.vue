<template>  
  <div v-if="isVisible" class="popup">  
    <div class="popup-content">  
      <img :src="imageURL" alt="Popup Image" class="popup-img">  
      <!-- 可以添加一个关闭按钮，但在这个例子中我们通过点击外部来关闭 -->  
      <!-- <button @click="closePopup">Close</button> -->  
    </div>  
  </div>  
</template>  
  
<script>  
export default {  
  props: {  
    imageURL: {  
      type: String,  
      required: true  
    },  
    isVisible: {  
      type: Boolean,  
      default: false  
    }  
  },  
  methods: {  
    // 可以在这里添加关闭弹窗的方法，但在这个例子中我们不需要它  
    // closePopup() {  
    //   this.$emit('close');  
    // }  
  }  
};  
</script>  
  
<style scoped>  
.popup {  
  position: fixed;  
  top: 50%;  
  left: 50%;  
  transform: translate(-50%, -50%);  
  /* 其他样式，如背景、边框等 */  
  z-index: 1000;  
  /* 确保弹窗在顶部 */  
}  
  
.popup-content {  
  /* 弹窗内容的样式 */  
  background-color: white;  
  padding: 20px;  
  border-radius: 10px;  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  
}  
  
.popup-img {  
  width: 100%; /* 或者其他你需要的宽度 */  
  height: auto; /* 保持图片比例 */  
}  
</style>