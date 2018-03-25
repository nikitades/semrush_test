const path = require('path');
const webpack_root = path.resolve(__dirname);
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', webpack_root + '/../src/index.js'],
    output: {
        filename: 'bundle.[chunkhash].js',
        path: webpack_root + '/../dist/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: webpack_root + '/../src/index.html'
        }),
        new CleanWebpackPlugin(['dist'], {
            root: webpack_root + '/../'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-regenerator', 'transform-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: ['svg-react-loader']
            }
        ]
    }
};