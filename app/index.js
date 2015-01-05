'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var NgMegaGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });

        var bower;
        try {
            bower = require(path.join(process.cwd(), 'bower.json'));
        } catch (e) {
        }

        bower = bower || {};

        this.appname = bower.name || path.basename(process.cwd());
        this.appname = this._.slugify(this._.humanize(this.appname));

        this.appName = bower.appName || this._.camelize(this.appname) + 'App';

        if (typeof this.env.options.appPath === 'undefined') {

            this.env.options.appPath = bower.appPath || 'app';
            this.options.appPath = this.env.options.appPath;
        }

        if (typeof this.env.options.scriptPath === 'undefined') {
            this.env.options.scriptPath = bower.scriptPath || 'scripts';
            this.options.scriptPath = this.env.options.scriptPath;
        }
    },

    app: function () {
        //this.mkdir('app');
        //this.mkdir('app/templates');

        //this.copy('_package.json', 'package.json');
        //this.copy('_bower.json', 'bower.json');
        var sourceRoot = '/templates';
        this.scriptSuffix = '.js';

        this.sourceRoot(path.join(__dirname, sourceRoot));
        this.template('../../templates/app/config.js', path.join(this.env.options.appPath, this.env.options.scriptPath, 'config.js'));
        this.template('../../templates/app/routes.js', path.join(this.env.options.appPath, this.env.options.scriptPath, 'routes.js'));
    },

    projectfiles: function () {
        //this.copy('editorconfig', '.editorconfig');
        //this.copy('jshintrc', '.jshintrc');
    }
});

module.exports = NgMegaGenerator;
