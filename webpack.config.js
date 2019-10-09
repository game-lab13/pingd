const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(jsx)$/, use: 'babel-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    mode: process.env.NODE_ENV,
    plugins: [
        new HtmlwebpackPlugin({
            template: 'app/index.html'
        })
    ],
    devServer: {
        contentBase: 'build',
        port: 8080,
        proxy: {
            '/signup': 'http://localhost:3000'
        }
    }
}