const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module :{
        rules:[
            {
                test: /\.m?js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env'], //jsx, es5 -es6
                        plugins: ['@babel/plugin-transform-runtime'] //async await syntax chrc
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}