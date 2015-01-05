'use strict';
var util = require('util');
var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');
var angularUtils = require('./util.js');

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

  this.appName = bower.appName || this._.camelize(this.appname) + 'App';

  this.name = this._.dasherize(this.name);
  if(this.name[0] === '-')
   this.name = this.name.substring(1);
  this.cameledName = this._.camelize(this.name);
  this.classedName = this._.classify(this.name);
  this.dasherizedName = this._.dasherize(this.name);
  this.titledName = this._.titleize(this.name);
  this.titledSpacedName = this.titledName.replace(/-/g, ' ');

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

  if (!this.options.all) {
    this.options.all = this.options.a || false;
  }

  if (!this.options.bare) {
    this.options.bare = this.options.b || false;
  }

  if (!this.options.common) {
    this.options.common = this.options.c || false;
  }

  var sourceRoot = '/templates';
  this.scriptSuffix = '.js';

  this.sourceRoot(path.join(__dirname, sourceRoot));

  this.checkForModule = function () {
    if (!this.options.common) {
      if (!fs.existsSync(path.join(this.env.options.modulePath, this.scriptModuleName, '_module.js'))) {
        this.log(chalk.bold.yellow("Warning: A module does not exist for the generated file(s).  Please run 'yo ngmega:module " + this.scriptModuleName + "'"));
      }
    }
  }
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.addScriptToIndex = function (script) {
  if (!this.classedModuleName) {
    this.classedModuleName = this._.classify(this.scriptModuleName);
  }
  var isModule = script.substring(script.lastIndexOf('/') + 1) === '_module.js' ? true : false;
  var spliceValue = [];
  var beginModule = '<!-- module:' + this.classedModuleName + ' -->';
  var endModule = '<!-- endmodule:' + this.classedModuleName + ' -->';

  var needleValue = isModule ? '<!-- endbuild -->' : endModule;
  if (isModule == true) {
    spliceValue.push(beginModule);
    spliceValue.push('<script src="' + script.toLowerCase().replace(/\\/g, '/') + '"></script>');
    spliceValue.push(endModule);
  }
  else {
    spliceValue.push('<script src="' + script.toLowerCase().replace(/\\/g, '/') + '"></script>');
  }

  try {
    var appPath = this.env.options.appPath;
    var fullPath = path.join(appPath, 'index.html');
    angularUtils.rewriteFile({
      file: fullPath,
      needle: needleValue,
      needleAfter: isModule ? (script.substring(0, script.indexOf('/')) + '.js') : '',
      splicable: spliceValue
    });
  } catch (e) {
    this.log.error(chalk.yellow(
      '\nUnable to find ' + fullPath + '. Reference to ' + script + ' not added.\n'
    ));
  }
};

Generator.prototype.templateAndReference = function (template, script) {
  this.template(template, script);
  this.addScriptToIndex(script.substring(script.indexOf('/') + 1));
};

Generator.prototype.setModuleName = function (name) {
  if(name[0] === '-')
    name = name.substring(1);
  this.moduleCameledName = this._.camelize(name);
  this.moduleClassedName = this._.classify(name);
  this.moduleDasherizedName = this._.dasherize(name);
  this.moduleTitledName = this._.titleize(name);
};
