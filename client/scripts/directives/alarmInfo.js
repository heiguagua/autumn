'use strict';
/* Alarm Info Directives */

var AlarmInfoDirective = angular.module('AlarmInfoDirective', ['AlarmInfoService']);

// Alarm Info Directive
AlarmInfoDirective.directive('wiservAlarmInfo', [
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
            field: 'alarmType',
            title: '告警类型'
          }, {
            field: 'alarmName',
            title: '告警名称'
          }, {
            field: 'alarmContent',
            title: '告警内容'
          }, {
            field: 'alarmTime',
            title: '告警时间'
          }, {
            field: 'status',
            title: '状态'
          }],
          data: [],
          pagination: true,
          toolbar: ".toolbar",
          pageNumber: 1,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);
