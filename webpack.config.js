// var path = require("path");
// // var HtmlWebpackPlugin = require("html-webpack-plugin");
// // var htmlWebpackPluginConfig = new HtmlWebpackPlugin({
// //     template: __dirname + "/app/public/index.html",
// //     filename: "index.html",
// //     inject: "body"
// // })

// //var ExtractTextPlugin = require("extract-text-webpack-plugin");
// // var ExtractTextPluginConfig = new ExtractTextPlugin(
// //     "bundle.css"
// // );

// module.exports = {
//     entry: "./app/app.js" ,

//     output: {
//         path: __dirname + "/public",
//         filename: "bundle.js"
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.jsx$/,
//                 exclude: [/node_modules/],
//                     loader: "babel-loader",
//                     query: {
//                         presets: ["es2015", "react"]
//                     }
//             },

//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"],
//             }
//         ]
//     },
//     // plugins: [
//     //     new ExtractTextPlugin({
//     //         filename: "style.css",
//     //         allChunks: true
//     //     })
//     // ],

//     devtool: "eval-source-map"
// };

module.exports = {
    entry: "./app/app.js",

    output: {
        filename: "public/bundle.js"
    },

    module: {
        loaders: [
            {
                test: [/\.jsx?$/],
                include: /app/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },

    devtool: "eval-source-map"
};