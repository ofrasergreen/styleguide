const path = require('path');
const webpack = require('webpack');

const browsers = 'ie >= 11, last 2 versions';

module.exports = {
    context: path.resolve(__dirname, 'src/client'),
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading. only- means to only hot reload for successful updates

        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'bundle.js', // the output bundle
        path: path.resolve(__dirname, 'public/js'),
        publicPath: '/public/js/' // necessary for HMR to know where to load the hot update chunks
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true, // enable HMR on the server
        contentBase: path.resolve(__dirname, 'public/js'), // match the output path
        publicPath: '/public/js/' // match the output `publicPath`
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                  {
                      loader: 'babel-loader',
                      options: {
                          presets: [
                            ['env', {
                              targets: {
                                  browsers
                              },
                              modules: false
                            }],
                            'react'
                          ]
                      }
                  }
                ]
            },
            {
                test: /\.pcss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader' }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|ttf|eot|svg)(\?[a-z0-9=&.]+)?$/,
                use: 'base64-inline-loader?name=[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin()
        // prints more readable module names in the browser console on HMR updates
    ]
};