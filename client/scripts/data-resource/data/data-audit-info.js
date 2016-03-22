'use strict';
/* Data Audit Info Controllers */

var DataAuditInfoController = angular.module('DataAuditInfoController', ['ui.router', 'DataAuditInfoService', 'GlobalModule']);

DataAuditInfoController.controller('DataAuditInfoController.dataAuditInfo', ['$scope', '$q', '$uibModal', 'DataAuditInfoService.http',
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
      http.fetchDataAuditInfo(_httpParams).then(function(data) {
        $scope.DataAuditInfos = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchDataAuditInfo(_httpParams).then(function(data) {
      $scope.DataAuditInfos = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      http.fetchDataAuditInfo(_httpParams).then(function(data) {
        $scope.DataAuditInfos = data.body;
      });
    }

    // Modal for Update
    $scope.Audit = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'dataAuditInfoModal.html',
        controller: 'DataAuditInfoController.dataAuditInfoModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };
  }
])

DataAuditInfoController.controller('DataAuditInfoController.dataAuditInfoModal', [
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
/* Data Audit Info Service */

var DataAuditInfoService = angular.module('DataAuditInfoService', []);

DataAuditInfoService.factory('DataAuditInfoService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDataAuditInfo(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/data-audit-info', {
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
      fetchDataAuditInfo: fetchDataAuditInfo
    }
  }
]);
