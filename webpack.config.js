var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/[name].css');
var extractLESS = new ExtractTextPlugin('css/[name].css');//注意后缀
module.exports = {
    entry:__dirname + "/src/main.js",//入口文件
    output:{
        path:__dirname + "/build",
        filename:'bundle.js'
    },
    devtool:'eval-source-map',
    devServer:{
        port:8883,//端口号
        contentBase:'./src',//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline:true //实时刷新
        //progress: true//浏览器自动刷新
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: [{
                        loader: 'style-loader',
                    }],
                    use: ['css-loader']
                })
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    fallback: [{
                        loader: 'style-loader',
                    }],
                    use: ['css-loader','less-loader']
                })
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname +'/src/index.html'
        }),
        extractCSS,
        extractLESS
    ]
}