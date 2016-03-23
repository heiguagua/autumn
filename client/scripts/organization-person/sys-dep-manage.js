'use strict';
/* Sys Department Management Controllers */

var SysDepManageController = angular.module('SysDepManageController', ['ui.router', 'SysDepManageService', 'GlobalModule']);

SysDepManageController.controller('SysDepManageController.sysDepManage', ['$scope', '$q', '$uibModal', 'SysDepManageService.http',
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
      http.fetchSystemDepts(_httpParams).then(function(data) {
        $scope.SystemDeparts = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchSystemDepts(_httpParams).then(function(data) {
      $scope.SystemDeparts = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      _httpParams.depName = $scope.DepName;
      http.fetchSystemDepts(_httpParams).then(function(data) {
        $scope.SystemDeparts = data.body;
      });
    }

    // Modal for Create
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'sysDeptModal.html',
        controller: 'SysDepManageController.sysDeptModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
        http.saveSystemDept(_httpParams).then(function(data) {
          if ('200' === data.head.status) {
            return data.head;
          }
        }).then(function(data) {
          var _httpParams = {};
          _httpParams.skip = 1;
          _httpParams.limit = $scope.Paging.itemsPerPage;
          http.fetchSystemDepts(_httpParams).then(function(data) {
            $scope.SystemDeparts = data.body;
            $scope.Paging.totalItems = data.head.total;
            $scope.Paging.currentPage = 1;
          });
        });
      }, function() {
        console.info('Modal dismissed');
      });
    };
  }
])


SysDepManageController.controller('SysDepManageController.sysDeptModal', [
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
/* System Department Manage Service */

var SysDepManageService = angular.module('SysDepManageService', []);

SysDepManageService.factory('SysDepManageService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchSystemDepts(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/sys-dep-manage', {
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

    function saveSystemDept(datas) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.post(
        API.path + '/api/sys-dep-manage', {
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
      fetchSystemDepts: fetchSystemDepts,
      saveSystemDept: saveSystemDept
    }
  }
]);
