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
                        <a class="iconItem" onclick="" href="https://github.com/liuyh68666">
                            <img src="/images/Github_light.svg" alt="Icon" style="width: 25px; height: 25px;">
                            <div class="iconTip">Github</div>
                        </a><a class="iconItem" onclick="" href="mailto:i@liuyh68.net">
                            <img src="/images/Mail_light.svg" alt="Icon" style="width: 23px; height: 23px;">
                            <div class="iconTip">Mail</div>
                        </a><a class="iconItem" onclick="pop('/images/qq.jpg')" href="javascript:void(0)">
                            <img src="/images/Wechat_light.svg" alt="Icon" style="width: 25px; height: 25px;">
                            <div class="iconTip">WX</div>
                        </a><a class="iconItem" onclick="pop('/images/wxzsm.jpg')" href="javascript:void(0)">
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
                        <!-- <a class="projectItem a" target="_blank" href="https://blog.liuyh68.net"> -->
                        <a class="projectItem a" target="_blank" @click.prevent="handleClick">
                            <div class="projectItemLeft">
                                <h1>博客</h1>
                                <p>记录摆烂日常</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/i1.png" alt="">
                            </div>

                        </a><a class="projectItem a" target="_blank" href="https://i.liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>云盘</h1>
                                <p>存储收集文件</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/i2.png" alt="">
                            </div>

                        </a>
                        <a class="projectItem a" target="_blank" href="https://liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>实验室</h1>
                                <p>收集有趣html作品</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/i4.png" alt="">
                            </div>

                        </a><a class="projectItem a" target="_blank" href="https://liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>实验室</h1>
                                <p>收集有趣html作品</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/i4.png" alt="">
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
                                <img src="/images/i1.png" alt="">
                            </div>

                        </a><a class="projectItem b" target="_blank" href="https://i.liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>云盘</h1>
                                <p>存储收集文件</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/i2.png" alt="">
                            </div>

                        </a>
                        <a class="projectItem b" target="_blank" href="https://liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>实验室</h1>
                                <p>收集有趣html作品</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/i4.png" alt="">
                            </div>

                        </a><a class="projectItem b" target="_blank" href="https://liuyh68.cc">
                            <div class="projectItemLeft">
                                <h1>实验室</h1>
                                <p>收集有趣html作品</p>
                            </div>
                            <div class="projectItemRight">
                                <img src="/images/i4.png" alt="">
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
            <a href="https://beian.miit.gov.cn/">
                豫ICP备2023015852号-1 </a>
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
    
    export default {
        name: 'MainContent',
        components: {
            LoadingSpinner,
            BackgroundFilter,
        },
        mounted() {
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

            function toggleClass(selector, className) {
                var elements = document.querySelectorAll(selector);
                elements.forEach(function (element) {
                    element.classList.toggle(className);
                });
            }

            function pop(imageURL) {
                var tcMainElement = document.querySelector(".tc-img");
                if (imageURL) {
                    tcMainElement.src = imageURL;
                }
                toggleClass(".tc-main", "active");
                toggleClass(".tc", "active");
            }

            var tc = document.getElementsByClassName('tc');
            var tc_main = document.getElementsByClassName('tc-main');
            tc[0].addEventListener('click', function (event) {
                pop();
            });
            tc_main[0].addEventListener('click', function (event) {
                event.stopPropagation();
            });



            function setCookie(name, value, days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + value + expires + "; path=/";
            }

            function getCookie(name) {
                var nameEQ = name + "=";
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    while (cookie.charAt(0) == ' ') {
                        cookie = cookie.substring(1, cookie.length);
                    }
                    if (cookie.indexOf(nameEQ) == 0) {
                        return cookie.substring(nameEQ.length, cookie.length);
                    }
                }
                return null;
            }

            // 原先主题切换
            document.addEventListener('DOMContentLoaded', function () {
                
                var html = document.querySelector('html');
                var themeState = getCookie("themeState") || "Light";
                var tanChiShe = document.getElementById("tanChiShe");

                function changeTheme(theme) {
                    tanChiShe.src = "/images/snake-" + theme + ".svg";


                    html.dataset.theme = theme;
                    setCookie("themeState", theme, 365);
                    themeState = theme;
                }


                var Checkbox = document.getElementById('myonoffswitch')
                Checkbox.addEventListener('change', function () {
                    if (themeState == "Dark") {
                        changeTheme("Light");
                    } else if (themeState == "Light") {
                        changeTheme("Dark");
                    } else {
                        changeTheme("Dark");
                    }
                });

                if (themeState == "Dark") {
                    Checkbox.checked = false;
                }

                changeTheme(themeState);

            // document.addEventListener('DOMContentLoaded', function () {
            //     var html = document.querySelector('html');
            //     var themeState = getCookie("themeState") || "light"; // 默认为亮色主题
            //     var tanChiShe = document.getElementById("tanChiShe");

            //     function changeTheme(theme) {
            //         tanChiShe.src = "./static/svg/snake-" + theme + ".svg";
            //         html.dataset.theme = theme; // 设置 data-theme 属性
            //         setCookie("themeState", theme, 365);
            //         themeState = theme;
            //     }

            //     var Checkbox = document.getElementById('myonoffswitch');
            //     Checkbox.addEventListener('change', function () {
            //         if (themeState === "dark") {
            //             changeTheme("light");
            //         } else {
            //             changeTheme("dark");
            //         }
            //     });

            //     // 初始化时设置 Checkbox 状态
            //     if (themeState === "dark") {
            //         Checkbox.checked = true;
            //     } else {
            //         Checkbox.checked = false;
            //     }

            //     // 应用初始主题
            //     changeTheme(themeState);


                // 显示FPS帧数

                // var fpsElement = document.createElement('div');
                // fpsElement.id = 'fps';
                // fpsElement.style.zIndex = '10000';
                // fpsElement.style.position = 'fixed';
                // fpsElement.style.left = '0';
                // document.body.insertBefore(fpsElement, document.body.firstChild);

                // var showFPS = (function () {
                //     var requestAnimationFrame = window.requestAnimationFrame ||
                //         window.webkitRequestAnimationFrame ||
                //         window.mozRequestAnimationFrame ||
                //         window.oRequestAnimationFrame ||
                //         window.msRequestAnimationFrame ||
                //         function (callback) {
                //             window.setTimeout(callback, 1000 / 60);
                //         };

                //     var fps = 0,
                //         last = Date.now(),
                //         offset, step, appendFps;

                //     step = function () {
                //         offset = Date.now() - last;
                //         fps += 1;

                //         if (offset >= 1000) {
                //             last += offset;
                //             appendFps(fps);
                //             fps = 0;
                //         }

                //         requestAnimationFrame(step);
                //     };

                //     appendFps = function (fpsValue) {
                //         fpsElement.textContent = 'FPS: ' + fpsValue;
                //     };

                //     step();
                // })();
                
                
                
                //pop('./static/img/tz.jpg')
                
                
                
            });

        },
        methods : {
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
            }
        }

    };
