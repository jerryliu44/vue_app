<template>
<div class="Laboratory-page">

  <el-container class="">
    <el-header></el-header>
    <el-container>
      <el-aside>
      </el-aside>
      <el-main>
        <el-card class="box-card">
            <span>卡片名称</span>
        </el-card>
      </el-main>
    </el-container>
  </el-container>

</div>
</template>

<script>
export default {
  name: 'Laboratory',
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

.el-container {
  height: 100vh;
}
.el-header{
  background-color: rgb(34, 34, 31);
  min-height: 100px;
}
.el-aside {
  width: 20%;
  background-color: rgb(238, 241, 246);
}

.box-card {
  width: 480px;
}

</style>
