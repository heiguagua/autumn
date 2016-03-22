'use strict';
/* Data Release Info Controllers */

var DataReleaseInfoController = angular.module('DataReleaseInfoController', ['ui.router', 'DataReleaseInfoService', 'GlobalModule']);

DataReleaseInfoController.controller('DataReleaseInfoController.dataReleaseInfo', ['$scope', '$q', '$uibModal', 'DataReleaseInfoService.http',
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
      http.fetchDataReleaseInfo(_httpParams).then(function(data) {
        $scope.DataReleaseInfos = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchDataReleaseInfo(_httpParams).then(function(data) {
      $scope.DataReleaseInfos = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      http.fetchDataReleaseInfo(_httpParams).then(function(data) {
        $scope.DataReleaseInfos = data.body;
      });
    }

    // Modal for Update
    $scope.Release = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'dataReleaseInfoModal.html',
        controller: 'DataReleaseInfoController.dataReleaseInfoModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };
  }
])

DataReleaseInfoController.controller('DataReleaseInfoController.dataReleaseInfoModal', [
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
/* Data Release Info Service */

var DataReleaseInfoService = angular.module('DataReleaseInfoService', []);

DataReleaseInfoService.factory('DataReleaseInfoService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDataReleaseInfo(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/data-release-info', {
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
      fetchDataReleaseInfo: fetchDataReleaseInfo
    }
  }
]);
