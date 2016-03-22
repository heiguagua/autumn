'use strict';
/* Sys Dict Category Controllers */

var SysDictCategoryController = angular.module('SysDictCategoryController', ['ui.router', 'SysDictCategoryService', 'GlobalModule']);

SysDictCategoryController.controller('SysDictCategoryController.sysDictCategory', ['$scope', '$q', '$uibModal', 'SysDictCategoryService.http',
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
      http.fetchSysDictCategory(_httpParams).then(function(data) {
        $scope.SysDicts = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchSysDictCategory(_httpParams).then(function(data) {
      $scope.SysDicts = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Modal for Update
    $scope.Update = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'sysDictModal.html',
        controller: 'SysDictCategoryController.sysDictModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };
  }
])



SysDictCategoryController.controller('SysDictCategoryController.sysDictModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    $scope.OperationType = '修改';
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
/* Sys Dict Category Service */

var SysDictCategoryService = angular.module('SysDictCategoryService', []);

SysDictCategoryService.factory('SysDictCategoryService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchSysDictCategory(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/sys-dict-category', {
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
    return {
      fetchSysDictCategory: fetchSysDictCategory
    }
  }
]);
