'use strict';

const helpers = require('../helpers'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Loaders for all files on the project.
 *
 * Add here all needed loaders and return them in the getter functions of the environment where they will be used
 */
class Loaders {

  static js() {
    return {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules|test/
    }
  }

  static tslint() {
    return {
      test: /\.ts$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      include: helpers.root('src/app'),
      options: {
        // enables type checked rules like 'for-in-array'
        // uses tsconfig.json from current working directory
        typeCheck: true,

        // automatically fix linting errors
        fix: true
      }
    }
  }

  static ts() {
    return {
      test: /\.ts$/,
      use: [
        {
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: 'tsconfig.json'
          }
        },
        {
          loader: 'angular2-template-loader'
        }
      ],
      include: helpers.root('src/app')
    }
  }

  static html() {
    return {
      test: /\.html$/,
      loader: 'raw-loader',
      exclude: [/node_modules/, helpers.root('src/index.html')]
    }
  }

  static css() {
    return {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      }),
      include: [helpers.root('src', 'styles')]
    }
  }

  static jsSourceMap() {
    return {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
      exclude: [
        // these packages have problems with their sourcemaps
        helpers.root('node_modules/rxjs'),
        helpers.root('node_modules/@angular')
      ]
    }
  }

  /**
   * Instruments JS files with Istanbul for subsequent code coverage reporting.
   * Instrument only testing sources.
   *
   * See: https://github.com/deepsweet/istanbul-instrumenter-loader
   */
  static istambulInstrumenter() {
    return {
      enforce: 'post',
      test: /\.(js|ts)$/,
      loader: 'istanbul-instrumenter-loader',
      include: helpers.root('src'),
      exclude: [
        /\.(e2e|spec)\.ts$/,
        /node_modules/
      ]
    };
  }

  static json() {
    return {
      test: /\.json$/,
      use: 'json-loader'
    }
  }

  static image() {
    return {
      test: /\.(jpg|png|gif)$/,
      use: 'file-loader'
    }
  }

  static fonts() {
    return {
      test: /\.(eot|woff2?|svg|ttf)([?]?.*)$/,
      use: 'file-loader'
    }
  }

  /**
   * Get all the common loaders for all environments
   * @returns []
   */
  static getCommonLoaders() {
    return [
      this.js(),
      this.ts(),
      this.css(),
      this.html(),
      this.json(),
      this.fonts(),
      this.image()
    ]
  }

  static getProductionLoaders() {
    return [
      this.tslint()
    ]
  }

  static getDevelopmentLoaders() {
    return [
      this.tslint()
    ];
  }

  static getTestingLoaders() {
    return [
      this.jsSourceMap(),
      this.istambulInstrumenter()
    ]
  }
}

module.exports = Loaders.getCommonLoaders()
  .concat(helpers.isProduction() ? Loaders.getProductionLoaders() : [])
  .concat(helpers.isDevelopment() ? Loaders.getDevelopmentLoaders() : [])
  .concat(helpers.isTesting() ? Loaders.getTestingLoaders() : []);
