'use strict';
/* Data Authority Controllers */

var DataAuthorityController = angular.module('DataAuthorityController', ['ui.router', 'DataAuthorityService', 'GlobalModule']);

DataAuthorityController.controller('DataAuthorityController.dataAuthority', ['$scope', '$q', '$uibModal','DataAuthorityService.http',
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
      http.fetchDataAuthority(_httpParams).then(function(data){
        $scope.DataAuthorities = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchDataAuthority(_httpParams).then(function(data){
      $scope.DataAuthorities = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Search
    $scope.Search = function(){
      http.fetchDataAuthority(_httpParams).then(function(data){
        $scope.DataAuthorities = data.body;
      });
    }

    // Modal for Update
    $scope.Authorize = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'dataAuthorityModal.html',
        controller: 'DataAuthorityController.dataAuthorityModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };
  }
])

DataAuthorityController.controller('DataAuthorityController.dataAuthorityModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    $scope.OperationType = '编辑';
    var _modelResult = {};
    $scope.Confirm = function () {
      $uibModalInstance.close(_modelResult);
    };
    $scope.Cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };


  }
]);


'use strict';
/* Data Authority Service */

var DataAuthorityService = angular.module('DataAuthorityService', []);

DataAuthorityService.factory('DataAuthorityService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDataAuthority(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/data-authority', {
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
      fetchDataAuthority: fetchDataAuthority
    }
  }
]);
