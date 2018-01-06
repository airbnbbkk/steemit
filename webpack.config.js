const path = require('path');
var nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

module.exports = {
    context: ROOT,
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        'main': path.resolve(ROOT, 'index.ts')
    },

    output: {
        libraryTarget: 'commonjs',
        filename: '[name].bundle.js',
        path: DESTINATION
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{loader: 'ts-loader'}]
            }
        ]
    },

    devtool: 'inline-source-map',
    devServer: {}
};