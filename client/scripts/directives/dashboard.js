'use strict';
/* Dashboard Directives */

var dashboardDirectives = angular.module('dashboardDirectives', ['ngResource']);

dashboardDirectives.directive("contentView", [function() {
  return {
    restrict: "AE",
    replace: true,
    link: function(scope, element, attrs) {
      $('#table').bootstrapTable({
        columns: [{
          field: 'id',
          title: 'Item ID'
        }, {
          field: 'name',
          title: 'Item Name'
        }, {
          field: 'price',
          title: 'Item Price'
        }],
        data: [{
          id: 1,
          name: 'Item 1',
          price: '$1'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }]
      });
    }
  }
}]);
