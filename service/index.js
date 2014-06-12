'use strict';
var util = require('util');
var path = require('path');
var MegaBase = require('../mega-base.js');


var ServiceGenerator = function ModuleGenerator(args, options, config) {
    MegaBase.apply(this, arguments);
};

util.inherits(ServiceGenerator, MegaBase);

ServiceGenerator.prototype.init = function init() {
    console.log('You called the service subgenerator with the argument ' + this.name + '.');

    // Assume second argument as module name
    this.scriptModuleName = this.arguments[1];

};

ServiceGenerator.prototype.askFor = function askFor() {

    var cb = this.async();

    var prompts = [];

    if (!this.scriptModuleName) {
        prompts.push(
            {
                name: 'moduleName',
                message: 'Enter your module name',
                default: ''
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

    // Check if module exists
    this.moduleExistsCheck();

    // Module service
    this.template('service.js', path.join(this.env.options.modulePath, this.scriptModuleName, 'services', this.name + '-service.js'));

};

module.exports = ServiceGenerator;
