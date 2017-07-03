var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "appl");
var OUTPUT = path.resolve(__dirname, "dist");

var config = {
    entry: {
        page1: DEV + "/appl.js",
        page2: DEV + "/Account/ctrlAccount.js",
        page3: DEV + "/Contact/ctrlContact.js",
        page4: DEV + "/Demo/ctrlDemo.js",
        page5: DEV + "/Home/ctrHome.js",
        page6: DEV + "/Login/ctrlLogin.js",
        page7: DEV + "/Real/ctrlReal.js",
        page8: DEV + "/Recomendations/ctrlRecomendatins.js",
        page9: DEV + "/Registration/ctrlRegistration.js",
        page10: DEV + "/Sign/ctrlSign.js",
        page11: DEV + "/Stripwinners/ctrlStripwinners.js",
        page12: DEV + "/Terms/ctrlTerms.js",
        page13: DEV + "/Topemenu/ctrlTopmenu.js",
        page14: DEV + "/config.js",
        page15: DEV + "/service.js",
        page16: DEV + "/serviseFirebase.js",
        page17: DEV + "/sfire.js",
    },
    output: {
        path: path.join(OUTPUT),
        publicPath: "dist/",
        filename: "[name].bundle.js"
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