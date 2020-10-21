const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    "mode": 'development',
    "devtool": 'inline-source-map',
    "entry": './src/main.js',//单入口
    // entry: {
    //     main1:"./src/main1",
    //     main2:"./src/main2"
    // },//多入口
    "output": {
        "path": path.resolve(__dirname, "dist"),
        "filename": "./js/[name]_[hash].js", //使用[name]打包出来的js文件会分别按照入口文件配置的属性来命名
    },
    "resolve": {
        "extensions": ['.js', '.vue', '.json', 'css'],
        "alias": {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src')
        }
    },
    "module": {
        "rules": [
            {
                "test": /\.vue$/,
                "use": [
                    {
                        "loader": 'vue-loader',
                    }
                ],
            },
            {
                "test": /\.css$/,
                "use": [
                    {
                        "loader": MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                "test": /\.js$/,
                "use": 'babel-loader',
                "exclude":/node_modules/
            },
            {
                "test": /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                "loader": [
                    {
                        "loader": 'url-loader',
                        "options": {
                            "name": '[name].[ext]',
                        }
                    }
                ]
            },
            {
                "test": /\.(jpg|png|jpeg|webp|gif)$/,
                "loader": [
                    {
                        "loader": 'url-loader',
                        "options": {
                            "name": '[name].[ext]',
                            "outputPath": './image',
                            "esModule": false,
                        }
                    }
                ]
            },
            // {有 url-loader 无需使用，但url-loader 依赖file-loader，file-loader必须下载
            //     "test": /\.(jpg)$/,
            //     "use": [
            //         {
            //             "loader": 'file-loader',
            //             "options": {
            //                 "name": '[name].[ext]',
            //                 "outputPath": './image',
            //                 "esModule": false,
            //             }
            //         }
            //     ]
            // },
        ]
    },
    "optimization": {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            cacheGroups: {
                elementUI: {
                    name: 'chunk-elementUI', // split elementUI into a single package
                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                    priority: 20,
                },
                libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial' // only package third parties that are initially dependent
                },
            }
        },
        usedExports: true //Tree Shaking
    },
    "plugins": [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "myWebPackDemo",
            favicon: './public/favicon.ico',
            template: './public/index.html',
            filename: "index.html",
            inject: true,
            minify: {
                // 压缩HTML⽂件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空⽩符与换⾏符
                minifyCSS: true // 压缩内联css
            }
        }),
        new MiniCssExtractPlugin({//放在HtmlWebpackPlugin后面
            "title": 'fuck',
            "filename": 'css/[name].[hash].css',
            "chunkFilename": 'css/[id]-[contenthash].css',
            "minify": { //压缩 html 文件

                "removeAttributeQuotes":true, //删除属性的双引号

                "collapseWhitespace":true //折叠空行，变成一行

            },
        }),
        new PurifyCSS({//无顺序要求
            paths: glob.sync([
                // 要做 CSS Tree Shaking 的路径⽂件
                path.resolve(__dirname, './src/*.html'), // 请注意，我们同样需要对 html ⽂件进⾏ tree shaking
                path.resolve(__dirname, './src/*.js')
            ])
        }),
        new OptimizeCSSAssetsPlugin({//放在MiniCssExtractPlugin后面
            cssProcessor: require("cssnano"), //引⼊cssnano配置压缩选项
                cssProcessorOptions: {
                discardComments: { removeAll: true }
            }
        }),
    ],
    "devServer": {
        // 生成的虚拟目录路径
        // contentBase: path.resolve(__dirname, "dist"),
        // 自动开启浏览器
        "openPage": 'page',
        "open": true,
        // 端口
        "port": 8081,
        "index": 'index.html',
        "historyApiFallback":true,
        "quiet": true,
        "proxy": {
              '/ycl': {
                  "target": 'http://127.0.0.1:4000',
                  "changeOrigin": true,
                  "pathRewrite": {
                      '^/ycl': ''
                  },

              }
        },
        "hot":true,
        // 即使 HMR 不生效，也不去刷新整个页面(选择开启)
        "hotOnly":true
    }
}
