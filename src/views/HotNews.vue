<template>
    <div class="HotNews-page">
      <div class="main-container">
        <div class="sub-container">
          <div class="sub-container-title">
            <div class="sub-container-title-tag">
              <div class="sub-container-title-tag-logo">Hot News</div>
              <div class="sub-container-title-tag-item">All<span class="tag-item-add-icon">+</span></div>
              <div class="sub-container-title-tag-item">News<span class="tag-item-add-icon">+</span></div>
              <div class="sub-container-title-tag-item">Exclusives<span class="tag-item-add-icon">+</span></div>
              <div class="sub-container-title-tag-item">Guides<span class="tag-item-add-icon">+</span></div>
              <div class="sub-container-title-tag-item">Recommended<span class="tag-item-add-icon">+</span></div>
            </div>
            <div class="sub-container-title-search">
                <input 
                  type="text" 
                  class="sub-container-title-search-input" 
                  placeholder="搜索..." 
                  v-model="searchQuery" 
                  @keydown.enter="handleSearch" 
                />
                <img src="your-search-icon-path.png" class="sub-container-title-search-icon" alt="search icon">
            </div>
          </div>
          <div class="sub-container-body">
            <div class="sub-container-body-left-side"></div>
            <div class="sub-container-body-right-side">
              <div class="sub-container-body-right-side-title">Recommended</div>
              <div class="sub-container-body-right-side-project-box">
                <div class="sub-container-body-right-side-project-item" v-for="item in HotNewsItem" :key="item.id">
                  <div class="sub-container-body-right-side-project-item-textArea">
                    <div class="sub-container-body-right-side-project-item-textArea-title">
                      {{ item.title }} 
                    </div>
                    <div class="sub-container-body-right-side-project-item-textArea-content">
                      {{ item.content }} 
                    </div>
                  </div>
                  <div class="sub-container-body-right-side-project-item-picture">
                    <img :src="item.imageUrl" alt="相关图片"> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>         
      </div>
    </div>
</template>
  
<script>
import { get_hotNews_list } from '@/api/api';

export default {
  name: 'HotNews',
  data() {
    return {
      searchQuery: '',
      HotNewsItem: [
        { title: '4 hours ago', content: '嗨，我是通义灵码，你的智能编码助手。你可以问我编码相关的问题，也可以一起更高效、更高质量地完成编码工作。通过帮助文档，了解更多关于我的信息，或提交反馈让我变得更好。同时，你可以前往官网了解更多企业版的信息。', subItems: [], image: '/images/发现.png', route: 'projectlist' },
        { title: '4 hours ago', content: '4 hours ago', subItems: [], imageUrl: '/images/发现.png', route: 'projectlist' },
        { title: '4 hours ago', content: '4 hours ago', subItems: [], image: '/images/发现.png', route: 'projectlist' },
      ],
    }
  },
  method: {
    async fetchHotNewsItem() {
      try {
        const response = await get_hotNews_list();
        this.HotNewsItem = response.map(item => ({
          index: item.index,
          hot: item.hot,
          title: item.title,
          pic: item.pic,
          url: item.url,
          mobilUrl: item.mobilUrl,
          desc: item.desc, 
          
          // 项目标题是否正在滚动
          isScrolling: false,
          scrollTransform: 'translateX(0)',
        }));

      } catch (error) {
        console.error('获取hotNews列表失败:', error);
      }
    },
  },
}
</script>
  
<style scoped>
.HotNews-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* backdrop-filter: blur(var(--back_filter)); 
    -webkit-backdrop-filter: blur(var(--back_filter)); 
    background-color: var(--back_filter_color); */
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    background: rgba(255, 255, 255, 0.25);
}

.main-container {
    width: 100%;
    margin: 0 auto;
    transition: transform 0.5s ease;
    max-width: 1150px;
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 30px 30px 30px 30px; 
}

.sub-container {
    flex-shrink: 0;
    width: 100%; 
    height: 800px;
    border-radius: 30px 30px 30px 30px; 
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    background: rgba(255, 255, 255, 0.9);
    background: linear-gradient(
        to top right,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 20%,  /* 增加白色停靠点 */
        rgba(240, 251, 251, 0.9) 50%,  /* 淡灰色 */
        rgba(230, 248, 248, 0.9) 60%,  /* 更淡的灰色 */
        rgba(224, 249, 249, 0.9) 70%,  /* 灰色 */
        rgba(219, 247, 247, 0.9) 80%,  /* 浅蓝色 */
        rgba(207, 241, 241, 0.9) 90%,  /* 更浅的蓝色 */
        rgba(188, 236, 236, 0.9) 100%  /* 较深的蓝色 */
    );
    z-index: 1000;
    
  }

.sub-container-title {
  width: 100%;
  height: 70px;
  top: 0;
  border-radius: 30px 30px 0px 0px;
  background: rgba(72, 68, 68, 0);
  z-index: 1001;
  display: flex;
  flex-direction: row;
}

