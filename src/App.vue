<template>  
    <div id="app">  
        <Home />
        <router-view></router-view>
    </div>  
</template>  
  
<script>
import Home from './views/Home.vue'

export default {  
    name: 'App',  
    components: {
        Home
    }   
}
</script>
  
<style>  

</style>