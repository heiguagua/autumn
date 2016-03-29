'use strict';
/* Data Resource Controllers */

var DataResource = angular.module('DataResource', ['ui.router', 'GlobalModule']);

DataResource.controller('DataResource.Controller.dataResource', ['$scope', '$q', '$uibModal', 'DataResource.Service.Http', 'DataResource.Service.Component',
  function($scope, $q, $uibModal, Http, Component) {
    // Config Pagination in View
    $scope.Paging = {};
    $scope.Paging.maxSize = 5;
    $scope.Paging.itemsPerPage = 12;
    // Init Pagination Parameters
    var _pagination = {};
    _pagination.skip = 1;
    _pagination.limit = 12;
    // Checked Item Array
    var _checkedItemArray = $scope.checkedItemArray = [];


    /* Refresh */
    $scope.Refresh = function(){
      Http.fetchDataResource(_pagination).then(function(result) {
        $scope.DataResources = result.data.body;
        $scope.Paging.totalItems = result.data.head.total;
        $scope.Paging.currentPage = 1;
      });
    }

    /* Search */
    $scope.Search = function(){
      httpParams = {};
      httpParams.categoryName = $scope.CategoryName;
      httpParams.catalogName = $scope.CatalogName;
      Http.fetchDataResource(_.assign(_pagination, httpParams)).then(function(data){
        $scope.DataResources = data.body;
      });
    };

    /* Create */
    $scope.Create = function() {
      $scope.Modal = {}; // Clean scope of modal
      Component.popModal($scope, '添加', 'dataResourceModal').result.then(function(_httpParams) {
        // Save operation by promise
        Http.saveDataResource(_httpParams).then(function(result) {
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
          _checkedItemArray = []; // Empty _checkedItemArray
        })
      });
    };

    /* Update */
    $scope.Update = function(){
      $scope.Modal = {}; // Clean scope of modal
      if(1 === _checkedItemArray.length){
        Http.findDataResourceByID(_checkedItemArray[0]).then(function(result){
          $scope.Modal = result.data.body;
        }).then(function(){
          return Component.popModal($scope, '修改', 'dataResourceModal');
        }).then(function(modalInstance){
          modalInstance.result.then(function(_httpParams) {
            Http.updateDataResourceByID(_httpParams).then(function(result){
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
              _checkedItemArray = []; // Empty _checkedItemArray
            })
          });
        })
      }
      else if(0 === _checkedItemArray.length){
        Component.popAlert($scope, {type:'warning', message:'请选择需要进行编辑的数据！'});
      }
      else{
        Component.popAlert($scope, {type:'warning', message:'不能同时编辑多条数据！'});
      }
    };

    /* Delete */
    $scope.Delete = function(){
      if(_checkedItemArray.length){
        Http.deleteDataResourceByIDs(_checkedItemArray).then(function(result){
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
          _checkedItemArray = []; // Empty _checkedItemArray
        })
      }
      else{
        Component.popAlert($scope, {type:'warning', message:'请选择需要删除的数据！'});
      }
    };

    /* Initialization Code Block*/
    (function(){
      // Handle Table
      Http.fetchDataResource(_pagination).then(function(result){
        $scope.DataResources = result.data.body;
        $scope.Paging.totalItems = result.data.head.total;
      });
      // Handle Pagination
      $scope.Paging.pageChanged = function() {
        Http.fetchDataResource(_pagination).then(function(result){
          $scope.DataResources = result.data.body;
        });
      };
      // Handle Single Checked
      $scope.CheckedChange = function(currentItem){
        if(currentItem.DataResource.CheckedStatus){
          if(-1 === _.indexOf(_checkedItemArray, currentItem.DataResource.id)){
            _checkedItemArray.push(currentItem.DataResource.id);
          };
        }else{
          _.remove(_checkedItemArray, function(checkedItem) {
            return checkedItem === currentItem.DataResource.id;
          });
        }
        console.log(_checkedItemArray);
      };
      // Handle Multiple Checked
      $scope.$watch('CheckedAll', function(newValue, oldValue){
        if(newValue){
          _checkedItemArray = [];
          _($scope.DataResources).each(function(value, key){
            value.CheckedStatus = true;
            _checkedItemArray.push(value.id);
          });
          console.log(_checkedItemArray);
        }
        else{
          if (_checkedItemArray.length == 0) return;
          _($scope.DataResources).each(function(value, key){
            value.CheckedStatus = false;
          });
          _checkedItemArray = [];
          console.log(_checkedItemArray);
        }
      });
    })();

  }
]);

/* Component */
DataResource.service('DataResource.Service.Component', ['$uibModal',
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



DataResource.factory('DataResource.Service.Http', ['$http', '$q', 'API',
  function($http, $q, API) {
    var path = API.path;
    function fetchDataResource(params) {
      return $http.get(
        path + '/api/data-resource', {params: params}
      )
    };
    function saveDataResource(data) {
      return $http.post(
        path + '/api/data-resource', {data: data}
      )
    };
    function findDataResourceByID(id){
      return $http.get(
        path + '/api/data-resource/' + id
      )
    };
    function updateDataResourceByID(data){
      return $http.put(
        path + '/api/data-resource/' + data.id, {data: data}
      )
    };
    function deleteDataResourceByIDs(data){
      return $http.delete(
        path + '/api/data-resource/', {data: data}
      )
    };
    return {
      fetchDataResource: fetchDataResource,
      saveDataResource: saveDataResource,
      findDataResourceByID: findDataResourceByID,
      updateDataResourceByID: updateDataResourceByID,
      deleteDataResourceByIDs: deleteDataResourceByIDs
    }
  }
]);
