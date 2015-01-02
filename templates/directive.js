(function () {
  'use strict';

  /**
   * Initialize module for dashboard
   * @type {*|module}
   */
  var module = angular.module('<%= moduleCameledName %>');

  /**
   * Controller Implementation
   * @param $scope
   */
  function _directive() {
    return {
      template: '<<%= element %>></<%= element %>>',
      restrict: '<%= directiveType %>',
      link: function postLink(scope, element, attrs) {
        element.text('this is the <%= cameledName %> directive');
      }
    };
  }

  //Register the controller
  module.directive('<%= cameledName %>', [_directive]);
}());
