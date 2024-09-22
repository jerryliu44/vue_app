<template>
  <div class="Laboratory-page">
    <div class="main-container">
      <div class="left-container">
        <div class="left-navigation">
          <div class="left-name">ADB</div>
          <transition-group name="slide" tag="ul" id="left-navigation-scroll">
            <li v-for="(navItems, index) in navItems" :key="navItems.title" 
                :class="{ active: currentIndex === index }"
                @click="selectItem(index)">
              <div class="navigation-item">
                <span class="nav-text">{{ navItems.title }}</span>
                <img v-if="navItems.image" class="nav-image" :src="navItems.image" alt="图标">
              </div>
              <transition name="fade">
                <div v-if="expandedIndexes.includes(index)" class="dropdown-content">
                  <ul>
                    <li v-for="(subItem, subIndex) in navItems.subItems" :key="subIndex"
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
      <div class="right-container">
        <div class="right-sub-container">
          <div class="right-search">
            <i class="search-icon">🔍</i> <!-- 搜索图标 -->
            <input 
              type="text" 
              class="search-input" 
              placeholder="搜索..." 
              v-model="searchQuery" 
              @keydown.enter="handleSearch" 
            />
          </div>
          
          <div class="right-title">
            <h1>发现</h1>
          </div>
          <div class="right-title">
            <h2>最多阅读</h2>
          </div>

          <div class="projectBox">
            <div class="projectItem" v-for="item in contentItems" :key="item.title">
              <div class="projectItem-header">
                <img class="projectItem-image" :src="item.image" :alt="item.title" />
              </div>
              <div class="projectItem-body">
                <h3>{{ item.title }}</h3>
                <p>{{ item.content || '暂无描述' }}</p>
              </div>
            </div>
            
            <div class="projectItem placeholder" v-for="n in placeholders" :key="'placeholder-' + n">
              <div class="projectItem-header"></div>
              <div class="projectItem-body">
                <h3>加载中...</h3>
                <p>请稍候</p>
              </div>
            </div>
          </div>

        </div>
      </div>
        
    </div>
      
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Laboratory',
  data() {
    return {
      currentIndex: null, // 默认选中项索引
      expandedIndexes: [], // 保存所有展开的下拉框索引
      searchQuery: '', // 搜索框中的输入值
      // 导航栏内容
      navItems: [
        { title: '发现', content: '', subItems: [], image: '/images/搜索.png' },
        { 
          title: '仓库', 
          content: '仓库', 
          subItems: [
            { title: '详情1', route: '/domain-detail1' },
            { title: '详情2', route: '/domain-detail2' }
          ], 
          image: '/images/文件.png'
        },
        { title: '敬请期待', content: '', subItems: []},
      ],
      // 右侧内容栏内容
      contentItems: [
        { title: '项目1', content: '项目描述1', image: '/images/wx.jpg' },
        { title: '项目2', content: '项目描述2', image: '/images/logo.jpg' },
        { title: '项目3', content: '项目描述3', image: '/images/background.jpg' },
        // 添加更多项目...
      ],
      // 占位符
      placeholders: 6, // 假设有6个占位符
    };
  },
  methods: {
    handleSearch() {
      // 当按下 Enter 键时触发的搜索逻辑
      console.log('搜索内容:', this.searchQuery);

    },
    selectItem(index) {
      this.currentIndex = index; // 更新 currentIndex
      const hasContent = this.navItems[index].content;
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

      // 切换 active 类
      this.$nextTick(() => {
        const activeElements = document.querySelectorAll('#left-navigation-scroll li.active');
        activeElements.forEach(el => el.classList.remove('active'));
        document.querySelector(`#left-navigation-scroll li:nth-child(${index + 1})`).classList.add('active');
      });
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
  width: 100%; 
  height: 800px;
  border-radius: 15px 0 0 15px; 
  margin-top: 100px; 
  padding: 10px;
  /* backdrop-filter: blur(var(--card_filter));
  -webkit-backdrop-filter: blur(var(--card_filter));
  background: var(--item_bg_color); */
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  background: rgba(33, 37, 41, 0.75);
  z-index: 1000; /* 保证在其他元素之上 */
  
}

/* 主题应用名称 */
.left-name {
  font-size: 48px; 
  font-weight: bold; 
  margin-top: 25px;
  margin-bottom: 20px;
  margin-left: 20px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200%;
  background-position: 0%;
  font-family: "title";
  animation: backgroundSizeAnimation 10s ease-in-out infinite;
  background-image: linear-gradient(
  120deg,
  #0051ff 0%,
  #66bfff 20%,      
  #009b2c 40%,     
  #ffcc00 55%,      
  #ffb300 70%,      
  #9900cc 80%,     
  #ff4c4c 90%,      
  #9900cc 100%      
);
}

@font-face {
    font-family: "title";
    src: url(../assets/fonts/DripOctober-vm0JA.ttf);
    font-display: swap;
}

@keyframes backgroundSizeAnimation {
    0% {background-position: 100%;}
    25% {background-position: 50%;}
    50% {background-position: 0%;}
    75% {background-position: 50%;}
    100% {background-position: 100%;}
}


/* 左侧滚动栏属性 */
#left-navigation-scroll {
  width: 100%;
  height: calc(100% - 100px); /* 减去left-name高度 */
  font-size: 17px;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

#left-navigation-scroll::-webkit-scrollbar {
  display: none;
}

