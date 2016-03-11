'use strict';
/* Data Role Controllers */

var DataRoleController = angular.module('DataRoleController', ['ui.router', 'DataRoleService', 'DataRoleDirective']);

DataRoleController.controller('DataRoleController.dataRole', ['$scope',
  function($scope) {}
])



'use strict';
/* Data Role Service */

var DataRoleService = angular.module('DataRoleService', []);

DataRoleService.service('DataRoleService.dataRole', ['$http',
  function($http) {

  }
]);



'use strict';
/* Data Role Directives */

var DataRoleDirective = angular.module('DataRoleDirective', ['DataRoleService']);

// System Role Directive
DataRoleDirective.directive('wiservDataRole', [
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
            field: 'roleName',
            title: '角色名'
          }, {
            field: 'sysTypeName',
            title: '角色类型'
          }, {
            field: 'roleDesc',
            title: '角色描述'
          }],
          data: [{
            roleName: '各部门数据主管',
            sysTypeName: '普通用户',
            roleDesc: 'gfd'
          }, {
            roleName: '各部门数据主管',
            sysTypeName: '普通用户',
            roleDesc: 'dfgfdg'
          }, {
            roleName: '各部门数据主管',
            sysTypeName: '普通用户',
            roleDesc: '查看自己部门的数据统计情况，对自己部门可访问的数据进行数据交换'
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
