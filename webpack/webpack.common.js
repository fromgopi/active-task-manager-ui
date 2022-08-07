const paths = require("./paths");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer') // help tailwindcss to work

module.exports = {
    // Entry path
    entry: [paths.src + "/index.js"],
    // Output 
    output: {
        path: paths.build,
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    // Customize the webpack build process
    plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', chunkFilename: '[id].[contenthash].css' }),

        // Copies files from target to destination folder
        new CopyWebpackPlugin({
        patterns: [
            {
                from: paths.src + "/assets",
                to: "assets",
                globOptions: {
                    ignore: ["*.DS_Store"],
                },
            },
        ],
        }),
        // Generates an HTML file from a template
        new HtmlWebpackPlugin({
            title: "Oscarmild",
            favicon: paths.src + "/assets/icons/elephant.png",
            template: paths.public + "/index.html", // template file
            filename: "index.html", // output file
        }),
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        // postcss loader needed for tailwindcss
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer]
                            }
                        }
                    }
                ]
            },
            // Images: Copy image into build directory.
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource"
            },
            // // Fonts and SVGs: Inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/resource"
            }
        ]
    },
}