#left-navigation-scroll li {
  list-style: none;
  position: relative;
  margin: 10px 0; 
  padding-left: 5px;
  border-radius: 13px; /* 统一圆角 */
  scroll-snap-align: end;
  color: var(--main_text_color);
  transition: all 0.3s ease; /* 添加过渡动画 */
}

#left-navigation-scroll li.active {
  background-color: rgba(0, 0, 0, 0.2); /* 选中时背景颜色 */
  color: #fff; /* 选中时字体颜色 */
  /* font-size: 20px; */
}

#left-navigation-scroll li:hover {
  background-color: rgba(0, 0, 0, 0.1); /* 悬停时背景颜色 */
  transform: scale(1.05);
}

#left-navigation-scroll li .navigation-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px; /* 内边距 */
  transition: all 0.3s ease; /* 添加过渡动画 */
}

#left-navigation-scroll li .nav-text {
  flex: 1;
  margin-right: 15px; /* 文字和图标之间的间距 */
  transition: font-size 0.3s ease; /* 文字大小过渡 */
}

#left-navigation-scroll li .nav-image {
  width: 30px; /* 图片宽度 */
  height: 30px; /* 图片高度 */
  margin-right: 3px; /* 增加右外边距 */
  transition: transform 0.3s ease; /* 图片大小过渡 */
}

#left-navigation-scroll li.active .nav-text {
  font-size: 20px; /* 选中时文字大小 */
}

#left-navigation-scroll li.active .nav-image {
  transform: scale(1.2); /* 选中时图片放大 */
}



.navigation-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px; /* 内边距 */
}


.dropdown-content {
  font-size: 17px;
  margin-left: 20px;
  padding: 10px;
  border-radius: 8px;
}
.dropdown-content li {
  padding: 10px;
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

/* 右侧容器布局 */

.right-container {
  width: calc(100% - 230px);
  display: flex;
  position: relative;
  padding-bottom: 50px;
  flex-direction: column;
}

.right-sub-container {
  flex-shrink: 0;
  height: 800px;
  border-radius: 0 15px 15px 0; 
  margin-top: 100px;
  margin-right: 15px;
  padding: 10px 50px;
  /* align-items: flex-start; */
  /* display: flex; */
  justify-content: center;
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  background: rgba(33, 37, 41, 0.75);
  z-index: 1000;
  overflow: hidden;
}

.right-search {
  margin-top: 20px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  background: rgba(33, 37, 41, 0.75);
  padding: 8px 12px;
  border-radius: 50px; /* 圆角 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  max-width: 350px;
}

.search-icon {
  color: #fff;
  font-size: 18px;
  margin-right: 10px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 25px;
  outline: none;
  background-color: #555;
  color: #fff;
  font-size: 16px;
  transition: background-color 0.3s;
  
}

.search-input::placeholder {
  color: #bbb; /* 占位符颜色 */
}

.search-input:focus {
  background-color: #666; /* 聚焦时加深背景色 */
}


.right-title {
  /* text-align: center;  */
  margin-top: 35px;
}

.right-title h1 {
  font-size: 38px; 
  font-weight: bold; 
  color: #fff; 
  margin: 0; /* 移除默认外边距 */
  margin-bottom: 60px; 
}
.right-title h2 {
  font-size: 30px;
  font-weight:400;
  color: #fff; 
  margin: 0;
  margin-bottom: 30px; 
}


.projectBox {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  max-height: 450px;
  padding: 10px;
  gap: 20px; /* 增大卡片间距 */
  border-radius: 12px;
  justify-content: flex-start; /* 让卡片从左向右排列，不居中 */
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.projectBox::-webkit-scrollbar {
  display: none;
}

.projectItem {
  flex-basis: calc(33.33% - 20px); /* 使用flex-basis，确保每行最多4个卡片 */
  margin: 0;
  display: flex;
  background-color: var(--item_bg_color);
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 20px;
  height: 200px;
  backdrop-filter: blur(var(--card_filter));
  -webkit-backdrop-filter: blur(var(--card_filter));
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.projectItem:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  transform: translateY(-8px);
}

.projectItem.pressed {
  transform: scale(0.95);
  background-color: var(--item_hover_color);
}

.projectItem-header {
  width: 100%;
  height: 120px;
  overflow: hidden;
  border-radius: 8px;
}

.projectItem-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  backdrop-filter: blur(var(--card_filter));
  -webkit-backdrop-filter: blur(var(--card_filter));
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}



@media (max-width: 1200px) {
  .projectItem {
    width: calc(33.33% - 20px); /* 适应更小的屏幕 */
  }
}

@media (max-width: 768px) {
  .projectItem {
    width: calc(50% - 20px); /* 平板或较小屏幕适配 */
  }
}

@media (max-width: 480px) {
  .projectItem {
    width: calc(100% - 20px); /* 手机屏幕适配，单列显示 */
  }
}
</style>