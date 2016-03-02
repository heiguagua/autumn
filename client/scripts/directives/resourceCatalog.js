'use strict';
/* Resource Catalog Directives */

var ResourceCatalogDirective = angular.module('ResourceCatalogDirective', ['ResourceCatalogService']);

ResourceCatalogDirective.directive("wiservResourceCatalog", [
  function() {
    return {
      restrict: "AE",
      replace: true,
      link: function(scope, element, attrs) {
        window.console.log(element.find('#table'));
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
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
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }, {
            id: 2,
            name: 'Item 2',
            price: '$2'
          }],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showToggle: true,
          showColumns: true
        });
      }
    }
  }
]);
