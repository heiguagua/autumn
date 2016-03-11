'use strict';
/* Sys Dict Category Controllers */

var SysDictCategoryController = angular.module('SysDictCategoryController', ['ui.router', 'SysDictCategoryService', 'SysDictCategoryDirective']);

SysDictCategoryController.controller('SysDictCategoryController.sysDictCategory', ['$scope',
  function($scope) {}
])




'use strict';
/* Sys Dict Category Service */

var SysDictCategoryService = angular.module('SysDictCategoryService', []);

SysDictCategoryService.service('SysDictCategoryService.sysDictCategory', ['$http',
  function($http) {

  }
]);




'use strict';
/* Sys Dict Category Directives */

var SysDictCategoryDirective = angular.module('SysDictCategoryDirective', ['SysDictCategoryService']);

// Sys Dict Category Directive
SysDictCategoryDirective.directive('wiservSysDictCategory', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'code',
            title: '字典类别'
          }, {
            field: 'name',
            title: '字典类别名称'
          }],
          data: [{
            code: '1',
            name: '性别'
          }, {
            code: '2',
            name: '证件类型'
          }, {
            code: '3',
            name: '数据大小'
          }],
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);
