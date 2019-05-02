const path = require('path');

module.exports = {
    entry: ['./app/client/src/App.tsx', 'webpack-dev-server/client?http://localhost:4000/'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    mode: 'development',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
            {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'app/client'),
                use: [
                    'style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            importLoaders: 2,
                            modules: true,
                            exportOnlyLocals: true,
                            localIdentName: '[local]--[hash:base64:5]',
                            namedExport: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
    ]
}