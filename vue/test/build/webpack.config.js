const path = require('path');
module.exports = {
    mode:'development',
    entry:{
        //配置入口文件
        main:["@babel/polyfill",path.resolve(__dirname,'../src/main.js')]
    },
    output:{
        //配置文件打包输出的目录
        path:path.resolve(__dirname,'../dist'),
        //生成的js文件名称
        filename:'js/[name].[hash:8].js',
        //生成的chunk名称   
        chunkFilename:'js/[name].[hash:8].js',
        //资源引用的路径
        publicPath:'./'

    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'
            },
            {
                test:/.(scss|sass)$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            implementation:require('dart-sass')
                        }
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]
            }
        ]
    }
}