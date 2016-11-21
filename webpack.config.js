/**
 * Created by ekersale on 08/11/2016.
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/app',
    ],
    output: {
     path: path.resolve(__dirname, "out"),
     filename: "[name].bundle.js"
     },
    devtool: "source-map",
    module: {
        loaders: [
            {
                loader: "babel-loader",

                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "src")
                ],

                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015'],
                }
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, "./sass")],
                loaders: ["style", "css", "sass"]
            }
        ]
    }
}
