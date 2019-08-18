const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // INFORM WEBPACK THAT WE ARE BUILDING A BUNDLE
    // FOR NODE JS, RATHER THAN THE BROWSER
    target: "node",

    // TELL WEBPACK THE ROOT FILE OF OUR SERVER APPLICATION
    entry: "./src/index.js",

    // TELL WEBPACK WHERE TO PUT THE OUFILE THAT WE ARE GENERATING
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);