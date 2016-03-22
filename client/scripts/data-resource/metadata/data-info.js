'use strict';
/* Data Info Controllers */

var DataInfoController = angular.module('DataInfoController', ['ui.router', 'DataInfoService', 'GlobalModule']);

DataInfoController.controller('DataInfoController.dataInfo', ['$scope', '$q', '$uibModal','DataInfoService.http',
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
        http.fetchDataInfo(_httpParams).then(function(data){
          $scope.DataInfos = data.body;
        });
      };

      // Init Pagination Parameters for Http
      var _httpParams = {};
      _httpParams.skip = 1;
      _httpParams.limit = $scope.Paging.itemsPerPage;

      //Init Table
      http.fetchDataInfo(_httpParams).then(function(data){
        $scope.DataInfos = data.body;
        $scope.Paging.totalItems = data.head.total;
      });

      // Search
      $scope.Search = function(){
        _httpParams.dataName = $scope.DataName;
        _httpParams.dataSign = $scope.DataSign;
        _httpParams.dataType = $scope.DataType;
        _httpParams.dataProvider = $scope.DataProvider;
        _httpParams.dataResourceCategory = $scope.DataResourceCategory;
        _httpParams.createTime = $scope.CreateTime;
        http.fetchDataInfo(_httpParams).then(function(data){
          $scope.DataInfos = data.body;
        });
      }

      // Modal for Update
      $scope.Update = function() {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'dataInfoModal.html',
          controller: 'DataInfoController.dataInfoModal'
        });
        modalInstance.result.then(function(item) {
          _httpParams = item;
        }, function() {
          console.info('Modal dismissed');
        });
      };
  }
])


DataInfoController.controller('DataInfoController.dataInfoModal', [
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
/* Data Info Service */

var DataInfoService = angular.module('DataInfoService', []);

DataInfoService.factory('DataInfoService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchDataInfo(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/data-info', {
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
      fetchDataInfo: fetchDataInfo
    }
  }
]);
