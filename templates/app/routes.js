(function(){
  'use strict';

  /**
   * Get module for the app
   * @type {*|module}
   */
  var app = angular.module('<%= scriptAppName %>');

  /**
   * route config implementation
   * @param $scope
   * @constructor
   */
  function routeConfiguration($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }

  /**
   * Configure the routes within the app
   */
  app.config(['$routeProvider',routeConfiguration]);
})();
