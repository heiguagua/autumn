'use strict';
/* Data Offline Info Controllers */

var DataOfflineInfoController = angular.module('DataOfflineInfoController', ['ui.router', 'DataOfflineInfoService', 'GlobalModule']);

DataOfflineInfoController.controller('DataOfflineInfoController.dataOfflineInfo', ['$scope', '$q', '$uibModal', 'DataOfflineInfoService.http',
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
    http.fetchDataOfflineInfo(_httpParams).then(function(data) {
      $scope.DataOfflineInfos = data.body;
    });
  };

  // Init Pagination Parameters for Http
  var _httpParams = {};
  _httpParams.skip = 1;
  _httpParams.limit = $scope.Paging.itemsPerPage;

  //Init Table
  http.fetchDataOfflineInfo(_httpParams).then(function(data) {
    $scope.DataOfflineInfos = data.body;
    $scope.Paging.totalItems = data.head.total;
  });

  // Search
  $scope.Search = function() {
    http.fetchDataOfflineInfo(_httpParams).then(function(data) {
      $scope.DataOfflineInfos = data.body;
    });
  }

  // Modal for Update
  $scope.Offline = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'dataOfflineInfoModal.html',
      controller: 'DataOfflineInfoController.dataOfflineInfoModal'
    });
    modalInstance.result.then(function(item) {
      _httpParams = item;
    }, function() {
      console.info('Modal dismissed');
    });
  };
}
])

DataOfflineInfoController.controller('DataOfflineInfoController.dataOfflineInfoModal', [
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
/* Data Offline Info Service */

var DataOfflineInfoService = angular.module('DataOfflineInfoService', []);

DataOfflineInfoService.factory('DataOfflineInfoService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDataOfflineInfo(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/data-offline-info', {
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
      fetchDataOfflineInfo: fetchDataOfflineInfo
    }
  }
]);
