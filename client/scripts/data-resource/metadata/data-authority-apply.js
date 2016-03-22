'use strict';
/* Data Authority Apply Controllers */

var DataAuthorityApplyController = angular.module('DataAuthorityApplyController', ['ui.router', 'DataAuthorityApplyService', 'GlobalModule']);

DataAuthorityApplyController.controller('DataAuthorityApplyController.dataAuthorityApply', ['$scope', '$q', '$uibModal', 'DataAuthorityApplyService.http',
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
      http.fetchDataAuthorityApply(_httpParams).then(function(data) {
        $scope.DataAuthorityApplies = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchDataAuthorityApply(_httpParams).then(function(data) {
      $scope.DataAuthorityApplies = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function() {
      http.fetchDataAuthorityApply(_httpParams).then(function(data) {
        $scope.DataAuthorityApplies = data.body;
      });
    }

    // Modal for Update
    $scope.Audit = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'dataAuthorityApplyModal.html',
        controller: 'DataAuthorityApplyController.dataAuthorityApplyModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };
  }
])

DataAuthorityApplyController.controller('DataAuthorityApplyController.dataAuthorityApplyModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    $scope.OperationType = '审核';
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
/* Data Authority Apply Service */

var DataAuthorityApplyService = angular.module('DataAuthorityApplyService', []);

DataAuthorityApplyService.factory('DataAuthorityApplyService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDataAuthorityApply(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/data-authority-apply', {
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
      fetchDataAuthorityApply: fetchDataAuthorityApply
    }
  }
]);
