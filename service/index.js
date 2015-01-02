'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var ServiceGenerator = function ModuleGenerator(args, options, config) {
  MegaBase.apply(this, arguments);
};

util.inherits(ServiceGenerator, MegaBase);

ServiceGenerator.prototype.init = function init() {
  this.log('You called the service subgenerator with the argument ' + this.name + '.');

  // Assume second argument as module name
  this.scriptModuleName = this.arguments[1];
};

ServiceGenerator.prototype.askFor = function askFor() {

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

ServiceGenerator.prototype.files = function files() {

  var destPath = this.options.common ? this.env.options.commonPath : path.join(this.env.options.modulePath, this.scriptModuleName);
  this.scriptConfig = this.options.common ? 'appConfig' : this.scriptModuleName + "Config', 'appConfig";
  this.scriptConfigVars = this.options.common ? 'appConfig' : "config, appConfig";

  this.checkForModule();

  // Module service
  this.templateAndReference((this.options.min ? 'service-min.js' : 'service.js'), path.join(destPath, 'services', this.dasherizedName + '-service.js'));

};

module.exports = ServiceGenerator;
