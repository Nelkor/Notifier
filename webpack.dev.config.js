const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

const fullPath = end => path.resolve(__dirname, end);

htmlPluginConfig = {
    template: 'index.html',
    inject: 'head',
    minify: false,
};

module.exports = {
    context: fullPath('src'),
    mode: 'development',
    entry: './main.ts',
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    output: {
        filename: '[hash].js',
        path: fullPath('dist'),
    },
    devServer: {
        port: 8080
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlPlugin(htmlPluginConfig),
        new MiniCssPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
};
