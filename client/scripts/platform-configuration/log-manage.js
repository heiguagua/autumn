'use strict';
/* Log Manage Controllers */

var LogManageController = angular.module('LogManageController', ['ui.router', 'LogManageService', 'LogManageDirective']);

LogManageController.controller('LogManageController.logManage', ['$scope',
  function($scope) {}
])




'use strict';
/* Log Manage Service */

var LogManageService = angular.module('LogManageService', []);

LogManageService.service('LogManageService.logManageData', ['$http',
  function($http) {

  }
]);



'use strict';
/* Log Manage Directives */

var LogManageDirective = angular.module('LogManageDirective', ['LogManageService']);

// Log Manage Directive
LogManageDirective.directive('wiservLogManage', [
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
          columns: [
          {
            field: 'operateName',
            title: '日志类别'
          }, {
            field: 'handler',
            title: '操作人'
          }, {
            field: 'userIp',
            title: 'IP'
          }, {
            field: 'operateTime',
            title: '操作时间'
          }, {
            field: 'operateDesc',
            title: '操作描述'
          }],
          data: [{
            operateName: '登陆',
            handler: '管理员（admin）',
            userIp: '172.1.1.5',
            operateTime:'2016-03-03 13:45:14',
            operateDesc:'登录系统'
          }, {
            operateName: '登陆',
            handler: '管理员（admin）',
            userIp: '172.1.1.5',
            operateTime:'2016-03-03 13:45:14',
            operateDesc:'登录系统'
          }, {
            operateName: '登陆',
            handler: '管理员（admin）',
            userIp: '172.1.1.5',
            operateTime:'2016-03-03 13:45:14',
            operateDesc:'登录系统'
          }],
          pagination: true,
          pageNumber: 1,
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);
