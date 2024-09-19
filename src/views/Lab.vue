<template>
<div class="Laboratory-page">
  <div class="liuyh68-main"></div>

</div>
</template>

<script>
// import CardList from '@/components/CardList.vue';

export default {
  name: 'Laboratory',
  // components: {
  //   CardList,
  // },
}
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

.liuyh68-main {
    width: 100%;
    margin: 0 auto;
    transition: transform 0.5s ease;
    max-width: 1150px;
    position: relative;
    display: flex;
    flex-direction: row;
}

</style>
