const merge = require('webpack-merge');
const base = require('./base_config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
    plugins: [
        new UglifyJSPlugin()
    ]
});