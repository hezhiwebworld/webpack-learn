const path = require('path');

function join(...args) {
    return path.join(__dirname, ...args)
}

module.exports = {
    entry: join('./es6.js'),
    output: {
        path: join('./dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}