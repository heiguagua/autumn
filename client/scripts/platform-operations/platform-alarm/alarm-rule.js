'use strict';
/* Alarm Rule Controllers */

var AlarmRuleController = angular.module('AlarmRuleController', ['ui.router', 'AlarmRuleService', 'AlarmRuleDirective']);

AlarmRuleController.controller('AlarmRuleController.alarmRule', ['$scope',
  function($scope) {}
])



'use strict';
/* Alarm Rule Service */

var AlarmRuleService = angular.module('AlarmRuleService', []);

AlarmRuleService.service('AlarmRuleService.alarmRule', ['$http',
  function($http) {

  }
]);



'use strict';
/* Alarm Rule Directives */

var AlarmRuleDirective = angular.module('AlarmRuleDirective', ['AlarmRuleService']);

// Alarm Rule Directive
AlarmRuleDirective.directive('wiservAlarmRule', [
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
            field: 'alarmName',
            title: '监控项名称'
          }, {
            field: 'statisticsMethod',
            title: '统计方法'
          }, {
            field: 'statisticsPeriod',
            title: '统计周期'
          }, {
            field: 'contactsGroup',
            title: '通知联系人组'
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
