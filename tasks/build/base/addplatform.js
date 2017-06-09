(function () {
  var async, path, platform;

  async = require('async');

  path = require('path');

  module.exports = platform = function (grunt) {
    var addPlatform, helpers, local, remote, runAfter;

    helpers = require('../../helpers')(grunt);

    addPlatform = function (platform, fn) {
      return helpers.exec("cordova platform add " + platform + " --save " + (helpers.setVerbosity()), fn);
    };

    return {
      add: function (platforms, fn) {
        grunt.log.writeln('Adding platforms');
        return async.eachSeries(platforms, addPlatform, function (err) {
          if (fn) {
            return fn(err);
          }
        });
      }
    };
  };

}).call(this);
