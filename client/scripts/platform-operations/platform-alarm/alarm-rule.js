'use strict';
/* Alarm Rule Controllers */

var AlarmRuleController = angular.module('AlarmRuleController', ['ui.router', 'AlarmRuleService', 'GlobalModule']);

AlarmRuleController.controller('AlarmRuleController.alarmRule', ['$scope', '$q', '$uibModal','AlarmRuleService.http',
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
      http.fetchAlarmRule(_httpParams).then(function(data) {
        $scope.AlarmRules = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchAlarmRule(_httpParams).then(function(data) {
      $scope.AlarmRules = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Modal for Create
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'alarmRuleModal.html',
        controller: 'AlarmRuleController.alarmRuleModal'
      });
      modalInstance.result.then(function(_httpParams) {
        // Save operation by promise
      }, function() {
        console.info('Modal dismissed');
      });
    };

    // Modal for Update
    $scope.Update = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'alarmRuleModal.html',
        controller: 'AlarmRuleController.alarmRuleModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };

  }
])

AlarmRuleController.controller('AlarmRuleController.alarmRuleModal', [
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
/* Alarm Rule Service */

var AlarmRuleService = angular.module('AlarmRuleService', []);

AlarmRuleService.factory('AlarmRuleService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchAlarmRule(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/alarm-rule', {
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
      fetchAlarmRule: fetchAlarmRule
    }
  }
]);
