//! СЮДА ЭКСПОРТИРУЕМ ВСЕ НЕОБХОДИМЫЕ ДЛЯ РАБОТЫ МОДУЛИ

const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    //? указываем, что собираем все в режиме разработки
    mode: 'development',
    //? задаем точку входа - то есть указываем webpack откуда
    //? стоит начать работу (для этого используем entry)
    entry: {
        main: './src/index.js',
        analytic: './src/analytics.js'
    },

    //? указываем куда будут складываться результаты работы webpack
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/index.html'
        }),
        new HTMLWebPackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}