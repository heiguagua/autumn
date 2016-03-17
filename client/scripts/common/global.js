/* Resource Catalog Directives */
var GlobalModule = angular.module('GlobalModule', []);
// Resource Catalog Directive
GlobalModule.directive('wiservPagination', ['$timeout', '$compile',
  function($timeout, $compile) {
    return {
      restrict: 'AE',
      scope: {
        pagin: '&config'
      },
      template: "<div wiserv-pagination config='Pagin()' class='pull-right'></div>",
      link: function(scope, element, attrs) {
        scope.pagin().then(function(result){
          console.log();
          scope.haha = result;
          var temp = result.total;
          //console.log( (temp+8-1)/8 >> 0);
        })
      }
    }
  }
]);
