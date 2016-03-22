'use strict';
/* Server Manage Controllers */

var ServerManageController = angular.module('ServerManageController', ['ui.router', 'GlobalModule', 'ServerManageService', 'GlobalModule']);

/* Server Manage Controller */
ServerManageController.controller('ServerManageController.serverManage', ['$scope', '$q', '$uibModal', 'ServerManageService.http',
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
      http.fetchServerManage(_httpParams).then(function(data) {
        $scope.Servers = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchServerManage(_httpParams).then(function(data) {
      $scope.Servers = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Modal for show server monitor
    $scope.ShowServerMonitor = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'serverMonitorModal.html',
        controller: 'ServerManageController.serverMonitorModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };
    // Modal for show alarm rule
    $scope.ShowAlarmRule = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'alarmRuleModal.html',
        controller: 'ServerManageController.alarmRuleModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };

  }
])

ServerManageController.controller('ServerManageController.serverMonitorModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    $scope.OperationType = '';
    var _modelResult = {};
    $scope.Confirm = function() {
      $uibModalInstance.close(_modelResult);
    };
    $scope.Cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
]);

ServerManageController.controller('ServerManageController.alarmRuleModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    $scope.OperationType = '';
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
/* Server Mangage Service */

var ServerManageService = angular.module('ServerManageService', []);

ServerManageService.factory('ServerManageService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchServerManage(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/server-manage', {
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
      fetchServerManage: fetchServerManage
    }
  }
]);
