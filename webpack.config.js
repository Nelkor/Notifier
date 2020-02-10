const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const fullPath = end => path.resolve(__dirname, end);

htmlPluginConfig = {
    template: 'index.html',
    inject: 'head',
    minify: {
        collapseWhitespace: true,
    },
};

copyPluginConfig = [
    {
        from: fullPath('src/favicon.png'),
        to: fullPath('dist'),
    },
];

miniCssPluginConfig = {
    filename: '[hash].css',
};

module.exports = {
    context: fullPath('src'),
    mode: 'production',
    entry: './main.ts',
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    output: {
        filename: '[hash].js',
        path: fullPath('dist'),
    },
    plugins: [
        new HtmlPlugin(htmlPluginConfig),
        new CopyPlugin(copyPluginConfig),
        new MiniCssPlugin(miniCssPluginConfig),
        new CleanWebpackPlugin,
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