</script>




<style scoped>
@font-face {
    font-family: "a";
    /*中文字体*/
    src: url(../assets/static/fonts/Pacifico-Regular.ttf);
    font-display: swap;
}

@font-face {
    font-family: "b";
    src: url(../assets/static/fonts/Ubuntu-Regular.ttf);
    font-display: swap;
}

@font-face {
    font-family: "title";
    /*英文字体*/
    src: url(../assets/static/fonts/DripOctober-vm0JA.ttf);
    font-display: swap;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    transition: background-color 0.2s ease;
}

a:hover,
a:link,
a:visited,
a:active,
a:focus {
    text-decoration: none;
    outline: var(--link-outline);
    border: none;
    color: var(--link-color);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}


/* 设置滚动条样式 */
::-webkit-scrollbar {
    width: 0px;
}

/* 滑块 */
::-webkit-scrollbar-thumb {
    background-color: var(--main_text_color, #000000);
    border-radius: 8px;
    height: 20%;
}

/* 滑轨 */
::-webkit-scrollbar-track {
    background-color: var(--main_bg_color, linear-gradient(50deg, #a2d0ff, #ffffff));
}



html[data-theme="Dark"] {
    
    --main_text_color: #fff;
    --gradient:linear-gradient(120deg, rgb(133, 62, 255), #f76cc6 30%, rgb(255, 255, 255) 60%);
    --purple_text_color: #747bff;
    --text_bg_color: rgb(26, 4, 48);
    --item_bg_color: rgb(19, 20, 24);
    --item_hover_color: rgb(19, 23, 27);
    --item_left_title_color: rgb(255, 255, 255);
    --item_left_text_color: rgb(142, 142, 142);
    --footer_text_color: #646464;
    --left_tag_item: linear-gradient(50deg, #1f2327, #000000);
    --card_filter: 0px;
    --back_filter: 0px;
    --back_filter_color: #000000;
    --fill:#ffffff;
}



body {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    position: relative;
    font-family: "b",  "a", sans-serif;
    background: var(--main_bg_color);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    transition: color 0.1s ease;
    color: var(--main_text_color);

}


/* 主体布局容器 */
.liuyh68-main {
    width: 100%;
    margin: 0 auto;
    transition: transform 0.5s ease;
    max-width: 1150px;
    position: relative;
    display: flex;
    flex-direction: row;
}


/* 左侧导航栏布局容器 */
.liuyh68-left {
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


.liuyh68-left::-webkit-scrollbar {
    display: none;
}



.logo {
    flex-shrink: 0;
    width: 90%;
    position: relative;
    aspect-ratio: 1/1;
    margin-top: 50px;
    background-size: cover;
    border-radius: 50%;
}


/* 左侧地理区位导航栏布局容器 */
.left-div {
    flex-shrink: 0;
    width: 100%;
    border-radius: 13px;
    margin-top: 35px;
    padding: 20px;
    backdrop-filter: blur(var(--card_filter));
    -webkit-backdrop-filter: blur(var(--card_filter));
    background: var(--item_bg_color);
}

.left-des {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.left-des-item {
    display: flex;
    align-items: center;
    line-height: 20px;
    font-size: 15px;
    margin-bottom: 5px;
    overflow: hidden;
}

.left-des-item i,.left-des-item svg{
    width: 16px;
    height: 16px;
    fill:var(--fill);
   font-size: 18px;
    margin-right: 10px;
}



/* 左侧水平行方向排列标签 */
.left-tag {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 14px;
}

/* 左侧标签属性
.left-tag-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    margin: 0px 5px 5px 0;
    padding: 10px;
    font-size: 13px;
    border-radius: 10px;
    background: var(--left_tag_item);
} */


/* 左侧滚动栏属性 */
#line {
    width: 100%;
    height: 200px;
    font-size: 13px;
    padding-left: 8px;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
}

#line li {
    list-style: none;
    position: relative;
    padding: 15px 0px 0px 15px;
    border-left: 2px solid #d5d5d5;
    border-radius: 0;
    scroll-snap-align: end;
    color: var(--main_text_color);
}


.focus {
    width: 8px;
    height: 8px;
    border-radius: 22px;
    background-color: rgb(255 255 255);
    border: 2px solid #fff;
    position: absolute;
    left: -5px;
    top: 50%;
}

#line li:first-child .focus:first-child {
    background-color: #aaffcd;
    animation: focus 1.8s ease infinite;
}

#line::-webkit-scrollbar {
    display: none;
}



/* 右侧容器布局 */
.liuyh68-right {
    width: calc(100% - 230px);
    display: flex;
    padding: 20px;
  position: relative;
    padding-bottom: 50px;
    flex-direction: column;
}



/* Hello */
.welcome {
    font-size: 65px;
    font-weight: 800;
    margin: 20px 0;
}




.index-logo {
    flex-shrink: 0;
    width: 40%;
    margin-top: 30px;
    position: relative;
    max-width: 200px;
    aspect-ratio: 1/1;
    background-size: cover;
    border-radius: 50%;
    border: 0.5px solid #ffffff;
}

.description {

    font-size: 20px;
    margin-top: 7px;
}



.gradientText {

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200%;
    background-position: 0%;
    font-family: "title";
    font-size: 110%; /* 设置字体大小 */
    margin-left: 1%;
    animation: backgroundSizeAnimation 10s ease-in-out infinite;
      background-image:  var(--gradient);
}

@keyframes backgroundSizeAnimation {
    0% {
        background-position: 100%;
    }

    25% {
        background-position: 50%;
    }

    50% {
        background-position: 0%;
    }

    75% {
        background-position: 50%;
    }

    100% {
        background-position: 100%;
    }

}

.purpleText {
    color: var(--purple_text_color);
    font-weight: 800;
}

.textBackground {
    font-weight: 800;
    background: var(--text_bg_color);
    border-radius: 5px;
    font-size: 17px;
    margin: 0 3px;
    padding: 2px 4px;
}

.iconContainer {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    margin-top: 20px;

}

.iconContainer::-webkit-scrollbar {
    display: none;
}



.iconItem {
    width: 49px;
    height: 43px;
    box-sizing: border-box;
    border-radius: 7px;
    display: flex;
    margin-left: 10px;

    backdrop-filter: blur(var(--card_filter));
    -webkit-backdrop-filter: blur(var(--card_filter));
    background: var(--item_bg_color);
    align-items: center;
    justify-content: center;
    transition: width 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
    flex-shrink: 0;
}
.iconItem i,.iconItem svg{
    width: 22px;
    height: 22px;
    fill:var(--fill);
    font-size: 22px;
     margin-right: 3px;
}
.switch {
    width: 55px;
    height: 43px;
    box-sizing: border-box;
    border-radius: 7px;
    display: flex;
    margin-left: 10px;
    backdrop-filter: blur(var(--card_filter));-webkit-backdrop-filter: blur(var(--card_filter));
    background: var(--item_bg_color);

    align-items: center;
    justify-content: center;
    transition: width 1s ease, opacity 1s ease, transform 1s ease;
    flex-shrink: 0;
}

.iconTip {
    padding-left: 5%;
    white-space: nowrap;
    display: none;
}





.iconItem:hover {
    width: 95px;
    transform: translateY(-2px);
    background: var(--item_hover_color);
}


.iconItem:hover .iconTip {
    display: block;
}

.switch:hover {
    width: 55px;
    /* transform: translateY(-2px); */
    background: var(--item_hover_color);
}

.tanChiShe {
    width: 85%;
}

.tanChiShe img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title {
    display: flex;
    align-items: center;
    font-size: 26px;
    font-weight: 800;
    margin: 20px 0;
    transition: transform 0.4s ease;
}
.title i ,.title svg{
    margin-right: 8px;
    height: 26px;
    width: 26px;
   fill:var(--fill);
}
.title:hover {
    transform: translateY(-5px);
}

.projectList {
    display: flex;
    flex-wrap: wrap;
}

.projectItem {
    margin: 7px;
    display: flex;
    background-color: var(--item_bg_color);
    border-radius: 8px;
    padding: 15px;
    height: 100px; /* 统一设置高度 */
    width: calc(25% - 15px);
    backdrop-filter: blur(var(--card_filter));
    transition: opacity 0.5s ease, background-color 0.2s ease, border 0.2s ease, transform 0.3s ease; /* 统一过渡效果 */
}

.projectItem:hover {
    box-shadow: 0 8px 16px -4px #2c2d300c;
    transform: translateY(-2px);
}

.projectItemRight {
    opacity: 1;
    transform: scaleX(1); /* 初始状态 */
    transition: opacity 0.4s ease, transform 0.4s ease; /* 统一过渡效果 */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    overflow: hidden;
}

.projectItem:hover .projectItemRight {
    opacity: 0;
    transform: scaleX(0); /* 收缩到0 */
}

.projectItemRight img {
    height: 39px;
    width: 39px;
}


.skill {
    padding: 25px;
    width: 100%;
}

.skill img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.skill #skillWap {
    display: none;
}

footer {
    position: absolute;
    padding: 10px;
    text-align: center;
    width: 100%;
    backdrop-filter: blur(var(--card_filter));
    -webkit-backdrop-filter: blur(var(--card_filter));
    background: var(--item_bg_color);
    color: var(--footer_text_color);
    font-size: 13px;
    bottom: 0;
}


@media (min-width: 800px) {

    .index-logo {
        display: none;
    }
}

@media (max-width: 1150px) {
    .a {
        width: calc(50% - 20px);
    }
.projectItem{
    margin: 10px;
}
    .b {

        width: calc(50% - 20px);


    }
}

@media (max-width: 800px) {
    .liuyh68-left {
        display: none;
    }

    .a .projectItemRight {
        display: none;

    }

    .a .projectItemRight img {
        display: none;

    }

    .a .projectItemLeft {
        width: 100%;
    }

    .a {

        width: calc(50% - 18px);
        margin: 9px;

    }

    .b {
        height: 110px;
        margin: 8px 15px;
        width: calc(100% - 30px);
    }



    .liuyh68-right {
        width: 100%;
    }

    .tanChiShe {
        width: 100%;
    }

    .description {
        font-size: 4vw;
    }

    .welcome {
        font-size: 10vw;
        margin: 2vw 0;

    }
    .iconContainer {
  
     margin-top: 4vw;

}
.projectItem{
    padding: 10px;
}
    .projectItemLeft p {
        font-size: 13px;
    }

    .projectItemLeft h1 {

        font-size: 18px;
    }

    .projectItem:hover h1 {

        font-size: 20px;

    }

    .skill #skillWap {
        display: block;
    }

    .skill #skillPc {
        display: none;
    }













}





