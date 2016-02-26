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

commonDirectives.directive("myNav",
[function() {
  return {
    templateUrl :'scripts/partials/nav.html',
    restrict : "E",
    link: function(scope, element, attrs){
      var slideout = new Slideout({
        'panel': document.getElementById('content'),
        'menu': document.getElementById('navMenu'),
        'padding': 250,
        'tolerance': 70
      });
      slideout.open();
      document.getElementById('sidebarToggler').addEventListener('click', function() {
        slideout.toggle();
      });
    }
  }
}]);
