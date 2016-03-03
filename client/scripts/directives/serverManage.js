'use strict';
/* Server Manage Directives */

var ServerManageDirective = angular.module('ServerManageDirective', ['ServerManageService']);

// Server Manage Directive
ServerManageDirective.directive('wiservServerManage', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'serverID',
            title: '服务器ID'
          }, {
            field: 'IPAddress',
            title: 'IP地址'
          }, {
            field: 'hdUseRate',
            title: '硬盘使用率'
          }, {
            field: 'cpuUseRate',
            title: 'CPU使用率'
          }, {
            field: 'memoryUseRate',
            title: '内存使用率'
          }, {
            field: 'connectStatus',
            title: '服务器连接状态'
          }],
          data: [],
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
