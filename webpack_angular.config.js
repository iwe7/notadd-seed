const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    angular: ['core-js/es7/reflect', 'zone.js/dist/zone', '@angular/core', '@angular/forms', '@angular/common', '@angular/router', '@angular/common/http', '@angular/animations', '@angular/platform-browser/animations', '@angular/elements', '@angular/cdk']
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
  ],
  mode: "production"
};