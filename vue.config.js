module.exports = {
    devServer: {
      disableHostCheck: true, // 禁用主机检查
      hot: true,
      headers: {
        'Cache-Control': 'no-cache',
      },
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:5000', // 代理後端 API
          changeOrigin: true,
          pathRewrite: { '^/api': '' }
        }
      }       
    }
};

