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
        <div v-if="selectedProject === 'projectlist' " class="right-sub-container">
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
            <div class="projectItem" v-for="(item, index) in approvedItems" :key="item.id" @click="showProjectDetails(item)" @mouseover="startScroll(index)" @mouseout="stopScroll(index)">
              <div class="projectItem-header">
                <img class="projectItem-image" :src="`${PictureBasePath}/${item.image}`" :alt="item.title" />
              </div>
              <div class="projectItem-body">
                <div class="scroll-container" :style="{ transform: item.scrollTransform }">
                  <h3 :ref="`title-${index}`">{{ item.title }}</h3>
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
        <div v-else-if="selectedProject === 'project' " class="project-details-container">
          <div class="project-details-box">
            <button class="img_button" @click="goBack">
              <img class="arrow-icon" src="/images/返回.png" alt="返回" />
            </button>
            <div style="display: flex; align-items: center;">
              <h1>README.md</h1>
              <button class="img_button" @click="goPicture" style="margin-left: auto;">
                <img class="picture-icon" src="/images/相册.png" alt="Picture Icon">
              </button>
            </div>
            
            <div><MarkdownPreview :markdownText="ProjectDetail.readme" /></div>
            <!-- 项目详细信息 -->
            <!-- <FileTree /> -->
            <div style="display: flex; flex-direction: column;">
              <h1>API</h1>
              <div class="api-block">
                <div class="api-title">{{ ProjectDetail.API_url }}</div>
                <div class="api-method">{{ ProjectDetail.API_method }}</div>
              </div>
            </div>
            <CodeBlock :code="ProjectDetail.code" :language="ProjectDetail.code_type" />
          </div>
        </div>
        <!-- 如果选择展示图片，显示图片 -->
        <div v-if="selectedProject === 'picture' " class="project-details-container">
          <div class="project-details-box">
            <div style="display: flex; align-items: center;">
              <button class="img_button" @click="goBack">
                <img class="arrow-icon" src="/images/返回.png" alt="返回" />
              </button>
              <button class="img_button" @click="downloadPicture" style="margin-left: 30px;">
                <img class="download-icon" src="/images/下载.png" alt="下载" />
              </button>
            </div>
            <!-- 图片展示框 -->
            <ImageZoom :imageSrc="`/images/uploads/ADB/${ProjectDetail.image}`" />
          </div>
        </div>
        
        <!-- 如果选择仓库，展示仓库 -->
        <div v-if="selectedProject === 'warehouse' " class="right-sub-container">
          <div class="right-title">
            <h1>已创建</h1>
          </div>
          <div class="projectBox" :style="{ maxHeight: '200px' }">
            <div class="projectItem placeholder" @click="goUpload" >
              <div class="projectItem-header"></div>
              <div class="projectItem-body">
                <h3>+</h3>
                <p>点击创建新接口</p>
              </div>
            </div>
            <div class="projectItem" v-for="(item, index) in unapprovedItems" :key="item.id" @click="showProjectDetails(item)" @mouseover="startScroll(index)" @mouseout="stopScroll(index)">
              <div class="projectItem-header"></div>
              <div class="projectItem-body">
                <div class="scroll-container" :style="{ transform: item.scrollTransform }">
                  <h3 :ref="`title-${index}`">{{ item.title }}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="right-title">
            <h1>已收藏</h1>
          </div>
          <div class="projectBox" :style="{ maxHeight: '200px' }">
            <div class="projectItem placeholder" v-for="n in placeholders" :key="'placeholder-' + n">
              <div class="projectItem-header"></div>
              <div class="projectItem-body">
                <h3>加载中...</h3>
                <p>请稍候</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果选择上传新街口，展示上传页面 -->
        <div v-if="selectedProject === 'uploadproject' " class="right-sub-container">
          <div class="project-details-box">
            <button class="img_button" @click="goBack">
              <img class="arrow-icon" src="/images/返回.png" alt="返回" />
            </button>
            <h1 style="margin-top: 40px;">README.md</h1>
            <div>
              <CodeInputBlock ref="readmeInput" language="markdown" placeholder="请在此输入 README 内容..." :rows="5" />
            </div>
            <h1 style="margin-top: 40px;">Code</h1>
            <div>
              <CodeInputBlock ref="codeInput" language="" placeholder="......" :rows="13" />
            </div>
            <button class="img_button" @click="UploadProjectitem" style="margin-left: auto;">
                <img v-if="!Uploadsuccess" class="arrow-icon" src="/images/上传.png" alt="上传" />
                <img v-if="Uploadsuccess" class="arrow-icon" src="/images/完成.png" alt="完成" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get_adbScripts_list, add_adbScripts_list } from '@/api/api';
import CodeBlock from '../components/CodeBlock.vue';
import CodeInputBlock from '../components/CodeInputBlock.vue';

// 异步加载组件
const MarkdownPreview = () => import('../components/MarkdownPreview.vue');
const ImageZoom = () => import('../components/ImageZoom.vue');


