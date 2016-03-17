'use strict';
/* Resource Catalog Controllers */

/* Controller */
var ResourceCatalogController = angular.module('ResourceCatalogController', ['ui.router', 'GlobalModule', 'ResourceCatalogService']);
//
ResourceCatalogController.controller('ResourceCatalogController.resourceCatalog', ['$scope', 'ResourceCatalogService.http',
  function($scope, http) {
    // Init Table
    http.fetch().then(function(response){
      $scope.ResourceCatalogs = response.body;
      $scope.Pagination = {
        total : response.body.length
      }
    });

    $scope.Pagin = function() {
      return http.fetch().then(function(response) {
        return {
          head:response.head,
          body:response.body,
          total:response.body.length
        }
      });
    }


  }
])


/* Resource Catalog Service */
var ResourceCatalogService = angular.module('ResourceCatalogService', []);
//httpGet
ResourceCatalogService.factory('ResourceCatalogService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetch() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http.get(
        API.path + '/api/resource-catalog', {
          withCredentials: true,
          cache: false
        }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(statusa );
        deferred.reject();
      })
      return promise;
    }
    return {
      fetch: fetch
    }
  }
]);
