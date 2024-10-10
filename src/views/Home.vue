<template>
    <div>
        <div><LoadingSpinner /></div>
        <div><BackgroundFilter /></div>
        <div class="liuyh68-main">
            <div class="liuyh68-left">
                <div class="logo" style="background-image: url(/images/logo.jpg);">
                    <img style="position: absolute;top:-27%;left:-10%;width: 120%; aspect-ratio: 1/1;" src="/images/logokuang.png">
                </div>
                <div class="left-div left-des">
                    <div class="left-des-item"><svg t="1705773709627" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1478"><path d="M512 249.976471c-99.388235 0-180.705882 81.317647-180.705882 180.705882s81.317647 180.705882 180.705882 180.705882 180.705882-81.317647 180.705882-180.705882-81.317647-180.705882-180.705882-180.705882z m0 301.17647c-66.258824 0-120.470588-54.211765-120.470588-120.470588s54.211765-120.470588 120.470588-120.470588 120.470588 54.211765 120.470588 120.470588-54.211765 120.470588-120.470588 120.470588z" p-id="1479"></path><path d="M512 39.152941c-216.847059 0-391.529412 174.682353-391.529412 391.529412 0 349.364706 391.529412 572.235294 391.529412 572.235294s391.529412-222.870588 391.529412-572.235294c0-216.847059-174.682353-391.529412-391.529412-391.529412z m0 891.482353C424.658824 873.411765 180.705882 686.682353 180.705882 430.682353c0-183.717647 147.576471-331.294118 331.294118-331.294118s331.294118 147.576471 331.294118 331.294118c0 256-243.952941 442.729412-331.294118 499.952941z" p-id="1480"></path></svg>China-ShenZhen
                    </div>
                    <div class="left-des-item"><svg t="1705773906032" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474"><path d="M729.6 234.666667H294.4V157.866667a51.2 51.2 0 0 1 51.2-51.2h332.8a51.2 51.2 0 0 1 51.2 51.2v76.8z m179.2 51.2a51.2 51.2 0 0 1 51.2 51.2v512a51.2 51.2 0 0 1-51.2 51.2H115.2a51.2 51.2 0 0 1-51.2-51.2v-512a51.2 51.2 0 0 1 51.2-51.2h793.557333z m-768 172.032c0 16.384 13.312 29.696 29.696 29.696h683.008a29.696 29.696 0 1 0 0-59.392H170.410667a29.696 29.696 0 0 0-29.696 29.696z m252.416 118.784c0 16.384 13.312 29.696 29.696 29.696h178.176a29.696 29.696 0 1 0 0-59.392H422.912a29.738667 29.738667 0 0 0-29.696 29.696z" p-id="2475"></path></svg>Lenovo</div>
                </div>
                <div class="left-div left-tag">
                    <div class="left-tag-item">网瘾</div>
                    <div class="left-tag-item">小学生</div>
                    <div class="left-tag-item">网页</div>
                    <div class="left-tag-item">linux</div>
                </div>
                <div class="left-div">
                    <ul id="line">
                        <li>
                            <div class="focus"></div><div>敬请期待</div><div>2024.1</div>
                        </li>
                        <li>
                            <div class="focus"></div><div>ICP备案成功</div><div>2023.8</div>
                        </li>
                        <li>
                            <div class="focus"></div><div>注册域名liuyh68.net</div><div>2023.3</div>
                        </li>
                        <li>
                            <div class="focus"></div><div>出来后洗心革面</div><div>2021.2</div>
                        </li>
                        <li>
                            <div class="focus"></div><div>...</div><div>...</div>
                        </li>
                        <li>
                            <div class="focus"></div><div>搭建第一个网站</div><div>2018.1</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="liuyh68-right">
                <header>
                    <div class="index-logo" style="background-image: url(/images/logo.jpg);">
                        <img style="position: absolute;top:-15%;left:-10%;width: 120%; aspect-ratio: 1/1;" src="/images/logokuang.png">
                    </div>
                    <div class="welcome">
                        Hello I' m <span class="gradientText"> liuyh </span>
                    </div>
                    <div class="description">👦 <span class="purpleText">Full Stack</span> Developer </div>
                    <div class="description">📝 The only way to do <span class="purpleText textBackground">great</span> is
                        to <span class="purpleText textBackground">love</span> what you do. </div>

                    <div class="iconContainer">
                        <!--图标网站 https://yesicon.app/ -->
                        <a class="iconItem" onclick="" href="https://github.com/jerryliu44">
                            <img src="/images/Github_light.svg" alt="Icon" style="width: 25px; height: 25px;">
                            <div class="iconTip">Github</div>
                        </a>
                        <a class="iconItem" onclick="" href="mailto:13715358575@163.com">
                            <img src="/images/Mail_light.svg" alt="Icon" style="width: 23px; height: 23px;">
                            <div class="iconTip">Mail</div>
                        </a><a class="iconItem" @click="pop('/images/wx.jpg')" href="javascript:void(0)">
                            <img src="/images/Wechat_light.svg" alt="Icon" style="width: 25px; height: 25px;">
                            <div class="iconTip">WX</div>
                        </a>
                        <a class="iconItem" @click="goToNotFound" href="javascript:void(0)">
                            <img src="/images/UpFilled_light.svg" alt="Icon" style="width: 20px; height: 20px;">
                            <div class="iconTip">Like</div>
                        </a>
                        <a class="switch">
                            <div class="onoffswitch">
                                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch"
                                    checked>
                                <label class="onoffswitch-label" for="myonoffswitch">
                                    <span class="onoffswitch-inner"></span>
                                    <span class="onoffswitch-switch"></span>
                                </label>
                            </div>
                        </a>
                    </div>

                    <div class="tanChiShe">
                        <img id="tanChiShe" src="/images/snake-Light.svg" alt="">
                    </div>
                </header>

                <content>
                    <div class="title">
                        <img src="/images/site_light.svg" alt="Icon" style="width: 25px; height: 25px; margin-right: 8px;">
                    site </div>
                    <div class="projectList">
                        <!-- <a class="projectItem a" target="_blank" @click.prevent="handleClick"> -->
                        <a class="projectItem a" @click="goToScriptRepository" href="javascript:void(0)">
                            <div class="projectItemLeft">
                                <h1>ADB</h1>
                                <p>集合小仓</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/foodIcon/面包.png" alt="">
                            </div>

                        </a>
                        <a class="projectItem a" @click="goToScriptRepository" href="javascript:void(0)">
                            <div class="projectItemLeft">
                                <h1>云盘</h1>
                                <p>存储收集文件</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/foodIcon/牛油果.png" alt="">
                            </div>

                        </a>
                        <a class="projectItem a" @click="goToLaboratory" href="javascript:void(0)">
                            <div class="projectItemLeft">
                                <h1>实验室</h1>
                                <p>收集有趣html作品</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/foodIcon/披萨.png" alt="">
                            </div>

                        </a><a class="projectItem a" target="_blank" href="https://liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>实验室</h1>
                                <p>收集有趣html作品</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/foodIcon/甜甜圈.png" alt="">
                            </div>

                        </a></div>
                    <div class="title">
                        <img src="/images/project_light.svg" alt="Icon" style="width: 25px; height: 25px; margin-right: 8px;">
                    project </div>
                    <div class="projectList"><a class="projectItem b" target="_blank" href="https://blog.liuyh68.net">
                            <div class="projectItemLeft">
                                <h1>博客</h1>
                                <p>记录摆烂日常</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/foodIcon/饼干.png" alt="">
                            </div>
                        </a><a class="projectItem b" target="_blank" href="https://i.liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>云盘</h1>
                                <p>存储收集文件</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/foodIcon/布丁.png" alt="">
                            </div>
                        </a>
                        <a class="projectItem b" target="_blank" href="https://liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>实验室</h1>
                                <p>收集有趣html作品</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/foodIcon/草莓.png" alt="">
                            </div>

                        </a><a class="projectItem b" target="_blank" href="https://liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>实验室</h1>
                                <p>收集有趣html作品</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/foodIcon/寿司.png" alt="">
                            </div>
                        </a></div>
                
                    <div class="title">
                        <img src="/images/skill_light.svg" alt="Icon" style="width: 25px; height: 25px; margin-right: 8px;">
                        skills
                    </div>
                    <div class="skill">
                        <img id="skillPc" src="/images/skillPc.svg" alt="" srcset="">
                        <img id="skillWap" src="/images/skillWap.svg" alt="" srcset="">
                    </div>
                </content>
            </div>
        </div>
        <footer>
            liuyh68 © 2024 |
            <a href="liuyh.origami.cloudns.be">
                liuyh.origami.cloudns.be </a>
        </footer>
        <div class="tc">
            <div onclick="" class="tc-main">
                <img class="tc-img" src="" alt="" srcset="">
            </div>
        </div>

    </div>
