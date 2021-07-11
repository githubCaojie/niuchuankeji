// vue.config.js
module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 192
            })
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 2000, esModule: false }))
    },
    devServer : {
        hot: true,//自动保存
        open : true,//自动启动
        port : 8080,//默认端口号
        host : "0.0.0.0"
    }
}