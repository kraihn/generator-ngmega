(function () {
  'use strict';

  /**
   * Get module for the app
   * @type {*|module}
   */
  var app = angular.module('<%= appName %>');

  /**
   * route config implementation
   * @param $scope
   * @constructor
   */
  function _routeConfiguration($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }

  /**
   * Configure the routes within the app
   */
  app.config(['$routeProvider', _routeConfiguration]);
})();
