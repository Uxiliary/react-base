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

        // Use es6 Javascript while hot loading
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
        },

        // For buildin static files that are to be es6-ified
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },

        // CSS
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },

        // CSS
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
