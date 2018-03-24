const path = require('path');
const webpack_root = path.resolve(__dirname);
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: webpack_root + '/../app/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: webpack_root + '/../dist/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: webpack_root + '/../app/index.html'
        }),
        new CleanWebpackPlugin(['dist'], {
            root:     webpack_root + '/../'
        })
    ]
};