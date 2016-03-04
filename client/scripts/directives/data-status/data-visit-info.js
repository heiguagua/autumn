'use strict';
/* Data Visit Info Directives */

var DataVisitInfoDirective = angular.module('DataVisitInfoDirective', ['DataVisitInfoService']);

// Data Visit Info Directive
DataVisitInfoDirective.directive('wiservDataVisitInfo', [
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
            field: 'userName',
            title: '用户'
          }, {
            field: 'IPAddress',
            title: 'IP地址'
          }, {
            field: 'visitTime',
            title: '访问时间'
          }, {
            field: 'dataName',
            title: '元数据名称'
          }, {
            field: 'visitType',
            title: '访问类型'
          }, {
            field: 'visitContent',
            title: '访问内容'
          }],
          data: [{
            userName: 'Asanj',
            IPAddress: '172.1.2.22',
            visitTime:'2016-02-10 10:15:21',
            dataName:'资源一',
            visitType: '下载',
            visitContent:'调查.xlsx'
          }, {
            userName: 'Asanj',
            IPAddress: '172.1.2.22',
            visitTime:'2016-02-10 10:15:21',
            dataName:'资源一',
            visitType: '下载',
            visitContent:'调查.xlsx'
          }],
          pagination: true,
          pageNumber: 1,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);
