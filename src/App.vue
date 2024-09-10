<template>  
    <div id="app">  
        <MainContentComponent />
    </div>  
</template>  
  
<script>
import HeaderComponent from './components/HeaderComponent.vue'; 
import SidebarComponent from './components/SidebarComponent.vue';
import MainContentComponent from './components/MainContentComponent.vue';


export default {  
    name: 'App',  
    components: {
        // HeaderComponent 
        // SidebarComponent,  
        MainContentComponent  
    }  
}
</script>
  
<style>  
    /* CSS 样式定义 */  
</style>