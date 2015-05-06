var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./js/components/app/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
          },

          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },

          // CSS
          {
            test: /\.css$/,
            loader: "style!css"
          },

          // LESS
          {
            test: /\.jsx$/,
            loader: 'jsx'
          },

          // LESS
          {
            test: /\.less$/,
            loader: 'style!css!less'
          },

          // SASS
          {
            test: /\.scss$/,
            loader: 'style!css!sass'
          }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
