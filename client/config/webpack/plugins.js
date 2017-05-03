'use strict';

const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  OptimizeJsPlugin = require('optimize-js-plugin'),
  helpers = require('../helpers'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

class Plugins {
  /**
   * Define global constraints in compile time mode
   */
  static defineConstants() {
    return new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
      __PRODUCTION__: process.env.NODE_ENV === 'production',
      __TEST__: JSON.stringify(process.env.TEST || false),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    });
  }

  /**
   * Simplifies creation of HTML files to serve your webpack bundles. It creates a new html based on a given template
   * including all the bundles
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
   * This plugin solves a WARNING on the creation of the angular bundle
   */
  static angularContext() {

    return new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/, __dirname);
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
   * JavaScript parser / mangler / compressor / beautifier toolkit
   */
  static uglify() {
    return new webpack.optimize.UglifyJsPlugin({
      beautify: false, //prod
      output: {
        comments: false
      }, //prod
      mangle: {
        screw_ie8: true
      }, //prod
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false // we need this for lazy v8
      }
    })
  }

  /**
   * Creates a common chunk
   */
  static commonChunks() {
    return new webpack.optimize.CommonsChunkPlugin({
      name: [
        'vendor'
      ]
    })
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

  static getBasePlugins() {
    return [
      this.typeChecker(),
      this.defineConstants,
      this.htmlCreation(),
      this.angularContext(),
      this.extractCss(),
      this.typeChecker()
    ];
  }

  static getProdPlugins() {
    return [
      this.uglify(),
      this.commonChunks(),
      this.optimizeJs()
    ];
  }

  static getDevPlugins() {
    return [
      this.optimizeJs()
    ];
  }

  static getTestPlugins() {
    return [];
  }
}


module.exports = Plugins.getBasePlugins()
  .concat(helpers.isProduction() ? Plugins.getProdPlugins() : [])
  .concat(helpers.isDevelopment() ? Plugins.getDevPlugins() : [])
  .concat(helpers.isTesting() ? Plugins.getTestPlugins() : []);
