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
  function _service($resource, <%= scriptConfigVars %>) {

    var url = config.url;

    /**
     * Get all <%= cameledName %>es
     * @returns {Promise}
     */
      this.all = function () {
        return $resource(url, {}, { 'get': { isArray: true }}).get();
      };

    /**
     * Get <%= cameledName %> by Id
     * @returns {Promise}
     */
      this.get = function (id) {
        return $resource(url).get({ id: id });
      };

    }

  //Register the service
  module.service('<%= classedName %>', ['$resource', '<%= scriptConfig %>', _service]);
})();


