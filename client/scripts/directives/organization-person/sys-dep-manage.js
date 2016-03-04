'use strict';
/* System Department Management Directives */

var SysDepManageDirective = angular.module('SysDepManageDirective', ['SysDepManageService']);

// Sys Dict Category Directive
SysDepManageDirective.directive('wiservSysDepManage', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'depShortName',
            title: '部门短名称'
          }, {
            field: 'depName',
            title: '部门名称'
          }, {
            field: 'parentName',
            title: '上级部门名称'
          }, {
            field: 'accessStatusName',
            title: '部门状态'
          }, {
            field: 'operator',
            title: '操作'
          }],
          data: [{
            depShortName: '安监局',
            depName: '安监局',
            parentName: '-',
            accessStatusName: '未接入',
            operator: '<a href='+'"#"'+'>接入</a>'
          }, {
            depShortName: '安监局',
            depName: '安监局',
            parentName: '-',
            accessStatusName: '未接入',
            operator: '<a href='+'"#"'+'>接入</a>'
          }, {
            depShortName: '安监局',
            depName: '安监局',
            parentName: '-',
            accessStatusName: '未接入',
            operator: '<a href='+'"#"'+'>接入</a>'
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
