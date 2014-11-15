/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('ngmega:filter', function () {

  describe('common tests', function () {

    describe('simple naming', function () {
      beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
          if (err) {
            return done(err);
          }

          this.app = helpers.createGenerator('ngmega:filter', [
            '../../filter'
          ], ['hello'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/filters/hello-filter.js'
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

          this.app = helpers.createGenerator('ngmega:filter', [
            '../../filter'
          ], ['hello-world'], {'common': true});
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/common/filters/hello-world-filter.js'
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

          this.app = helpers.createGenerator('ngmega:filter', [
            '../../filter'
          ], ['hello', 'there']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/there/filters/hello-filter.js'
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

          this.app = helpers.createGenerator('ngmega:filter', [
            '../../filter'
          ], ['hello-world', 'here-there']);
          done();
        }.bind(this));
      });

      it('creates expected files', function (done) {
        var expected = [
          'app/scripts/here-there/filters/hello-world-filter.js'
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
