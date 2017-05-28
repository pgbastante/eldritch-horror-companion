'use strict';

const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  OptimizeJsPlugin = require('optimize-js-plugin'),
  helpers = require('../helpers'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  {CheckerPlugin} = require('awesome-typescript-loader');

class Plugins {
  /**
   * Plugin: DefinePlugin
   * Description: Define free variables.
   * Useful for having development builds with debug logging or adding global constants.
   *
   * Environment helpers
   *
   * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
   */
  static defineConstants() {
    return new webpack.DefinePlugin({
      __DEV__: helpers.isDevelopment(),
      __PRODUCTION__: helpers.isProduction(),
      __TEST__: helpers.isTesting()
    });
  }

  /**
   * Plugin: HtmlWebpackPlugin
   * Description: Simplifies creation of HTML files to serve your webpack bundles.
   * This is especially useful for webpack bundles that include a hash in the filename
   * which changes every compilation.
   *
   * See: https://github.com/ampedandwired/html-webpack-plugin
   */
  static htmlCreation() {
    return new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      template: './src/index',
      inject: 'body',
      minify: false
    })
  }

  /**
   * Plugin: ContextReplacementPlugin
   * Description: Provides context to Angular's use of System.import
   *
   * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
   * See: https://github.com/angular/angular/issues/11580
   */
  static angularContext() {

    return new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('src'));
  }

  /**
   * Plugin: ExtractTextPlugin
   * Description: Extracts imported CSS files into external stylesheet
   *
   * See: https://github.com/webpack/extract-text-webpack-plugin
   */
  static extractCss() {
    return new ExtractTextPlugin(helpers.isProduction() ? '[name].[contenthash].css' : '[name].css')
  }

  /**
   * Plugin: UglifyJsPlugin
   * Description: Minimize all JavaScript output of chunks.
   * Loaders are switched into minimizing mode.
   *
   * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
   */
  static uglify() {
    return new webpack.optimize.UglifyJsPlugin({
      beautify: false, //true
      output: {
        comments: false
      },
      mangle: {
        screw_ie8: true
      },
      compress: {
        sequences: true, //true
        properties: false, //false
        dead_code: true, //false
        drop_debugger: true, //false
        unsafe: false, //false
        unsafe_comps: false, //false
        unsafe_math: false, //false
        unsafe_proto: false, //false
        conditionals: true, //false
        comparisons: true, //false
        evaluate: true, //false
        booleans: true, //false
        loops: true, //false
        unused: true, //false
        toplevel: true, //false
        hoist_funs: true, //false
        hoist_vars: false, //false
        if_return: true, //false
        join_vars: true, //false
        cascade: true, //false
        collapse_vars: true, //false
        reduce_vars: true, //false
        warnings: false, //false
        screw_ie8: true, //false
        negate_iife: false, // false, we need this for lazy v8
        pure_getters: false, //false
        pure_funcs: null, //null
        drop_console: false, //false
        expression: false, //false
        keep_fargs: true, //true
        keep_fnames: false, //false
        passes: 1, //1
        keep_infinity: false //false
      }
    })
  }

  /**
   * Plugin: CommonsChunkPlugin
   * Description: Shares common code between the pages.
   * It identifies common modules and put them into a commons chunk.
   *
   * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
   * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
   */
  static commonChunks() {
    return [
      new webpack.optimize.CommonsChunkPlugin({
        name: [
          'vendor'
        ],
        minChunks: function(module){
          return module.context && module.context.indexOf("node_modules") !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      })
    ]
  }

  /**
   * Plugin: ForkCheckerPlugin
   * Description: Do type checking in a separate process, so webpack don't need to wait.
   *
   * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
   */
  static typeChecker() {
    return new CheckerPlugin();
  }

  /**
   * Webpack plugin to optimize a JavaScript file for faster initial load
   * by wrapping eagerly-invoked functions.
   *
   * See: https://github.com/vigneshshanmugam/optimize-js-plugin
   */
  static optimizeJs() {
    return new OptimizeJsPlugin({
      sourceMap: false
    });
  }

  /**
   * @returns []
   */
  static getCommonPlugins() {
    return [
      this.typeChecker(),
      this.defineConstants,
      this.htmlCreation(),
      this.angularContext()
    ];
  }

  static getProductionPlugins() {
    return [
      this.extractCss(),
      this.uglify(),
      this.optimizeJs()
    ].concat(this.commonChunks());
  }

  static getDevelopmentPlugins() {
    return [
      this.optimizeJs()
    ];
  }

  static getTestingPlugins() {
    return [];
  }
}


module.exports = Plugins.getCommonPlugins()
  .concat(helpers.isProduction() ? Plugins.getProductionPlugins() : [])
  .concat(helpers.isDevelopment() ? Plugins.getDevelopmentPlugins() : [])
  .concat(helpers.isTesting() ? Plugins.getTestingPlugins() : []);