.tc {
    position: fixed;
   
    display: flex;
    visibility: hidden;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(20, 20, 20, 0.5);
    z-index: 99999;
    align-items: center;
    top: 0;
    justify-content: center;
    flex-direction: column;
}

.tc-main {
    z-index: 100000;
    
    width: 80%;
    max-width: 300px;
    min-height: 200px;
    background-color: #ffffff;
    border-radius: 15px;

    display: flex;
    transition: transform 0.2s linear;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform: translateY(30%) scale(0.5);

}

.tc-img {
    width: 100%;
    height: 100%;
}

.tc.active {
    visibility: visible;
}

.tc-main.active {

    transform: translateY(0) scale(1);

}









.onoffswitch {
    position: relative;
    width: 38px;
    height: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 100%;
    border-radius: 50px;
}

.onoffswitch-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200%;
    height: 100%;
    margin-left: -100%;
    transition: margin 0.2s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    width: 50%;
    height: 100%;
    padding: 0;
    font-size: 12px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "";
    background-color: rgb(110 110 110 / 50%);
    color: #FFFFFF;
    text-align: left;
}

.onoffswitch-inner:after {
    content: "";
    background-color: #272727;
    color: #FAFAFA;
    text-align: right;
}

.onoffswitch-switch {
    display: block;
    height: 70%;
    aspect-ratio: 1/1;
    background: #FFFFFF;
    position: absolute;
    top: 12.5%;
    bottom: 12.5%;
    right: 5px;

    border-radius: 20px;
    transition: right 0.2s ease-in 0s;
}

.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
}

.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch {
    right: 50%;
}

</style>
  