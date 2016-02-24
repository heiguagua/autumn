'use strict';
/* Common Directives */

var commonDirectives = angular.module('commonDirectives', ['ngResource']);

commonDirectives.directive('wiservTest', [function() {
  return {
    restrict: 'AE',
    template: "<h1>This is a Directives</h1>",
    link: function(scope, element, attrs){
      console.log(element.text());
    }
  };
}]);
