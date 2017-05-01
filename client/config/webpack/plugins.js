'use strict';

const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  OptimizeJsPlugin = require('optimize-js-plugin'),
  helpers = require('../helpers'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),

  /**
   * plugins loaded in all environments
   * @type {[*]}
   */
  basePlugins = [
    /**
     * Define global constraints in compile time mode
     */
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
      __PRODUCTION__: process.env.NODE_ENV === 'production',
      __TEST__: JSON.stringify(process.env.TEST || false),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    /**
     * Simplifies creation of HTML files to serve your webpack bundles. It creates a new html based on a given template
     * including all the bundles
     */
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      template: './src/index',
      inject: 'body',
      minify: false
    }),
    /**
     * This plugin solves a WARNING on the creation of the angular bundle
     */
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/, __dirname),
    /**
     * Webpack plugin to optimize a JavaScript file for faster initial load
     * by wrapping eagerly-invoked functions.
     *
     * See: https://github.com/vigneshshanmugam/optimize-js-plugin
     */
    new OptimizeJsPlugin({
      sourceMap: false
    }),
    /**
     * Plugin: ExtractTextPlugin
     * Description: Extracts imported CSS files into external stylesheet
     *
     * See: https://github.com/webpack/extract-text-webpack-plugin
     */
    new ExtractTextPlugin(helpers.isProduction() ? '[name].[contenthash].css' : '[name].css')
  ],

  /**
   * Plugins loaded only on development environment
   * @type {Array}
   */
  devPlugins = [],

  /**
   * Plugins loaded only on production environment
   * @type {[*]}
   */
  prodPlugins = [
    /**
     * JavaScript parser / mangler / compressor / beautifier toolkit
     */
    new webpack.optimize.UglifyJsPlugin({
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
    }),
    /**
     * Creates a common chunk
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'vendor'
      ]
    })
  ];

module.exports = basePlugins
  .concat(helpers.isProduction() ? prodPlugins : [])
  .concat(helpers.isDevelopment() ? devPlugins : []);
