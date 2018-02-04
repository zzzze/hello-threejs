var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    vendors: ['three']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }, {
        test: /\.(gif|png|jpg)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            mimetype: 'image/png'
          }
        }
      }, {
        test: /\.(vtk)/,
        use: [{
          loader: 'file-loader'
        }]
      }, {
        test: /three\/examples\/js/,
        use: 'imports-loader?THREE=three'
      }
    ]
  },

  resolve: {
    alias: {
      'three-examples': path.join(__dirname, './node_modules/three/examples/js')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html.ejs',
      hash: true
    }),

    new webpack.optimize.CommonsChunkPlugin({name: 'vendors'})
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    inline: true,
    historyApiFallback: {
      index: '/index.html'
    },
    host: '0.0.0.0'
  }
}
