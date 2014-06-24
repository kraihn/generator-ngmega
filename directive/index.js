'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var DirectiveGenerator = function ModuleGenerator(args, options, config) {
    MegaBase.apply(this, arguments);
};

util.inherits(DirectiveGenerator, MegaBase);

DirectiveGenerator.prototype.init = function init() {
    console.log('You called the directive subgenerator with the argument ' + this.name + '.');

    // Assume second argument as module name
    this.scriptModuleName = this.arguments[1];

};

DirectiveGenerator.prototype.askFor = function askFor() {

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

DirectiveGenerator.prototype.files = function files() {

    // Module service
    this.template('directive.js', path.join(this.env.options.modulePath, this.scriptModuleName, 'directives', this.name + '-directive.js'));

};

module.exports = DirectiveGenerator;
