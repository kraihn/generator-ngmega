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
      .when('/<%= moduleDasherizedName %>', {
        templateUrl: 'app/<%= moduleDasherizedName %>/views/<%= moduleDasherizedName %>.html',
        controller: '<%= moduleClassedName %>Ctrl'
      });
  }

  /**
   * Configure the routes within the app
   */
  app.config(['$routeProvider', _routeConfiguration]);
})();
