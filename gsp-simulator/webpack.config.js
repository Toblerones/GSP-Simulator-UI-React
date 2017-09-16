var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EncodingPlugin = require('webpack-encoding-plugin')

var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
    ],
    module : {
        rules : [
            {
                test: /\.(js|jsx)?$/,
                include: APP_DIR,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react'],
                        compact: false
                    }
                }
            },
            {
                test: /\.css$/,
                include: [/node_modules/, APP_DIR],

                loader: 'style-loader!css-loader',

            },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|ico)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=100000']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new EncodingPlugin({ encoding: 'utf8' }),
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery'})
    ],
};

module.exports = config;