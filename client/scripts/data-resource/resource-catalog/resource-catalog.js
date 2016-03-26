'use strict';
var ResourceCatalog = angular.module('ResourceCatalog', ['ui.router', 'GlobalModule']);

/** Main Controller */
ResourceCatalog.controller('ResourceCatalog.Controller.Main', ['$scope', '$q', 'ResourceCatalog.Service.Http', 'ResourceCatalog.Service.Component',
  function($scope, $q, Http, Component) {
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
    // Modal object
    $scope.Modal = {};

    /* Refresh */
    $scope.Refresh = function(){
      var _httpParams = {};
      _httpParams.skip = 1;
      _httpParams.limit = pagingItemsPerPage;
      Http.fatchResourceCatalog(_httpParams).then(function(result) {
        $scope.ResourceCatalogs = result.data.body;
        $scope.Paging.totalItems = result.data.head.total;
        $scope.Paging.currentPage = 1;
      });
    }

    /* Search */
    $scope.Search = function(){
      _httpParams.categoryName = $scope.CategoryName;
      _httpParams.catalogName = $scope.CatalogName;
      Http.fatchResourceCatalog(_httpParams).then(function(data){
        $scope.ResourceCatalogs = data.body;
      });
    };

    /* Create */
    $scope.Create = function() {
      $scope.Modal = {};
      Component.popModal($scope, '添加', 'template-modal').result.then(function(_httpParams) {
        // Save operation by promise
        Http.saveResourceCatalog(_httpParams).then(function(result) {
          if ('200' === result.data.head.status) {
            return result.data.head;
          }
        }).then(function(head) {
          $scope.Refresh();
          head.type = 'success';
          return head;
        }).then(function(head){
          Component.popAlert($scope, head);
        }).then(function(){
          checkedItemArray = []; // Empty checkedItemArray
        })
      });
    };11

    /* Update */
    $scope.Update = function(){
      if(1 === checkedItemArray.length){
        Http.findResourceCatalogbyID(checkedItemArray[0]).then(function(result){
          $scope.Modal = result.data.body;
        }).then(function(){
          return Component.popModal($scope, '修改', 'template-modal');
        }).then(function(modalInstance){
          modalInstance.result.then(function(_httpParams) {
            Http.updateResourceCatalogbyID(_httpParams).then(function(result){
              // TODO 更新成功之后，需要刷新表格的数据，并显示成功的提示消息
              console.log(result);
            })
          });
        })
      }
      else if(0 === checkedItemArray.length){
        Component.popAlert($scope, {type:'warning', message:'请选择需要进行编辑的数据！'});
      }
      else{
        Component.popAlert($scope, {type:'warning', message:'不能同时编辑多条数据！'});
      }
    };

    /* Initialization Code Block*/
    (function(){
      // Handle Table
      Http.fatchResourceCatalog(_httpParams).then(function(result){
        $scope.ResourceCatalogs = result.data.body;
        $scope.Paging.totalItems = result.data.head.total;
      });
      // Handle Pagination
      $scope.Paging.pageChanged = function() {
        _httpParams.skip = $scope.Paging.currentPage;
        _httpParams.limit = pagingItemsPerPage;
        Http.fatchResourceCatalog(_httpParams).then(function(result){
          $scope.ResourceCatalogs = result.data.body;
        });
      };
      // Handle Single Checked
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
      // Handle Multiple Checked
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

  }
])

/* Component */
ResourceCatalog.service('ResourceCatalog.Service.Component', ['$uibModal',
  function($uibModal) {
    // prompt Alert
    function popAlert(scope, info) {
      scope.Alerts = [{
        type: info.type,
        message: info.message,
        timeout: 1200
      }];
      scope.CloseAlert = function(index) {
        scope.Alerts.splice(index, 1);
      };
    };
    // prompt Modal
    function popModal(scope, type, templateUrl) {
      scope.Modal.type = type;
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: templateUrl+'.html',
        scope: scope
      });
      scope.Modal.comfirm = function () {
        modalInstance.close(scope.Modal);
      };
      scope.Modal.cancel = function () {
        modalInstance.dismiss();
      };
      return modalInstance;
    };
    return {
      popAlert: popAlert,
      popModal: popModal
    }
  }
])

/* HTTP */
ResourceCatalog.factory('ResourceCatalog.Service.Http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchResourceCatalog(params) {
      return $http.get(
        API.path + '/api/resource-catalog', {params: params}
      )
    };
    function saveResourceCatalog(data) {
      return $http.post(
        API.path + '/api/resource-catalog', {data: data}
      )
    };
    function findResourceCatalogbyID(id){
      return $http.get(
        API.path + '/api/resource-catalog/' + id
      )
    };
    function updateResourceCatalogbyID(data){
      return $http.put(
        API.path + '/api/resource-catalog/' + data.id, {data: data}
      )
    };
    return {
      fatchResourceCatalog: fetchResourceCatalog,
      saveResourceCatalog: saveResourceCatalog,
      findResourceCatalogbyID: findResourceCatalogbyID,
      updateResourceCatalogbyID: updateResourceCatalogbyID
    }
  }
]);
