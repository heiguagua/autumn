'use strict';
/* Common Directives */

var MainDirective = angular.module('MainDirective', ['MainService']);
// Main Wrapper Directive
MainDirective.directive("wiservMainWrapper", [
  function() {
    return {
      restrict: "AE",
      replace: true,
      link: function(scope, element, attrs) {
        element.find('#sidebarToggler')[0].addEventListener('click', function() {
          element.find('#content').toggleClass("content-collapse");
          element.find('#navMenu').toggleClass("ml-250");
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
        menuTree.then(function(resp) {
          console.log(resp.data.menuVoList);
        }, function(resp) {
          console.error(resp);
        })
      console.log(element.text());
      }
    };
  }
]);
