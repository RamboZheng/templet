var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')//打包压缩代码插件
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var CleanWebpackPlugin = require('clean-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var env = require("./config/env.js")
var entry = require("./config/entry.js")

console.log("=============================================================");
console.log("openDebug="+env.isOutLog);
console.log("isOpenMock="+env.isOpenMock);
console.log("isDebugSourceMap="+env.isDebugSourceMap);
console.log("=============================================================");

module.exports = {
    entry: {},//入口文件
    output: {
        filename: '[name].icity.js',//打包后输出文件
        path: path.resolve(__dirname, 'dist')//打包后存放的位置，“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    },
    module: {//loader编译解析包
        rules: [            
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:"css-loader",
                    fallback:"style-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{ loader: "css-loader" }, { loader: "less-loader" }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{ loader: "css-loader" }, { loader: "sass-loader" }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "jshint-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|gif)$/, 
                loader: "file-loader?name=res/[hash:8].[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'], 
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'zepto$': 'n-zepto/n-zepto.js',
            env: path.join(__dirname, "./config/env.js"),
            mock: path.join(__dirname, "./src/common/mock.js")
        }
    },
    plugins: [//插件的引用
        new CopyWebpackPlugin([{
            from: __dirname + '/res/',
            to: __dirname + '/dist/res/'
        }]),
        new ExtractTextPlugin("[name].icity.css"),
        new webpack.ProvidePlugin({
            $: 'n-zepto',
            env: path.join(__dirname, "./config/env.js"),
            mock: path.join(__dirname, "./src/common/mock.js")
        }),
        new CleanWebpackPlugin(['dist'], {
                root: __dirname,
                verbose: true,
                dry: false
            }
        )
    ]
}

//#################### 开启SourceMap ###########################
if(env.isDebugSourceMap) {
    module.exports.devtool = "#source-map";//在一个单独的文件中产生一个完整且功能完全的文件
}

//#################### 打包开启混淆 ###########################
if(process.env.NODE_DEV == 0) {
    var size = module.exports.plugins.length;
    module.exports.plugins[size] = new UglifyJsPlugin({
        uglifyOptions: {
            ecma: 8
        }
    })
}

//###################### 生成入口文件 #######################
var jsEntryMap = {}
var htmlEntryMap = []
for(var i=0; i<entry.entryFiles.length; i++) {
    var item = entry.entryFiles[i];
    if(item.js != undefined) {
        var jsname = path.basename(item.js, ".js");
        jsEntryMap[jsname] = item.js;
    }
    var htmlname = path.basename(item.html);
    htmlEntryMap[i] = new HtmlWebpackPlugin({
        filename: htmlname,
        template: item.html,
        hash: true,
        inject: 'body',
        chunks: [jsname]
    });
}
module.exports.entry = jsEntryMap;
module.exports.plugins = module.exports.plugins.concat(htmlEntryMap)