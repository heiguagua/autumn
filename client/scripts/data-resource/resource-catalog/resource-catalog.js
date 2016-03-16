'use strict';
/* Resource Catalog Controllers */

/* Controller */
var ResourceCatalogController = angular.module('ResourceCatalogController', ['ui.router', 'GlobalModule', 'ResourceCatalogService']);
//
ResourceCatalogController.controller('ResourceCatalogController.resourceCatalog', ['$scope', 'ResourceCatalogService.http',
  function($scope, http) {
    // // Init Table
    // http.fetch().then(function(response){
    //   $scope.ResourceCatalogs = response.body;
    //   $scope.Pagination = {
    //     total : response.body.length
    //   }
    // });
    // // Search Button
    // $scope.search=function(){
    //   http.fetch().then(function(response){
    //     $scope.ResourceCatalogs = response.body;
    //     $scope.Pagination = {
    //       total : response.body.length
    //     }
    //   });
    // }

    $scope.init = {
      'count': 5,
      'page': 1,
      'sortBy': 'name',
      'sortOrder': 'dsc',
      'filterBase': 1 // set false to disable
    };
    $scope.filterBy = {
      'name': 'r',
      'sf-location': ''
    };
    $scope.getResource = function(params, paramsObj) {
      console.log(params);
      console.log(paramsObj);
      return http.fetch().then(function(response) {
        return {
          'rows': response.body,
          'header': [{
            "key": "categoryName",
            "name": "资源目录类型"
          }, {
            "key": "catalogName",
            "name": "资源目录名称"
          }, {
            "key": "catalogCode",
            "name": "资源目录编码"
          }, {
            "key": "parentCode",
            "name": "父目录编码"
          }, {
            "key": "catalogDesc",
            "name": "资源目录描述"
          }, {
            "key": "activeFlagName",
            "name": "状态"
          }],
          'pagination': {
            "count": 5,
            "page": 1,
            "pages": 7,
            "size": response.body.length
          },
          'sortBy': 'name',
          'sortOrder': 'asc'
        }
      });
    }

  }
])


/* Resource Catalog Service */
var ResourceCatalogService = angular.module('ResourceCatalogService', []);
//httpGet
ResourceCatalogService.factory('ResourceCatalogService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetch() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http.get(
        API.path + '/api/resource-catalog', {
          withCredentials: true,
          cache: false
        }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(statusa );
        deferred.reject();
      })
      return promise;
    }
    return {
      fetch: fetch
    }
  }
]);
