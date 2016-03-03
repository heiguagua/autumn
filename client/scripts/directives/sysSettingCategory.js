'use strict';
/* Sys Setting Category Directives */

var SysSettingCategoryDirective = angular.module('SysSettingCategoryDirective', ['SysSettingCategoryService']);

// Sys Setting Category Directive
SysSettingCategoryDirective.directive('wiservSysSettingCategory', [
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
            title: '配置类别编码'
          }, {
            field: 'name',
            title: '配置类别名称'
          }],
          data: [{
            code: '1',
            name: '系统配置'
          }, {
            code: '2',
            name: '接口配置'
          }, {
            code: '3',
            name: '系统邮箱配置'
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
