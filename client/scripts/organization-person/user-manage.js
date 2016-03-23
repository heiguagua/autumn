'use strict';
/* User Management Controllers */

var UserManageController = angular.module('UserManageController', ['ui.router', 'UserManageService', 'GlobalModule']);

UserManageController.controller('UserManageController.userManage', ['$scope', '$q', '$uibModal', 'UserManageService.http',
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
      http.fetchSystemUsers(_httpParams).then(function(data) {
        $scope.SystemUsers = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchSystemUsers(_httpParams).then(function(data) {
      $scope.SystemUsers = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      _httpParams.username = $scope.UserName;
      _httpParams.personName = $scope.PersonName;
      _httpParams.sysTypeName = $scope.SysTypeName;
      _httpParams.depName = $scope.DepName;
      http.fetchSystemUsers(_httpParams).then(function(data) {
        $scope.SystemUsers = data.body;
      });
    }

    // Modal for Create
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'systemUserModal.html',
        controller: 'UserManageController.systemUserModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
        http.saveSystemUser(_httpParams).then(function(data) {
          if ('200' === data.head.status) {
            return data.head;
          }
        }).then(function(data) {
          var _httpParams = {};
          _httpParams.skip = 1;
          _httpParams.limit = $scope.Paging.itemsPerPage;
          http.fetchSystemUsers(_httpParams).then(function(data) {
            $scope.SystemUsers = data.body;
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

UserManageController.controller('UserManageController.systemUserModal', [
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
/* User Management Service */

var UserManageService = angular.module('UserManageService', []);

UserManageService.factory('UserManageService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchSystemUsers(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/user-manage', {
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

    function saveSystemUser(datas) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.post(
        API.path + '/api/user-manage', {
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
      fetchSystemUsers: fetchSystemUsers,
      saveSystemUser: saveSystemUser
    }
  }
]);
