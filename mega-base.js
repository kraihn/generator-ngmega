'use strict';
var util = require('util');
var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  var bower;
  try {
    bower = require(path.join(process.cwd(), 'bower.json'));
  } catch (e) {
  }

  bower = bower || {};

  this.appname = bower.name || path.basename(process.cwd());
  this.appname = this._.slugify(this._.humanize(this.appname));

  this.scriptAppName = bower.appName || this._.camelize(this.appname) + 'App';

  this.cameledName = this._.camelize(this.name);
  this.classedName = this._.classify(this.name);

  if (typeof this.env.options.appPath === 'undefined') {
    this.env.options.appPath = bower.appPath || 'app';
    this.options.appPath = this.env.options.appPath;
  }

  if (typeof this.env.options.scriptPath === 'undefined') {
    this.env.options.scriptPath = bower.scriptPath || 'scripts';
    this.options.scriptPath = this.env.options.scriptPath;
  }

  if (typeof this.env.options.commonPath === 'undefined') {
    this.env.options.commonPath = bower.commonPath || 'common';
    this.options.commonPath = this.env.options.commonPath;
  }

  this.env.options.modulePath = path.join(this.env.options.appPath, this.env.options.scriptPath);
  this.env.options.commonPath = path.join(this.env.options.appPath, this.env.options.commonPath);

  if (typeof this.env.options.testPath === 'undefined') {
    this.env.options.testPath = bower.testPath || 'test/spec';
  }

  if (!this.options.common) {
    this.options.common = this.options.c || false;
  }

  var sourceRoot = '/templates';
  this.scriptSuffix = '.js';

  this.sourceRoot(path.join(__dirname, sourceRoot));

  this.checkForModule = function() {
    if(!this.options.common) {
      if (!fs.existsSync(path.join(this.env.options.modulePath, this.scriptModuleName, '_module.js'))) {
        this.log(chalk.bold.yellow("Warning: A module does not exist for the generated controller.  Please run 'yo ngmega:module " + this.scriptModuleName + "'"));
      }
    }
  }
};

util.inherits(Generator, yeoman.generators.NamedBase);