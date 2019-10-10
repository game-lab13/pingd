const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.jsx',
    resolve: { extensions: ['.jsx', '.js'] },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
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
        historyApiFallback: true,
        proxy: {
            '/login': 'http://localhost:3000',
            '/signup': 'http://localhost:3000',
<<<<<<< HEAD
            '/match': 'http://localhost:3000',
=======
            '/match': 'http://localhost:3000'
>>>>>>> dev
        }
    }
}