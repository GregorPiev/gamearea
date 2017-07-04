var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "appl");
var OUTPUT = path.resolve(__dirname, "dist");

var config = {
    entry: {
        page1: DEV + "/appl.js"

    },
    output: {
        path: path.join(OUTPUT),
        publicPath: "dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: DEV,
                loader: "babel-loader",
                exclude: [/node_modules/, /lib/]
            },
            {
                test: /\.jsx$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            }
        ]
    }
};
module.exports = config;