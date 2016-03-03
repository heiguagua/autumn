'use strict';
/* Contacts Group Directives */

var ContactsGroupDirective = angular.module('ContactsGroupDirective', ['ContactsGroupService']);

// Contacts Group Directive
ContactsGroupDirective.directive('wiservContactsGroup', [
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
            field: 'userName',
            title: '用户名'
          }, {
            field: 'realName',
            title: '姓名'
          }, {
            field: 'phoneNumber',
            title: '手机号'
          }, {
            field: 'email',
            title: 'Email'
          }],
          data: [{
            userName: 'Ahbh',
            realName: '张三',
            phoneNumber: '13584452415',
            email:'sdfsdf@ww.me'
          }, {
            userName: 'Ahbh',
            realName: '张三',
            phoneNumber: '13584452415',
            email:'sdfsdf@ww.me'
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
