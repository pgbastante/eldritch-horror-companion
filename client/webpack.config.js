'use strict';

const webpack = require('webpack'),
  helpers = require('./config/helpers');

module.exports = (options) => {
  helpers.initEnv(options);

  return {
    entry: {
      vendor: './src/app/vendor.ts',
      app: './src/app/main.ts'
    },
    /**
     * Once you've bundled all of your assets together, we still need to tell webpack where to bundle our application.
     */
    output: {
      /**
       * The output directory as an absolute path
       */
      path: helpers.root('dist'),
      /**
       * This option determines the name of each output bundle. The bundle is written to the directory specified by
       * the output.path option.
       */
      filename: helpers.isProduction() ?
        '[name].[chunkhash].bundle.js' : '[name].bundle.js',
      /**
       * This option is only used when devtool uses a SourceMap option which writes an output file.
       * Configure how source maps are named.
       */
      sourceMapFilename: helpers.isProduction() ?
        '[name].[chunkhash].bundle.map' : '[name].bundle.map',
      /**
       * This option determines the name of on-demand loaded chunk files. See output.filename option for details on
       * the possible values.
       *
       * Note that these filenames need to be generated at runtime to send the requests for chunks. Because of this,
       * placeholders like [name] and [chunkhash] need to add a mapping from chunk id to placeholder value to the output
       * bundle with the webpack runtime. This increases the size and may invalidate the bundle when placeholder value for
       * any chunk changes.
       *
       * By default [id].js is used or a value inferred from output.filename ([name] is replaced with [id] or [id].
       * is prepended).
       *
       */
      chunkFilename: helpers.isProduction() ?
        '[id].[chunkhash].chunk.js' : '[id].chunk.js'
    },

    /**
     * Configure how modules are resolved.
     */
    resolve: {
      extensions: ['.webpack.js', '.ts', '.js', '.html']
    },

    /**
     * Choose a style of source mapping to enhance the debugging process. These values can affect build and rebuild
     * speed dramatically.
     */
    devtool: helpers.isProduction() ?
      'source-map' : (helpers.isTesting() ? 'inline-source-map' :
        'cheap-module-source-map'),

    module: {
      /**
       * An array of Rules which are matched to requests when modules are created. These rules can modify how the module
       * is created. They can apply loaders to the module, or modify the parser.
       */
      rules: require('./config/webpack/loaders')
    },
    /**
     * A list of webpack plugins. For example, when multiple bundles share some of the same dependencies,
     * the CommonsChunkPlugin could be useful to extract those dependencies into a shared bundle to avoid duplication
     */
    plugins: require('./config/webpack/plugins')
  }
};
