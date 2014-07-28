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
  function _service($q, $http, $filter, $cacheFactory, <%= scriptConfigVars %>) {

    var apiEndpoint = appConfig.apiEndpoint.replace(/\/$/, ''),
      cache = $cacheFactory('<%= cameledName %>');

    function route(path) {
      path = path.replace(/^\//, '');
      return [appConfig.apiEndpoint, path].join('/');
    }

    /**
     * Check the cache for a value otherwise call callback function
     * @param key
     * @param callback
     * @returns {*}
     */
    function getCacheOtherwise(key, callback) {
      // Initiate deferred
      var deferred = $q.defer();
      var data = cache.get(key);

      if (data)
        deferred.resolve(data);
      else
        callback && callback.call(this, deferred);

      return deferred.promise;
    }

    /**
     * Function used to watch a promise and filter the data via a callback and then return a promise
     * @param fn
     * @param callback
     * @returns {*}
     */
    function filterPromiseData(fn, callback) {
      var deferred = $q.defer();

      var promise = fn();

      promise
        .then(function (data) {
          var filtered = callback.call({}, data);
          deferred.resolve(filtered);
        }, function (data) {
          deferred.reject(data);
        });

      return deferred.promise;
    }


    /**
     * Gets all <%= cameledName %> and returns a promise
     * @returns Promise
     */
    this.all = function () {
      var cacheKey = '<%= cameledName %>:all';

      return getCacheOtherwise(cacheKey, function (deferred) {
        //get route for <%= scriptModuleName %>(s)
        var url = route(config.apiRoutes.<%= scriptModuleName %>);

        //get all <%= cameledName %> via ajax
        $http.get(url)
          .success(function (data, status) {
            cache.put(cacheKey, data);
            deferred.resolve(data);
          }).error(function (data, status) {
            deferred.reject(data);
          });
      });
    };

    /**
     * Filter all <%= cameledName %>(s) using a callback and return a promise
     * @param Function callback
     * @returns Promise
     */
    this.filter = function (callback) {
      return filterPromiseData(this.all, callback);
    };

    /**
     * Get a single <%= cameledName %> by it's ID
     * @param id
     * @returns {Promise}
     */
    this.get = function (id) {
      return this.filter(function (data) {
        if (angular.isString(id)) {
          id = parseInt(id);
        }
        return $filter('filter')(data, { 'id': id}, true)[0];
      });
    };

  }

  //Register the service
  module.service('<%= classedName %>', ['$q', '$http', '$filter', '$cacheFactory', '<%= scriptConfig %>', _service]);
})();


