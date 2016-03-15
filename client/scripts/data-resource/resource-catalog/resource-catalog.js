'use strict';
/* Resource Catalog Controllers */

/* Controller */
var ResourceCatalogController = angular.module('ResourceCatalogController', ['ui.router', 'GlobalModule', 'ResourceCatalogService']);
//
ResourceCatalogController.controller('ResourceCatalogController.resourceCatalog', ['$scope', 'ResourceCatalogService.httpGet',
  function($scope, httpGet) {
    httpGet.then(function(response){
      $scope.ResourceCatalogs = response.data.body;
      $scope.Pagination = {
        total : response.data.body.length
      }
    },function(response){
      console.error(response.status + response.statusText);
    });
  }
])


/* Resource Catalog Service */
var ResourceCatalogService = angular.module('ResourceCatalogService', []);
//httpGet
ResourceCatalogService.service('ResourceCatalogService.httpGet', ['$http', 'API',
  function($http, API) {
    return $http.get(
      API.path + '/api/resource-catalog', {
        withCredentials: true
      });
  }
]);
