<template>
    <div class="file-tree">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <span @click="toggleFolder(index)">
            <svg class="folder-icon" :fill="item.open ? '#0366d6' : '#6a737d'" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
              <path d="M7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
            </svg>
          </span>
          <span>{{ item.name }}</span>
          <ul v-if="item.open">
            <li v-for="(subItem, subIndex) in item.children" :key="subIndex">
              <span>{{ subItem.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'FileTree',
    data() {
      return {
        items: [],
      };
    },
    mounted() {
      this.fetchFolders();
    },
    methods: {
      async fetchFolders() {
        try {
          const response = await axios.get('/api/folders');
          this.items = response.data;
        } catch (error) {
          console.error('Error fetching folders:', error);
        }
      },
      toggleFolder(index) {
        this.items[index].open = !this.items[index].open;
      },
    },
  };
  </script>
  
  <style scoped>
  .file-tree {
    font-family: sans-serif;
    line-height: 1.6;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: inherit;
    background-color: inherit;
  }
  
  .file-tree ul {
    list-style-type: none;
    padding-left: 20px;
  }
  
  .file-tree li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .folder-icon {
    cursor: pointer;
    margin-right: 5px;
    transition: fill 0.3s ease;
  }
  
  .folder-icon:hover {
    fill: #0056b3;
  }
  
  .file-tree span {
    font-weight: bold;
  }
  
  .file-tree ul ul {
    margin-left: 20px;
  }
  </style>