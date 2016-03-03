'use strict';
/* Common Directives */
var MainDirective = angular.module('MainDirective', ['MainService']);

// Toggle Button
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

// Menu Tree
MainDirective.directive('wiservMenuTree', ['MainService.menuTree',
  function(menuTree) {
    return {
      restrict: 'AE',
      controller: 'MainController.main',
      link: function(scope, element, attrs) {
        menuTree.then(function(response){
          scope.menus = response.data;
          scope.$applyAsync(function(){
            element.metisMenu();
          })
          console.log(response.data);
        },function(response){
          console.error(response.status + response.statusText);
        });
      }
    };
  }
]);
