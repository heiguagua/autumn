'use strict';
/* Dcm Config Directives */

var DcmConfigDirective = angular.module('DcmConfigDirective', ['DcmConfigService']);

// Data Info Directive
DcmConfigDirective.directive('wiservDcmConfig', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'dcmName',
            title: '前置机名称'
          }, {
            field: 'dcmCode',
            title: '前置机编码'
          }, {
            field: 'dcmIP',
            title: '前置机IP'
          }, {
            field: 'maintainUser',
            title: '管理人员'
          }, {
            field: 'depNames',
            title: '关联部门'
          }],
          data: [{
            dcmName: '192.1.5.1',
            dcmCode: 'DS2343343',
            dcmIP: '162.2.4.5',
            maintainUser: '231',
            depNames: '交通局'
          }, {
            dcmName: '192.1.5.1',
            dcmCode: 'DS2343343',
            dcmIP: '162.2.4.5',
            maintainUser: '231',
            depNames: '交通局'
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
