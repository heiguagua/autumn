'use strict';
/* Data Audit Info Controllers */

var DataAuditInfoController = angular.module('DataAuditInfoController', ['ui.router', 'DataAuditInfoService', 'DataAuditInfoDirective']);

DataAuditInfoController.controller('DataAuditInfoController.dataAuditInfo', ['$scope',
  function($scope) {}
])


'use strict';
/* Data Audit Info Service */

var DataAuditInfoService = angular.module('DataAuditInfoService', []);

DataAuditInfoService.service('DataAuditInfoService.dataAuditInfo', ['$http',
  function($http) {

  }
]);


'use strict';
/* Data Audit Info Directives */

var DataAuditInfoDirective = angular.module('DataAuditInfoDirective', ['DataAuditInfoService']);

// Data Audit Info Directive
DataAuditInfoDirective.directive('wiservDataAuditInfo', [
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
            operator:'<a href='+'"#"'+'>审核</a>'
          }, {
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'>审核</a>'
          }],
          pagination: true,
          pageNumber: 1
        });
      }
    }
  }
]);