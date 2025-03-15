const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "page.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devserver: {
        watchFiles: ['./src/template.html'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
    ],
    modules: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};