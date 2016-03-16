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
      template: "<ul class='pagination'>{{config}}</ul>",
      link: function(scope, element, attrs) {
        // $timeout(function () {
        //   console.log(JSON.stringify(scope.config));
        // }, 1000);
        scope.$watch(
          'config',
          function(newValue, oldValue, scope) {
            if (newValue !== oldValue) {
              scope.config = newValue;
            }
          }
        );

      }
    }
  }
]);

// Bootstrap Table for Angular
GlobalModule.directive('wiservBootstrapTable', [ '$timeout',
  function($timeout) {
    return {
      restrict: 'AE',
      scope: {
        config:'='
      },
      link: function(scope, element, attrs) {
        scope.$watch(
          'config',
          function(newValue, oldValue, scope) {
            if (newValue !== oldValue) {
              console.log(newValue);
              scope.config = newValue;
              scope.$applyAsync(function(){
                element.bootstrapTable({
                  columns: [{
                    field: 'activeFlagName',
                    title: 'Item ID',
                    checkbox: true
                  }, {
                    field: 'categoryName',
                    title: 'Item Name'
                  }, {
                    field: 'catalogFullName',
                    title: 'Item Price'
                  }],
                  //data: scope.config,
                  pagination: true,
                  showRefresh: true,
                  showHeader: true,
                  search: true,
                  showToggle: true,
                  showPaginationSwitch: true,
                  url:'http://localhost:5000/api/resource-catalog',
                  ajaxOptions: {
                    method: 'GET',
                    xhrFields: {
                      withCredentials: true
                    }
                  }
                });
              })
            }
          }
        );
      }
    }
  }
]);
