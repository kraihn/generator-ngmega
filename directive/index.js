'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var DirectiveGenerator = function ModuleGenerator(args, options, config) {
  MegaBase.apply(this, arguments);
};

util.inherits(DirectiveGenerator, MegaBase);

DirectiveGenerator.prototype.init = function init() {
  this.log('You called the directive subgenerator with the argument ' + this.name + '.');

  // Assume second argument as module name
  this.scriptModuleName = this.arguments[1];

};

DirectiveGenerator.prototype.askFor = function askFor() {

  var cb = this.async();

  var prompts = [];

  if (!this.scriptModuleName) {

    var defaultModuleName = this.options.common ? 'directives' : this.name;

    prompts.push(
      {
        name: 'moduleName',
        message: 'Enter your module name',
        default: defaultModuleName
      });
  }

  prompts.push(
    {
      name: 'element',
      message: 'Enter your element type',
      default: 'div'
    });

  prompts.push(
    {
      type: 'checkbox',
      name: 'directiveType',
      message: 'Select your directive type(s)',
      choices: [
        {
          name: "Element",
          value: "E",
          checked: true
        },
        {
          name: "Attribute",
          value: "A"
        },
        {
          name: "Class",
          value: "C"
        }
      ]
    });

  this.prompt(prompts, function (props) {
    var directiveType = '';
    if (!this.scriptModuleName) {
      this.scriptModuleName = props.moduleName;
    }
    if(!this.element) {
      this.element = props.element;
    }

    props.directiveType.forEach(function(value) {
      directiveType += value;
    });
    this.directiveType = directiveType;

    cb();
  }.bind(this));
};

DirectiveGenerator.prototype.files = function files() {

  var destPath = this.options.common ? this.env.options.commonPath : path.join(this.env.options.modulePath, this.scriptModuleName);

  this.checkForModule();

  // Module service
  this.templateAndReference('directive.js', path.join(destPath, 'directives', this.name + '-directive.js'));

};

module.exports = DirectiveGenerator;
