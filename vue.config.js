module.exports = {
    devServer: {
      disableHostCheck: true, // 禁用主机检查
      hot: true,
      headers: {
        'Cache-Control': 'no-cache',
      },
    }
};