.sub-container-title-tag {
    display: flex;
    flex-direction: row;
    padding: 14px;
}

.sub-container-title-tag-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    margin: 5px 5px 10px 5px; /*上下左右*/
    padding: 15px;
    font-size: 13px;
    border-radius: 25px;
    background: rgba(189, 189, 189, 0.2);
    color: #010101;
    font-weight: bold;
}

.sub-container-title-tag-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    margin: 5px 5px 5px 10px;
    padding: 15px;
    font-size: 12px;
    border-radius: 25px;
    background: rgba(222, 222, 222, 0.2);
    color: #010101;
    font-weight: bold;
}

.tag-item-add-icon {
    font-size: 16px;
    color: #8d8d8e; 
    margin-left: 10px;
}

.sub-container-title-search {
  position: relative; 
  max-width: 350px;
  margin-left: 180px;
  padding: 14px;
}

.sub-container-title-search-input {
  width: 100%;
  height: 32px;
  padding: 10px 40px 10px 12px; 
  margin: 5px 2px 5px 10px; /*上下左右*/
  border: none;
  border-radius: 25px;
  outline: none;
  background-color: #f5f4f4;
  color: #b1b0b0;
  font-size: 15px;
  transition: background-color 0.3s;
}

.sub-container-title-search-input::placeholder {
  color: #b1b0b0;
}

.sub-container-title-search-input:focus {
  background-color: #ffffff; 
}

.sub-container-title-search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%); 
  width: 20px; 
  height: 20px;
  pointer-events: none; 
  opacity: 0.7; 
}
  
.sub-container-body {
  width: 100%;
  height: 730px;
  border-radius: 0px 0px 30px 30px; 
  overflow-y: auto;
  display: flex; 
  flex-direction: row;
}

.sub-container-body-right-side {
  width: 430px;
  height: 730px;
  background: rgb(245, 245, 245);
  padding: 20px;
  border-radius: 30px 0px 0px 0px; 
  overflow-y: auto; 
}

.sub-container-body-right-side-title {
  display: flex; 
  align-items: center; 
  padding: 10px; 
  background: linear-gradient(to right, rgba(129, 130, 130, 0.9), rgba(210, 210, 210, 0.9));
  background: linear-gradient(
        to right,
        rgba(71, 70, 70, 0.9) 0%,
        rgba(237, 236, 236, 0.7) 1.5%,
        rgba(240, 241, 241, 0.4) 20%,  
        rgba(230, 248, 248, 0.2) 40%,  
        rgba(224, 249, 249, 0) 70%,  
        rgba(219, 247, 247, 0) 80%,  
        rgba(207, 241, 241, 0) 90%,  
        rgba(188, 236, 236, 0) 100% 
    );
  border-radius: 1px;
  font-size: 13px; 
  color: #000000; 
  margin-right: 10px;
  padding-left: 20px;
  font-weight: bold;
}

.sub-container-body-right-side-project-box {
  width: 100%; 
  height: 100%;
  overflow: hidden; 
  position: relative;
}

.sub-container-body-right-side-project-item {
  width: 100%;
  height: 120px;
  margin: 10px 0; 
  background: rgba(224, 221, 221, 0); 
  color: #fff; 
  padding: 15px; 
  border-radius: 5px;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.sub-container-body-right-side-project-item-textArea {
  flex: 3; 
  margin-right: 10px;
  background: rgba(224, 221, 221, 0); 
  color: #fff; 
  padding: 10px; 
  border-radius: 5px;
  display: flex;
  flex-direction: column; 
}

.sub-container-body-right-side-project-item-textArea-title {
  height: 21px;
  margin-bottom: 10px; 
  background: rgba(72, 68, 68, 0); 
  color: #d4d3d3; 
  padding-top: 4px;
  padding-left: 10px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: bold;
  
}

.sub-container-body-right-side-project-item-textArea-content {
  padding: 2px;
  background: rgba(200, 200, 200, 0);
  border-radius: 5px;
  color: #333;
  font-size: 13px; 
  font-weight: bold;
  
  /* 限制为最多展示两行 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* 添加省略号 */
  white-space: normal; /* 允许文本换行 */
}


.sub-container-body-right-side-project-item-picture {
  flex: 1;
  height: 100%; 
  border-radius: 5px; 
  margin-left: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0);
  overflow: hidden;
  color: #000;
  font-size: 10px;
}

.sub-container-body-right-side-project-item-picture img {
  width: 100%;
  height: auto; 
}



.sub-container-body-left-side {
  width: calc(100% - 430px);
  height: 730px;
  background: rgba(187, 186, 186, 0);
  padding: 20px;
  border-radius: 0px 0px 30px 30px; 
  overflow-y: auto; 
}

</style>
  