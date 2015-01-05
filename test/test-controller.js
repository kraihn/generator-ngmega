/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('ngmega:controller', function () {

  describe('common tests', function () {

    describe('simple naming', function () {
      beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
          if (err) {
            return done(err);
          }

          this.app = helpers.createGenerator('ngmega:controller', [
            '../../controller'
          ], ['hello'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/controllers/hello.js',
          'app/common/views/hello.html'
        ];

        helpers.mockPrompt(this.app, {
          'someOption': true
        });
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

          this.app = helpers.createGenerator('ngmega:controller', [
            '../../controller'
          ], ['hello-world'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/controllers/hello-world.js',
          'app/common/views/hello-world.html'
        ];

        helpers.mockPrompt(this.app, {
          'someOption': true
        });
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

          this.app = helpers.createGenerator('ngmega:controller', [
            '../../controller'
          ], ['helloWorld'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/controllers/hello-world.js',
          'app/common/views/hello-world.html'
        ];

        helpers.mockPrompt(this.app, {
          'someOption': true
        });
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

          this.app = helpers.createGenerator('ngmega:controller', [
            '../../controller'
          ], ['HelloWorld'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/controllers/hello-world.js',
          'app/common/views/hello-world.html'
        ];

        helpers.mockPrompt(this.app, {
          'someOption': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
          helpers.assertFile(expected);
          done();
        });
      });
    });
  });

  describe('module tests', function () {

    describe('simple naming', function () {
      beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
          if (err) {
            return done(err);
          }

          this.app = helpers.createGenerator('ngmega:controller', [
            '../../controller'
          ], ['hello', 'there']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/there/controllers/hello.js',
          'app/scripts/there/views/hello.html'
        ];

        helpers.mockPrompt(this.app, {
          'someOption': true
        });
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

          this.app = helpers.createGenerator('ngmega:controller', [
            '../../controller'
          ], ['hello-world', 'here-there']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/here-there/controllers/hello-world.js',
          'app/scripts/here-there/views/hello-world.html'
        ];

        helpers.mockPrompt(this.app, {
          'someOption': true
        });
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

          this.app = helpers.createGenerator('ngmega:controller', [
            '../../controller'
          ], ['helloWorld', 'hereThere']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/here-there/controllers/hello-world.js',
          'app/scripts/here-there/views/hello-world.html'
        ];

        helpers.mockPrompt(this.app, {
          'someOption': true
        });
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

          this.app = helpers.createGenerator('ngmega:controller', [
            '../../controller'
          ], ['HelloWorld', 'HereThere']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/here-there/controllers/hello-world.js',
          'app/scripts/here-there/views/hello-world.html'
        ];

        helpers.mockPrompt(this.app, {
          'someOption': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
          helpers.assertFile(expected);
          done();
        });
      });
    });
  });
});
