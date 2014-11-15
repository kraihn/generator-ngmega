/*global describe, beforeEach, it*/
'use strict';
var assert = require('assert');

describe('ngmega generator', function () {
  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
  });

  it('module can be imported without blowing up', function () {
    var module = require('../module');
    assert(module !== undefined);
  });

  it('controller can be imported without blowing up', function () {
    var controller = require('../controller');
    assert(controller !== undefined);
  });

  it('directive can be imported without blowing up', function () {
    var directive = require('../directive');
    assert(directive !== undefined);
  });

  it('filter can be imported without blowing up', function () {
    var filter = require('../filter');
    assert(filter !== undefined);
  });

  it('resource can be imported without blowing up', function () {
    var resource = require('../resource');
    assert(resource !== undefined);
  });

  it('service can be imported without blowing up', function () {
    var service = require('../service');
    assert(service !== undefined);
  });
});
