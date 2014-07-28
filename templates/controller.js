(function () {
  'use strict';

  /**
   * Initialize module for dashboard
   * @type {*|module}
   */
  var module = angular.module('<%= scriptModuleName %>'),
    app = angular.module('<%= scriptAppName %>');


  /**
   * Controller Implementation
   * @param $scope
   */
  function _controller($scope, config) {

    $scope.title = '<%= classedName %>';

  }

  //Register the controller
  module.controller('<%= classedName %>Ctrl', ['$scope', '<%= scriptModuleName %>Config', _controller]);
})();
