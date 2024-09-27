<!-- MarkDown语法展示 -->
<template>
    <div class="markdown-preview" v-html="compiledMarkdown"></div>
</template>


<script>
import marked from 'marked';

export default {
props: {
    markdownText: {
        type: String,
        required: true,
    },
},
computed: {
    compiledMarkdown() {
        try {
            return marked(this.markdownText);
        } catch (error) {
            console.error('报错:', error);
            return marked(this.markdownText);
        }
    },
},
};
</script>
  
<style>
.markdown-preview {
    font-family: sans-serif;
    line-height: 1.6;
    padding: 20px;
    /* border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.markdown-preview h1, .markdown-preview h2, .markdown-preview h3, .markdown-preview h4, .markdown-preview h5, .markdown-preview h6 {
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-weight: bold;
    line-height: 1.2;
}

.markdown-preview p, .markdown-preview ul, .markdown-preview ol, .markdown-preview blockquote, .markdown-preview pre {
    margin-top: 1em;
    margin-bottom: 1em;
}

.markdown-preview a {
    color: #0366d6;
    text-decoration: none;
}

.markdown-preview a:hover {
    text-decoration: underline;
}

.markdown-preview code, .markdown-preview pre {
    font-family: monospace;
    background-color: #f6f8fa;
    border-radius: 4px;
}

.markdown-preview pre {
    padding: 1em;
    overflow-x: auto;
}

.markdown-preview blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
}

.markdown-preview table {
    width: 100%;
    border-collapse: collapse;
}

.markdown-preview th, .markdown-preview td {
    border: 1px solid #dfe2e5;
    padding: 0.5em;
}

.markdown-preview th {
    font-weight: bold;
}

.markdown-preview img {
    max-width: 100%;
    height: auto;
}

/* 保证与背景色一致 */
.markdown-preview {
    color: inherit;
    background-color: inherit;
}

/* 保证引用块的背景色一致 */
.markdown-preview blockquote {
    background-color: inherit;
    border-left: 0.25em solid #dfe2e5;
}

/* 保证表格的背景色一致 */
.markdown-preview table {
    background-color: inherit;
}

/* 保证代码块的背景色一致 */
.markdown-preview pre {
    background-color: #f6f8fa;
}

/* 保证内联代码的背景色一致 */
.markdown-preview code {
    color: #060606;
    background-color: #9ea09d;
}
</style>
  