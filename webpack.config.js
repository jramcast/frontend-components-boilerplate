const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const environment = process.env.PLATFORM_ENV || 'production';


// Webpack Plugins;
const plugins = [
    new ExtractTextPlugin({
        filename: '[name].build.css',
        allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'commons',
        filename: 'commons.js'
    })
];

if (environment === 'production') {
    plugins.push(new webpack.NoEmitOnErrorsPlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    }));
}

// Put all the config together
module.exports = {

    // Webpack entry point scripts (those scripts explicitly included in the html):
    // Relative to context path
    entry: {
        home: './app/public/js/home.js'
    },

    // Webpack output config
    output: {
        // An absolute path to the desired output directory.
        path: path.join(__dirname, 'app/public/build'),

        // A filename pattern for the output files
        filename: '[name].build.js',

        // A filename pattern for generated chunks.
        chunkFilename: '[name].chunk.js'
    },

    // Module loeaders
    module: {
        rules: [
            // Transpile ES2015 to ES5
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },

            // Extract sass files
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },

            // Extract css files
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })
            },

            // extract fonts
            {
                test: /\.(eot|ttf|woff|woff2)/,
                loader: 'url-loader?limit=1&name=[name].[ext]'
            },

            // extract images
            {
                test: /\.(svg|png|gif|jpg)/,
                loader: 'url-loader?limit=10000&name=[name].[ext]'
            }
        ]
    },

    resolve: {
        modules: [path.resolve('./node_modules')],
        extensions: ['.js', '.json', '.ts']
    },

    plugins,
    devtool: environment === 'production' ? 'source-map' : 'cheap-module-eval-source-map'
};
