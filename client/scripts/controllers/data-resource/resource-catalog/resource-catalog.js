'use strict';
/* Resource Catalog Controllers */

var ResourceCatalogController = angular.module('ResourceCatalogController', ['ui.router', 'ResourceCatalogService', 'ResourceCatalogDirective']);

ResourceCatalogController.controller('ResourceCatalogController.resourceCatalog', ['$scope', 'ResourceCatalogService.httpGet',
  function($scope, httpGet) {
    httpGet.then(function(response){
      $scope.ResourceCatalogs = response.data.body;
    },function(response){
      console.error(response.status + response.statusText);
    });
  }
])
