'use strict';
var util = require('util');
var path = require('path');
var fs = require('fs');
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

  this.env.options.modulePath = path.join(this.env.options.appPath, this.env.options.scriptPath);

  if (typeof this.env.options.testPath === 'undefined') {
    this.env.options.testPath = bower.testPath || 'test/spec';
  }

  var sourceRoot = '/templates';
  this.scriptSuffix = '.js';

  this.sourceRoot(path.join(__dirname, sourceRoot));
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.moduleExistsCheck = function moduleExistsCheck() {
  // Check if the _module.js file exists, and warn the user if it is missing.
  // This is the basis for determining if a module has been defined.
  if(!fs.existsSync(path.join(this.env.options.modulePath, this.scriptModuleName, '_module.js'))) {
    console.log('Warning: the module you are referencing does not exist');
    return false;
  }
  else {
    return true;
  }
}