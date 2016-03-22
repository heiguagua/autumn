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
      _httpParams.dataName = $scope.DataName;
      _httpParams.dataSign = $scope.DataSign;
      _httpParams.dataType = $scope.DataType;
      _httpParams.dataProvider = $scope.DataProvider;
      _httpParams.dataResourceCategory = $scope.DataResourceCategory;
      _httpParams.createTime = $scope.CreateTime;
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





'use strict';
/* Data Authority Directives */

var DataAuthorityDirective = angular.module('DataAuthorityDirective', ['DataAuthorityService']);

// Data Authority Apply Directive
DataAuthorityDirective.directive('wiservDataAuthority', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'dataName',
            title: '数据名称'
          }, {
            field: 'dataResCatalog',
            title: '数据资源分类'
          }, {
            field: 'dataType',
            title: '数据类型'
          }, {
            field: 'dataCreateTime',
            title: '创建时间'
          }, {
            field: 'creater',
            title: '创建人'
          }, {
            field: 'dataStatus',
            title: '数据状态'
          }, {
            field: 'operator',
            title: '操作'
          }],
          data: [{
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'>授权</a>'
          }, {
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'>授权</a>'
          }],
          pagination: true,
          pageNumber: 1
        });
      }
    }
  }
]);
