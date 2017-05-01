'use strict';

const helpers = require('../helpers'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');
/**
 * Transpile JS files using babel
 * @type {{test: RegExp, loader: string, include: RegExp, exclude: RegExp, query: {compact: boolean}}}
 */
exports.angular = { // ships in ES6 format now
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    compact: false
  }
};

/**
 * Lint TypeScript
 * @type {{enforce: string, test: RegExp, loader: string, include: [*]}}
 */
exports.tslint = {
  test: /\.ts$/,
  enforce: 'pre',
  loader: 'tslint-loader',
  include: helpers.root('src/app')
};

/**
 * TypeScript loader for Webpack
 * @type {{test: RegExp, loaders: [*], exclude: RegExp}}
 */
exports.ts_JiT = {
  test: /\.ts$/,
  loaders: [
    'awesome-typescript-loader',
    'angular2-template-loader'
  ],
  include: helpers.root('src/app')
};

/**
 * Load HTML files as raw files
 * @type {{test: RegExp, loader: string, exclude: RegExp}}
 */
exports.html = {
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: /node_modules/
};

/**
 * Extract CSS files from .src/styles directory to external CSS file
 */
exports.css = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader'
  }),
  include: [helpers.root('src','styles')]
};


