const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'static'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            { test: /\.ts|tsx$/, exclude: /node_modules/, use: 'ts-loader' },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.tsx', '.js', '.less'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            utils: path.resolve(__dirname, 'src/utils'),
            hooks: path.resolve(__dirname, 'src/hooks'),
            selectors: path.resolve(__dirname, 'src/selectors'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
