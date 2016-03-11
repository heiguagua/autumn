'use strict';
/* Data Authority Apply Controllers */

var DataAuthorityApplyController = angular.module('DataAuthorityApplyController', ['ui.router', 'DataAuthorityApplyService', 'DataAuthorityApplyDirective']);

DataAuthorityApplyController.controller('DataAuthorityApplyController.dataAuthorityApply', ['$scope',
  function($scope) {}
])



'use strict';
/* Data Authority Apply Service */

var DataAuthorityApplyService = angular.module('DataAuthorityApplyService', []);

DataAuthorityApplyService.service('DataAuthorityApplyService.dataAuthorityApply', ['$http',
  function($http) {

  }
]);



'use strict';
/* Data Authority Apply Directives */

var DataAuthorityApplyDirective = angular.module('DataAuthorityApplyDirective', ['DataAuthorityApplyService']);

// Data Authority Apply Directive
DataAuthorityApplyDirective.directive('wiservDataAuthorityApply', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        window.console.log(element.find('#table'));
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'dataName',
            title: '数据名称'
          }, {
            field: 'dataResCatalog',
            title: '数据资源分类'
          }, {
            field: 'applicant',
            title: '申请人'
          }, {
            field: 'applicationDate',
            title: '申请时间'
          }, {
            field: 'applicationStatus',
            title: '申请状态'
          }, {
            field: 'operator',
            title: '操作'
          }],
          data: [{
            dataName: '资源一',
            dataResCatalog: '主题：交通局',
            applicant: '测试人员',
            applicationDate:'2016-02-10',
            applicationStatus:'未审核',
            operator:'<a href='+'"#"'+'>审核</a>'
          }, {
            dataName: '资源一',
            dataResCatalog: '主题：交通局',
            applicant: '测试人员',
            applicationDate:'2016-02-10',
            applicationStatus:'未审核',
            operator:'<a href='+'"#"'+'>审核</a>'
          }],
          pagination: true,
          pageNumber: 1
        });
      }
    }
  }
]);
