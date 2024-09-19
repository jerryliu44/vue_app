<template>
    <div>
      <div class="card-list">
        <Card v-for="item in items" :key="item.id" :isPressed="item.isPressed" @click="handleClick(item)" />
      </div>
      <button @click="addItem">添加项目</button>
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  
  export default {
    name: 'CardList',
    components: { Card },
    data() {
      return {
        items: [
          // 示例数据
          { id: 1, isPressed: false },
          { id: 2, isPressed: false },
          { id: 3, isPressed: false },
          { id: 4, isPressed: false },
          { id: 5, isPressed: false },
          { id: 6, isPressed: false },
          { id: 7, isPressed: false },
          { id: 8, isPressed: false },
          // 更多数据项
        ]
      };
    },
    methods: {
      handleClick(item) {
        // 处理点击事件
      },
      addItem() {
        const newId = this.items.length + 1;
        this.items.push({ id: newId, isPressed: false });
      }
    }
  }
  </script>
  
  <style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0, 1fr)); /* 自适应列，最小宽度为0 */
  gap: 15px; /* 控制子元素之间的间距 */
  padding: 15px; /* 添加内边距 */
}

/* 限制最大列数为4 */
@media (min-width: 1024px) { /* 当宽度大于 1024px 时，最多显示 4 列 */
  .card-list {
    grid-template-columns: repeat(4, 1fr); /* 固定4列 */
  }
}

/* 在小屏幕上显示 2 列 */
@media (max-width: 768px) {
  .card-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 自动填充列，最小宽度200px */
  }
}

/* 在更小屏幕上显示 1 列 */
@media (max-width: 480px) {
  .card-list {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)); /* 100% 宽度 */
  }
}
  </style>
  