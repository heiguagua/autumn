'use strict';
/* Data Resource Controllers */

var DataResourceController = angular.module('DataResourceController', ['ui.router', 'DataResourceService', 'GlobalModule']);

DataResourceController.controller('DataResourceController.dataResource', ['$scope', '$q', '$uibModal', 'DataResourceService.http',
  function($scope, $q, $uibModal, http) {
    // Promise
    var Qdefer = $q.defer();
    var Qpromise = Qdefer.promise;

    // Pagination
    $scope.Paging = {};
    $scope.Paging.maxSize = 5;
    $scope.Paging.itemsPerPage = 12;
    $scope.Paging.pageChanged = function() {
      _httpParams.skip = $scope.Paging.currentPage;
      _httpParams.limit = $scope.Paging.itemsPerPage;
      http.fetchDataResource(_httpParams).then(function(data) {
        $scope.DataResources = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchDataResource(_httpParams).then(function(data) {
      $scope.DataResources = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      _httpParams.categoryName = $scope.CategoryName;
      _httpParams.catalogName = $scope.CatalogName;
      http.fetchDataResource(_httpParams).then(function(data) {
        $scope.DataResources = data.body;
      });
    }

    // Modal for Create
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'dataResourceModal.html',
        controller: 'DataResourceController.dataResourceModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
        http.saveDataResource(_httpParams).then(function(data) {
          if ('200' === data.head.status) {
            return data.head;
          }
        }).then(function(data) {
          var _httpParams = {};
          _httpParams.skip = 1;
          _httpParams.limit = $scope.Paging.itemsPerPage;
          http.fetchDataResource(_httpParams).then(function(data) {
            $scope.DataResources = data.body;
            $scope.Paging.totalItems = data.head.total;
            $scope.Paging.currentPage = 1;
          });
        });
      }, function() {
        console.info('Modal dismissed');
      });
    };

  }
]);

DataResourceController.controller('DataResourceController.dataResourceModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    $scope.OperationType = '添加';
    var _modelResult = {};
    $scope.Confirm = function() {
      $uibModalInstance.close(_modelResult);
    };
    $scope.Cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };


  }
]);

'use strict';
/* Data Resource Service */

var DataResourceService = angular.module('DataResourceService', []);

DataResourceService.factory('DataResourceService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDataResource(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/data-resource', {
          withCredentials: true,
          cache: false,
          params: params
        }).success(function(data, status, headers, config) {
        Qdefer.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(status);
        Qdefer.reject();
      })
      return Qpromise;
    };

    function saveDataResource(datas) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.post(
        API.path + '/api/data-resource', {
          withCredentials: true,
          cache: false,
          data: datas
        }).success(function(data, status, headers, config) {
        Qdefer.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(status);
        Qdefer.reject();
      })
      return Qpromise;
    };
    return {
      fetchDataResource: fetchDataResource,
      saveDataResource: saveDataResource
    }
  }
]);
