<template>
  <div class="Laboratory-page">
    <div class="main-container">
      <div class="left-container">
        <div class="left-navigation">
          <transition-group name="slide" tag="ul" id="left-navigation-scroll">
            <li v-for="(item, index) in items" :key="item.title" 
                :class="{ active: currentIndex === index }"
                @click="selectItem(index)">
              <div>{{ item.title }}</div>
              <div>{{ item.date }}</div>
              <transition name="fade">
                <div v-if="expandedIndexes.includes(index)" class="dropdown-content">
                  <ul>
                    <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex"
                        @click="navigateTo(subItem.route)">
                      {{ subItem.title }}
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
          </transition-group>
        </div>
      </div>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Laboratory',
  data() {
    return {
      currentIndex: null,
      expandedIndexes: [], // 保存所有展开的下拉框索引
      items: [
        { title: '敬请期待', date: '2024.1', content: '', subItems: [] },
        { 
          title: 'ICP备案成功', 
          date: '2023.8', 
          content: 'ICP备案成功的内容', 
          subItems: [
            { title: '详情1', route: '/icp-detail1' },
            { title: '详情2', route: '/icp-detail2' }
          ] 
        },
        { 
          title: '注册域名liuyh68.net', 
          date: '2023.3', 
          content: '注册域名liuyh68.net的内容', 
          subItems: [
            { title: '详情1', route: '/domain-detail1' },
            { title: '详情2', route: '/domain-detail2' }
          ] 
        },
        { 
          title: '出来后洗心革面', 
          date: '2021.2', 
          content: '出来后洗心革面的内容', 
          subItems: [
            { title: '详情1', route: '/reform-detail1' },
            { title: '详情2', route: '/reform-detail2' }
          ] 
        },
        { title: '...', date: '...', content: '...的内容', subItems: [] },
        { 
          title: '搭建第一个网站', 
          date: '2018.1', 
          content: '搭建第一个网站的内容', 
          subItems: [
            { title: '详情1', route: '/website-detail1' },
            { title: '详情2', route: '/website-detail2' }
          ] 
        }
      ]
    };
  },
  methods: {
    selectItem(index) {
      const hasContent = this.items[index].content;
      const isExpanded = this.expandedIndexes.includes(index);

      if (hasContent) { // 如果是下拉框标签
        if (isExpanded) {
          this.expandedIndexes = this.expandedIndexes.filter(i => i !== index); // 收起当前展开的下拉框
        } else {
          this.expandedIndexes.push(index); // 展开新的下拉框
        }
      } else { // 如果是普通标签
        this.expandedIndexes = this.expandedIndexes.filter(i => i !== index); // 关闭所有展开的下拉框
        this.navigateTo(this.items[index].route);
      }
    },
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.Laboratory-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  backdrop-filter: blur(var(--back_filter)); 
  -webkit-backdrop-filter: blur(var(--back_filter)); 
  background-color: var(--back_filter_color); 
}

.main-container {
  width: 100%;
  margin: 0 auto;
  transition: transform 0.5s ease;
  max-width: 1150px;
  position: relative;
  display: flex;
  flex-direction: row;
}

/* 左侧导航栏布局容器 */
.left-container {
  overflow-y: scroll;
  width: 230px;
  height: 100vh;
  display: flex;
  padding: 0 15px;
  position: sticky;
  top: 0;
  left: 0;
  align-items: center;
  flex-direction: column;
}

.left-container::-webkit-scrollbar {
  display: none;
}

.left-navigation {
  flex-shrink: 0;
  width: 230px; /* 固定宽度，适合导航栏 */
  height: 100vh; /* 高度为整个视口 */
  border-radius: 0 13px 13px 0; /* 右上和右下角加圆角 */
  margin-top: 0; /* 移除顶部外边距，避免影响布局 */
  padding: 20px;
  backdrop-filter: blur(var(--card_filter));
  -webkit-backdrop-filter: blur(var(--card_filter));
  background: var(--item_bg_color);
  position: fixed; /* 固定定位 */
  top: 0; /* 固定在页面顶部 */
  left: 0; /* 固定在页面左侧 */
  z-index: 1000; /* 保证在其他元素之上 */
}

/* 左侧滚动栏属性 */
#left-navigation-scroll {
  width: 100%;
  height: 100%;
  font-size: 13px;
  padding-left: 8px;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

#left-navigation-scroll::-webkit-scrollbar {
  display: none;
}

#left-navigation-scroll li {
  list-style: none;
  position: relative;
  padding: 15px 0px 15px 15px;
  margin: 10px 0; 
  border-radius: 0;
  scroll-snap-align: end;
  color: var(--main_text_color);
  border-radius: 13px 13px 13px 13px;
  transition: all 0.3s ease; /* 添加过渡动画 */
}

#left-navigation-scroll li.active {
  background-color: rgba(0, 0, 0, 0.1); /* 选中时背景颜色 */
}

#left-navigation-scroll li:hover {
  background-color: rgba(0, 0, 0, 0.1); /* 悬停时背景颜色 */
}

.dropdown-content {
  margin-top: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
}

/* 定义 slide 过渡动画 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>