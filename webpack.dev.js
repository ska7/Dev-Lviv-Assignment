const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './public',
        port: 3333,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                APILAYER_API_KEY: JSON.stringify('lWRSnQVNHgJBrG9bignCoo6QQvgZ9tsZ'),
            },
        }),
    ],
});
