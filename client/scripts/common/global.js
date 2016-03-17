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
      template: "<ul ng-click='test()' class='pagination'>{{haha}}</ul>",
      link: function(scope, element, attrs) {
        scope.pagin().then(function(result){
          console.log();
          scope.haha = result;
          var temp = result.total;
          console.log( (temp+8-1)/8 >> 0);


        })
        scope.test=function(){
          console.log("hank hank hank hank hank");
        }
      }
    }
  }
]);
