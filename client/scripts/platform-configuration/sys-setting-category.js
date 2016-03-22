'use strict';
/* Sys Setting Category Controllers */

var SysSettingCategoryController = angular.module('SysSettingCategoryController', ['ui.router', 'SysSettingCategoryService', 'GlobalModule']);

SysSettingCategoryController.controller('SysSettingCategoryController.sysSettingCategory', ['$scope', '$q', '$uibModal', 'SysSettingCategoryService.http',
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
    http.fetchSysSettingCategory(_httpParams).then(function(data) {
      $scope.SysSettings = data.body;
    });
  };

  // Init Pagination Parameters for Http
  var _httpParams = {};
  _httpParams.skip = 1;
  _httpParams.limit = $scope.Paging.itemsPerPage;

  //Init Table
  http.fetchSysSettingCategory(_httpParams).then(function(data) {
    $scope.SysSettings = data.body;
    $scope.Paging.totalItems = data.head.total;
  });

  // Modal for Update
  $scope.Update = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'sysSettingModal.html',
      controller: 'SysSettingCategoryController.sysSettingModal'
    });
    modalInstance.result.then(function(item) {
      _httpParams = item;
    }, function() {
      console.info('Modal dismissed');
    });
  };
}
])


SysSettingCategoryController.controller('SysSettingCategoryController.sysSettingModal', [
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
/* Sys Setting Category Service */

var SysSettingCategoryService = angular.module('SysSettingCategoryService', []);

SysSettingCategoryService.factory('SysSettingCategoryService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchSysSettingCategory(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/sys-setting-category', {
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
      fetchSysSettingCategory: fetchSysSettingCategory
    }
  }
]);
