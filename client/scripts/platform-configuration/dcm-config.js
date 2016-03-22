'use strict';
/* Dcm Config Controllers */

var DcmConfigController = angular.module('DcmConfigController', ['ui.router', 'DcmConfigService', 'GlobalModule']);

DcmConfigController.controller('DcmConfigController.dcmConfig', ['$scope', '$q', '$uibModal', 'DcmConfigService.http',
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
      http.fetchDcmConfig(_httpParams).then(function(data) {
        $scope.Dcms = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchDcmConfig(_httpParams).then(function(data) {
      $scope.Dcms = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Modal for Create
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'dcmConfigModal.html',
        controller: 'DcmConfigController.dcmConfigModal'
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
        templateUrl: 'dcmConfigModal.html',
        controller: 'DcmConfigController.dcmConfigModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };

    // Search
    $scope.Search = function() {
      _httpParams.dcmCode = $scope.DcmCode;
      _httpParams.dcmName = $scope.DcmName;
      http.fetchDcmConfig(_httpParams).then(function(data) {
        $scope.Dcms = data.body;
      });
    }

  }
])


DcmConfigController.controller('DcmConfigController.dcmConfigModal', [
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
/* Dcm Config Service */

var DcmConfigService = angular.module('DcmConfigService', []);

DcmConfigService.factory('DcmConfigService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDcmConfig(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/dcm-config', {
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
      fetchDcmConfig: fetchDcmConfig
    }
  }
]);
