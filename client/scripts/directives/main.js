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
MainDirective.directive('wiservMenuTree', ['$timeout', 'MainService.menuTree',
  function($timeout, menuTree) {
    return {
      restrict: 'AE',
      controller: 'MainController.main',
      link: function(scope, element, attrs) {

        $timeout(function() {
          scope.$apply(function(){
            element.metisMenu();
          })
        }, 0);
        menuTree.then(function(response){
          scope.menus = response.data;
          console.log(response.data);
        },function(response){
          console.error(response.status + response.statusText);
        });
      }
    };
  }
]);