export default {
  name: 'Laboratory',
  components: {
    MarkdownPreview,
    ImageZoom,
    CodeBlock,
    CodeInputBlock,
  },
  data() {
    return {
      currentIndex: null,                 // 默认选中项索引
      expandedIndexes: [],                // 保存所有展开的下拉框索引
      searchQuery: '',                    // 搜索框中的输入值
      selectedProject: "projectlist",     // 界面选择，初始时为projectlist
      parentProject: "projectlist",       // 界面选择，用于回退，初始时为projectlist
      ProjectDetail: null,                // 存储被点击的项目
      markdownContent: '',
      apiMethod:'',                       // 存储ProjectDetail.API_method
      PictureBasePath: '/images/uploads/ADB',
      Uploadsuccess: false,               // 上传审核状态
      navItems: [
        { title: '发现', content: '', subItems: [], image: '/images/发现.png', route: 'projectlist' },
        // 下拉框形式
        /* 
        {
          title: '仓库', 
          content: '仓库', 
          subItems: [
            { title: '详情1', route: 'warehouse' },
            { title: '详情2', route: '/warehouse' }
          ], 
          image: '/images/仓库.png'
        }
        */
        { title: '仓库', content: '', subItems: [], image: '/images/仓库.png', route: 'warehouse' },
        { title: '敬请期待', content: '', subItems: [], route: '/404'},
      ],
      contentItems: [],
      approvedItems: [],
      unapprovedItems: [],
      placeholders: 6, // 6个占位符
    };
  },
  mounted() {
    this.fetchContentItems();
    // 添加全局点击监听器，如果需要取消全局选中状态
    document.addEventListener('click', this.onPageClick);
  },
  beforeDestroy() {
    // 在组件销毁时移除监听器，防止内存泄漏
    document.removeEventListener('click', this.onPageClick);
  },  
  methods: {
    handleSearch() {
      // 当按下 Enter 键时触发的搜索逻辑
      console.log('搜索内容:', this.searchQuery);

    },
    // 页面点击逻辑(这个是导致一系列点击逻辑的问题来源)
    onPageClick() {
      // 检查当前选中的项目
      if (this.selectedProject === 'uploadproject') {
        return; // 如果是 uploadproject 页面，直接返回
      }
      // 检查点击的目标是否为输入框/文本框
      const target = event.target;
      if (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT' || target.isContentEditable) {
        return; // 如果点击的是输入框或可编辑区域，直接返回，不执行复制逻辑
      }
      
      // 获取并复制当前选中的文本
      const selectedText = window.getSelection().toString(); // 获取选中的文本
      if (selectedText) {
        navigator.clipboard.writeText(selectedText)
          .then(() => {
            console.log('Text copied to clipboard:', selectedText); // 复制成功
            this.ProjectDetail.API_method = "复制成功";
            setTimeout(() => {
              this.ProjectDetail.API_method = this.apiMethod;
            }, 500); // 500ms秒后恢复
          })
          .catch(err => {
            console.error('Failed to copy text:', err); // 复制失败
          });
      }
      // 取消选中状态
      if (window.getSelection) {
        window.getSelection().removeAllRanges(); // 兼容现代浏览器
      } else if (document.selection) {
        document.selection.empty(); // 兼容 IE
      }
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
        if (this.navItems[index].route.startsWith('/')) {
          this.navigateTo(this.navItems[index].route)
        }else{
          this.selectedProject = this.navItems[index].route;
          this.parentProject = this.navItems[index].route; // 用于回退
        }
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
      this.selectedProject = "project";
      this.ProjectDetail = item;
      this.apiMethod = this.ProjectDetail.API_method;
    },
    goPicture() {
      this.selectedProject = "picture";
    },
    // 进入上传界面
    goUpload() {
      this.selectedProject = 'uploadproject';
    },
    // 回退
    goBack() {
      this.selectedProject = this.parentProject;
    },
    downloadPicture() {
      const imageUrl = `${this.PictureBasePath}/${this.ProjectDetail.image}`;  // 使用反引号定义模板字符串
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'picture.png';  // 设置下载的文件名
      link.click();  // 触发点击事件，开始下载
    },
    // 上传项目
    async UploadProjectitem() {
      const readmeContent = this.$refs.readmeInput.getValue();
      const codeContent = this.$refs.codeInput.getValue();
      
      if (readmeContent && codeContent) {
        const params = {
          title: "待审核",
          readme: readmeContent,
          code: codeContent,
          code_type: "JavaScript",
          tags: [],
          create_user: "liuyh",
          update_user: "liuyh"
        };
        try {
          const response = await add_adbScripts_list(params); 
          console.log('审核已发送', response);
          
          this.Uploadsuccess = true; 
          setTimeout(() => {
            this.Uploadsuccess = false; 
          }, 1000);
          
          this.$refs.readmeInput.clearContent();
          this.$refs.codeInput.clearContent();
          
        } catch (error) {
          console.error('add_adbScripts_list请求出错:', error); 
        }
      } else {
        if (!readmeContent) this.$refs.readmeInput.shakeBlock();
        if (!codeContent) this.$refs.codeInput.shakeBlock();
        return;
      }
    },

    // api获取项目列表
    async fetchContentItems() {
      try {
        const response = await get_adbScripts_list();
        const items = response.map(item => ({
          title: item.title,
          readme: item.readme,
          code: item.code,
          API_url: item.API_url,
          API_method: item.API_method,
          code_type: item.code_type,
          image: item.img_path, // 根据实际需求调整
          underview: item.underview, // 是否已审核
          
          // 项目标题是否正在滚动
          isScrolling: false,
          scrollTransform: 'translateX(0)',
        }));

        // 分类已审核和未审核的项目
        this.contentItems = items; // 存储所有项目
        this.approvedItems = items.filter(item => item.underview === true); // 存储已审核项目
        this.unapprovedItems = items.filter(item => item.underview === false); // 存储未审核项目
      } catch (error) {
        console.error('获取项目列表失败:', error);
      }
    },
    
    // 项目标题滚动效果
    startScroll(index) {
      const titleElement = this.$refs[`title-${index}`][0]; // 使用 ref 获取标题元素
      // 如果长度小于容器宽度，则无需滚动
      if (titleElement.scrollWidth > titleElement.offsetWidth) {
        this.contentItems[index].isScrolling = true;
        this.contentItems[index].scrollTransform = 'translateX(0)';
        this.animateScroll(index);
      }
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

<style scoped src="@/assets/css/lab.css"> </style>
