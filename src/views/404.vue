<template>
  <div class="error-page">
    <div class="error-card">
      <img class="error-img" src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="404 Image" />
      <h1>404</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <router-link to="/" class="home-button">Go Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.error-page {
  display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* background: url(/images/background1.jpg) no-repeat center center / cover; */
    backdrop-filter: blur(19px);
    -webkit-backdrop-filter: blur(19px); /* 兼容 Safari */
    background-color: rgba(0, 0, 0, 0.3); /* 半透明黑色背景 */
}

.error-card {
  background-color: rgba(255, 255, 255, 0.9); /* 调整透明度 */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}
.error-img {
  width: 150px;
  margin-bottom: 20px;
}

h1 {
  font-size: 72px;
  margin-bottom: 10px;
  color: #ff6b6b;
}

p {
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
}

.home-button {
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #ff4b4b;
}
</style>
