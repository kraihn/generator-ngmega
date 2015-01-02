(function () {
  'use strict';

  /**
   * Initialize module for dashboard
   * @type {*|module}
   */
  var module = angular.module('<%= moduleCameledName %>'),
    app = angular.module('<%= scriptAppName %>');


  /**
   * Controller Implementation
   * @param $scope
   */
  function _controller($scope, config) {

    $scope.title = '<%= titledName %>';

  }

  //Register the controller
  module.controller('<%= classedName %>Ctrl', ['$scope', '<%= moduleCameledName %>Config', _controller]);
})();
