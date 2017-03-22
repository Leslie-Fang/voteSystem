var webpack = require('webpack');

module.exports = {
    entry: {
        controller:'./public/javascript/babel/controller.js',
        controller2:'./public/javascript/babel/controller2.js'
    },
    output: {
        path : './public/javascript/webpack/',
        filename: '[name].js'
    }
}