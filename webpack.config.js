const path = require('path');

module.exports = {
    entry: './main.js', //入口
    output: {//出口
        path: path.join(__dirname + '/dist'),//需要绝对路径
        filename: 'bundle.js'
    },
    //要使用加载器的话需要一个module
    //加载器的作用就是对文件的预处理操作
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ] //从右往左
            },
            {//处理图片的加载器
                test: /\.(png|jpg|gif|jpeg)/,
                use: 'url-loader'
            },
            {//babel-loader: 用于把es6语法转为es5语法
                test: /\.js$/,
                //不包含
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
              }
        ]
    }
}