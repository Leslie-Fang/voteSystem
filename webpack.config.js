var webpack = require('webpack');

module.exports = {
    entry: {
        controller:'./public/javascript/babel/controller.js',
        controller2:'./public/javascript/babel/controller2.js',
        controller3:'./public/javascript/babel/controller3.js'
    },
    output: {
        path : './public/javascript/webpack/',
        filename: '[name].js'
    },plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
    ]
}