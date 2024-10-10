<template>
    <div class="HotNews-page">
      <div class="main-container">
        <div class="sub-container"></div> 
  
        
      </div>
    </div>
</template>
  
<script>

</script>
  
<style scoped>
.HotNews-page {
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

.sub-container {
    flex-shrink: 0;
    width: 100%; 
    height: 800px;
    border-radius: 15px 15px 15px 15px; 
    margin-top: 50px; 
    padding: 10px;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    background: rgba(33, 37, 41, 0.75);
    z-index: 1000;
    
  }

</style>
  