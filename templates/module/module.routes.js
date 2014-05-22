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
      .when('/<%= scriptModuleName %>', {
        templateUrl: 'app/<%= scriptModuleName %>/views/<%= scriptModuleName %>.html',
        controller: '<%= classedModuleName %>Ctrl'
      });
  }

  /**
   * Configure the routes within the app
   */
  app.config(['$routeProvider',routeConfiguration]);
})();
