/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('ngmega:module', function () {

  describe('simple naming', function () {
    beforeEach(function (done) {
      helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
        if (err) {
          return done(err);
        }

        this.app = helpers.createGenerator('ngmega:module', [
          '../../module'
        ], ['hello'], {'common': true});
        done();
      }.bind(this));
    });

    it('creates expected files', function (done) {
      var expected = [
        'app/scripts/hello/_module.js',
        'app/scripts/hello/hello.config.js',
        'app/scripts/hello/hello.routes.js',
        'app/scripts/hello/controllers/hello.js',
        'app/scripts/hello/views/hello.html'
      ];

      this.app.options['skip-install'] = true;
      this.app.run({}, function () {
        helpers.assertFile(expected);
        done();
      });
    });
  });

  describe('complex naming', function () {
    beforeEach(function (done) {
      helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
        if (err) {
          return done(err);
        }

        this.app = helpers.createGenerator('ngmega:module', [
          '../../module'
        ], ['hello-world'], {'common': true});
        done();
      }.bind(this));
    });

    it('creates expected files', function (done) {
      var expected = [
        'app/scripts/hello-world/_module.js',
        'app/scripts/hello-world/hello-world.config.js',
        'app/scripts/hello-world/hello-world.routes.js',
        'app/scripts/hello-world/controllers/hello-world.js',
        'app/scripts/hello-world/views/hello-world.html'
      ];

      this.app.options['skip-install'] = true;
      this.app.run({}, function () {
        helpers.assertFile(expected);
        done();
      });
    });
  });

  describe('complex naming camel', function () {
    beforeEach(function (done) {
      helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
        if (err) {
          return done(err);
        }

        this.app = helpers.createGenerator('ngmega:module', [
          '../../module'
        ], ['helloWorld'], {'common': true});
        done();
      }.bind(this));
    });

    it('creates expected files', function (done) {
      var expected = [
        'app/scripts/hello-world/_module.js',
        'app/scripts/hello-world/hello-world.config.js',
        'app/scripts/hello-world/hello-world.routes.js',
        'app/scripts/hello-world/controllers/hello-world.js',
        'app/scripts/hello-world/views/hello-world.html'
      ];

      this.app.options['skip-install'] = true;
      this.app.run({}, function () {
        helpers.assertFile(expected);
        done();
      });
    });
  });

  describe('complex naming class', function () {
    beforeEach(function (done) {
      helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
        if (err) {
          return done(err);
        }

        this.app = helpers.createGenerator('ngmega:module', [
          '../../module'
        ], ['HelloWorld'], {'common': true});
        done();
      }.bind(this));
    });

    it('creates expected files', function (done) {
      var expected = [
        'app/scripts/hello-world/_module.js',
        'app/scripts/hello-world/hello-world.config.js',
        'app/scripts/hello-world/hello-world.routes.js',
        'app/scripts/hello-world/controllers/hello-world.js',
        'app/scripts/hello-world/views/hello-world.html'
      ];

      this.app.options['skip-install'] = true;
      this.app.run({}, function () {
        helpers.assertFile(expected);
        done();
      });
    });
  });
});
