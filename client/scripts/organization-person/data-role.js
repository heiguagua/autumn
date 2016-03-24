'use strict';
/* Data Role Controllers */

var DataRoleController = angular.module('DataRoleController', ['ui.router', 'DataRoleService', 'GlobalModule']);

DataRoleController.controller('DataRoleController.dataRole', ['$scope', '$q', '$uibModal', 'DataRoleService.http',
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
      http.fetchDataRoles(_httpParams).then(function(data) {
        $scope.DataRoles = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchDataRoles(_httpParams).then(function(data) {
      $scope.DataRoles = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      _httpParams.roleName = $scope.RoleName;
      _httpParams.sysTypeName = $scope.SysTypeName;
      http.fetchDataRoles(_httpParams).then(function(data) {
        $scope.DataRoles = data.body;
      });
    }

    // Modal for Create
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'dataRoleModal.html',
        controller: 'DataRoleController.dataRoleModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
        http.saveDataRole(_httpParams).then(function(data) {
          if ('200' === data.head.status) {
            return data.head;
          }
        }).then(function(data) {
          var _httpParams = {};
          _httpParams.skip = 1;
          _httpParams.limit = $scope.Paging.itemsPerPage;
          http.fetchDataRoles(_httpParams).then(function(data) {
            $scope.DataRoles = data.body;
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

DataRoleController.controller('DataRoleController.dataRoleModal', [
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
/* Data Role Service */

var DataRoleService = angular.module('DataRoleService', []);

DataRoleService.factory('DataRoleService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDataRoles(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/data-role', {
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

    function saveDataRole(datas) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.post(
        API.path + '/api/data-role', {
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
      fetchDataRoles: fetchDataRoles,
      saveDataRole: saveDataRole
    }
  }
]);
