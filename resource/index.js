'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var ResourceGenerator = function Generator(args, options, config) {
  MegaBase.apply(this, arguments);
};

util.inherits(ResourceGenerator, MegaBase);

ResourceGenerator.prototype.init = function init() {
  this.log('You called the resource subgenerator with the argument ' + this.name + '.');

  // Assume second argument as module name
  this.scriptModuleName = this.arguments[1];

};

ResourceGenerator.prototype.askFor = function askFor() {

  var cb = this.async();

  var prompts = [];

  if (!this.scriptModuleName) {

    var defaultModuleName = this.options.common ? 'services' : this.name;

    prompts.push(
      {
        name: 'moduleName',
        message: 'Enter your module name',
        default: defaultModuleName
      });
  }

  this.prompt(prompts, function (props) {
    if (!this.scriptModuleName) {
      this.scriptModuleName = props.moduleName;
    }

    cb();
  }.bind(this));
};

ResourceGenerator.prototype.files = function files() {

  var destPath = this.options.common ? this.env.options.commonPath : path.join(this.env.options.modulePath, this.scriptModuleName);
  this.scriptConfig = this.options.common ? 'appConfig' : this.scriptModuleName + "Config', 'appConfig";
  this.scriptConfigVars = this.options.common ? 'appConfig' : "config, appConfig";

  this.checkForModule();

  // Module service
  this.templateAndReference('resource.js', path.join(destPath, 'services', this.dasherizedName + '-resource.js'));

};

module.exports = ResourceGenerator;
