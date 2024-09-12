<template>
    <div class="background-filter"></div>
</template>

<script>
export default {
    name: 'Background-filter'
};
</script>

<style scoped>
/* 背景模糊滤镜 */
.background-filter{
    position: fixed;
    width: 100%;
    height: 100%;
    background: var(--back_filter_color);
    backdrop-filter:  blur(var(--back_filter));
    -webkit-backdrop-filter: blur(var(--back_filter));
    z-index: -99999999;
}
</style>