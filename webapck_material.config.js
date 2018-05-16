const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        material: ['@angular/material']
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'src/assets/libs'),
        library: '_dll_[name]',
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: '_dll_[name]',
            path: path.join(__dirname, 'src/assets/libs', "[name].manifest.json"),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./src/assets/libs/rxjs.manifest.json"),
            name: "_dll_rxjs"
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./src/assets/libs/lodash.manifest.json"),
            name: "_dll_lodash"
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./src/assets/libs/hammer.manifest.json"),
            name: "_dll_hammer"
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./src/assets/libs/angular.manifest.json"),
            name: "_dll_angular"
        }),
    ],
    mode: "production"
};