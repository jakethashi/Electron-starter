var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './app/app.ts'],
    },
    output: {
        path: './public/built',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/built/'
    },
    devServer: {
        contentBase: './public',
        publicPath: 'http://localhost:8080/built/'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/  },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass!' },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}