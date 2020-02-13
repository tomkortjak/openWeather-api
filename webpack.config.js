const path = require('path');
const Dotenv = require('dotenv-webpack');
const nodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    target: "node",
    devtool: 'inline-source-map',
    externals: [
        nodeExternals()
    ],
    plugins: [
        new nodemonPlugin({
            watch: path.resolve('./build')
            }
        ),
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {transpileOnly: true}
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        libraryTarget: "commonjs",
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
};