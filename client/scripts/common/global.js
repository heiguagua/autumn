/* Resource Catalog Directives */
var GlobalModule = angular.module('GlobalModule', []);
// Resource Catalog Directive
GlobalModule.directive('pagination', ['$timeout',
  function($timeout) {
    return {
      restrict: 'AE',
      scope: {
        config:'='
      },
      template: "<ul class='pagination'>{{test}}</ul>",
      link: function(scope, element, attrs) {
        // $timeout(function () {
        //   console.log(JSON.stringify(scope.config));
        // }, 1000);
        scope.$watch(
          'config',
          function(newValue, oldValue, scope) {

            if (newValue !== oldValue) {
              scope.test = newValue;
              console.log(scope.test);
            }
          }
        );

      }
    }
  }
]);
