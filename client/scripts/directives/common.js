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
      var slideout = new Slideout({
        'panel': element.find('#content')[0],
        'menu': element.find('#navMenu')[0],
        'padding': 250,
        'tolerance': 70
      });
      slideout.open();
      element.find('#sidebarToggler')[0].addEventListener('click', function() {
        slideout.toggle();
      });
    }
  }
}]);
