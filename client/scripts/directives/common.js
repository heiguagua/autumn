'use strict';
/* Common Directives */

var commonDirectives = angular.module('commonDirectives', ['ngResource']);

commonDirectives.directive('TestDirective',[
  return {
    restrict: 'AE',
    link: function(scope, element, attrs){

    }
  }
]);
