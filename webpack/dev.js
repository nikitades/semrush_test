const merge = require('webpack-merge');
const base = require('./base_config');

module.exports = merge(base, {
    devtool: 'inline-source-map'
});