<!-- MarkDown语法展示 -->
<template>
    <div class="markdown-preview" v-html="compiledMarkdown"></div>
</template>


<script>
import { marked } from 'marked';

export default {
props: {
    markdownText: {
    type: String,
    required: true,
    },
},
computed: {
    compiledMarkdown() {
    return marked(this.markdownText);
    },
},
};
</script>
  
<style>

.markdown-preview {
border: 1px solid #ccc;
padding: 10px;
background-color: #f9f9f9;
}

</style>
  