'use strict';
/* System Role Controllers */

var SysRoleController = angular.module('SysRoleController', ['ui.router', 'SysRoleService', 'GlobalModule']);

SysRoleController.controller('SysRoleController.sysRole', ['$scope', '$q', '$uibModal', 'SysRoleService.http',
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
      http.fetchSystemRoles(_httpParams).then(function(data) {
        $scope.SystemRoles = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchSystemRoles(_httpParams).then(function(data) {
      $scope.SystemRoles = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      _httpParams.roleName = $scope.RoleName;
      _httpParams.sysTypeName = $scope.SysTypeName;
      http.fetchSystemRoles(_httpParams).then(function(data) {
        $scope.SystemRoles = data.body;
      });
    }

    // Modal for Create
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'systemRoleModal.html',
        controller: 'SysRoleController.systemRoleModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
        http.saveSystemRole(_httpParams).then(function(data) {
          if ('200' === data.head.status) {
            return data.head;
          }
        }).then(function(data) {
          var _httpParams = {};
          _httpParams.skip = 1;
          _httpParams.limit = $scope.Paging.itemsPerPage;
          http.fetchSystemRoles(_httpParams).then(function(data) {
            $scope.SystemRoles = data.body;
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

SysRoleController.controller('SysRoleController.systemRoleModal', [
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
/* System Role Service */

var SysRoleService = angular.module('SysRoleService', []);

SysRoleService.factory('SysRoleService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchSystemRoles(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/sys-role', {
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

    function saveSystemRole(datas) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.post(
        API.path + '/api/sys-role', {
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
      fetchSystemRoles: fetchSystemRoles,
      saveSystemRole: saveSystemRole
    }
  }
]);
