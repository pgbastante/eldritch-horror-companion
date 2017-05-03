'use strict';

const path = require('path');
const ROOT = path.resolve(__dirname, '..');

exports.root = function (args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
};
exports.isProduction = function () {
  return process.env.NODE_ENV === 'production';
};
exports.isDevelopment = function () {
  return process.env.NODE_ENV === 'development';
};
exports.isTesting = function () {
  return process.env.NODE_ENV === 'test';
};
exports.initEnv = function (options) {
  if (options && options.env === 'test') {
    process.env.ENV = process.env.NODE_ENV = 'test';
  } else if (process.env.NODE_ENV === 'production') {
    process.env.ENV = process.env.NODE_ENV = 'production';
  } else {
    process.env.ENV = process.env.NODE_ENV = 'development';
  }
};
