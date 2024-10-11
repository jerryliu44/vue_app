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
              <div class="sub-container-body-right-side-title">测试</div>
              <div class="sub-container-body-right-side-project-box">
                <div class="sub-container-body-right-side-project-item" v-for="item in HotNewsItem" :key="item.id">
                  <div class="sub-container-body-right-side-project-item-textArea">
                    <div class="sub-container-body-right-side-project-item-textArea-title">
                      {{ item.title }} <!-- 标题 -->
                    </div>
                    <div class="sub-container-body-right-side-project-item-textArea-content">
                      {{ item.content }} <!-- 内容 -->
                    </div>
                  </div>
                  <div class="sub-container-body-right-side-project-item-picture">
                    <img :src="item.imageUrl" alt="项目图像"> 
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
      HotNewsItem: ['1', '2', '3'],
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
    z-index: 1000;
    
  }

.sub-container-title {
  width: 100%;
  height: 70px;
  top: 0;
  border-radius: 30px 30px 0px 0px;
  background: rgba(72, 68, 68, 0.9);
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
    margin: 8px 5px 10px 5px; /*上下左右*/
    padding: 15px;
    font-size: 13px;
    border-radius: 25px;
    background: var(--left_tag_item);
}

.sub-container-title-tag-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    margin: 8px 5px 5px 10px;
    padding: 15px;
    font-size: 12px;
    border-radius: 25px;
    background: var(--left_tag_item);
}

.tag-item-add-icon {
    font-size: 16px;
    color: #007bff; 
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
  background-color: #555;
  color: #fff;
  font-size: 15px;
  transition: background-color 0.3s;
}

.sub-container-title-search-input::placeholder {
  color: #bbb;
}

.sub-container-title-search-input:focus {
  background-color: #666; 
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
  background: rgba(187, 186, 186, 0.9);
  border-radius: 0px 0px 30px 30px; 
  overflow-y: auto;
  display: flex; 
  flex-direction: row;
}

.sub-container-body-right-side {
  width: 500px;
  height: 730px;
  background: rgba(211, 183, 183, 0.9);
  padding: 20px;
  border-radius: 0px 0px 30px 30px; 
  overflow-y: auto; 
}

.sub-container-body-right-side-title {
  display: flex; 
  align-items: center; 
  padding: 10px; 
  background: linear-gradient(to right, rgba(33, 37, 41, 0.9), rgba(187, 186, 186, 0.9));
  border-radius: 8px;
  font-size: 16px; 
  color: #fff; 
  margin-right: 10px;
}

.sub-container-body-right-side-project-box {
  margin-top: 20px;
  width: 100%; 
  height: 100%;
  overflow: hidden; 
  position: relative;
}

.sub-container-body-right-side-project-item {
  width: 100%;
  height: 140px;
  margin: 10px 0; 
  background: rgba(224, 221, 221, 0.8); 
  color: #fff; 
  padding: 15px; 
  border-radius: 5px;
  display: flex; 
}

.sub-container-body-right-side-project-item-textArea {
  flex: 3; 
  margin-right: 10px;
  background: rgba(224, 221, 221, 0.8); 
  color: #fff; 
  padding: 10px; 
  border-radius: 5px;
  display: flex;
  flex-direction: column; 
}

.sub-container-body-right-side-project-item-textArea-title {
  height: 30px;
  margin-bottom: 10px; 
  background: rgba(72, 68, 68, 0.8); 
  color: #fff; 
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
}

.sub-container-body-right-side-project-item-textArea-content {
  padding: 10px;
  background: rgba(200, 200, 200, 0.1);
  border-radius: 5px;
  color: #333;
  font-size: 14px; 
  line-height: 1.5;
}

.sub-container-body-right-side-project-item-picture {
  flex: 1;
  height: 100%; 
  border-radius: 5px; 
  margin-left: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.sub-container-body-right-side-project-item-picture img {
  width: 100%;
  height: auto; 
}



.sub-container-body-left-side {
  width: calc(100% - 500px);
  height: 730px;
  background: rgba(187, 186, 186, 0.9);
  padding: 20px;
  border-radius: 0px 0px 30px 30px; 
  overflow-y: auto; 
}

</style>
  