module.exports={
    // 关闭eslint功能
    lintOnSave:false,
    devServer:{
        proxy:{
            '/api':{
                target:'http://gmall-h5-api.atguigu.cn'
            }
        }
    }
}
