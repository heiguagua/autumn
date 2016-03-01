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

commonDirectives.directive("mainWrapper",[function() {
  return {
    restrict : "AE",
    replace: true,
    link: function(scope, element, attrs){
      element.find('#sidebarToggler')[0].addEventListener('click', function() {
        var $content = $(element.find('#content')[0]);
        var $navMenu = $(element.find('#navMenu')[0]);
        $content.toggleClass("content-collapse");
        $navMenu.toggleClass("ml-250");
      });
    }
  }
}]);

commonDirectives.directive('menuTree', [function() {
  return {
    restrict: 'AE',
    link: function(scope, element, attrs){
      console.log(element.text());
    }
  };
}]);
