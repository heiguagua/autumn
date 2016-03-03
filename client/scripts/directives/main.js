'use strict';
/* Common Directives */

var MainDirective = angular.module('MainDirective', ['MainService']);
// Main Wrapper Directive
MainDirective.directive('wiservMainWrapper', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.toggler')[0].addEventListener('click', function() {
          element.find('.content').toggleClass("content-collapse");
          element.find('.sidebar').toggleClass("sidebar-collapse");
        });
      }
    }
  }
]);

// Menu Tree Directive
MainDirective.directive('wiservMenuTree', ['MainService.menuTree',
  function(menuTree) {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.metisMenu();
        console.log("teststsdfsaf");
      }
    };
  }
]);
