const path = require('path')
const webpack =  require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../docs'),
  build: path.join(__dirname,'../build'),
  assets: 'assets/'
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, 
   {
      test: /\.(png|jpg|gif|svg|woff(2)?|ttf|eot)$/,
      loader: 'file-loader',
      options: {
        name: `${PATHS.assets}[path][name].[ext]`,
        context:"src",
        exclude:'/node_modules/'
      }
    },
  //  { 
  //     test:/\.$/,
  //     loader:'svg-inline-loader'
  //   },
 
    // {
    //   test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    //   loader: 'file-loader',
    //   options: {
    //     // exclude:`${PATHS.assets}img/`,
    //     name: `${PATHS.assets}fonts/[name].[ext]`,
    //     // limit: 1000
    //   }
    // },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.build}/postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader',
      options: {
          pretty: true
      }
    },
    
    {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.build}/postcss.config.js` } }
        }
      ]
    }]
  },

  plugins: [
   
      new webpack.ProvidePlugin({
        "$":"jquery",
        "jQuery":"jquery",
        "window.jQuery":"jquery"
      }),
  
    
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    // Copy HtmlWebpackPlugin and change index.html for another html page
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.pug`,
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/form.pug`,
      filename: './form.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/cards.pug`,
      filename: './cards.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/registration-page.pug`,
      filename: './registration.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/login-page.pug`,
      filename: './login.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/roomsearch.pug`,
      filename: './roomsearch.html'
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/room-info.pug`,
      filename: './roominfo.html',
      // file:require("../src/data/data.json")
    }),
    new CopyWebpackPlugin([
    //  { from: `${PATHS.src}/img/`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/static`, to: '' },
    ]),
  ],
}
