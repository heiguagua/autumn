'use strict';
/* Resource Catalog Controllers */

/* Controller */
var ResourceCatalogController = angular.module('ResourceCatalogController', ['ui.router', 'ResourceCatalogService', 'ResourceCatalogDirective']);
//
ResourceCatalogController.controller('ResourceCatalogController.resourceCatalog', ['$scope', 'ResourceCatalogService.httpGet',
  function($scope, httpGet) {
    httpGet.then(function(response){
      $scope.ResourceCatalogs = response.data.body;
    },function(response){
      console.error(response.status + response.statusText);
    });
  }
])


/* Resource Catalog Service */
var ResourceCatalogService = angular.module('ResourceCatalogService', []);
//httpGet
ResourceCatalogService.service('ResourceCatalogService.httpGet', ['$http', 'API',
  function($http, API) {
    return $http.get(
      API.path + '/api/resource-catalog', {
        withCredentials: true
      });
  }
]);


/* Resource Catalog Directives */
var ResourceCatalogDirective = angular.module('ResourceCatalogDirective', ['ResourceCatalogService']);
// Resource Catalog Directive
ResourceCatalogDirective.directive('wiservResourceCatalog', [
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
            field: 'state',
            checkbox: true
          }, {
            field: 'resCatType',
            title: '资源目录类型'
          }, {
            field: 'resCatName',
            title: '资源目录名称'
          }, {
            field: 'resCatCode',
            title: '资源目录编码'
          }, {
            field: 'resCatParCode',
            title: '父目录编码'
          }, {
            field: 'resCatDesc',
            title: '资源目录描述'
          }, {
            field: 'resCatStaus',
            title: '状态'
          }],
          data: [{
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);
