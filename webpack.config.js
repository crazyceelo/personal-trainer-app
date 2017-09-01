const path = require("path");

module.exports = {
    entry: {
        app:  "./app/app.js",
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },

    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            }
        ]
    },

    devtool: "eval-source-map"
};