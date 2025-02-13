const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './js/custom.js', // Entry point where your JS code is
    output: {
        filename: 'bundle.js', // Name of the output file
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true, // Cleans the dist folder before each build
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Points to your existing index.html
            filename: 'index.html', // Output HTML file
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // Handles CSS files if needed
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handles image files
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: './dist', // Serve content from the dist folder
        open: true, // Automatically open in browser
    },
};
