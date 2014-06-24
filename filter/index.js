'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var FilterGenerator = function ModuleGenerator(args, options, config) {
  MegaBase.apply(this, arguments);
};

util.inherits(FilterGenerator, MegaBase);

FilterGenerator.prototype.init = function init() {
  console.log('You called the filter subgenerator with the argument ' + this.name + '.');

  // Assume second argument as module name
  this.scriptModuleName = this.arguments[1];

};

FilterGenerator.prototype.askFor = function askFor() {

  var cb = this.async();

  var prompts = [];

  if (!this.scriptModuleName) {
    prompts.push(
      {
        name: 'moduleName',
        message: 'Enter your module name',
        default: this.name
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

  // Module service
  this.template('filter.js', path.join(this.env.options.modulePath, this.scriptModuleName, 'filters', this.name + '-filter.js'));

};

module.exports = FilterGenerator;
