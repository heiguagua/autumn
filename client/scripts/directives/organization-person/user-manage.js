'use strict';
/* User Management Directives */

var UserManageDirective = angular.module('UserManageDirective', ['UserManageService']);

// User Management Directive
UserManageDirective.directive('wiservUserManage', [
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
            field: 'username',
            title: '用户名'
          }, {
            field: 'personName',
            title: '姓名'
          }, {
            field: 'genderName',
            title: '性别'
          }, {
            field: 'sysTypeName',
            title: '用户类型'
          }, {
            field: 'orgName',
            title: '组织机构'
          }, {
            field: 'updateTime',
            title: '修改时间'
          }, {
            field: 'createTime',
            title: '创建时间'
          }, {
            field: 'lastLoginTime',
            title: '最后登录时间'
          }],
          data: [{
            username: '1sf',
            personName: 'sdfds',
            genderName: '男',
            sysTypeName: '普通用户',
            orgName: '安监局',
            updateTime: '2016-02-12 12:14:21',
            createTime: '2016-02-12 12:14:21',
            lastLoginTime: '2016-02-12 12:14:21'
          }, {
            username: '1sf',
            personName: 'sdfds',
            genderName: '男',
            sysTypeName: '普通用户',
            orgName: '安监局',
            updateTime: '2016-02-12 12:14:21',
            createTime: '2016-02-12 12:14:21',
            lastLoginTime: '2016-02-12 12:14:21'
          }, {
            username: '1sf',
            personName: 'sdfds',
            genderName: '男',
            sysTypeName: '普通用户',
            orgName: '安监局',
            updateTime: '2016-02-12 12:14:21',
            createTime: '2016-02-12 12:14:21',
            lastLoginTime: '2016-02-12 12:14:21'
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
