const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname, // 当前目录
        filename: './release/bundle.js'
    },

    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, "./release")
        },
        open: true, // 自动打开浏览器
        port: 8000,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8880'
            }
        }
    }
}