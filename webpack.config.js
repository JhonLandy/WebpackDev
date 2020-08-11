const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/main.js',//单入口
    // entry: {
    //     main1:"./src/main1",
    //     main2:"./src/main2"
    // },//多入口
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./js/[name]_[hash].js",
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', 'css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(vue)$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ],
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './image',
                            esModule: false,
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "myWebPackDemo",
            favicon: './public/favicon.ico',
            template: './public/index.html',
            filename: "index.html",
            inject: true
        }),
        new MiniCssExtractPlugin({
            title: 'fuck',
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id]-[contenthash].css',
            minify: { //压缩 html 文件

                removeAttributeQuotes:true, //删除属性的双引号

                collapseWhitespace:true //折叠空行，变成一行

            },
        }),
    ],
    devServer: {
        // 生成的虚拟目录路径
        // contentBase: path.resolve(__dirname, "dist"),
        // 自动开启浏览器
        openPage: 'page',
        open: true,
        // 端口
        port: 8081,
        index: 'index.html',
        historyApiFallback:true,
        quiet: true,
        proxy: {
              '/ycl': {
                  target: 'http://127.0.0.1:4000',
                  changeOrigin: true,
                  pathRewrite: {
                      '^/ycl': ''
                  },

              }
        },
        hot:true,
        // 即使 HMR 不生效，也不去刷新整个页面(选择开启)
        hotOnly:true
    }
}
