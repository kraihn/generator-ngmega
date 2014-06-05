(function () {
    'use strict';

    /**
     * Initialize module for dashboard
     * @type {*|module}
     */
    var module = angular.module('<%= scriptModuleName %>');

    /**
     * Controller Implementation
     * @param $scope
     */
    function _directive(){
        return {
            template: '<div></div>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                element.text('this is the idCard directive');
            }
        };
    }

    //Register the controller
    module.directive('<%= cameledName %>', [_directive]);
}());