'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var ModuleGenerator = function ModuleGenerator(args, options, config) {
  MegaBase.apply(this, arguments);
};

util.inherits(ModuleGenerator, MegaBase);


ModuleGenerator.prototype.init = function init() {
  this.log('You called the module subgenerator with the argument ' + this.name + '.');

  this.scriptModuleName = this.cameledName;
  this.classedModuleName = this.classedName;
  this.setModuleName(this._.dasherize(this.name));
};

ModuleGenerator.prototype.files = function files() {

  // Module init, config and route
  this.templateAndReference('module/_module.js',path.join(this.env.options.modulePath, this.dasherizedName,  '_module.js'));
  this.templateAndReference('module/module.config.js', path.join(this.env.options.modulePath, this.dasherizedName, this.dasherizedName + '.config.js'));
  this.templateAndReference('module/module.routes.js', path.join(this.env.options.modulePath, this.dasherizedName, this.dasherizedName + '.routes.js'));

  if (!this.options.bare) {
    // Module controller
    this.templateAndReference('controller.js', path.join(this.env.options.modulePath, this.dasherizedName, 'controllers', this.dasherizedName + '.js'));

    // Module view
    this.template('partial.html', path.join(this.env.options.modulePath, this.dasherizedName, 'views', this.dasherizedName + '.html'));
  }

  if (this.options.all || this.options['with-resource']) {
    this.scriptConfig = this.scriptModuleName + "Config', 'appConfig";
    this.scriptConfigVars = "config, appConfig";

    this.templateAndReference('resource.js', path.join(this.env.options.modulePath, this.dasherizedName, 'services', this.dasherizedName + '-resource.js'));
  }

  if (this.options['with-service']) {
    this.scriptConfig = this.scriptModuleName + "Config', 'appConfig";
    this.scriptConfigVars = "config, appConfig";

    this.templateAndReference('service.js', path.join(this.env.options.modulePath, this.dasherizedName, 'services', this.dasherizedName + '-service.js'));
  }

};

module.exports = ModuleGenerator;
