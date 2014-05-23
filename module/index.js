'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var ModuleGenerator = function ModuleGenerator(args, options, config) {
  MegaBase.apply(this, arguments);
};

util.inherits(ModuleGenerator, MegaBase);


ModuleGenerator.prototype.init = function init() {
  console.log('You called the module subgenerator with the argument ' + this.name + '.');

  this.scriptModuleName = this.name;
  this.classedModuleName = this.classedName;

};

ModuleGenerator.prototype.files = function files() {

  // Module init, config and route
  this.template('module/_module.js',path.join(this.env.options.modulePath, this.name,  '_module.js'));
  this.template('module/module.config.js', path.join(this.env.options.modulePath, this.name, this.name + '.config.js'));
  this.template('module/module.routes.js', path.join(this.env.options.modulePath, this.name, this.name + '.routes.js'));

  // Module controller
  this.template('controller.js', path.join(this.env.options.modulePath, this.name, 'controllers', this.name + '.js'));

  // Module view
  this.template('partial.html', path.join(this.env.options.modulePath, this.name, 'views', this.name + '.html'));

};

module.exports = ModuleGenerator;
