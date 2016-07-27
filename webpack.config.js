const webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");
var extractWebpackPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:"./src/app",
    output:{
        filename:"build.js",
        path:"./build"
    },
    module:{
        loaders:[
            {test:/\.css$/, loader:extractWebpackPlugin.extract("style-loader","css-loader")}
            , {test: /\.(ttf|woff|woff2|eot)$/,loader: 'file?name=fonts/roboto/[name].[ext]'}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new htmlWebpackPlugin({
            template:"index.html"
        }),
        new extractWebpackPlugin("style.css")
    ]
};