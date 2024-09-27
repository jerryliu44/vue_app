<template>
  <div class="Laboratory-page">
    <div class="main-container">
      <div class="left-container">
        <!-- 左边导航栏保持不变 -->
        <div class="left-navigation">
          <div class="left-name">ADB</div>
          <transition-group name="slide" tag="ul" id="left-navigation-scroll">
            <li v-for="(navItems, index) in navItems" :key="navItems.title" 
                :class="{ active: currentIndex === index }"
                @click="selectItem(index)">
              <div class="navigation-item">
                <img v-if="navItems.image" class="nav-image" :src="navItems.image" alt="图标">
                <span class="nav-text">{{ navItems.title }}</span>
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
        <!-- 如果没有选择项目，显示项目列表 -->
        <div v-if="!selectedProject" class="right-sub-container">
          <div class="right-search">
            <img class="search-icon" src="/images/搜索.png" alt="搜索图标" />
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
            <!-- 项目列表 -->
            <div class="projectItem" v-for="(item, index) in contentItems" :key="item.id" @click="showProjectDetails(item)" @mouseover="startScroll(index)" @mouseout="stopScroll(index)">
              <div class="projectItem-header">
                <img class="projectItem-image" :src="item.image" :alt="item.title" />
              </div>
              <div class="projectItem-body">
                <div class="scroll-container" :style="{ transform: item.scrollTransform }">
                  <h3>{{ item.title }}</h3>
                </div>
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
        
        <!-- 如果选择了项目，显示项目详情 -->
        <div v-else class="project-details-container">
          <div class="project-details-box">
            <button class="back-img" @click="goBack">
              <img class="arrow-icon" src="/images/返回.png" alt="返回" />
            </button>
            <h1>README.md</h1>
            <div><MarkdownPreview :markdownText="selectedProject.content" /></div>
            <!-- 项目详细信息 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get_adbScripts_list } from '@/api/api';
import MarkdownPreview from '../components/MarkdownPreview.vue';


export default {
  name: 'Laboratory',
  components: {
    MarkdownPreview,
  },
  data() {
    return {
      currentIndex: null, // 默认选中项索引
      expandedIndexes: [], // 保存所有展开的下拉框索引
      searchQuery: '', // 搜索框中的输入值
      selectedProject: null,  // 存储被点击的项目
      markdownContent: '',

      
      // 导航栏内容
      navItems: [
        { title: '发现', content: '', subItems: [], image: '/images/发现.png' },
        { 
          title: '仓库', 
          content: '仓库', 
          subItems: [
            { title: '详情1', route: '/domain-detail1' },
            { title: '详情2', route: '/domain-detail2' }
          ], 
          image: '/images/仓库.png'
        },
        { title: '敬请期待', content: '', subItems: []},
      ],
      // 右侧内容栏内容
      contentItems: [],
      // 占位符
      placeholders: 6, // 假设有6个占位符
    };
  },
  mounted() {
    this.fetchContentItems();
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
    },
    // 点击项目时调用的方法
    showProjectDetails(item) {
      this.selectedProject = item;
    },
    // 返回项目列表的方法
    goBack() {
      this.selectedProject = null;
    },
    
    // api获取项目列表
    async fetchContentItems() {
      try {
        const response = await get_adbScripts_list();
        // 将获取的数据赋值给 contentItems
        this.contentItems = response.map(item => ({
          title: item.title,
          content: item.content,
          image: item.img_path, // 根据实际需求调整
          
          // 项目标题是否正在滚动
          isScrolling: false,
          scrollTransform: 'translateX(0)',
        }));
      } catch (error) {
        console.error('获取项目列表失败:', error);
      }
    },
    
    // 项目标题滚动效果
    startScroll(index) {
      this.contentItems[index].isScrolling = true;
      this.contentItems[index].scrollTransform = 'translateX(0)';
      this.animateScroll(index);
    },
    stopScroll(index) {
      this.contentItems[index].isScrolling = false;
      this.contentItems[index].scrollTransform = 'translateX(0)';
    },
    animateScroll(index) {
      let currentTransform = 0;
      const duration = 6000; // 动画持续时间 (6秒)
      const interval = 16; // 每帧间隔时间 (大约每秒60帧)

      const startTime = Date.now();

      const tick = () => {
        if (!this.contentItems[index].isScrolling) return;

        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        currentTransform = -100 * progress + '%';

        this.contentItems[index].scrollTransform = `translateX(${currentTransform})`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    }
  }
};
</script>


<style scoped>
.Laboratory-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  height: 100%;
  display: flex;
  padding: 0 15px;
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
  margin-top: 50px; 
  padding: 10px;
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
  color: #fff; 
  transform: scale(1.05);
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
  transition: all 0.3s ease; 
}

#left-navigation-scroll li .nav-text {
  flex: 1;
  margin-right: 15px; /* 文字和图标之间的间距 */
  transition: font-size 0.3s ease;
}

#left-navigation-scroll li .nav-image {
  width: 30px; /* 图片宽度 */
  height: 30px; /* 图片高度 */
  margin-right: 20px; /* 增加右外边距 */
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
  height: 100%;
  display: flex;
  position: relative;
  padding-bottom: 50px;
  flex-direction: column;
}

.right-sub-container {
  min-width: 250px;
  flex-shrink: 0;
  height: 800px;
  border-radius: 0 15px 15px 0; 
  margin-top: 50px;
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
  width: 30px; /* 设置图片宽度，原来字体图标是 18px */
  height: 30px; /* 设置图片高度，确保图片不变形 */
  margin-right: 10px; /* 保持与文本的间距 */
  vertical-align: middle; /* 确保图标和文字对齐 */
}

.search-input {
  width: 100%;
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
  flex-basis: calc(33.33% - 20px); /* 使用flex-basis，确保每行最多3个卡片 */
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

.projectItem-body {
  position: relative;
  height: 60px;
  width: 100%;
  overflow: hidden; /* 隐藏超出部分 */
}

.scroll-container {
  white-space: nowrap; /* 防止换行 */
  position: absolute;
  height: 100%;
  width: 100%;
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


/*项目界面*/
.project-details-container {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  
  flex-shrink: 0;
  height: 800px;
  border-radius: 0 15px 15px 0; 
  margin-top: 50px;
  margin-right: 15px;
  padding: 30px 50px;
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  background: rgba(33, 37, 41, 0.75);
  z-index: 1001;
  overflow: hidden;
}

.project-details-box {
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  width: 100%;
  height: 100%; 
  font-size: 17px;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.project-details-box::-webkit-scrollbar {
  display: none;
}


.project-details-box h1{
  font-size: 24px; 
  color: #ffffff; 
  margin-bottom: 20px; 
  text-align: left; 
  font-weight: bold; 
}

/* 返回 */
.back-img {
  width: 40px; /* 设置按钮大小 */
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  background: rgba(33, 37, 41, 0);
  display: flex; 
  justify-content: center; 
  align-items: center;
}

.arrow-icon {
  width: 40px; /* 设置图标大小 */
  height: 40px; /* 自适应高度 */
}


@media (max-width: 1200px) {
  .projectItem {
    flex-basis: calc(50% - 20px);
    width: 50% - 20px; 
  }
}

@media (max-width: 768px) {
  .projectItem {
    flex-basis: 100%; 
    width: 100%;
  }
}

@media (max-width: 480px) {
  .projectItem {
    flex-basis: 100%; 
    width: 100%;
  }
  .left-container {
    width: 170px;
  }
  .right-sub-container {
    width: 280px;
  }
}

</style>