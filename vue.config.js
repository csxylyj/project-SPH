module.exports={
  //关闭校验
  lintOnSave:false,
  devServer: {          
    host: 'localhost',
    port: 8080,
    https: false,
    hot: false,
    proxy: {
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn'
      }
    }
  },
}