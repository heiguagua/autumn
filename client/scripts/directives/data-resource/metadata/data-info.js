'use strict';
/* Data Info Directives */

var DataInfoDirective = angular.module('DataInfoDirective', ['DataInfoService']);

// Data Info Directive
DataInfoDirective.directive('wiservDataInfo', [
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
            field: 'dataName',
            title: '数据名称'
          }, {
            field: 'dataFlag',
            title: '数据标识符'
          }, {
            field: 'dataType',
            title: '数据类型'
          }, {
            field: 'dataResCatalog',
            title: '数据资源分类'
          }, {
            field: 'dataProvider',
            title: '数据提供方'
          }, {
            field: 'dataCreateTime',
            title: '数据创建时间'
          }, {
            field: 'keyDesc',
            title: '关键字说明'
          }, {
            field: 'dataStatus',
            title: '数据状态'
          }],
          data: [{
            dataName: '民政',
            dataFlag: 'DS2343343',
            dataType: '普通文件',
            dataResCatalog: '部门：交通局',
            dataProvider: '民政局',
            dataCreateTime:'2016-02-10 10:15:21',
            keyDesc:'描述',
            dataStatus:'已接入'
          }, {
            dataName: '民政',
            dataFlag: 'DS2343343',
            dataType: '普通文件',
            dataResCatalog: '部门：交通局',
            dataProvider: '民政局',
            dataCreateTime:'2016-02-10 10:15:21',
            keyDesc:'描述',
            dataStatus:'已接入'
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
