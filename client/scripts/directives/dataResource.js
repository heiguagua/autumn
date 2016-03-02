'use strict';
/* Data Resource Directives */

var DataResourceDirective = angular.module('DataResourceDirective', ['DataResourceService']);

// Data Resource Directive
DataResourceDirective.directive("wiservDataResource", [
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
            field: 'resName',
            title: '资源名称'
          }, {
            field: 'resCat',
            title: '资源源目录分类'
          }, {
            field: 'resDept',
            title: '资源所属部门'
          }, {
            field: 'resCreateTime',
            title: '资源创建时间'
          }, {
            field: 'resAccessStaus',
            title: '资源接入状态'
          }],
          data: [{
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
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
