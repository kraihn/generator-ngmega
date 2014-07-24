# generator-ngmega [![Build Status](https://secure.travis-ci.org/kraihn/generator-ngmega.png?branch=master)](https://travis-ci.org/kraihn/generator-ngmega)

An AngularJS generator based on a modular approach designed for mega teams.

> Based on [generator-angular](https://github.com/yeoman/generator-angular)

## Usage

Install `generator-ngmega`:
```
npm install -g generator-ngmega
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

## Edge Usage

Clone `generator-ngmega`

    git clone https://github.com/kraihn/generator-ngmega.git


Checkout `develop`

    cd generator-ngmega
    git checkout develop

Register with Node

    npm link


## Generators

Available generators:

* [ngmega:module](#module)
* [ngmega:controller](#controller)
* [ngmega:directive](#directive)
* [ngmega:filter](#filter)
* [ngmega:service](#service)

**Note: Generators are to be run from the root directory of your app.**

* The app/ folder described below can be overridden in bower.json -> bower.appPath
* The */scripts/ folder described below can be overridden in bower.json -> bower.scriptPath

An override example could be { appPath: 'src', scriptPath: 'app' } generating files in src/app/*

### Module
Generates a module in `app/scripts`.

Example:
```
yo ngmega:module my-module
```

Produces

* `app/scripts/my-module/_module.js`
* `app/scripts/my-module/my-module.config.js`
* `app/scripts/my-module/my-module.routes.js`
* `app/scripts/my-module/controllers/my-module.js`
* `app/scripts/my-module/views/my-module.html`

### Controller
Generates a controller in `app/scripts/module/controllers`.

Example:
```
yo ngmega:controller my-controller my-module
```

Produces `app/scripts/my-module/controllers/my-controller.js` and `app/scripts/my-module/views/my-controller.html`

### Directive
Generates a directive in `app/scripts/module/directives`.

Example:
```
yo ngmega:directive my-directive my-module
```

Produces `app/scripts/my-module/directives/my-directive-directive.js`

### Filter
Generates a filter in `app/scripts/module/filters`.

Example:
```
yo ngmega:filter my-filter my-module
```

Produces `app/scripts/my-module/filters/my-filter-filter.js`

### Service
Generates a service in `app/scripts/module/services`.

Example:
```
yo ngmega:service my-service my-module
```

Produces `app/scripts/my-module/services/my-service-service.js`

## License

MIT