</template>
  
<script>
    import * as Api from '@/api/api';
    import LoadingSpinner from '@/components/LoadingSpinner.vue';
    import BackgroundFilter from '@/components/BackgroundFilter.vue';
    import { mapState, mapActions } from 'vuex';
    
    export default {
        name: 'MainContent',
        components: {
            LoadingSpinner,
            BackgroundFilter,
        },
        computed: {
            ...mapState(['theme']),  // 映射 Vuex 的 theme 状态到组件的计算属性
        },
        mounted() {
            // 禁用右键菜单
            document.addEventListener('contextmenu', function (event) {
                event.preventDefault();
            });

            function handlePress(event) {
                this.classList.add('pressed');
            }

            function handleRelease(event) {
                this.classList.remove('pressed');
            }

            function handleCancel(event) {
                this.classList.remove('pressed');
            }

            var buttons = document.querySelectorAll('.projectItem');
            buttons.forEach(function (button) {
                button.addEventListener('mousedown', handlePress);
                button.addEventListener('mouseup', handleRelease);
                button.addEventListener('mouseleave', handleCancel);
                button.addEventListener('touchstart', handlePress);
                button.addEventListener('touchend', handleRelease);
                button.addEventListener('touchcancel', handleCancel);
            });

            var tc = document.getElementsByClassName('tc');
            var tc_main = document.getElementsByClassName('tc-main');
            
            if (tc.length > 0 && tc_main.length > 0) {
                // 绑定背景点击事件，调用 this.pop()
                tc[0].addEventListener('click', (event) => {
                    this.pop();  // 调用 Vue 实例中的 pop 方法
                });

                // 阻止内容区域点击事件关闭弹窗
                tc_main[0].addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            }
            // 初始化主题切换
            this.initializeThemeSwitch();
        },
        methods : {
            goToNotFound() {
                this.$router.push({ name: 'NotFound' });  // 触发事件来切换页面
            },
            goToLaboratory() {
                this.$router.push({ name: 'Laboratory' });
            },
            goToScriptRepository() {
                this.$router.push({ name: 'ScriptRepository' });
            },
            toggleClass(selector, className) {
                var elements = document.querySelectorAll(selector);
                elements.forEach(function (element) {
                    element.classList.toggle(className);
                });
            },
            pop(imageURL) {
                var tcMainElement = document.querySelector(".tc-img");
                if (imageURL) {
                    tcMainElement.src = imageURL;
                }
                this.toggleClass(".tc-main", "active");
                this.toggleClass(".tc", "active");
            },

            // 发送 API 请求
            async handleClick() {
                try {
                    const login_data = {
                        username: "1223",
                        password: "2121"
                    };
                    const response = await Api.get_example(login_data);
                    console.log('API response:', response);
                } catch (error) {
                    console.error('API request failed:', error);
                }
            },
            
            ...mapActions(['updateTheme']),  // 映射 Vuex 的 action 到组件的方法
            initializeThemeSwitch() {
                this.$nextTick(() => {
                    var html = document.querySelector('html');
                    var themeState = this.theme || 'Light';
                    var tanChiShe = document.getElementById('tanChiShe');

                    const changeTheme = (theme) => {
                    tanChiShe.src = `/images/snake-${theme}.svg`;
                    html.dataset.theme = theme;
                    this.updateTheme(theme);  // 更新 Vuex 中的主题状态
                    };

                    const handleThemeChange = () => {
                    if (this.theme === 'Dark') {
                        changeTheme('Light');
                    } else {
                        changeTheme('Dark');
                    }
                    };

                    var Checkbox = document.getElementById('myonoffswitch');
                    if (Checkbox) {
                    Checkbox.addEventListener('change', handleThemeChange);
                    }

                    if (this.theme === 'Dark') {
                    Checkbox.checked = false;
                    }
                    changeTheme(this.theme);
                });
            },
        }

    };
</script>



<style src="@/assets/css/home.css"> </style>
  