(function () {
  'use strict';

  /**
   * Initialize module for dashboard
   * @type {*|module}
   */
  var module = angular.module('<%= scriptModuleName %>'),
    app = angular.module('<%= scriptAppName %>');

  /**
   * Service Implementation
   * @param $scope
   */
  function _service(<%= scriptConfigVars %>) {

    this.value = 'value';

    /**
     * Get a single <%= cameledName %> by it's ID
     * @param id
     * @returns {Promise}
     */
    this.get = function (id) {
      return { value: 'value' };
    };

  }

  //Register the service
  module.service('<%= classedName %>', ['<%= scriptConfig %>', _service]);
})();


