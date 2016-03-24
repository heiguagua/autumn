'use strict';
var ResourceCatalogModule = angular.module('ResourceCatalogModule', ['ui.router', 'GlobalModule']);

/** Main Controller */
ResourceCatalogModule.controller('ResourceCatalogController.resourceCatalog', ['$scope', '$q', '$uibModal', 'ResourceCatalogService.http',
  function($scope, $q, $uibModal, http) {
    // Pagination parameter
    var paging = $scope.Paging = {};
    var pagingMaxSize = $scope.Paging.maxSize = 5;
    var pagingItemsPerPage = $scope.Paging.itemsPerPage = 12;
    // Init pagination parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = pagingItemsPerPage;
    // Array for checked item's ID
    var checkedItemArray = $scope.CheckedItemArray = [];

    /* Init */
    (function(){
      // Init Table when first enter current page
      http.fatchResourceCatalog(_httpParams).then(function(data){
        $scope.ResourceCatalogs = data.body;
        $scope.Paging.totalItems = data.head.total;
      });
      // Handle the page changed event
      $scope.Paging.pageChanged = function() {
        _httpParams.skip = $scope.Paging.currentPage;
        _httpParams.limit = pagingItemsPerPage;
        http.fatchResourceCatalog(_httpParams).then(function(data){
          $scope.ResourceCatalogs = data.body;
        });
      };
    })();

    /* Checked Status */
    (function(){
      // Handle single checked
      $scope.CheckedChange = function(currentItem){
        if(currentItem.ResourceCatalog.CheckedStatus){
          if(-1 === _.indexOf(checkedItemArray, currentItem.ResourceCatalog.id)){
            checkedItemArray.push(currentItem.ResourceCatalog.id);
          };
        }else{
          _.remove(checkedItemArray, function(checkedItem) {
            return checkedItem === currentItem.ResourceCatalog.id;
          });
        }
        console.log(checkedItemArray);
      };
      // Handle multiple checked
      $scope.$watch('CheckedAll', function(newValue, oldValue){
        if(newValue){
          $scope.CheckedItemArray = [];
          _($scope.ResourceCatalogs).each(function(value, key){
            value.CheckedStatus = true;
            checkedItemArray.push(value.id);
          });
          console.log(checkedItemArray);
        }
        else{
          if (checkedItemArray.length == 0) return;
          _($scope.ResourceCatalogs).each(function(value, key){
            value.CheckedStatus = false;
          });
          checkedItemArray = [];
          console.log(checkedItemArray);
        }
      });
    })();

    /* Search */
    $scope.Search = function(){
      _httpParams.categoryName = $scope.CategoryName;
      _httpParams.catalogName = $scope.CatalogName;
      http.fatchResourceCatalog(_httpParams).then(function(data){
        $scope.ResourceCatalogs = data.body;
      });
    };

    /* Create */
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'myModalContent.html',
        controller: 'ResourceCatalogController.resourceCatalogModal'
      });
      modalInstance.result.then(function(_httpParams) {
        // Save operation by promise
        http.saveResourceCatalog(_httpParams).then(function(data) {
          if ('200' === data.head.status) {
            return data.head;
          }
        }).then(function(head) {
          // Refresh table
          var _httpParams = {};
          _httpParams.skip = 1;
          _httpParams.limit = pagingItemsPerPage;
          http.fatchResourceCatalog(_httpParams).then(function(data) {
            $scope.ResourceCatalogs = data.body;
            $scope.Paging.totalItems = data.head.total;
            $scope.Paging.currentPage = 1;
          });
          return head.message;
        }).then(function(message){
          $scope.Alerts = [
            {type: 'success', message: message, timeout: 1200}
          ];
          $scope.CloseAlert = function(index) {
            $scope.Alerts.splice(index, 1);
          };
        });
      }, function() {
        // console.info('Modal dismissed');
      });
    };

    /* Update */
    $scope.Update = function(){
      var checkedItemArrayLength = checkedItemArray.length;
      if(1 === checkedItemArrayLength){
        http.findResourceCatalogbyID(checkedItemArray[0]).then(function(data){
          $scope.UpdateItemData = data.body;
        }).then(function(){
          console.log($scope.UpdateItemData);
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'myModalContent.html',
            controller: 'ResourceCatalogController.resourceCatalogModal'
          });
        })
      }
      else if(0 === checkedItemArrayLength){
        $scope.Alerts = [
          {type: 'warning', message: '请选择需要进行编辑的数据！', timeout: 1200}
        ];
        $scope.CloseAlert = function(index) {
          $scope.Alerts.splice(index, 1);
        };
      }
      else{
        $scope.Alerts = [
          {type: 'warning', message: '不能同时编辑多条数据！', timeout: 1200}
        ];
        $scope.CloseAlert = function(index) {
          $scope.Alerts.splice(index, 1);
        };
      }
    };

  }
])

/** Modal Instance Controller */
ResourceCatalogModule.controller('ResourceCatalogController.resourceCatalogModal', ['$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    $scope.OperationType = '添加';
    var _modelResult = {};
    $scope.Comfirm = function () {
      _modelResult.category = $scope.Model.category;
      _modelResult.catalogCode = $scope.Model.catalogCode;
      _modelResult.parentCode = $scope.Model.parentCode;
      _modelResult.catalogName = $scope.Model.catalogName;
      _modelResult.catalogOrd = $scope.Model.catalogOrd;
      _modelResult.activeFlag = $scope.Model.activeFlag;
      _modelResult.catalogDesc = $scope.Model.catalogDesc;
      $uibModalInstance.close(_modelResult);
    };
    $scope.Cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
])

/* Main Service */
ResourceCatalogModule.factory('ResourceCatalogService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchResourceCatalog(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/resource-catalog', {
          withCredentials: true,
          cache: false,
          params: params
        }).success(function(data, status, headers, config) {
        Qdefer.resolve(data);
      }).error(function(data, status, headers, config) {
        Qdefer.reject();
      })
      return Qpromise;
    };
    function saveResourceCatalog(datas) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.post(
        API.path + '/api/resource-catalog', {
          withCredentials: true,
          cache: false,
          data: datas
        }).success(function(data, status, headers, config) {
        Qdefer.resolve(data);
      }).error(function(data, status, headers, config) {
        Qdefer.reject();
      })
      return Qpromise;
    };
    function findResourceCatalogbyID(id){
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/resource-catalog/' + id, {
          withCredentials: true,
          cache: false
        }).success(function(data, status, headers, config) {
        Qdefer.resolve(data);
      }).error(function(data, status, headers, config) {
        Qdefer.reject();
      })
      return Qpromise;
    }
    return {
      fatchResourceCatalog: fetchResourceCatalog,
      saveResourceCatalog: saveResourceCatalog,
      findResourceCatalogbyID: findResourceCatalogbyID
    }
  }
]);
