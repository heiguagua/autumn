'use strict';
/* Resource Catalog Controllers */

/* Controller */
var ResourceCatalogController = angular.module('ResourceCatalogController', ['ui.router', 'GlobalModule', 'ResourceCatalogService']);
// Main
ResourceCatalogController.controller('ResourceCatalogController.resourceCatalog', ['$scope', '$uibModal', 'ResourceCatalogService.http',
  function($scope, $uibModal, http) {
    // Pagination
    $scope.Paging = {};
    $scope.Paging.maxSize = 5;
    $scope.Paging.itemsPerPage = 10;
    $scope.Paging.pageChanged = function() {
      _httpParams.offset = $scope.Paging.currentPage;
      _httpParams.limit = $scope.Paging.itemsPerPage;
      http.fetch('GET', _httpParams).then(function(response){
        $scope.ResourceCatalogs = response.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.offset = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetch('GET', _httpParams).then(function(response){
      $scope.ResourceCatalogs = response.body;
      $scope.Paging.totalItems = response.head.total;
    });

    // Search
    $scope.Search = function(){
      _httpParams.categoryName = $scope.CategoryName;
      _httpParams.catalogName = $scope.CatalogName;
      http.fetch('GET', _httpParams).then(function(response){
        $scope.ResourceCatalogs = response.body;
      });
    }

    // Modal for Create
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'myModalContent.html',
        controller: 'ResourceCatalogController.resourceCatalogModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
        http.fetch('POST', _httpParams).then(function(response){
          var status = response.head;
        });
      }, function() {
        console.info('Modal dismissed');
      });
    };


  }
])
// Modal Instance
ResourceCatalogController.controller('ResourceCatalogController.resourceCatalogModal', ['$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    $scope.OperationType = '添加';
    var _modelResult = {};
    $scope.Comfirm = function () {
      _modelResult.category = $scope.Model.category;
      _modelResult.catalogCode = $scope.Model.catalogCode;
      _modelResult.parentCode = $scope.Model.parentCode;
      _modelResult.catalogName = $scope.Model.catalogName;
      _modelResult.catalogOrd = $scope.Model.catalogOrd;
      _modelResult.activeFlag = $scope.Model.activeFlag;
      _modelResult.catalogDesc = $scope.Model.catalogDesc;
      $uibModalInstance.close(_modelResult);
    };
    $scope.Cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
])


/* Resource Catalog Service */
var ResourceCatalogService = angular.module('ResourceCatalogService', []);
//httpGet
ResourceCatalogService.factory('ResourceCatalogService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetch(method, params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http({
          url: API.path + '/api/resource-catalog',
          method: method,
          withCredentials: true,
          cache: false,
          params: params
        }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(status);
        deferred.reject();
      })
      return promise;
    }
    return {
      fetch: fetch
    }
  }
]);
