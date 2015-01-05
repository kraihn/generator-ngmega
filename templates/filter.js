(function () {
  'use strict';

  /**
   * Initialize module for dashboard
   * @type {*|module}
   */
  var module = angular.module('<%= moduleCameledName %>');

  /**
   * Filter Implementation
   * @param $scope
   */
  function _filter() {
    return function (input) {
      return '<%= cameledName %> filter: ' + input;
    }
  }

  //Register the filter
  module.filter('<%= cameledName %>', [_filter]);
}());
