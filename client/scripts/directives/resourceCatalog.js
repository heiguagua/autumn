'use strict';
/* Resource Catalog Directives */

var ResourceCatalogDirective = angular.module('ResourceCatalogDirective', ['ResourceCatalogService']);

ResourceCatalogDirective.directive("wiservResourceCatalog", [
  function() {
    return {
      restrict: "AE",
      replace: true,
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
          showToggle: true,
          showColumns: true
        });
      }
    }
  }
]);
