'use strict';
var util = require('util');
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

  // Create directories
  this.mkdir('src/app/' + this.name);
  this.mkdir('src/app/' + this.name + '/controllers');
  this.mkdir('src/app/' + this.name + '/views');

  // Module init, config and route
  this.template('module/_module.js', 'src/app/' + this.name + '/_module.js');
  this.template('module/module.config.js', 'src/app/' + this.name + '/' + this.name + '.config.js');
  this.template('module/module.routes.js', 'src/app/' + this.name + '/' + this.name + '.routes.js');

  // Module controller
  this.template('controller.js', 'src/app/' + this.name + '/controllers/' + this.name + '.js');

  // Module view
  this.template('partial.html', 'src/app/' + this.name + '/views/' + this.name + '.html');

};

module.exports = ModuleGenerator;
