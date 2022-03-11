const path = require('path')
const glob = require("glob");
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

function getEntries(pattern, options) {
  const entries = {};
  glob.sync(pattern, options).forEach(file => {
    const ext = file.substr(file.lastIndexOf("."));
    const name = file.substr(file.lastIndexOf("/") + 1);
    const output = name.replace(ext, "");
    if(!name.startsWith('_') || name !== 'index.js') {
      entries[output] = path.join(__dirname, '../../' + file);
    }
  });
  return entries;
}


module.exports = {
  stats: 'minimal',
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, '../../src/'),
      "@scripts": path.resolve(__dirname, "../../src/scripts"),
      "@styles": path.resolve(__dirname, "../../src/styles"),
      '@shopify-directory': path.resolve(__dirname, '../../dist/')
    }
  },
  entry: getEntries("src/scripts/**/*.js", { ignore: 'src/scripts/**/_*.js' }),
  output: {
    path: path.join(__dirname, "../../dist/assets"),
    filename: "[name].js"
  },
  // entry: {
  //     path.resolve(__dirname, '../../src/scripts/checkouts/checkout-shopify.js'),
  //     path.resolve(__dirname, '../../src/scripts/index.js')
  //   },
  // output: {
  //   path: path.resolve(__dirname, '../../dist/assets/'),
  //   filename: '[name].js'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { config: path.resolve(__dirname, "../postcss.config.js") }
            }
          },
          { loader: "sass-loader" },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../../src/styles/global.scss')
              ]
            }
          }
        ]
      },
      // ... (() => {
      //   const rules = []

      //   const loaders = [
      //     { test: /\.(css|postcss)$/i },
      //     { test: /\.scss$/, loader: 'sass-loader'},
      //     { test: /\.s[ac]ss$/i, loader: 'sass-loader' },
      //     { test: /\.less$/i, loader: 'less-loader' },
      //     { test: /\.styl$/i, loader: 'stylus-loader' },

      //   ]

      //   loaders.forEach((element, index) => {
      //     rules.push({
      //       test: element.test,
      //       use: [
      //         MiniCssExtractPlugin.loader,
      //         'css-loader',
      //         {
      //           loader: 'postcss-loader',
      //           options: {
      //             postcssOptions: require(path.resolve(__dirname, '../postcss.config.js'))
      //           }
      //         },
      //         {
      //           loader: 'sass-resources-loader',
      //           options: {
      //             resources: [
      //               path.resolve(__dirname, '../../src/styles/global.scss')
      //             ]
      //           }
      //         }
      //       ]
      //     })

      //     if (element.loader) rules[index].use.push(element.loader)
      //   })

      //   return rules
      // })()
    ]
  },
  plugins: [
    /**
     * don't clean files with the 'static' keyword in their filename
     * docs: https://github.com/johnagan/clean-webpack-plugin
     */
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!*static*']
    }),
    /**
     * docs: https://webpack.js.org/plugins/mini-css-extract-plugin
     */
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    })
  ]
}