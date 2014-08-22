'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var FilterGenerator = function ModuleGenerator(args, options, config) {
  MegaBase.apply(this, arguments);
};

util.inherits(FilterGenerator, MegaBase);

FilterGenerator.prototype.init = function init() {
  this.log('You called the filter subgenerator with the argument ' + this.name + '.');

  // Assume second argument as module name
  this.scriptModuleName = this.arguments[1];

};

FilterGenerator.prototype.askFor = function askFor() {

  var cb = this.async();

  var prompts = [];

  if (!this.scriptModuleName) {

    var defaultModuleName = this.options.common ? 'filters' : this.name;

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

FilterGenerator.prototype.files = function files() {

  var destPath = this.options.common ? this.env.options.commonPath : path.join(this.env.options.modulePath, this.scriptModuleName);

  this.checkForModule();

  // Module service
  this.templateAndReference('filter.js', path.join(destPath, 'filters', this.name + '-filter.js'));

};

module.exports = FilterGenerator;
