'use strict';

const helpers = require('../helpers'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

class Loaders {

  static js() {
    return {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules|test/,
      query: {
        compact: false
      }
    }
  }

  static tslint() {
    return {
      test: /\.ts$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      include: helpers.root('src/app')
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
      test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
      use: 'file-loader'
    }
  }

  static getBasicLoaders() {
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

  static getProdLoaders() {
    return [
      this.tslint()
    ]
  }

  static getDevLoaders() {
    return [
      this.tslint()
    ];
  }

  static getTestLoaders() {
    return [
      this.jsSourceMap(),
      this.istambulInstrumenter()
    ]
  }
}

module.exports = Loaders.getBasicLoaders()
  .concat(helpers.isProduction() ? Loaders.getProdLoaders() : [])
  .concat(helpers.isDevelopment() ? Loaders.getDevLoaders() : [])
  .concat(helpers.isTesting() ? Loaders.getTestLoaders() : []);
