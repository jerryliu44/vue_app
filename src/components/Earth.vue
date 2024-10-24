<template>
    <div ref="parentContainer" class="parent-container">
        <div ref="earthContainer" class="earth-container" v-if="!iframeVisible">
            <!-- 这里是地球的3D模型 -->
        </div>
        <div 
            v-if="iframeVisible" 
            class="iframe-container">
            <iframe 
                src="https://www.baidu.com" 
                class="expanding-iframe" 
                :class="{ expanded: expanding }"
                frameborder="0">
            </iframe>
        </div>
    </div>
</template>
  
  <script>
  import * as THREE from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  
  export default {
    name: "Earth",
    data() {
      return {
        parentWidth: 1,
        parentHeight: 1,
        clouds: null,
        earth: null,
        scene: null,
        camera: null,
        renderer: null,
        controls: null,
        earthRotationSpeed: 0.001,
        cloudsRotationSpeed: 0.0015,
        targetEarthRotationSpeed: 0.001,
        targetCloudsRotationSpeed: 0.0015,
        acceleration: 0.0001,
        zoomAnimation: false,
        zoomFactor: 1,
        targetPosition: new THREE.Vector3(0, 0, 0),

        iframeVisible: false, // 控制 iframe 是否可见
        expanding: false, // 控制 iframe 扩展状态
      };
    },
    mounted() {
      window.addEventListener("resize", this.updateParentSize);
      this.updateParentSize();
      this.initThreeJS();
  
      // 设置5秒后自动定位
      setTimeout(() => {
        this.smoothRotate(0.01, 0.015); // 开始旋转
        this.zoomTo(116.4074, 39.9042); // 定位到北京（经度：116.4074，纬度：39.9042）
      }, 5000);
    },
    methods: {
      initThreeJS() {
        this.scene = new THREE.Scene();
  
        this.camera = new THREE.PerspectiveCamera(75, this.parentWidth / this.parentHeight, 0.01, 1000);
        this.camera.position.set(0, 0, 5);
  
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.parentWidth, this.parentHeight);
        this.renderer.setClearColor(0x87CEEB, 0);
        this.$refs.earthContainer.appendChild(this.renderer.domElement);
  
        const earthTexture = new THREE.TextureLoader().load("/images/uploads/Earth/8k_earth_daymap.jpg");
        const earthGeometry = new THREE.SphereGeometry(2.5, 64, 64);
        const earthMaterial = new THREE.MeshStandardMaterial({
          map: earthTexture,
          roughness: 0.5,
          metalness: 0.1,
        });
  
        this.earth = new THREE.Mesh(earthGeometry, earthMaterial);
        this.scene.add(this.earth);
  
        const cloudTexture = new THREE.TextureLoader().load(
          "/images/uploads/Earth/8k_earth_clouds.jpg",
          (texture) => {
            const cloudGeometry = new THREE.SphereGeometry(2.51, 64, 64);
            const cloudMaterial = new THREE.MeshStandardMaterial({
              map: texture,
              transparent: true,
              opacity: 0.4,
            });
  
            this.clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
            this.scene.add(this.clouds);
          },
          undefined,
          (error) => {
            console.error("Error loading cloud texture:", error);
          }
        );
  
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add(ambientLight);
  
        const pointLight1 = new THREE.PointLight(0xffffff, 1);
        pointLight1.position.set(5, 3, 5);
        this.scene.add(pointLight1);
  
        const pointLight2 = new THREE.PointLight(0xffffff, 1);
        pointLight2.position.set(-5, -3, -5);
        this.scene.add(pointLight2);
  
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5).normalize();
        this.scene.add(directionalLight);
  
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        // this.controls.minDistance = 4;      //相机最近距离
        this.controls.maxDistance = 10;     //相机最远距离
  
        window.addEventListener("resize", this.onWindowResize);
        this.animate();
      },
      animate() {
        requestAnimationFrame(() => this.animate());
  
        this.rotateEarth();
        this.rotateClouds();
  
        if (this.zoomAnimation) {
          this.handleZoomAnimation();
        }
  
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      },
      rotateEarth() {
        if (this.earth) {
          if (this.earthRotationSpeed < this.targetEarthRotationSpeed) {
            this.earthRotationSpeed += this.acceleration;
            if (this.earthRotationSpeed > this.targetEarthRotationSpeed) {
              this.earthRotationSpeed = this.targetEarthRotationSpeed;
            }
          }
          this.earth.rotation.y += this.earthRotationSpeed;
        }
      },
      rotateClouds() {
        if (this.clouds) {
          if (this.cloudsRotationSpeed < this.targetCloudsRotationSpeed) {
            this.cloudsRotationSpeed += this.acceleration;
            if (this.cloudsRotationSpeed > this.targetCloudsRotationSpeed) {
              this.cloudsRotationSpeed = this.targetCloudsRotationSpeed;
            }
          }
          this.clouds.rotation.y += this.cloudsRotationSpeed;
        }
      },
      onWindowResize() {
        this.camera.aspect = this.parentWidth / this.parentHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.parentWidth, this.parentHeight);
      },
      updateParentSize() {
        const parentElement = this.$refs.parentContainer;
        this.parentWidth = parentElement.offsetWidth;
        this.parentHeight = parentElement.offsetHeight;
      },
      smoothRotate(earthSpeed, cloudsSpeed) {
        this.targetEarthRotationSpeed = earthSpeed;
        this.targetCloudsRotationSpeed = cloudsSpeed;
      },
      zoomTo(targetLongitude, targetLatitude) {
        const radius = 2.5; // 球体半径
        const phi = (90 - targetLatitude) * (Math.PI / 180);
        const theta = (targetLongitude + 180) * (Math.PI / 180);
  
        this.targetPosition.x = radius * Math.sin(phi) * Math.cos(theta);
        this.targetPosition.y = radius * Math.cos(phi);
        this.targetPosition.z = radius * Math.sin(phi) * Math.sin(theta);
  
        this.zoomAnimation = true;
        this.zoomFactor = 1; // 重置放大因子
      },
      handleZoomAnimation() {
        const targetZoomFactor = 2; // 最终放大因子
        const zoomSpeed = 0.003; // 放大速度

        // 设置相机位置
        this.camera.position.lerp(this.targetPosition, zoomSpeed); // 相机平滑移动到目标位置

        if (this.zoomFactor < targetZoomFactor) {
            this.zoomFactor += zoomSpeed; // 增加放大因子
            this.camera.position.z = Math.max(this.camera.position.z - zoomSpeed, 2.5); // 确保不低于半径
            console.log(this.zoomFactor, targetZoomFactor);
        } else {
            this.zoomAnimation = false; // 完成放大动画
            this.iframeVisible = true; // 显示 iframe
            this.expanding = true; // 开始扩展
            this.hideEarth(); // 隐藏地球模型
        }
    },

    hideEarth() {
        this.earth.visible = false; // 隐藏地球模型
        console.log('cjchdjc')
        if (this.clouds) {
            this.clouds.visible = false; // 隐藏云层模型（如果存在）
        }
    },
},
    beforeDestroy() {
      window.removeEventListener("resize", this.onWindowResize);
      window.removeEventListener("resize", this.updateParentSize);
    },
  };
  </script>
  
  <style scoped>
  .parent-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  
  .earth-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }


  /* iframe部分 */
  .iframe-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
}

.expanding-iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border: none;
    transition: width 4s ease-in-out, height 4s ease-in-out, opacity 4s ease-in-out;
    opacity: 0; /* 初始透明度为0 */
}

.expanding-iframe.expanded {
    width: 80%;
    height: 80%;
    opacity: 1; /* 最终透明度为1 */
}

</style>
  