<template>
    <div 
      class="Card" 
      :class="{ pressed: isPressed }" 
      @click="handleClick"
    >
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      isPressed: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick() {
        this.$emit('click'); // 触发点击事件
      }
    }
  }
  </script>
  
  <style scoped>
  .Card {
    margin: 7px;
    display: flex;
    background-color: var(--item_bg_color);
    border-radius: 8px;
    padding: 15px;
    height: 95px;
    width: calc(25% - 15px);
    min-width: 200px;
    backdrop-filter: blur(var(--card_filter));
    -webkit-backdrop-filter: blur(var(--card_filter));
    transition: opacity 0.3s ease, background-color 0.3s ease, border 0.3s ease, transform 0.2s ease;
  }
  
  .Card:hover {
    box-shadow: 0 8px 16px -4px #2c2d300c;
    transform: translateY(-2px);
  }
  
  .Card.pressed {
    transform: scale(0.9);
    background-color: var(--item_hover_color);
  }
  </style>
  