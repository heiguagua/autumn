'use strict';
/* Resource Catalog Service */

var ResourceCatalogService = angular.module('ResourceCatalogService', []);

ResourceCatalogService.service('ResourceCatalogService.httpGet', ['$http', 'API',
  function($http, API) {
    if (API && API.path) {
      return $http({
        method: 'GET',
        url: API.path + '/api/resource_catalog',
        withCredentials: true
      });
    } else {
      console.error('API Not Found in config.js');
    }
  }
]);
