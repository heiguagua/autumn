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

    // Modal
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'myModalContent.html',
        controller: 'ResourceCatalogController.resourceCatalogModal',
        resolve: {
          items: function() {
            return $scope.items;
          }
        }
      });
      modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;
      }, function() {
        console.info('Modal dismissed at: ' + new Date());
      });
    };

  }
])
// Modal
ResourceCatalogController.controller('ResourceCatalogController.resourceCatalogModal', ['$scope', '$uibModalInstance', 'items',
  function($scope, $uibModalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };
    $scope.Comfirm = function () {
      $uibModalInstance.close($scope.selected.item);
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
