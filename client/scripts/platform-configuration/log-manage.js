'use strict';
/* Log Manage Controllers */

var LogManageController = angular.module('LogManageController', ['ui.router', 'LogManageService', 'GlobalModule']);

LogManageController.controller('LogManageController.logManage', ['$scope', '$q', '$uibModal', 'LogManageService.http',
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
      http.fetchSystemLog(_httpParams).then(function(data) {
        $scope.SystemLogs = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchSystemLog(_httpParams).then(function(data) {
      $scope.SystemLogs = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      http.fetchSystemLog(_httpParams).then(function(data) {
        $scope.SystemLogs = data.body;
      });
    }
  }
])

'use strict';
/* Log Manage Service */

var LogManageService = angular.module('LogManageService', []);

LogManageService.factory('LogManageService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchSystemLog(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/log-manage', {
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
      fetchSystemLog: fetchSystemLog
    }
  }
]);
