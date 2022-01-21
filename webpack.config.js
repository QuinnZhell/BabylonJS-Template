/**
 * This file is used to configure the webpack dependency.
 * Configuration taken from https://doc.babylonjs.com/guidedLearning/createAGame/gettingSetUp#creating-a-project
 */

const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    // path to the main typescript file
    entry: path.resolve(appDirectory, "src/app.ts"),
    // name for js file created/compiled in the memory
    output: {
        filename: "js/bundleName.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        host: "0.0.0.0",
        port: 8080, // port for local host (localhost:8080)
        static: path.resolve(appDirectory, "public"),   // tell webpack to serve from the public folder
        hot: true,
        devMiddleware: {
            publicPath: "/",
        }
    },
    module: {
        rules: [
            {
                test: /\tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(appDirectory,
                "public/index.html"),
        })
    ],
    mode: "development",
};