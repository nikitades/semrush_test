const merge = require('webpack-merge');
const base = require('./base_config');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');

module.exports = merge(base, {
    devtool: 'inline-source-map',
    plugins: [
        new CleanObsoleteChunks()
    ]
});