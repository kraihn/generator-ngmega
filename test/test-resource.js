/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('ngmega:resource', function () {

  describe('common tests', function () {

    describe('simple naming', function () {
      beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
          if (err) {
            return done(err);
          }

          this.app = helpers.createGenerator('ngmega:resource', [
            '../../resource'
          ], ['hello'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/services/hello-resource.js'
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

          this.app = helpers.createGenerator('ngmega:resource', [
            '../../resource'
          ], ['hello-world'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/services/hello-world-resource.js'
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

          this.app = helpers.createGenerator('ngmega:resource', [
            '../../resource'
          ], ['helloWorld'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/services/hello-world-resource.js'
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

          this.app = helpers.createGenerator('ngmega:resource', [
            '../../resource'
          ], ['HelloWorld'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/services/hello-world-resource.js'
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

          this.app = helpers.createGenerator('ngmega:resource', [
            '../../resource'
          ], ['hello', 'there']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/there/services/hello-resource.js'
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

          this.app = helpers.createGenerator('ngmega:resource', [
            '../../resource'
          ], ['hello-world', 'here-there']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/here-there/services/hello-world-resource.js'
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

          this.app = helpers.createGenerator('ngmega:resource', [
            '../../resource'
          ], ['helloWorld', 'hereThere']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/here-there/services/hello-world-resource.js'
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

          this.app = helpers.createGenerator('ngmega:resource', [
            '../../resource'
          ], ['HelloWorld', 'HereThere']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/here-there/services/hello-world-resource.js'
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
