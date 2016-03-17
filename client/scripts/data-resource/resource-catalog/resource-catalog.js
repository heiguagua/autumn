'use strict';
/* Resource Catalog Controllers */

/* Controller */
var ResourceCatalogController = angular.module('ResourceCatalogController', ['ui.router', 'GlobalModule', 'ResourceCatalogService']);
//
ResourceCatalogController.controller('ResourceCatalogController.resourceCatalog', ['$scope', 'ResourceCatalogService.http',
  function($scope, http) {
    // Pagination
    $scope.Paging = {};
    $scope.Paging.maxSize = 5;
    $scope.Paging.itemsPerPage = 15;
    $scope.Paging.pageChanged = function() {
      _httpParams.offset = $scope.Paging.currentPage;
      _httpParams.limit = $scope.Paging.itemsPerPage;
      http.fetch(_httpParams).then(function(response){
        $scope.ResourceCatalogs = response.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.offset = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetch(_httpParams).then(function(response){
      $scope.ResourceCatalogs = response.body;
      $scope.Paging.totalItems = response.body.length;
    });

    // Search
    $scope.Search = function(){
      _httpParams.categoryName = $scope.CategoryName;
      _httpParams.catalogName = $scope.CatalogName;
      http.fetch(_httpParams).then(function(response){
        $scope.ResourceCatalogs = response.body;
      });
    }

  }
])


/* Resource Catalog Service */
var ResourceCatalogService = angular.module('ResourceCatalogService', []);
//httpGet
ResourceCatalogService.factory('ResourceCatalogService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetch(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http.get(
        API.path + '/api/resource-catalog', {
          withCredentials: true,
          cache: false,
          params: params
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
