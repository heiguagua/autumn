'use strict';
/* Data Visit Info Controllers */

var DataVisitInfoController = angular.module('DataVisitInfoController', ['ui.router', 'DataVisitInfoService', 'GlobalModule']);

DataVisitInfoController.controller('DataVisitInfoController.dataVisitInfo', ['$scope', '$q', '$uibModal', 'DataVisitInfoService.http',
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
      http.fetchDataVisitInfo(_httpParams).then(function(data) {
        $scope.DataVisitInfos = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchDataVisitInfo(_httpParams).then(function(data) {
      $scope.DataVisitInfos = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      http.fetchDataVisitInfo(_httpParams).then(function(data) {
        $scope.DataVisitInfos = data.body;
      });
    }
  }
])


DataVisitInfoController.controller('DataVisitInfoController.dataVisitInfoModal', [
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
/* Data Visit Info Service */

var DataVisitInfoService = angular.module('DataVisitInfoService', []);

DataVisitInfoService.factory('DataVisitInfoService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDataVisitInfo(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/data-visit-info', {
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
      fetchDataVisitInfo: fetchDataVisitInfo
    }
  }
]);
