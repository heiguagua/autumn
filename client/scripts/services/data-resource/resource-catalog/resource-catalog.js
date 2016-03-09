'use strict';
/* Resource Catalog Service */

var ResourceCatalogService = angular.module('ResourceCatalogService', []);

ResourceCatalogService.service('ResourceCatalogService.httpGet', ['$http', 'API',
  function($http, API) {
    return $http.get(
      API.path + '/api/resource-catalog', {
        withCredentials: true
      });
  }
]);
