'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var ControllerGenerator = function ModuleGenerator(args, options, config) {
  MegaBase.apply(this, arguments);
};

util.inherits(ControllerGenerator, MegaBase);

ControllerGenerator.prototype.init = function init() {
  this.log('You called the controller subgenerator with the argument ' + this.name + '.');

  // Assume second argument as module name
  this.scriptModuleName = this._.camelize(this.arguments[1]);
  this.setModuleName(this._.dasherize(this.arguments[1]));

};

ControllerGenerator.prototype.askFor = function askFor() {

  var cb = this.async();

  var prompts = [];

  if (!this.scriptModuleName) {

    var defaultModuleName = this.options.common ? 'controllers' : this._.dasherize(this.name);

    prompts.push(
      {
        name: 'moduleName',
        message: 'Enter your module name',
        default: defaultModuleName
      });
  }

  this.prompt(prompts, function (props) {
    if (!this.scriptModuleName) {
      this.scriptModuleName = this._.camelize(props.moduleName);
      this.setModuleName(this._.dasherize(props.moduleName));
    }

    cb();
  }.bind(this));
};

ControllerGenerator.prototype.files = function files() {

  var destPath = this.options.common ? this.env.options.commonPath : path.join(this.env.options.modulePath, this.moduleDasherizedName);

  this.checkForModule();

  // Module controller
  this.templateAndReference('controller.js', path.join(destPath, 'controllers', this.dasherizedName + '.js'));

  // Module view
  this.template('partial.html', path.join(destPath, 'views', this.dasherizedName + '.html'));

};

module.exports = ControllerGenerator;
