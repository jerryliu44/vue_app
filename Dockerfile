# 使用官方 Node.js 镜像作为构建环境
FROM node:18 AS build

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装应用依赖
#RUN npm install
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install --legacy-peer-deps

# 将源代码复制到工作目录
COPY . .

# 构建 Vue 应用
RUN npm run build
